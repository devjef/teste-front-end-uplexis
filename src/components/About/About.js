import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BannerSecundario } from '../Banners';
import { ReactComponent as Arrow } from '../../assets/svg/arrow.svg';
import ImageCarousel from '../ImageCarousel';
import InfoAbout from './../InfoAbout/index';

const About = () => {
    const myRef = React.createRef(null);

    const toTop = () => {
        window.scroll({
          top: 0,
          left: 0,
          behavior: "smooth"
        })
    }

    useEffect(() => {
        toTop();
    });

    return (
        <>  
            <BannerSecundario myRef={myRef} />
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