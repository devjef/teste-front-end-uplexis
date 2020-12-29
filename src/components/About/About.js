import React from 'react';
import { Link } from 'react-router-dom';
import { BannerSecundario } from '../Banners';
import { ReactComponent as Arrow } from '../../assets/svg/arrow.svg';
import ImageCarousel from '../ImageCarousel';
import InfoAbout from './../InfoAbout/index';

function About() {
    return (
        <>
            <BannerSecundario />
            <div className="container">
                <Link to="/" >
                    <div className="page-back">
                        <Arrow className="page-back__icon" />
                        <h3 className="page-back__text">Histórico empresarial</h3>
                    </div>
                </Link>
                <ImageCarousel />
                <InfoAbout />
            </div>
        </>
    );
};

export default About;