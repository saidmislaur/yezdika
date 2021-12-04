import React from 'react';
import Slider from "react-slick";

export const ArtefactsSlide = ({lists, stylePage}) => {
    const settings = {
        className: "center",
        centerMode: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerPadding: "0px",
        responsive: [
          {
            breakpoint: 1366,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              centerPadding: "300px",
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
              centerPadding: "75px",
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerPadding: "100px",
            }
          },
          {
            breakpoint: 400,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerPadding: "80px",
            }
          }
        ]
    };
    return (
        <div className="artefacts_content">
        <Slider {...settings}>
        {
            lists.map((item, index) => (
                <div key={item.id + index} className={`artefacts_artefactsCard artefacts_artefactsCard-${stylePage}`}>
                    <img src={`http://localhost:5050/${item.pathImages}`} />
                    <h3>{item.title.length > 70 ? `${item.title.substring(0, 200)}` : item.title}</h3>
                    <p>{item.text.length > 50 ? `${item.text.substring(0, 200)}...` : item.text} 
                    </p>
                </div>
            ))
        }
        </Slider>
      </div>
    )
}
