import React from 'react';
import Campus from '../Campus/Campus';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Teacher from '../Teachers.js/Teacher';

const About = () => {
    return (
        <div>
            <Header></Header>
            <Teacher></Teacher>
            <Campus></Campus>
            <Footer></Footer>
        </div>
    );
};

export default About;