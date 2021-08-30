import React from "react";
import Slider from "react-slick";
import { FolklorCard } from "./FolklorCard";


export const Slide = () => {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500
    }
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

