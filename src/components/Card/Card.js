import React from 'react';
import './Card.css';
import { BsFillCartFill } from 'react-icons/bs';

const Card = ({ data, handleAddToCart }) => {
    const { name, img, bullet, capacity, category, action, price } = data;
    return (
        <div className='card'>
            <div className='image-container'>
                <img src={img} alt="" />
            </div>
            <div className='gun-info'>
                <h1>{name}</h1>
                <p>Bullet type: {bullet}</p>
                <p>Capacity: {capacity}</p>
                <p>Action: {action}</p>
                <p>Category: {category}</p>
            </div>
            <div className='add-to-cart'>
                <button onClick={() => handleAddToCart(data)}><BsFillCartFill className='icon' /></button>
                <h1>${price}</h1>
            </div>
        </div>
    );
};

export default Card;