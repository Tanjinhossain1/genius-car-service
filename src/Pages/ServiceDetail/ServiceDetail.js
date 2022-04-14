import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';

const ServiceDetail = () => {
    const {serviceId} = useParams();
   
    return (
        <div>
            <h2 style={{marginTop: '200px'}}>this is ServiceDetail: {serviceId} </h2>
        </div>
    );
};

export default ServiceDetail;