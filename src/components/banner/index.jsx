import React from "react";
import Button from "../button";
import Cards from "../cards";
import "./style.scss";
import Geladeira from "../../assets/produtos/geladeira.png";
import Batedeira from "../../assets/produtos/batedeira.png";
import Whisky from "../../assets/produtos/whisky.png";
import Brastemp from "../../assets/marcas/brastemp.png";
import Thebar from "../../assets/marcas/thebar.png";
import Consul from "../../assets/marcas/consul.svg";
import CompraCerta from "../../assets/marcas/compraCerta.PNG";
import {BsArrowRight} from 'react-icons/bs';


const Banner = ({ title, bannerText }) => {
  return (
    <>
      <div className="comp-banner-container">
        <div className="comp-banner-container__first-colum">
          <h1>{title}</h1>
          <p>{bannerText}</p>
          <Button buttonTitle="Veja nossas soluções" />
        </div>
        <div className="comp-banner-container__second-colum">
          <Cards sourceImage={Geladeira} buttonText="Mais Detalhes" className="comp-banner-container__second-colum-item1" />
          <Cards sourceImage={Batedeira} buttonText="Comprar em 12x" className="comp-banner-container__second-colum-item2" />
          <Cards sourceImage={Whisky} buttonText="Adicionar á sacola" className="comp-banner-container__second-colum-item3" />
        </div>
      </div>
      <div className="comp-marcas-container">
          <p>Nossas principais lojas VTEX</p>
          <span><BsArrowRight/></span>
          <img className="comp-marcas-container__image" src={Brastemp} alt="Brastemp"/>
          <img className="comp-marcas-container__image" src={CompraCerta} alt="Compra Certa"/>
          <img className="comp-marcas-container__image" src={Consul} alt="Consul"/>
          <img className="comp-marcas-container__image" src={Thebar} alt="Thebar"/>
      </div>
    </>
  );
};

export default Banner;
