import React from 'react'
import './Images.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
const Images = ({images}) => {
    return (
        <div>
            {images.map((image) => {
                return (
                    <LazyLoadImage
                        src = {image.src}
                        key  ={image.id}
                        height="500px"
                        width="400px"
                        className="image"
                    />
                )
            })}
        </div>
    )
}

export default Images;
