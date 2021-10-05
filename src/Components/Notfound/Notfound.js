import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Notfound.css'

const Notfound = () => {
    return (
        <div>
            <Header></Header>
            <div className='notFound'>
            <h1 className='text-center m-5 p-5'><span className='text-danger'>404.</span> Not Found</h1>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Notfound;