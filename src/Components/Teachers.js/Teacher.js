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
            <div className='text-center mb-5'>
                <h1>Expert Trainers</h1>
                <p>Meet our expert trainers. They will guide you in full course with their best</p>
            </div>
             <div className='row container mx-auto'>
            {teachers.map(teacher => <TeacherCard teacher={teacher}></TeacherCard>)}
             </div>
       </div>
    );
};

export default Teacher;