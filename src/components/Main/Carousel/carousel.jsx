import React from "react";
import "./carousel.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import clockpic from "../../../images/clockpic.svg";
import search from "../../../images/search.svg";
import safety from "../../../images/safety.svg";
import smile_pic from "../../../images/smile_pic.svg";



const PrevArrow = (props) => (
  <div {...props} className="slick-arrow slick-prev">
    Previous
  </div>
);

const NextArrow = (props) => (
  <div {...props} className="slick-arrow slick-next">
    Next
  </div>
);

export default function Slider_Main() {
  let settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 870,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

   const slider = [
    {
      id: 0,
      text: "Высокая и оперативная скорость обработки заявки",
      img: clockpic,
    },

    {
      id: 1,
      text: "Огромная комплексная база данных, обеспечивающая объективный ответ на запрос",
      img: search,
    },

    {
      id: 2,
      text: "Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству",
      img: safety,
    },

    {
      id: 3,
      text: "Высокая и оперативная скорость обработки заявки",
      img: clockpic,
    },

    {
      id: 4,
      text: "Огромная комплексная база данных, обеспечивающая объективный ответ на запрос",
      img: search,
    },

    {
      id: 5,
      text: "Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству",
      img: safety,
    },

  ];


  return (
    <Slider {...settings}>
      {slider.map((card, id) => (
        <div className="slider-item" key={id}>
          <img className="slider-img" src={card.img} />
          <p className="slider-info">{card.text}</p>
        </div>
      ))}
    </Slider>
  );
}
