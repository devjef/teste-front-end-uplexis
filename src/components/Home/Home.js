import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BannerPrincipal } from './../Banners';
import NavMenu from './../NavMenu';
import Products from './../Products';

function Home() {

  const [categoryActive, setCategoryActive] = useState('todos');

  function categoryFilter(e) {
    const category = e.target.getAttribute('id');
    setCategoryActive(category);
  };

  return (
    <>
      <Link to="/saiba-mais">
        <BannerPrincipal />
      </Link>
      <div className="container">
        <NavMenu categoryFilter={categoryFilter} />
        <Products categoryActive={categoryActive} />
      </div>
    </>
  );
};

export default Home;