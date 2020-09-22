import React from "react";
import Logo from "../../assets/logo.png";
import "./style.scss";
import { FiShoppingCart } from "react-icons/fi";
import MediaQuery from 'react-responsive';

const Desktop = props => <MediaQuery {...props} minWidth={769} />;
const Mobile = props => <MediaQuery {...props} maxWidth={768} />;

const Header = () => {
  return (
    <div className="comp-header-container">
      <Desktop>
        <div className="comp-header-items-left">
          <ul>
            <li className="comp-header-container-menu-item">
              <img src={Logo} alt="" />
            </li>
            <li className="comp-header-container-menu-item">
              <a href="/">Nossas soluções</a>
            </li>
            <li className="comp-header-container-menu-item">
              <a href="/">Conheça a Jussi</a>
            </li>
          </ul>
        </div>
        <div className="comp-header-items-right">
          <ul>
            <li>
              <a href="/">
                <input className="search-bar" type="text" placeholder="Buscar" />
              </a>
            </li>
            <li className="comp-header-container-menu-item">
              <a href="/">Login</a>
            </li>
            <li className="comp-header-container-menu-item">
              <a href="/">
                <FiShoppingCart />
              </a>
            </li>
          </ul>
        </div>
      </Desktop>

      <Mobile>
        <div className="menu-mobile">
          <img src={Logo} alt="" />
          <a href="/">Login</a>
          <a href="/">
            <FiShoppingCart />
          </a>
        </div>

      </Mobile>

    </div>
  );
};

export default Header;
