import React from 'react';
import { Link } from 'react-router-dom';

import MainHeader from './MainHeader';

const MainNavigation:React.FC = () => {
  return (
    <MainHeader>
      <button className="main-navigation__menu-btn">
        <span />
        <span />
        <span />
      </button>
      <h1 className="main-navigation__title">
        <Link to="/">YourPlaces</Link>
      </h1>
      <nav>
        ...
      </nav>
    </MainHeader>
  );
};

export default MainNavigation;
