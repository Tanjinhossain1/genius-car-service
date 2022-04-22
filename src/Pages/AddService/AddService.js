import React from 'react';
import { useForm } from 'react-hook-form';

const AddService = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        const url = `http://localhost:5000/service`;
        fetch(url, {
            method: 'Post',
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
        <div className='w-50 mx-auto App'>
            <h1>add service</h1>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='Name' className='mb-2' {...register('name')} />
                <textarea placeholder='Description' className='mb-2' {...register('description', { required: true })} />
                {errors.lastName && <p>Last name is required.</p>}
                <input placeholder='Price' className='mb-2' {...register('price')} />
                <input placeholder='Img Url' className='mb-2' {...register('img')} />
                {errors.age && <p>Please enter number for age.</p>}
                <input type="submit" value='Add Service' />
            </form>
        </div>
    );
};

export default AddService;