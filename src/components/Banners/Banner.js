import React from 'react';
import banner1 from '../../assets/img/banner-1.png';
import banner2 from '../../assets/img/banner-2.png';

const altBanner = "Banner UpMiner Histórico Empresarial";

function BannerPrincipal() {
    return(
        <a href="/saiba-mais">
            <img src={banner1} alt={altBanner} className="banner" />
        </a>
    )
};

function BannerSecundario() {
    return(
        <a href="/">
            <img src={banner2} alt={altBanner} className="banner" />
        </a>
    )
}

export { BannerPrincipal, BannerSecundario };