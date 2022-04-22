import React from 'react';
// import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateService = () => {
    // const [service, setService] = useState({})
    const {id} = useParams();
    // useEffect(()=>{
    //     fetch(`http://localhost:5000/service/${id}`)
    //     .then(res => res.json())
    //     .then(data => setService(data))
    // },[id])
   
    return (
        <div className='all-margin'>
            <h1 >update Service: {id} </h1>
        </div>
    );
};

export default UpdateService;