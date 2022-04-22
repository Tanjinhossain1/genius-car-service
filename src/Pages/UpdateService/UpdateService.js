import React from 'react';
import { useForm } from 'react-hook-form';
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
    const {
        register,
        handleSubmit,
   
    } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        const url = `http://localhost:5000/service/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type':
                    'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => console.log(result))
    };
   
    return (
        <div className='all-margin w-50 mx-auto mb-5'>
            <h4 >update Service: {id} </h4>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='Name' className='mb-2' {...register('name')} />
                <textarea placeholder='Description' className='mb-2' {...register('description', { required: true })} />             
                <input placeholder='Price' className='mb-2' {...register('price')} />
                <input placeholder='Img Url' className='mb-2' {...register('img')} />
                <input className='btn btn-success' type="submit" value='Update Service' />
            </form>
        </div>
    );
};

export default UpdateService;