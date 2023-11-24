import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import scan from "../../../images/scan-footer.svg";
import userpic from "../../../images/userpic.png";
import store from "../../store";
import "./wrapper.css";
import { observer } from "mobx-react-lite";


const Wrapper = observer(() => {

  const [isActive, setActive] = useState(false);

  const login = localStorage.getItem("login");

  useEffect(() => {
    store.checkToken();
    store.getCompaniesInfo();
  }, []);

  return (
    <div className="wrapper-open" onClick={() => setActive(true)}>
      {isActive ? (
        <div className="wrapper-menu">
          <div className="wrapper-top">
            <img className="wrapper-logo" src={scan} />
            <btn
              className="wrapper-close"
              onClick={(e) => {
                e.stopPropagation();
                setActive(false);
              }}
            ></btn>
          </div>
          <nav className="wrapper-nav">
            <Link className="headnav__link" to="/">
              Главная
            </Link>
            <Link className="headnav__link" to="#rates">
              Тарифы
            </Link>
            <Link className="headnav__link" to="#">
              FAQ
            </Link>
          </nav>
          {store.token ? (
            <div className="wrapper__user-info">
              <span className="wrapper__username">{login}</span>
              <img
                className="wrapper__user-avatar"
                src={userpic}

              />
              <button
                className="wrapper__logout"
                onClick={() => {
                  store.setToken("");
                  localStorage.clear();
                }}
              >
                <Link to="/">Выйти</Link>
              </button>
            </div>
          ) : (
            <div className="wrapper__not-signed">
              <Link className="wrapper__sign-up" to="#">
                Зарегистрироваться
              </Link>
              <Link className="wrapper__sign-in" to="/user">
                Войти
              </Link>
            </div>
          )}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
});

export default Wrapper;