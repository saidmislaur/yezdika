import React from 'react'

const GalleryCard = ({image, pageStyle, text}) => {
    return (
        <>
            <div className={`gallery_card gallery_card-${pageStyle}`}>
                <img src={image} alt="asd" />
                <p>{text}</p>
            </div>
        </>
    )
}

export default GalleryCard
