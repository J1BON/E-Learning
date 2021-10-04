import React from 'react';
import { Card } from 'react-bootstrap';

const TeacherCard = (props) => {
    const {name, img, description} = props.teacher

    return (
        <div className='d-flex col-6 mx-auto justify-content-center m-3 align-items-center'>
            <div className="img">
                <img src={img} alt="" className='rounded'/>
            </div>
            <div className="title ms-3">
                <h3>{name}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default TeacherCard;