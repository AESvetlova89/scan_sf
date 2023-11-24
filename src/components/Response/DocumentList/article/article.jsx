import React from "react";
import "./article.css"
import { Link } from "react-router-dom";
import  scf from "../../../../images/scf-img.svg";

const Article = (props) => {
  let imageUrl = "";
  if (props.content.match(/https?:\/\/\S+"/g) === null) {
    imageUrl =  scf;
  } else {
    imageUrl = props.content
      .match(/https?:\/\/\S+"/g)
      .toString()
      .replace('"', "");
  }

  return (
    <div className="article">
      <div className="article-top">
        <p className="publication-date">{props.issueDate}</p>
        <Link className="publication-link" to={props.link} target={"_blank"}>
          {props.source}
        </Link>
      </div>
      <div className="article__title-tag">
        <h3 className="article-title">{props.title}</h3>
        {props.isTechNews && (
          <span className="article-tag">Технические новости</span>
        )}
        {props.isAnnouncement && (
          <span className="article-tag announcement">Анонсы и события</span>
        )}
        {props.isDigest && (
          <span className="article-tag digest">Сводки новостей</span>
        )}
      </div>
      <img className="article-image" src={imageUrl} />
      <p className="article-content">
        {props.content
          .replace(/<.*?>/g, "")
          .replace(/;.*?;/g, "")
          .replace(/&.*?t/g, "")
          .replace(/s.*?;/g, "")
          .replace(/\?.*?\d/g, "")
          .replace(/\/.*?\s/g, "")
          .replace(/(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)/g, "")}
      </p>
      <div className="article-bottom">
        <Link className="article-link" to={props.link} target={"_blank"}>
          Читать в источнике
        </Link>
        <span className="publication-date">Слова: {props.wordCount}</span>
      </div>
    </div>
  );
};

export default Article;