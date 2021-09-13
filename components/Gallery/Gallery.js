import React from 'react'
import GalleryCard from './GalleryCard'

export const Gallery = () => {
    return (
        <div className="gallery">
            <h1 className="gallery_title">Галлеря</h1>
            <div className="gallery_content">
                <GalleryCard image='./img/folklor1.jpg' />
                <GalleryCard image='./img/folklor2.jpg' />
                <GalleryCard image='./img/folklor3.jpg' />
                <GalleryCard image='./img/folklor1.jpg' />
                <GalleryCard image='./img/folklor2.jpg' />
                <GalleryCard image='./img/folklor3.jpg' />
                <GalleryCard image='./img/folklor1.jpg' />
                <GalleryCard image='./img/folklor1.jpg' />
            </div>
            <div className="artefacts_button">
                <button className={`button`}>смотреть все
                    <img src="./img/arrwhite.svg" alt="arr"/>
                </button>
            </div>
        </div>
    )
}
