import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';

const RequerAuth = ({children}) => {
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
    return children;
};

export default RequerAuth;