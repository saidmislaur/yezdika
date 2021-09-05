import React from 'react';
import BooksSlide from './BooksSlide';



export const Books = () => {
    return (
        <div className="books">
            <h1 className="books_title">Литература</h1>
            <div className="books_slider">
                <BooksSlide />
            </div>
            <div className="books_button">
                <button className={`button red`}>смотреть все
                    <img src="./img/arrow.svg" alt="arr"/>
                </button>
            </div>
        </div>
    )
}
