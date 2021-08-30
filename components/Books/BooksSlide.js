import React from "react";
import Slider from "react-slick";

const BooksSlide = ({styles}) => {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "180px",
      slidesToShow: 3,
      speed: 500
    }
    return (
      <div>
        <Slider {...settings}>
          <div className={styles.books_card}>
            <img src='./img/book1.jpg' alt="bookImg" />
            <div className={styles.books_info}>
              <span className={styles.books_name}>История Ингушского народа</span>
              <span className={styles.books_author}>Автор: Н.Д. Кодзоев 1</span>
            </div>
          </div>
          <div className={styles.books_card}>
            <img src='./img/book1.jpg' alt="bookImg" />
            <div className={styles.books_info}>
              <span className={styles.books_name}>История Ингушского народа</span>
              <span className={styles.books_author}>Автор: Н.Д. Кодзоев 1</span>
            </div>
          </div>
          <div className={styles.books_card}>
            <img src='./img/book1.jpg' alt="bookImg" />
            <div className={styles.books_info}>
              <span className={styles.books_name}>История Ингушского народа</span>
              <span className={styles.books_author}>Автор: Н.Д. Кодзоев 1</span>
            </div>
          </div>
          <div className={styles.books_card}>
            <img src='./img/book1.jpg' alt="bookImg" />
            <div className={styles.books_info}>
              <span className={styles.books_name}>История Ингушского народа</span>
              <span className={styles.books_author}>Автор: Н.Д. Кодзоев 1</span>
            </div>
          </div>
          <div className={styles.books_card}>
            <img src='./img/book1.jpg' alt="bookImg" />
            <div className={styles.books_info}>
              <span className={styles.books_name}>История Ингушского народа</span>
              <span className={styles.books_author}>Автор: Н.Д. Кодзоев 1</span>
            </div>
          </div>
          <div className={styles.books_card}>
            <img src='./img/book1.jpg' alt="bookImg" />
            <div className={styles.books_info}>
              <span className={styles.books_name}>История Ингушского народа</span>
              <span className={styles.books_author}>Автор: Н.Д. Кодзоев 1</span>
            </div>
          </div>
        </Slider>
      </div>
    );
  }

  export default BooksSlide;
