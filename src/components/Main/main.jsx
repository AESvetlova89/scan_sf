import React from "react";
import { Link } from "react-router-dom";
import "./main.css";
import store from "../store";
import two_window from "../../images/two_window.svg";
import SimpleSlider from "./Carousel/carousel";
import Rate from "./Rates/rate";
import { observer } from "mobx-react-lite";

const Main = observer(() => {
  document.title = "New Website";

  return (
    <div className="main-container">
      <section className="service-search">
        <div>
          <h1 className="service-search__heading">
          Cервис по поиску публикаций <br />
            по ИНН<br />
          </h1>
          <div className="service-search__mobile">
            <p className="service-search__description">
            Комплексный анализ публикаций, получение данных в формате PDF на электронную почту.
            </p>
            <button className="service-search__button">
              {store.token ? (
                <Link to="/search">Запрос данных</Link>
              ) : (
                <Link to="/user">Войти</Link>
              )}
            </button>
          </div>
        </div>
        <div className="service-search__image">
          <img className="service-image" src={two_window}  />
        </div>
      </section>
      <section className="why-us">
        <h2 className="why-us__title">Почему именно мы </h2>
        <div>
          <SimpleSlider />
        </div>
        <div className="why-us__graphic"></div>
      </section>
      <section id="pricing">
        <h2 className="why-us__title">Наши Тарифы</h2>
        <Rate />
      </section>
    </div>
  );
});

export default Main;
