import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const RequerAuth = ({children}) => {
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);

    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    if(loading ){
        return <div className='text-center' style={{marginTop: '200px'}}>
              <Spinner  animation="border" variant="primary" />
        </div>
    }
    if(!user){
        return <Navigate to='/login' state={{from: location}} replace></Navigate>
    
    }
    if(user.providerData[0]?.providerId==='password' && !user.emailVerified){
        return <div>
            <h1 className='text-success'>Please VerifyFirst </h1>
          
  <button
        onClick={async () => {
          await sendEmailVerification();
          toast('Sent email');
        }}
      >
        Verify email
      </button>
      <ToastContainer></ToastContainer>
        </div>
    }
    return children;
};

export default RequerAuth;