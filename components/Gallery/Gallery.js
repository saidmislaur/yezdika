import React from 'react'
import GalleryCard from './GalleryCard'

export const Gallery = () => {
    return (
        <div className="gallery">
            <h1 className="gallery_title">Галлеря</h1>
            <GalleryCard />
            <div className="artefacts_button">
                <button className={`button`}>смотреть все
                    <img src="./img/arrwhite.svg" alt="arr"/>
                </button>
            </div>
        </div>
    )
}
