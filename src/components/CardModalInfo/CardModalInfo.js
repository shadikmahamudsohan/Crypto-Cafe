import React from 'react';
import './CardModalInfo.css';

const CardModalInfo = ({ item }) => {
    const { name, img, price } = item;;
    return (
        <div className='info'>
            <div>
                <img className='img' src={img} alt="" />
            </div>
            <div>
                <h1>{name}</h1>
                <h3>Price: ${price}</h3>
            </div>
        </div>
    );
};

export default CardModalInfo;