import React, { useEffect, useState } from 'react';
import TeacherCard from '../TecherCard/TeacherCard';
import './Teacher.css'

const Teacher = () => {
    const [teachers, setTeachers] = useState([]);
    useEffect(() => {
        fetch('./teacher.json')
            .then(res => res.json())
        .then(data => setTeachers(data))
    },[])

    return (
        <div className='m-5'>
            <div className='text-center mb-5 title'>
                <h1>Expert Trainers <i className="fas fa-user-graduate"></i></h1>
                <p className='text-muted'>Meet our expert trainers. They will guide you in full course with their best</p>
            </div>
             <div className='row container mx-auto'>
            {teachers.map(teacher => <TeacherCard teacher={teacher}></TeacherCard>)}
             </div>
       </div>
    );
};

export default Teacher;