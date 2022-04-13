import React from 'react';
import googleLogo from '../../../images/google.png'

const SocialLogin = () => {
    return (
        <div className=''>

            <div className='text-center'>
                <button className='btn btn-primary'> <img width={50} className='rounded-pill me-3' src={googleLogo} alt="" />Google Sign In</button>
            </div>
            <div className=''>
                <div className='d-flex align-items-center  justify-content-center'>
                    <div style={{ height: '1px' }} className='bg-primary w-25'></div>
                    <p className='mt-2 mx-3'>or</p>
                    <div style={{ height: '1px' }} className='bg-primary  w-25' ></div>
                </div>
            </div>
        </div>
    );
};

export default SocialLogin;