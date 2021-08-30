import React from 'react';
import Slider from "react-slick";
import { ArtefactsCard } from './ArtefactsCard';

export const ArtefactsSlide = () => {
    const settings = {
        focusOnSelect: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 500
      };
    return (
        <div className="artefacts_content">
        <Slider {...settings}>
            <ArtefactsCard 
                image="./img/Ellipse17.jpg" 
                title="Металлическая ваза «буккеро» Предположительно VII в. до н. э." 
                text="Размер: Общ.вые,- 30,5 см., выс. сосуда-24,5 см.. Д. тулова-14,5 см, Д.шейки ножки-8; 1 см. Д.дна-11,4 см"/>
           <ArtefactsCard 
                image="./img/Ellipse18.jpg" 
                title="Фигура мифической животного в виде кошки. Бронза, чеканка, гравировка" 
                text="Размер: Общ.вые,- 30,5 см., выс. сосуда-24,5 см.. Д. тулова-14,5 см, Д.шейки ножки-8; 1 см. Д.дна-11,4 см"/>
            <ArtefactsCard 
                image="./img/Ellipse19.jpg" 
                title="Металлическая ваза «буккеро» Предположительно VII в. до н. э." 
                text="Размер: Общ.вые,- 30,5 см., выс. сосуда-24,5 см.. Д. тулова-14,5 см, Д.шейки ножки-8; 1 см. Д.дна-11,4 см"/>
            <ArtefactsCard 
                image="./img/Ellipse17.jpg" 
                title="Металлическая ваза «буккеро» Предположительно VII в. до н. э." 
                text="Размер: Общ.вые,- 30,5 см., выс. сосуда-24,5 см.. Д. тулова-14,5 см, Д.шейки ножки-8; 1 см. Д.дна-11,4 см"/>
            <ArtefactsCard 
                image="./img/Ellipse18.jpg" 
                title="Металлическая ваза «буккеро» Предположительно VII в. до н. э." 
                text="Размер: Общ.вые,- 30,5 см., выс. сосуда-24,5 см.. Д. тулова-14,5 см, Д.шейки ножки-8; 1 см. Д.дна-11,4 см"/>
            <ArtefactsCard 
                image="./img/Ellipse19.jpg" 
                title="Металлическая ваза «буккеро» Предположительно VII в. до н. э." 
                text="Размер: Общ.вые,- 30,5 см., выс. сосуда-24,5 см.. Д. тулова-14,5 см, Д.шейки ножки-8; 1 см. Д.дна-11,4 см"/>
        </Slider>
      </div>
    )
}
