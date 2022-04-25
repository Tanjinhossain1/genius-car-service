import React from 'react';
import { useNavigate } from 'react-router-dom';
import useService from '../../hooks/useService';

const ManageService = () => {
    const [services, setServices] = useService();

    const deleteService = (id) => {
        const confirmDelete = window.confirm('You Want To Delete It');
        if (confirmDelete) {
            const url = `https://cryptic-meadow-81248.herokuapp.com/service/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = services.filter(service => service._id !== id)
                    console.log(data)
                    setServices(remaining)
                })
        }
    }
    const navigate = useNavigate();

    return (
        <div className=''>
            <div className='text-center'>
                <h2 className='mt-5'>manage service</h2>
                <button onClick={() => navigate('/addservice')} className='btn btn-info text-center'>Add User</button>
            </div>
            <div className='service-container'>
                {
                    services.map(service =>
                        <ServiceManage
                            key={service._id}
                            deleteService={deleteService}
                            service={service}
                        ></ServiceManage>
                    )
                }
            </div>
        </div>
    );
};
const ServiceManage = ({ service, deleteService }) => {
    const { name, _id, img, description, price } = service;
    const navigate = useNavigate();
    const handleUpdate = (id) => {
        navigate(`/update/${id}`)
    }
    return (
        <div className='service'>
            <img src={img} alt="" />
            <h3>Name: {name}</h3>
            <p>Price: {price}</p>
            <h4>{description}</h4>
            <button className='btn btn-danger' onClick={() => deleteService(_id)}>Delete</button>
            <button onClick={() => handleUpdate(_id)} className='btn btn-success ms-4 text-white' >Update</button>

        </div>
    );
}

export default ManageService;