import React from "react";
import Slider from "react-slick";
import { FolklorCard } from "./FolklorCard";


export const Slide = () => {
  const settings = {
    className: "center",
    centerMode: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    centerPadding: "120px",
    responsive: [
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerPadding: "0px",
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "50px",
        }
      }
    ]
  };
    return (
      <div>
        <Slider {...settings}>
            <FolklorCard text="Сказания и мифы ингушей" image="./img/folklor1.jpg"/>
            <FolklorCard text="Обрядовый фольклор" image="./img/folklor2.jpg"/>
            <FolklorCard text="Ингушский нартский эпос" image="./img/folklor3.jpg"/>
            <FolklorCard text="Сказания и мифы ингушей" image="./img/folklor1.jpg"/>
            <FolklorCard text="Обрядовый фольклор" image="./img/folklor2.jpg"/>
            <FolklorCard text="Сказания и мифы ингушей" image="./img/folklor3.jpg"/>
            <FolklorCard text="Ингушский нартский эпос" image="./img/folklor2.jpg"/>
        </Slider>
      </div>
    );
  }

