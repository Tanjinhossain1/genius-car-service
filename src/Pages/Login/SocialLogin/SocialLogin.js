import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import googleLogo from '../../../images/google.png'

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    let errorElement;
    if (error) {
        errorElement = <div>
            <p className='text-danger'>Error: {error.message}</p>
        </div>

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

            <div className='text-center'>
                <button onClick={() => signInWithGoogle()} className='btn btn-primary'> <img width={50} className='rounded-pill me-3' src={googleLogo} alt="" />GitHub Sign In</button>
            </div>
        </div>
    );
};

export default SocialLogin;