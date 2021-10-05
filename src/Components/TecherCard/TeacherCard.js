import React from 'react';
import './TeacherCard.css'


const TeacherCard = (props) => {
    const {name, img, description} = props.teacher

    return (
        <div className='d-lg-flex col-sm-12 col-md-6 col-lg-6  m-3 mx-auto body  '>
            <div className="img">
                <img src={img} alt="" className='rounded mb-3'/>
            </div>
            <div className="title ms-3">
                <h4>{name}</h4>
                <h6 className='text-muted'>{description}</h6>
            </div>
        </div>
    );
};

export default TeacherCard;