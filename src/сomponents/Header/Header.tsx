import React from 'react';
import Logo from '../../assets/Header_img/logo.png';
import Favorites from '../../assets/Header_img/like.png';
import Shopping_Bag from '../../assets/Header_img/shoppingBag.png';
import Menu from '../../assets/Header_img/burger.png';
import './Header.scss';

export const Header = () => {
  return (
    <div>
      <div className="container">
        <a href="/home" className="logo">
        <img src={Logo} alt="Logo" />
        </a>
        <ul className="links">
          <li>
            <a href="/" className="link">
              home
            </a>
          </li>
          <li>
            <a href="/phones" className="link">
              phones
            </a>
          </li>
          <li>
            <a href="/tablets" className="link">
              tablets
            </a>
          </li>
          <li>
            <a href="/accessories" className="link">
              accessories
            </a>
          </li>
        </ul>
        <ul className="icons">
          <li className="icon">
            <a href="/favorites" className="icon-link onTablet">
              <img src={Favorites} alt="Favorites" />
            </a>
          </li>
          <li className="icon">
            <a href="/bucket" className="icon-link onTablet">
              <img src={Shopping_Bag} alt="Shopping_Bag" />
            </a>
          </li>
          <li className="icon">
            <a href="/" className="icon-link onMobile">
              <img src={Menu} alt="Menu" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};