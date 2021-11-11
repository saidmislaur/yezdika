import React from 'react'

export const ArtefactsCard = ({image, title, text, stylePage, lists}) => {
    return (
        <>
            {
                lists.map((item, index) => (
                    <div key={item + index} className={`artefacts_artefactsCard artefacts_artefactsCard-${stylePage}`}>
                        <img src={item.image} />
                        <h3>{item.title}</h3>
                        <p>{item.text}
                        </p>
                    </div>
                ))
            }
        </>
    )
}
