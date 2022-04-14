import React from 'react';
import './SignUp.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import { Form } from 'react-bootstrap';


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
               
                <input type="checkbox" name="terms" id="" />
                <label htmlFor="terms">Accept All Conditions</label>
                <input className='bg-info border-0 w-50 mx-auto' type="submit" value="Sign UP" />
                <p>Already have an account? <Link to={'/login'}>Login</Link></p>

                <SocialLogin></SocialLogin>
            </form>
        </div>
    );
};

export default SignUp;