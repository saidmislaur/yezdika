import React from 'react';
import BooksSlide from './BooksSlide';

import styles from "../../styles/books.module.scss";

export const Books = () => {
    return (
        <div className={styles.books}>
            <h1 className={styles.books_title}>Литература</h1>
            <div className={styles.books_slider}>
                <BooksSlide styles={styles}/>
            </div>
            <div className={styles.books_button}>
                <button className={`button red`}>смотреть все
                    <img src="./img/arrow.svg" alt="arr"/>
                </button>
            </div>
        </div>
    )
}
