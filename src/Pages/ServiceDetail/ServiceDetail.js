import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';

const ServiceDetail = () => {
    const [service, setService] = useState([])
    const {serviceId} = useParams();
    const { name, img, description, price } = service;

    useEffect(()=>{
        fetch(`http://localhost:5000/service/${serviceId}`)
        .then(res=>res.json())
        .then(data => setService(data))
    },[serviceId])
   
    return (
        <div style={{marginTop: '200px'}}>
            <h2 >this is ServiceDetail: {serviceId} </h2>
            <img src={img} alt="" />
            <h1>Name: {name}</h1>
            <h1>Price: {price}</h1>
            <h1>description: {description}</h1>
        </div>
    );
};

export default ServiceDetail;