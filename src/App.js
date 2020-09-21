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
        <div className="comp-product-container__title">
          <h1>Nossas soluções</h1>
        </div>
        <div className="comp-product-container__products">
          <div className="comp-product-container__products-item">
            <p className="comp-product-container__products-item-title">P1</p>
            <p className="comp-product-container__products-item-name">
              Nome do Produto #1
            </p>
            <p className="comp-product-container__products-item-description">
              Descrição do produto #1
            </p>
            <ul className="comp-product-container__products-list">
              <li className="comp-product-container__products-list-item">
                Feature 1
              </li>
              <li className="comp-product-container__products-list-item">
                Feature 2
              </li>
              <li className="comp-product-container__products-list-item">
                Feature 3
              </li>
            </ul>
            <Button
              buttonTitle="Ver solução"
              className="comp-product-container__products-button"
            />
          </div>
          <div className="comp-product-container__products-item">
            <p className="comp-product-container__products-item-title">P2</p>
            <p className="comp-product-container__products-item-name">
              Nome do Produto #2
            </p>
            <p className="comp-product-container__products-item-description">
              Descrição do produto #2
            </p>
            <ul className="comp-product-container__products-list">
              <li className="comp-product-container__products-list-item">
                Feature 1
              </li>
              <li className="comp-product-container__products-list-item">
                Feature 2
              </li>
              <li className="comp-product-container__products-list-item">
                Feature 3
              </li>
            </ul>
            <Button
              buttonTitle="Ver solução"
              className="comp-product-container__products-button"
            />
          </div>
          <div className="comp-product-container__products-item">
            <p className="comp-product-container__products-item-title">P3</p>
            <p className="comp-product-container__products-item-name">
              Nome do Produto #3
            </p>
            <p className="comp-product-container__products-item-description">
              Descrição do produto #3
            </p>
            <ul className="comp-product-container__products-list">
              <li className="comp-product-container__products-list-item">
                Feature 1
              </li>
              <li className="comp-product-container__products-list-item">
                Feature 2
              </li>
              <li className="comp-product-container__products-list-item">
                Feature 3
              </li>
            </ul>
            <Button
              buttonTitle="Ver solução"
              className="comp-product-container__products-button"
            />
          </div>
          <div className="comp-product-container__products-item">
            <p className="comp-product-container__products-item-title">P4</p>
            <p className="comp-product-container__products-item-name">
              Nome do Produto #4
            </p>
            <p className="comp-product-container__products-item-description">
              Descrição do produto #4
            </p>
            <ul className="comp-product-container__products-list">
              <li className="comp-product-container__products-list-item">
                Feature 1
              </li>
              <li className="comp-product-container__products-list-item">
                Feature 2
              </li>
              <li className="comp-product-container__products-list-item">
                Feature 3
              </li>
            </ul>
            <Button
              buttonTitle="Ver solução"
              className="comp-product-container__products-button"
            />
          </div>
        </div>
      </div>
      <div className="comp-product-container__aboutUs">
        <div>
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
        <div>
          <img src={Jussi} alt="Sobre nós" />
        </div>
      </div>
      <div className="comp-product-container__email">
        <div>
          <h1>
            Essa loja foi construída usando uma das nossas soluções da
            plataforma VTEX. tenha a sua.
          </h1>
          <p>Entre em contato</p>
          <a href="https://jussi.com.br/">
            <h3>comercial@jussi.com.br</h3>
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
