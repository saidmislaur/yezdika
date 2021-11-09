import React from 'react';
import BooksSlide from './BooksSlide';



export const Books = ({lists}) => {
    return (
        <div className="books">
            <h1 className="books_title">Литература</h1>
            <div className="books_slider">
                <BooksSlide lists={lists}/>
            </div>
            <div className="books_button">
                <button className={`button red`}>смотреть все
                    <img src="./img/arrow.svg" alt="arr"/>
                </button>
            </div>
        </div>
    )
}
