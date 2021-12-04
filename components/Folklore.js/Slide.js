import React from "react";
import Slider from "react-slick";

export const Slide = ({lists}) => {
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
          {
              lists.map((item, index) => (
                  <div key={item.id + index} className="slide_card">
                      <img src={`http://localhost:5050/${item.pathImages}`} alt="img" />
                      <div className="slide_span">
                          <span>{item.text.length > 15 ? `${item.text.substring(0, 25)}` : item.text}</span>
                      </div>
                  </div>
              ))
          }
        </Slider>
      </div>
    );
  }

