import React, {useState} from 'react'
import { Slide } from './Slide';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export const Folklore = () => {
    return (
        <div className='folklore'>
            <h1 className="folklore_title">Фольклор</h1>
            <div className="folklore_slider">
                <Slide />
            </div>
            <div className="folklore_button">
                <button className="button">смотреть все
                    <img src="./img/arrwhite.svg" alt="arr"/>
                </button>
            </div> 
        </div>
    )
}
