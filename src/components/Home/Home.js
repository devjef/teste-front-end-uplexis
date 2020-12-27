import React from 'react';
import { Link } from 'react-router-dom';
import { BannerPrincipal } from './../Banners';
import NavMenu from './../NavMenu';
import Products from './../Products';

function Home() {
    return(
        <>
          <Link to="/saiba-mais">
            <BannerPrincipal />
          </Link>
          <div className="container">
            <NavMenu />
            <Products />
          </div>
        </>
    )
}

export default Home;