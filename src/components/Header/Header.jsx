import React from 'react';

// Components
import Logo from './Logo/Logo';
import SearchPage from '../SearchPage/SearchPage'

import './Header.css';

const Header = () => {
    return (
        <div className='header'>
        <Logo />
        <h1> Bloggosfera </h1>  
        <SearchPage />
        </div>
    )
};

export default Header;
