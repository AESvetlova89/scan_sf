import React, { useEffect, useState } from "react";
import "./documents.css";
import store from "../../store";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import Document from "./article/article";

const Documents = observer(() => {
  const [isActive, setActive] = useState(true);
  const [nextTen, setNextTen] = useState(10);

  useEffect(() => {
    if (nextTen >= store.IDs.length) {
      setActive(false);
    }
  }, [nextTen]);

  useEffect(() => {
    setActive(false);
    if (store.IDs[0] !== undefined) {
      if (store.IDs.length <= 10) {
        store.getFirstDocuments();
        setActive(false);
        return;
      } else {
        let next = store.IDs.slice(0, nextTen);
        store.getNextDocuments(next);
        setActive(true);
      }
    }
  }, [store.IDs]);

  const showNextTen = () => {
    let next = store.IDs.slice(nextTen, nextTen + 10);
    store.getNextDocuments(next);
    setNextTen(nextTen + 10);
  };

  if (!store.document) {
    setActive(false);
    return (
      <p className="search-result__error search-result-error__info">
        Что-то пошло не так :( <br />
        Попробуйте <Link to="/search">изменить параметры поиска</Link>
      </p>
    );
  }

  return (
    <div className="records-wrapper">
      <h3 className="summary-title records-title">Список записей</h3>
      <div className="records">
        {store.document &&
          store.document.map((el) => (
            <Document
              issueDate={el.ok.issueDate
                .substring(0, 10)
                .split("-")
                .join(".")
                .split(".")
                .reverse()
                .join(".")}
              source={el.ok.source.name}
              title={el.ok.title.text}
              isTechNews={el.ok.attributes.isTechNews}
              isAnnouncement={el.ok.attributes.isAnnouncement}
              isDigest={el.ok.attributes.isDigest}
              content={el.ok.content.markup}
              link={el.ok.url}
              wordCount={el.ok.attributes.wordCount}
            />
          ))}
      </div>
      {store.isdocumentLoading ? (
        <btn disabled className="record-btn__active">
          <div className="lds-ellipsis search-loader">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </btn>
      ) : (
        <btn
          className={isActive ? "record-btn__active" : "record-disabled"}
          onClick={showNextTen}
        >
          Показать больше
        </btn>
      )}
    </div>
  );
});

export default Documents;
