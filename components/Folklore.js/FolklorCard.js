import React from 'react'

export const FolklorCard = ({text, image}) => {
    return (
            <div className="slide_card">
                <img src={image} alt="img" />
                <div className="slide_span">
                    <span>{text}</span>
                </div>
            </div>
    )
}
