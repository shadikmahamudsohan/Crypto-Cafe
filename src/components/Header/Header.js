import React from 'react';
import CardModal from '../CardModal/CardModal';
import './Header.css';

const Header = ({ cart }) => {
    return (
        <div className='navbar'>
            <h1>Kopa Samsu Store</h1>
            <CardModal cart={cart} />
        </div>
    );
};

export default Header;