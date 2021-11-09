import React from 'react'

const GalleryCard = ({image, pageStyle, text, lists}) => {
    return (
        <>
        {
            lists.map((item, index) => (
                <div key={item.id + index} className={`gallery_card gallery_card-${pageStyle}`}>
                    <img src={item.image} alt="asd" />
                    <p>{text}</p>
                </div>
            ))
        }
        </>
    )
}

export default GalleryCard
