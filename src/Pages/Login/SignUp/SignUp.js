import React, { useState } from 'react';
import './SignUp.css';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import { Form, Spinner } from 'react-bootstrap';
import useToken from '../../../hooks/useToken';


const SignUp = () => {
    const [updateProfile, updating] = useUpdateProfile(auth);

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [token] = useToken(user)
    const navigate = useNavigate();
    const [agree, setAgree] = useState(false)
    if (token) {
        navigate('/home')
    }
    if(loading || updating){
        return <div className='text-center' style={{marginTop: '200px'}}>
              <Spinner  animation="border" variant="primary" />
        </div>
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const displayName = e.target.name.value;
        const password = e.target.password.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName });

    }
    return (
        <div className=''>
            <h2 className='text-center'>Sign up</h2>
            <form onSubmit={handleSubmit} className='form-container'>
                <input type="text" name="name" id="" placeholder='Enter your Name' />
                <input type="email" name="email" placeholder='email' id="" />
                <input type="password" name="password" placeholder='password' id="" />
                {error && <p>{error?.message}</p>}
                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="" />
                {agree ? <label className='ms-3 text-success' htmlFor="terms">Accept Compleate</label> :
                    <label className='ms-3 text-danger' htmlFor="terms">Accept All Conditions</label>}
                <input disabled={!agree} className='bg-info border-0 w-50 mx-auto' type="submit" value="Sign UP" />
                <p>Already have an account? <Link to={'/login'}>Login</Link></p>

                <SocialLogin></SocialLogin>
            </form>
        </div>
    );
};

export default SignUp;