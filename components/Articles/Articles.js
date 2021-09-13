import React from 'react';
import Card from '../Card';

export const  Articles = () => {
    return (
        <div className="articles">
            <div className="container">
            <h1 className="articles_title">Статьи</h1>
            <div className="articles_card">
                <Card image={'./img/card1.jpg'} title='Почему ингушей считали самым опасным народом Кавказа' data=''/>
                <Card image={'./img/card2.jpg'} title='Ингушетия. Таргимские храмы'/>
                <Card image={'./img/card3.jpg'} title='Почему ингушей считали самым опасным народом Кавказа'/>
                <Card image={'./img/card1.jpg'} title='Почему ингушей считали самым опасным народом Кавказа' data=''/>
                <Card image={'./img/card2.jpg'} title='Ингушетия. Таргимские храмы Ингушетия'/>
                <Card image={'./img/card3.jpg'} title='Ингушетия. Таргимские храмы'/>
            </div>
            <div className="articles_button">
            <button className={`button red`}>смотреть все
                <img src="./img/arrow.svg" alt="arr"/>
            </button>
            </div>
            </div>
        </div>
    )
}
