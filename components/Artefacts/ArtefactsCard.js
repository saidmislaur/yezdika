import React from 'react'

export const ArtefactsCard = ({image, title, text}) => {
    return (
        <div className="artefacts_artefactsCard">
            <img src={image} />
            <h3>{title}</h3>
            <p>{text}
            </p>
        </div>
    )
}
