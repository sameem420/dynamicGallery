import React from 'react'
import '../App.css';

function Card({ images }) {
    console.log(images);
    return (
        <>
            {images.map((img,index) => (
                <div className="card" 
                key={index}
                style={{ background: `url("${img.url}") no-repeat center/cover` }}
                >
                    {console.log(img)}
                </div>
            ))}
        </>
    )
}

export default Card;