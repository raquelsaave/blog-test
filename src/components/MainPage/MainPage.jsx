import React from 'react';

// Components
import Header from '../Header/Header';
import Link from 'react-router-dom/Link';
import List from '../List/List';

import Button from 'react-bootstrap/Button';

import './MainPage.css';

const MainPage = () => (
    <div className="mainpage">
        <>
        <Header />
        PAGINA PRINCIPAL DE BLOG 
        <Link to="/Explore">
        <Button variant="primary">Explore</Button>
        </Link>
        <List />
        </>
    </div>
);

export default MainPage;