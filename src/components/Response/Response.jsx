import React, { useEffect } from "react";
import "./Response.css";
import store from "../store";
import target from "../../images/target.svg";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router";
import SimpleSlider from "./SimpleSlider";
import Documents from "./DocumentList/documents";
import { Link } from "react-router-dom";
import Loader from "../Expectation/expectation";

const SearchResult = observer(() => {
  const navigate = useNavigate();

  useEffect(() => {
    !store.token && navigate("/user");
  });

  return (
    <div className="search-result">
      <div className="search-result__top">
        <div>
          <h1 className="search-title search-result__title">
            Результаты поиска
          </h1>

          {store.isSummaryLoading ? (
            <p className="search-details">
              Поиск может занять некоторое время, <br />
              просим сохранять терпение.
            </p>
          ) : (
            <p className="search-details">
              По вашему запросу найдены <br /> следующие данные.
            </p>
          )}
        </div>
        <img
          src={target}
          className="search-result__img"
         
        />
      </div>

      {store.isSummaryError ? (
        <p className="search-result__error search-result-error__info">
          Что-то пошло не так :( <br />
          Попробуйте <Link to="/search">изменить параметры поиска</Link>
        </p>
      ) : (
        <div>
          {store.isSummaryLoading ? (
            <div className="slider-loader">
              <Loader />
              <p className="loading-data">Загружаем данные</p>
            </div>
          ) : (
            <SimpleSlider />
          )}
          <Documents />
        </div>
      )}
    </div>
  );
});

export default SearchResult;
