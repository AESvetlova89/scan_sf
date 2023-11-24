import React from "react";
import "./Response.css"; 
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import store from "../store";
import Loader from "../Expectation/expectation";

const settings = {
  dots: false,
  infinite: false,
  slidesToShow: 8,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 940,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 550,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const SimpleSlider = () => {
  const date = store.summaryResult.data.data[0].data.map((item) =>
    item.date
      .substring(0, 10)
      .split("-")
      .join(".")
      .split(".")
      .reverse()
      .join(".")
  );
  const total = store.summaryResult.data.data[0].data.map((item) => item.value);
  const risks = store.summaryResult.data.data[1].data.map((item) => item.value);

  store.setSummaryDates(date);
  store.setSummaryTotal(total);
  store.setSummaryRisks(risks);
  store.setSummaryAll(
    store.summaryTotal.reduce((a, b) => {
      return a + b;
    }) +
      store.summaryRisks.reduce((a, b) => {
        return a + b;
      })
  );

  return (
    <div>
      {store.isSummaryLoading === true ? (
        <div className="slider-loader">
          <Loader />
          <p className="loading-data">Загружаем данные</p>
        </div>
      ) : (
        <>
          <h3 className="summary-title">Общая сводка</h3>
          <p className="summary-all-info">Найдено {store.summaryAll} вариантов</p>
          <div className="slider-container">
            <div className="slider-titles-container">
              <p>Период</p>
              <p>Всего</p>
              <p>Риски</p>
            </div>
            <Slider className="summary-slider-container" {...settings}>
              {date &&
                date.map((el, index) => (
                  <div className="summary-slider-item" id={index}>
                    <p> {store.summaryDates[index]} </p>
                    <p> {store.summaryTotal[index]} </p>
                    <p> {store.summaryRisks[index]} </p>
                  </div>
                ))}
            </Slider>
          </div>
        </>
      )}
    </div>
  );
};

export default SimpleSlider;
