import React from 'react';
import Link from 'react-router-dom/Link';

// Components
import logo from './blog.jpg'

const Logo = () => (
    <Link to="/">
    <img src={logo} alt={"logo"} width={"70px"} />
    </Link>
);

export default Logo;