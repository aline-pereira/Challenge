import React from 'react';
import "./style.scss";
import Button from '../button';

const Cards = ({buttonText, sourceImage}) => {
    return (
        <div className="comp-card-container">
            <img src={sourceImage} alt="Card Images"/>
            <Button buttonTitle={buttonText}/>
        </div>
    )
}

export default Cards;