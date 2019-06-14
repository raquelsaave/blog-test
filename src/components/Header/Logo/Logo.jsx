import React from 'react';
import Link from 'react-router-dom/Link';

// Components
import logotipo from './blog.png'

// Estilos
import './Logo.css';

const Logo = () => (
    <div className="logo">
        <Link to="/">
            <img src={logotipo} alt={"logo"} width={"70px"} />
        </Link>
    </div>
);

export default Logo;