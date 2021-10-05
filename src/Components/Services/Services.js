import React, { useEffect, useState } from 'react';
import Allservices from '../All services/Allservices';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])


    return (
        <div>
            <div>
                <div className="service-title text-center m-5">
                    <h1>Regular Courses <i class="fas fa-laptop-code"></i></h1>
                    <p className='text-muted'>We collected best colletion of course for our valuable students.Form here feel free to choose your favorite course that you want.</p>
                </div>
                <div className='row g-4 container mx-auto'>
                    {services.map(service => <Allservices
                        services={service}
                    ></Allservices>)}
                </div>
            </div>
        </div>
    );
};

export default Services;