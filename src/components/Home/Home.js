import React, { useState } from 'react';
import { BannerPrincipal } from './../Banners';
import NavMenu from './../NavMenu';
import Products from './../Products';

const Home = () => {
  const myRef = React.createRef();

  const handleClickToScroll = (ref) => {
    ref.current.scrollIntoView({behavior: 'smooth'})
  };

  const [categoryActive, setCategoryActive] = useState('todos');

  const categoryFilter = (e) => {
    const category = e.target.getAttribute('id');
    setCategoryActive(category);
  };

  return (
    <>
      <BannerPrincipal />
      <div className="container">
        <NavMenu categoryFilter={categoryFilter} scrollToTheElement={handleClickToScroll} myRef={myRef} />
        <Products myRef={myRef} categoryActive={categoryActive} />
      </div>
    </>
  );
};

export default Home;