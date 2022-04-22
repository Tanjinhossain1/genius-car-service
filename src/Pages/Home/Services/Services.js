import useService from '../../../hooks/useService';
import Experts from '../Home/Experts/Experts';
import Service from '../Service/Service';
import './Services.css';
const Services = () => {
    const [services] = useService();
    // useEffect(() => {
    //     fetch('http://localhost:5000/service')
    //         .then(res => res.json())
    //         .then(data => setServices(data))
    // }, [])

    return (
        <div id='services'>

            <h2 className='text-center text-primary mt-5'>All Services</h2>
            <div className='service-container'>
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
            <Experts></Experts>
        </div>
    );
};

export default Services;