import React from "react";
import "./style.scss";
import Wppcompany from "../../assets/wppcompany.png";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="comp-footer-container">
      <div className="comp-footer-container__newsletter">
        <div className="comp-footer-container__newsletter-title">
          <h1>receba novidades da nossa área de produtos digitais.</h1>
        </div>
        <div className="comp-footer-container__newsletter-form">
          <input type="text" placeholder="Digite seu e-mail" />
          <button type="submit">Cadastrar</button>
        </div>
      </div>
      <div className="comp-footer-container__contact">
        <img src={Wppcompany} alt="" />
        <div className="comp-footer-container__contact-social">
          <a href="https://pt-br.facebook.com/agencia.jussi/" target="_blank">
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com/jussi/?hl=pt" target="_blank">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/company/agencia-jussi/?originalSubdomain=br" target="_blank">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
