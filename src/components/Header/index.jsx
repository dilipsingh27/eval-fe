import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    

    return (
        <div className='header main-padding'>
            <div className="logo">
                <Link to='/allEvents'>
                    <p className='para'>EVENTIFY</p>
                </Link>
            </div>
        </div>
    );
}; 

export default Header;