import React from 'react';
import Wppcompany from "../../assets/wppcompany.png";
import {FaFacebookF, FaInstagram, FaLinkedinIn} from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="comp-footer-container">
            <div className="comp-footer-container__title">
                <h1>receba novidades da nossa área de produtos digitais.</h1>
            </div>
            <div className="comp-footer-container__form">
                <form action="">
                    <input type="text" placeholder="Digite seu e-mail"/>
                    <button>Cadastrar</button>
                </form>
            </div>
            <div className="comp-footer-container__social">
                <img src={Wppcompany} alt=""/>
                <a href="/"><FaFacebookF/></a>
                <a href="/"><FaInstagram/></a>
                <a href="/"><FaLinkedinIn/></a>
            </div>
        </div>
    )
}

export default Footer;
