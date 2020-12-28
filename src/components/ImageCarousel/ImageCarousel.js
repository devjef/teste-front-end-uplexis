import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import img1 from '../../assets/img/in-1.png';
import img2 from '../../assets/img/in-2.png';

function ImageCarousel() {

    return (
        <div className="carousel-image">
            <CarouselProvider isIntrinsicHeight={true}
                naturalSlideHeight={30}
                totalSlides={4}
                isPlaying={true}
                visibleSlides={2}
                playDirection={'forward'}
                interval={2000}
                >
                
                <Slider>
                    <Slide index={0}><img src={img1} alt="Imagem carrousel" /></Slide>
                    <Slide index={1}><img src={img2} alt="Imagem carrousel" /></Slide>
                    <Slide index={2}><img src={img1} alt="Imagem carrousel" /></Slide>
                    <Slide index={3}><img src={img2} alt="Imagem carrousel" /></Slide>
                </Slider>
            </CarouselProvider>
        </div>

    );
};

export default ImageCarousel;