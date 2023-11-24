import logo from "../../images/logo.svg";
import "./user.css";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import lock from "../../images/lock.svg";
import google from "../../images/google.png";
import facebook from "../../images/facebook.png";
import yandex from "../../images/yandex.png";
import store from "../store";

function Authorization() {

  const navigate = useNavigate();

  useEffect(() => {
    console.log("useEffect с токеном:", store.token);
    store.token && navigate("/");

  }, [store.token]);


  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      login: "sf_student9",
      password: "DTdEwAn",
    },
  });

  const onSubmit = (data) => {
    store.setLogin(data.login);
    store.setPassword(data.password);
    store.getToken();
    reset();
  };



  return (
    <div className="authorization">
      <h2 className="user__title">
        Для оформления подписки <br /> на тариф, необходимо авторизоваться.
      </h2>
      <img className="user-img" src={logo} />

    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <img className="form-img__lock" src={lock} />
      <div className="form-links">
        <button className="form-link">
          <Link to="/user">Войти</Link>
        </button>
        <button className="form-link form-link__disabled">
          <Link to="#">Зарегистрироваться</Link>
        </button>
      </div>
      <label className="form-label">
        {store.isAuthError
          ? "Неправильный логин или номер телефона"
          : "Логин или номер телефона:"}
        <input
          {...register("login", {
            required: true,
          })}
          className={
            errors?.login ? "form-input form-input__invalid" : "form-input"
          }
          type="text"
        />
        {errors?.login && (
          <p className="error-message">Введите корректные данные</p>
        )}
      </label>
      <label className="form-label">
        {store.isAuthError ? "Неправильный пароль" : "Пароль:"}
        <input
          {...register("password", {
            required: true,
          })}
          className={
            errors?.password ? "form-input form-input__invalid" : "form-input"
          }
          type="password"
          autoComplete="on"
        />
        {errors?.password && (
          <p className="error-message">Введите корректные данные</p>
        )}
      </label>
      {store.isLoading ? (
        <button
          disabled={!isValid}
          className="form-button__submit"
          type="submit"
        >
          <div className="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </button>
      ) : (
        <button
          disabled={!isValid}
          className="form-button__submit"
          type="submit"
        >
          Войти
        </button>
      )}
      <Link className="repare-password" to="/error">
        Восстановить пароль
      </Link>
      <p className="sign-with">Войти через:</p>
      <div className="sign-socials">
        <Link to="https://google.com" target="_blank">
          <img src={google} />
        </Link>
        <Link to="https://facebook.com" target="_blank">
          <img src={facebook} />
        </Link>
        <Link to="https://yandex.ru" target="_blank">
          <img src={yandex} />
        </Link>
      </div>
    </form>
    </div>
  );
}

export default Authorization;