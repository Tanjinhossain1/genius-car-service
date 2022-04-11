import React from 'react';
import './Service.css';

const Service = ({ service }) => {
    const { name, img, description, price } = service;
    return (
        <div className='service'>
            <img src={img} alt="" />
            <h3>Name: {name}</h3>
            <p>Price: {price}</p>
            <h4>{description}</h4>
            <button className='btn btn-primary'>Add To Cart</button>
        </div>
    );
};

export default Service;