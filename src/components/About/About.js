import React from 'react';
import { Link } from 'react-router-dom'
import { BannerSecundario } from '../Banners'
import { ReactComponent as Arrow } from '../../assets/svg/arrow.svg';
import ImageCarousel from '../ImageCarousel';

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
                <div className="app-description">
                    <p className="app-description__text">
                        O aplicativo Histórico Empresarial permite ao usuário ter acesso a todos os fatos e acontecimentos relevantes de uma empresa desde o seu ano de fundação. Tenha acesso aos principais eventos corporativos de uma empresa, como: marcos jurídicos, mudança no quadro societário, aumento de capital, reportagens e muito mais.
                    </p>
                    <p className="app-description__text">
                        Após realizar a consulta, o histórico é salvo automaticamente, tornando as informações acessíveis ao usuário. A linha do tempo pode também ser exportada no formato PDF.
                    </p>
                </div>
                <div className="content-footer">
                    <p className="content-footer__price">
                        <span className="content-footer__simbol">R$</span>
                        40,00
                    </p>
                    <div className="content-footer__button">
                        <p className="content-footer__text">Habilitar</p>
                    </div>
                </div>

            </div>
        </>
    )
};

export default About;