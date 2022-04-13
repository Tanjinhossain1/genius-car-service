import React from 'react';
import './SignUp.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { Navigate, useNavigate } from 'react-router-dom';


const SignUp = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();
    if (user) {
        navigate('/home')
    }
    const handleSubmit = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const name = e.target.name.value;
        const password = e.target.password.value;
        createUserWithEmailAndPassword(email, password)
    }
    return (
        <div className=''>
            <h2 className='text-center'>Sign up</h2>
            <form onSubmit={handleSubmit} className='form-container'>
                <input type="text" name="name" id="" placeholder='Enter your Name' />
                <input type="email" name="email" placeholder='email' id="" />
                <input type="password" name="password" placeholder='password' id="" />
                <input type="submit" value="Sign UP" />
            </form>
        </div>
    );
};

export default SignUp;