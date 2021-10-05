import React from 'react';
import { Carousel } from 'react-bootstrap';
import "./Campus.css"

const Campus = () => {
    return (
        <div className='container'>
            <div className="campus-title text-center p-4">
            <h1>Welcome To Our Campus</h1>
            <p className='text-muted'>we have a large friendly campus.Here you will get all kinds of necessary things.</p>
            </div>
             <div className='row'>
            <div className="col-sm-12 col-md-6 campus-status ">
                <div className="row mx-auto">
                  <div className=" col-6 mx-auto">
                      <p><i class="fas fa-graduation-cap"></i></p>
                      <h3>99%</h3>
                      <p><small>Graduates</small></p>
                  </div>
                  <div className="div col-6">
                      <p><i class="fas fa-chart-line"></i></p>
                      <h3>90%</h3>
                      <p><small>Passing Rate</small></p>
                    </div>    
                  <div className="div col-6">
                     <p><i class="fas fa-chalkboard-teacher"></i></p>
                      <h3>95%</h3>
                      <p><small>Skilled Teacher</small></p>
                  </div>
                  <div className="div col-6">
                     <p><i class="fas fa-smoking-ban"></i></p>
                      <h3>100%</h3>
                      <p><small>Smoking Free</small></p>
                  </div>  
               </div>
            </div>
            <div className="col-sm-12 col-md-6 campus-cover d-flex align-items-center">
            <Carousel fade>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://cdn.pixabay.com/photo/2016/08/13/15/29/johns-hopkins-university-1590925_960_720.jpg"
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://cdn.pixabay.com/photo/2016/08/24/23/00/francis-quadrangle-1618326_960_720.jpg"
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://cdn.pixabay.com/photo/2016/07/26/19/05/pokemon-1543556_960_720.jpg"
                    alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>  
            </div>
        </div>
       </div>
    );
};

export default Campus;