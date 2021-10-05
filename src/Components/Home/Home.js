import React from 'react';
import Campus from '../Campus/Campus';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Homeservice from '../Homeservice/Homeservice';

const Home = () => {
    return (
        <div>
            <Homeservice></Homeservice>
            <Campus></Campus>
        </div>
    );
};

export default Home;