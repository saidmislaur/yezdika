import React from 'react'

export const Card = ({image, title}) => {
    return (
        <div className="card">
           <img src={image} alt="Logo"/>
           <div className="card_text">
            <h2>{title}</h2>
            <p>
                Малочисленные, но крепко спаянные и прекрасно вооруженные ингуши 
                держали в страхе всю Терскую область. Этнографы того времени отмечали, 
                что ингуш жертвовал всем ради оружия...
                </p>
                <span>25 июня, 2021г.</span>
           </div>
        </div>
    )
}
