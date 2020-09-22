import React from "react";
import "./style.scss";
import Footer from "./components/footer";
import Header from "./components/header";
import Banner from "./components/banner";
import "./global.scss";
import Button from "./components/button";
import Jussi from "./assets/jussi.png";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner
        title="Criamos lojas que vendem mais."
        bannerText="A Jüssi é especialista na criação de lojas usando a plataforma VTEX. Precisa criar sua loja ou migrar de plataforma?"
      />
      <div className="comp-product-container">
        <div className="comp-product-container__our-soluctions">
          <div className="comp-product-container__our-soluctions__title">
            <h1>
              NOSSAS SOLUÇÕES
              </h1>
          </div>
          <div className="comp-product-container__our-soluctions__items">
            <div className="comp-product-container__our-soluctions__items__content">
              <div className="comp-product-container__our-soluctions__items__content--header">
                <h1>P1</h1>
              </div>
              <div className="comp-product-container__our-soluctions__items__content--middle">
                <strong>Nome do Produto #1</strong>
                <p>Descrição do produto #1</p>
                <ul>
                  <li>• Feature 1</li>
                  <li>• Feature 2</li>
                  <li>• Feature 3</li>
                </ul>
              </div>
              <div className="comp-product-container__our-soluctions__items__content--footer">
                <button>Ver solução</button>
              </div>
            </div>
            <div className="comp-product-container__our-soluctions__items__content">
              <div className="comp-product-container__our-soluctions__items__content--header">
                <h1>P2</h1>
              </div>
              <div className="comp-product-container__our-soluctions__items__content--middle">
                <strong>Nome do Produto #1</strong>
                <p>Descrição do produto #1</p>
                <ul>
                  <li>• Feature 1</li>
                  <li>• Feature 2</li>
                  <li>• Feature 3</li>
                </ul>
              </div>
              <div className="comp-product-container__our-soluctions__items__content--footer">
                <button>Ver solução</button>
              </div>
            </div>
            <div className="comp-product-container__our-soluctions__items__content">
              <div className="comp-product-container__our-soluctions__items__content--header">
                <h1>P3</h1>
              </div>
              <div className="comp-product-container__our-soluctions__items__content--middle">
                <strong>Nome do Produto #1</strong>
                <p>Descrição do produto #1</p>
                <ul>
                  <li>• Feature 1</li>
                  <li>• Feature 2</li>
                  <li>• Feature 3</li>
                </ul>
              </div>
              <div className="comp-product-container__our-soluctions__items__content--footer">
                <button>Ver solução</button>
              </div>
            </div>
            <div className="comp-product-container__our-soluctions__items__content">
              <div className="comp-product-container__our-soluctions__items__content--header">
                <h1>P4</h1>
              </div>
              <div className="comp-product-container__our-soluctions__items__content--middle">
                <strong>Nome do Produto #1</strong>
                <p>Descrição do produto #1</p>
                <ul>
                  <li>• Feature 1</li>
                  <li>• Feature 2</li>
                  <li>• Feature 3</li>
                </ul>
              </div>
              <div className="comp-product-container__our-soluctions__items__content--footer">
                <button>Ver solução</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="comp-aboutUs-container">
        <div className="comp-aboutUs-container-text">
          <h1>Olá, somos A Jüssi</h1>
          <p>
            A Jüssi é uma agência integrante do grupo global WPP que vem há 10
            anos consolidando o pensamento voltado para produtos e resolução de
            problemas. Nosso área dedicada exclusivamente para Produtos Digitais
            é organizada em 6 especialidades: Product Managamenet, User
            Experience Design, SEO, Tecnologia, Agile e User Behavior Analytics.
          </p>
          <Button buttonTitle="Conheça a Jussi" />
        </div>
        <div className="comp-aboutUs-container-image">
          <img src={Jussi} alt="Sobre nós" />
        </div>
      </div>
      <div className="comp-email-container">
        <div className="comp-email-container-text">
          <h1>
            Essa loja foi construída usando uma das nossas soluções da
            plataforma VTEX. tenha a sua.
          </h1>
          <p>Entre em contato</p>
          <h3 href="https://jussi.com.br/">
            <a>comercial@jussi.com.br</a>
          </h3>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
