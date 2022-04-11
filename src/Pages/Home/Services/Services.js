import React, { useEffect, useState } from 'react';
import Experts from '../Home/Experts/Experts';
import Service from '../Service/Service';
import './Services.css';
const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>
            <h2 className='text-center text-primary mt-5'>All Services</h2>
            <div className='service-container'>
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>
            <Experts></Experts>
        </div>
    );
};

export default Services;