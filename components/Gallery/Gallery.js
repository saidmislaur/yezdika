import React from 'react'
import GalleryCard from './GalleryCard'

export const Gallery = ({lists}) => {
    return (
        <div className="gallery">
            <h1 className="gallery_title">Галерея</h1>
            <div className="gallery_content">
                <GalleryCard lists={lists} />
            </div>
            <div className="artefacts_button">
                <button className={`button`}>смотреть все
                    <img src="./img/arrwhite.svg" alt="arr"/>
                </button>
            </div>
        </div>
    )
}
