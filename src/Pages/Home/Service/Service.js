import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { name, _id, img, description, price } = service;
    const navigate = useNavigate();
    const showNavigateDetail = (id) => {
        navigate(`/service/${id}`)
    }
    return (
        <div className='service'>
            <img src={img} alt="" />
            <h3>Name: {name}</h3>
            <p>Price: {price}</p>
            <h4>{description}</h4>
            <button onClick={()=>showNavigateDetail(_id)} className='btn btn-primary'>Details</button>
        </div>
    );
};

export default Service;