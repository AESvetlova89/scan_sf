import React, { useEffect } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import AutNot from "./AutNot/autNot";
import Wrapper from "./Wrapper/wrapper";
import store from "../store";
import { observer } from "mobx-react-lite";
import scan from "../../images/scan-logo.svg";
import Authorized from "./Authorized/aut";

const Header = observer(() => {
  useEffect(() => {
    store.checkToken();
  }, []);

  return (
    <head className="head">
      <Link to="/">
        <img className="head-logo" src={scan} />
      </Link>
      <nav className="head-nav">
        <Link className="headnav__link" to="/">
          Главная
        </Link>
        <a className="headnav__link" href="#rates">
          Тарифы
        </a>
        <Link className="headnav__link" to="#">
          FAQ
        </Link>
      </nav>
      {store.token ? <Authorized /> : <AutNot />}
      <Wrapper />
    </head>
  );
});

export default Header;