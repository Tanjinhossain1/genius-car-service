import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import useServiceDetail from '../../hooks/useServiceDetail';

const ServiceDetail = () => {
    const {serviceId} = useParams();
    const [service] = useServiceDetail(serviceId)
    const { name, img, description, price } = service;
    const navigate = useNavigate()

    
   
    return (
        <div className='w-50 mx-auto' style={{marginTop: '200px'}}>
             <button className='btn btn-success rounded-pill' onClick={()=>navigate(`/update/${serviceId}`)}>Update Service</button>
             <button onClick={()=>navigate(`/checkout/${serviceId}`)} className='btn-info ms-5 border-0 py-2 px-5 rounded-pill'>Order</button>
            <h2 >this is ServiceDetail: {serviceId} </h2>
           
            <img src={img} alt="" />
            <h1>Name: {name}</h1>
            <h1>Price: {price}</h1>
            <h1>description: {description}</h1>
        </div>
    );
};

export default ServiceDetail;