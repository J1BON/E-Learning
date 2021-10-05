import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
             <div className=' row footer-content g-0 text-center'>
            <div className="social col-sm-12 col-md-4 mb-3">
                <h2>Stay Connected</h2>
                <p><i class="fab fa-facebook"></i>
                    <i class="fab fa-twitter"></i>
                    <i class="fab fa-linkedin-in"></i>
                </p>
            </div>
            <div className="useful-link col-sm-12 col-md-4 mb-3">
                <h2>Useful Links</h2>
                <Link to="/home" className='nav-link'>Home</Link>
                <Link to="/services" className='nav-link'>Services</Link>
                <Link to="/about" className='nav-link'>About US</Link>
                <Link to="/contact" className='nav-link'>Contact US</Link>
            </div>
            <div className="from col-sm-12 col-md-4 ">
                    <h2>Send Message</h2>
                    <p><input type="text" name="" id="" placeholder='Frist Name' /></p>
                    <p><input type="email" name="" id="" placeholder='Email' /></p>
                     <p> <textarea className='text' name="" id="" cols="30" rows="10"></textarea></p>
                     <button className="btn btn-danger">Submit</button>
            </div>
        </div>
        <p className='text-center text-white m-0 pb-3'>Copyright & copy 2021. All Rights Reserved Jiban Ahammed.</p>
       </div>
    );
};

export default Footer;