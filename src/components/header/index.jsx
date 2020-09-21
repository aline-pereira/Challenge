import React from "react";
import Logo from "../../assets/logo.png";
import "./style.scss";
import { FiShoppingCart } from "react-icons/fi";

const Header = () => {
  return (
    <div className="comp-header-container">
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
    </div>
  );
};

export default Header;
