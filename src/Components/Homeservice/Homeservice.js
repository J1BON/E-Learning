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
        <div className='row g-0 p-5' >

            <div className='row col-7 justify-content-evenly'>
            {
                services.map(service =><ServiceCard service={service}></ServiceCard>)
            }
            </div>

            <div className="col-5 courses">
                <div className='line me-4'></div>
                <div className="course-description">
                <h1>Popular Courses</h1>
                <p>Welcome to EDU-POINT.Here you will get wrold class education service.We have our best teachers.They will help you untill you understand the whole concept.Here are our most popular 4 service.Fell free to enroll your favortie course. For any query contact us in support.</p>
                </div>
            </div>
        </div>
    );
};

export default Homeservice;