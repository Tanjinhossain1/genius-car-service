import React from 'react';
import { useForm } from 'react-hook-form';

const AddService = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => console.log(data);
    return (
        <div className='App'>
            <h1>add service</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register('firstName')} />
                <br />
                <input {...register('lastName', { required: true })} />
                <br />
                {errors.lastName && <p>Last name is required.</p>}
                <input {...register('age', { pattern: /\d+/ })} />
                <br />
                {errors.age && <p>Please enter number for age.</p>}
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;