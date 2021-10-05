import React, { useEffect, useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';
import "./Homeservice.css"

const Homeservice = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./homeservice.json')
            .then(res => res.json())
        .then(data => setServices(data))
    },[])
    

    return (
        // main div
        <div className='row d-flex flex-warp g-0 container mx-auto mt-5' >

            <div className='col-lg-7 col-sm-12 col-md-12'>
                <div className="row justify-content-md-center mx-auto">
                {
                services.map(service =><ServiceCard service={service}></ServiceCard>)
                }
                </div>
            </div>

            <div className="col-lg-5 col-sm-12 col-md-12 courses p-5">
                <div className='line me-4'></div>
                <div className="course-description">
                <h1>Popular Courses <i class="fas fa-laptop-code"></i></h1>
                <p className='text-muted'>Welcome to EDU-POINT.Here you will get world-class education service. We have our best teachers. They will help you until you understand the whole concept. Here are our most popular 4 services. Feel free to enroll in your favorite course. For any query contact us in support.</p>
                </div>
            </div>
        </div>
    );
};

export default Homeservice;