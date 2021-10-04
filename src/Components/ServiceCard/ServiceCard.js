import React from 'react';
import { Card } from 'react-bootstrap';
import './ServiceCard.css'

const ServiceCard = (props) => {
    const {name, img, price, desciption} = props.service
    return (
        <div className='player col-4 mx-2 mb-4'>
           <Card style={{ width: '20rem' }} className='border-0 card'>
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