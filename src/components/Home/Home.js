import React from 'react';
import { BannerPrincipal } from '../Banners/Banner'
import NavMenu from '../NavMenu';
import Products from '../Products';

function Home() {
    return(
        <>
            <BannerPrincipal />
            <div className="container">
                <NavMenu />
                <Products />
            </div>
        </>
    )
}

export default Home;