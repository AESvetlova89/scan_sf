import React from "react";
import "./autNot.css";
import { Link } from "react-router-dom";

const AutNot = () => {
  return (
    <div className="aut-not">
      <Link className="sign-up" to="#">
        Зарегистрироваться
      </Link>
      <div className="Divider"></div>
      <Link className="sign-in" to="/user">
        Войти
      </Link>
    </div>
  );
};

export default AutNot;