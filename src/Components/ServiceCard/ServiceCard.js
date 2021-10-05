import React from 'react';
import { Card } from 'react-bootstrap';
import './ServiceCard.css'

const ServiceCard = (props) => {
    const {name, img, price, desciption} = props.service
    return (
        <div className='player col-sm-12 col-md-6 col-lg-6 mb-5 p-0'>
           <Card style={{ width: '18rem' }} className='border-0 card mx-auto'>
                <Card.Img variant="top" src={img} className='img-fluid' />
                <Card.Body className='card-body'>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                    {desciption}
                    </Card.Text>
                    <h6>Price: {price}</h6>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ServiceCard;