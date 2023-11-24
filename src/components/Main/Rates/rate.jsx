import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";
import "./rate.css";
import el_lamp from "../../../images/el_lamp.svg";
import darts_target from "../../../images/darts_target.svg";
import laptop from "../../../images/laptop.svg";
import checkmark from "../../../images/checkmark.svg";
import store from "../../store";

const Rate = observer(() => {
  useEffect(() => {
    store.checkToken();
  }, []);


  const rates = [
    {
      styleObj: { background: "var(--stand-color-yellow)" },
      id: 1,
      title: "Beginner",
      image: el_lamp,
      description: "Для небольшого исследования",
      price: "799 ₽",
      discount: "1 200 ₽",
      loan: "или 150 ₽/мес. при рассрочке на 24 мес.",
      details: {
        detail1: "Безлимитная история запросов",
        detail2: "Безопасная сделка",
        detail3: "Поддержка 24/7",
      },
    },
    {
      styleObj: { background: "var(--stand-color-light-green)" },
      id: 2,
      title: "Pro",
      image: darts_target,
      description: "Для HR и фрилансеров",
      price: "1 299 ₽",
      discount: "2 600 ₽",
      loan: "или 279 ₽/мес. при рассрочке на 24 мес.",
      details: {
        detail1: "Все пункты тарифа Beginner",
        detail2: "Экспорт истории",
        detail3: "Рекомендации по приоритетам",
      },
    },
    {
      styleObj: { background: "#000", color: "#fff" },
      id: 3,
      title: "Business",
      image: laptop,
      description: "Для корпоративных клиентов",
      price: "2 379 ₽",
      discount: "3 700 ₽",
      loan: "",
      details: {
        detail1: "Все пункты тарифа Pro",
        detail2: "Безлимитное количество запросов",
        detail3: "Приоритетная поддержка",
      },
    },
  ];

 
  const rateComponents = rates.map((item) => (
    <div className="rate" key={item.id}>
      <div className="rate-header" style={item.styleObj}>
        <div className="rate-header__info">
          <h3 className="rate-title">{item.title}</h3>
          <p className="rate-description">{item.description}</p>
        </div>
        <img  src={item.image} />
      </div>
      <div className={`rate-body ${store.token && item.id === 1 ? "rate-body__current" : ""}`}>
        <span className={`current ${store.token && item.id === 1 ? "" : "current-disabled"}`}>
          Текущий тариф
        </span>
        <div className="rate-price__container">
          <p className="rate-price">{item.price}</p>
          <p className="rate-price rate-price__discount">{item.discount}</p>
        </div>
        <p className="rate-info rate-info__loan">{item.loan}</p>
        <p className="rate-info rate-info__title">В тариф входит:</p>
        {Object.values(item.details).map((detail, index) => (
          <li className="rate-info" key={index}>
            <img className="rate-info__check" src={checkmark} />
            {detail}
          </li>
        ))}
        <button className={`rate-button ${store.token && item.id === 1 ? "rate-button__current" : ""}`}>
          <Link to="#">
            {store.token && item.id === 1 ? "Перейти в личный кабинет" : "Подробнее"}
          </Link>
        </button>
      </div>
    </div>
  ));

  return <div className="rates">{rateComponents}</div>;
});

export default Rate;

