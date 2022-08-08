import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import '../App.css';

function Banner() {
    return(
            <Carousel>
              <Carousel.Item className='slider-img'>
                <img src={require('../images/banner.jpg')} alt="First slide" />
                <Carousel.Caption className="slider-content">
                  <h3>Online Grocery Store</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item className='slider-img'>
              <img src={require('../images/banner2.jpg')} alt="Second slide" />
        
                <Carousel.Caption className="slider-content">
                  <h3>Apna Grocery Dukaan</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
              
            </Carousel>
    );
}

export default Banner;