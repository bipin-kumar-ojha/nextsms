import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react';
import '../App.css';

function OfferBanner(){
    return(
        <>
            <Container className='pt-5 pb-5'>
                <Row>
                    <Col>
                      <div className='offerbanner'><img src={require('../images/offer.jpg')} alt="Offer" /></div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default OfferBanner;