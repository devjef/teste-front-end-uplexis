import React from 'react';
import banner1 from '../../assets/img/Banner1.png';
import banner2 from '../../assets/img/Banner2.png';

const altBanner = "Banner UpMiner Histórico Empresarial";

function BannerPrincipal() {
    return(
        <img src={banner1} alt={altBanner} className="banner" />
    );
};

function BannerSecundario({ myRef }) {
    return(
        <img ref={myRef} src={banner2} alt={altBanner} className="banner" />
    );
};

export { BannerPrincipal, BannerSecundario };