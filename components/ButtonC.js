import React from 'react'

export const ButtonC = ({text, image}) => {
    return (
        <>
            <button className={`button red`}>
                {text}
                <img src={image} alt="arr"/>
            </button>
        </>
    )
}
