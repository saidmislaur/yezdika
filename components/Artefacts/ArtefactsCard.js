import React from 'react'

export const ArtefactsCard = ({image, title, text, stylePage}) => {
    return (
        <div className={`artefacts_artefactsCard artefacts_artefactsCard-${stylePage}`}>
            <img src={image} />
            <h3>{title}</h3>
            <p>{text}
            </p>
        </div>
    )
}
