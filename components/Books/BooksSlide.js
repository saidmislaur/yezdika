import React from "react";
import Slider from "react-slick";

const BooksSlide = ({lists}) => {
    const settings = {
      className: "center",
      centerMode: true,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      centerPadding: "170px",
      responsive: [
        {
          breakpoint: 1366,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            centerPadding: "50px"
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            centerPadding: "50px"
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: "110px",
          }
        },
        {
          breakpoint: 400,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: "90px",
          }
        }
      ]
    };

    console.log(lists)
    return (
      <div>
        <Slider {...settings}>
          { 
            lists.map((item, index) => (
              <div key={item.id + index} className="books_card">
                <img src='./img/book1.jpg' alt="bookImg" />
                <div className="books_info">
                  <span className="books_name">{item.name}</span>
                  <span className="books_author">Автор: {item.author}</span>
                </div>
              </div>
            ))
          }
        </Slider>
      </div>
    );
  }

  export default BooksSlide;
