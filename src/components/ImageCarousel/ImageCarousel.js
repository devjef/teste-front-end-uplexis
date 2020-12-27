import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../assets/img/in-1.png';
import img2 from '../../assets/img/in-2.png';

function ImageCarousel() {

    return (
        <div className="carousel-image">
            <Carousel infiniteLoop={true} autoPlay={true} showThumbs={false} showStatus={false} swipeable={true} emulateTouch={true} interval={2000}>
                <div>
                    <img src={img1} />
                </div>
                <div>
                    <img src={img2} />
                </div>
            </Carousel>
        </div>
        
    );
};

export default ImageCarousel;