import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useServiceDetail from '../../hooks/useServiceDetail';

const CheckOut = () => {
    const { serviceId } = useParams();
    const [service] = useServiceDetail(serviceId);
    const [user] = useAuthState(auth);

    const handleUserDetail = (event) => {
        event.preventDefault();
        console.log(user.email)
        const order = {
            email:user?.email,
            service: service.name,
            serviceId: serviceId,
            address: event.target.address.value,
            phone: event.target.phone.value
        }
        axios.post(`https://cryptic-meadow-81248.herokuapp.com/order`, order)
        .then(response =>{
            const {data} = response;
            if(data.insertedId){
                toast('Your order is booked!!!');
                event.target.reset();
            }
        })
    }
    return (
        <div className='all-margin text-center'>
            <h2>Order: {service.name}</h2>
            <form className='w-50 mx-auto' onSubmit={handleUserDetail}>
                <input className='mb-2 w-100' type="text" placeholder='Name' value={user?.displayName} disabled readOnly/>
                <br />
                <input className='mb-2 w-100' type="email" placeholder='Email' value={user?.email} disabled readOnly/>
                <br />
                <input className='mb-2 w-100' type="text" placeholder='Service' value={service.name} disabled readOnly/>
                <br />
                <input className='mb-2 w-100' type="text" placeholder='Address' name='address'/>
                <br />
                <input className='mb-2 w-100' type="text" placeholder='Phone' name='phone' />
                <br />
                <input className='bg-primary border-0 py-2 px-5 text-white' type="submit" value="Add Detail" />
            </form>

        </div>
    );
};

export default CheckOut;