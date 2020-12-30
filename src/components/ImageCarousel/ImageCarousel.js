import React, { useState, useEffect } from 'react';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import img1 from '../../assets/img/in-1.png';
import img2 from '../../assets/img/in-2.png';

const ImageCarousel = () => {

    const [visibleSlides, setVisibleSlides] = useState(2);

    useEffect(() => {
        setSlideResponsive();
    }, []);

    window.addEventListener('resize', () => {
        setSlideResponsive();
    });

    const setSlideResponsive = () => {
        const windowWidth = window.innerWidth;
        windowWidth <= 768 ? setVisibleSlides(1) : setVisibleSlides(2);
    };

    return (
        <div className="carousel">
            <CarouselProvider 
            visibleSlides={visibleSlides}
            totalSlides={4}
            naturalSlideWidth={400}
            isIntrinsicHeight={true}
            currentSlide={0}
            isPlaying
            interval={2000}
                >
                <Slider>
                    <Slide index={0}><img className="carousel__img" src={img1} alt="Imagem carrousel" /></Slide>
                    <Slide index={1}><img className="carousel__img" src={img2} alt="Imagem carrousel" /></Slide>
                    <Slide index={2}><img className="carousel__img" src={img1} alt="Imagem carrousel" /></Slide>
                    <Slide index={3}><img className="carousel__img" src={img2} alt="Imagem carrousel" /></Slide>
                </Slider>
            </CarouselProvider>
        </div>
    );
};

export default ImageCarousel;