import React, { useRef } from 'react';
import { Button, Form, Spinner } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css'
const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/home";
    if(user){
        navigate(from);
    }
    if(loading){
        return <div className='text-center' style={{marginTop: '200px'}}>
              <Spinner  animation="border" variant="primary" />
        </div>
    }
    const handleToSubmit = (e) =>{
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password)
        signInWithEmailAndPassword(email,password)
    }
    const resetPassword = () =>{
        const email = emailRef.current.value;
        sendPasswordResetEmail(email)
    }
    return (
        <div className='extra'> 
         
            <Form onSubmit={handleToSubmit} className='w-50 mx-auto '>
                <h2>login</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
                  
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" />
                </Form.Group>
               {error && <p className='text-danger'>{error.message}</p>}
                <p>don't have an account? <Link to={'/signup'}>Create Account</Link></p>
                <p >You Lost Your password? <span className='text-primary' onClick={resetPassword}>Forgot Password</span></p>
                <Button className='w-50 mx-auto d-block' variant="primary" type="submit">
                    Login
                </Button>
                <SocialLogin></SocialLogin>
            </Form>
        </div>
    );
};

export default Login;