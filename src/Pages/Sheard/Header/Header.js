import React from 'react';
import { Link } from 'react-router-dom';
import Carosel from '../../Carosel/Carosel';

const Header = () => {
    return (
        <div>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/services'>Services</Link>
            </nav>
            <Carosel></Carosel>
        </div>
    );
};

export default Header;