import React from "react";
import rocketman from "../../images/search_rocket.svg";
import document from "../../images/document.svg";
import folders from "../../images/folders.svg";
import SearchForm from "./TNNForm/TNNForm";
import { observer } from "mobx-react-lite";

const Search = observer(() => {
  const containerStyle = {
    padding: "var(--stand-padding)",
  };

  const titleStyle = {
    width: "55%",
    fontFamily: "Ferry",
    fontSize: "42px",
    letterSpacing: "0.04em",
    color: "#000",
  };

  const descriptionStyle = {
    fontSize: "22px",
    marginTop: "24px",
    lineHeight: "24px",
    letterSpacing: "0.02em",
    color: "#000",
  };

  const contentStyle = {
    display: "flex",
    justifyContent: "space-between",
  };

  const imagesContainerStyle = {
    position: "relative",
    display: "flex",
  };

  const docImageStyle = {
    position: "absolute",
    top: "-100px",
    left: "-100px",
  };

  const foldersImageStyle = {
    position: "absolute",
    top: "-100px",
    right: "50px",
  };

  const rocketmanImageStyle = {
    width: "100%",
    height: "470px",
    alignSelf: "flex-end",
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>
        Найдите необходимые данные в пару кликов.
      </h1>
      <p style={descriptionStyle}>
        Задайте параметры поиска. <br />
        Чем больше заполните, тем точнее поиск
      </p>
      <div style={contentStyle}>
        <SearchForm />
        <div style={imagesContainerStyle}>
          <img src={document} style={docImageStyle} />
          <img src={folders} style={foldersImageStyle} />
          <img src={rocketman} style={rocketmanImageStyle} />
        </div>
      </div>
    </div>
  );
});

export default Search;


