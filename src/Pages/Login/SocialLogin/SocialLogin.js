import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import googleLogo from '../../../images/google.png'

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub,user1,loading1,error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    let errorElement;
    if (error || error1) {
        errorElement = <div>
            <p className='text-danger'>Error: {error?.message}  {error1?.message}</p>
        </div>

    }
    if(user || user1){
        navigate('/home')
    }
    return (
        <div className=''>
            {loading && <p>PleaseWait...</p>}
            {errorElement}
            <div className=''>
                <div className='d-flex align-items-center  justify-content-center'>
                    <div style={{ height: '1px' }} className='bg-primary w-25'></div>
                    <p className='mt-2 mx-3'>or</p>
                    <div style={{ height: '1px' }} className='bg-primary  w-25' ></div>
                </div>
            </div>
            <div className='text-center'>
                <button onClick={() => signInWithGoogle()} className='btn btn-primary'> <img width={50} className='rounded-pill me-3' src={googleLogo} alt="" />Google Sign In</button>
            </div>

            <div className='text-center my-3'>
                <button onClick={() => signInWithGithub()} className='btn btn-primary'> <img width={50} className='rounded-pill me-3' src="https://www.kindpng.com/picc/m/128-1280192_github-logo-png-github-png-transparent-png.png" alt="" />GitHub Sign In</button>
            </div>
        </div>
    );
};

export default SocialLogin;