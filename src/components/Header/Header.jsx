import React from 'react';

// Components
import Logo from './Logo/Logo';
import SearchPage from './SearchPage/SearchPage'
import './Header.css';

const Header = () => {
    return (
        <>
            <div className='header'>
                <div className='brand'>
                    <Logo />
                </div>
                <div className="searchbar">
                    <SearchPage />
                </div>
            </div>
        </>
    )
};

export default Header;
