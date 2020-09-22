import React from 'react';
import "./style.scss";
import Button from '../button';

const Cards = ({buttonText, sourceImage, className}) => {
    return (
        <div className={`comp-card-container ${className}`}>
            <img src={sourceImage} alt="Card Images"/>
            <Button buttonTitle={buttonText}/>
        </div>
    )
}

export default Cards;