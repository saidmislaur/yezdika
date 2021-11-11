import React from 'react';

export const Card = ({posts}) => {
    const test = (id) => {
        alert(id);
    }
    return (
        <>
            {posts.map((item) => (
                <div key={item.id} className="card" onClick={() => test(item.id)}>
                    <img src={item.image} alt="Logo" />
                    <div className="card_text">
                        <h2>{item.title}</h2>
                        <p>
                           {item.text.length > 250 ? `${item.text.substring(0, 200)}...` : item.text}
                        </p>
                        <span>{item.published}</span>
                    </div>
                </div>
            ))}
        </>
    )
}
