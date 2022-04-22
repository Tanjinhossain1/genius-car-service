import React from 'react';
import useService from '../../hooks/useService';

const ManageService = () => {
    const [services, setServices] = useService();

    const deleteService = (id) => {
        const url = `http://localhost:5000/service/${id}`;
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
    return (
        <div className='w-50 mx-auto'>
            <h2>manage service</h2>
            <div className=''>
                {
                    services.map(service => <div key={service._id}>
                        <li>{service.name} <button onClick={() => deleteService(service._id)}>Delete</button></li>

                    </div>)
                }
            </div>
        </div>
    );
};

export default ManageService;