import React from 'react'

const GalleryCard = ({pageStyle, text, lists}) => {
    return (
        <>
        {
            lists.map((item, index) => (
                <div key={item.id + index} className={`gallery_card gallery_card-${pageStyle}`}>
                    <img src={`/img/${item.pathImages}`} alt="Logo" />
                    <p>{text}</p>
                </div>
            ))
        }
        </>
    )
}

export default GalleryCard
