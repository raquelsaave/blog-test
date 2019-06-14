import React from 'react';

// Components
import Link from 'react-router-dom/Link';
import List from '../List/List';

import Button from 'react-bootstrap/Button';

import './MainPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


const MainPage = () => (
    <div className="mainpage">
        <>
            <h1>PAGINA PRINCIPAL DE BLOG </h1>
            <div className="navMain">
                <Link to="/Explore">
                    <Button variant="primary">Explore</Button>
                </Link>
                <Link to="/">
                    <Button variant="primary">Notifications</Button>
                </Link>
            </div>
            <div className="content">
                <div className="posts1">
                    <List />
                </div>
                <div className="info">
                    <FontAwesomeIcon icon={faSearch} /> 
                    info!
                </div>
            </div>
        </>
    </div>
);

export default MainPage;