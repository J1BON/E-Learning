import React from 'react';
import { Card } from 'react-bootstrap';
import './Allservices.css'

const Allservices = (props) => {
    const{name, img, price,desciption} = props.services

    return (
        <div className='col-sm-12 col-md-6 col-lg-4 '>
            <Card style={{ width: '20rem' }}  className='Card mx-auto border-0 mb-4'>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text className='text-muted'>
                        {desciption}
                    </Card.Text>
                    <h6>Price: { price}</h6>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Allservices;