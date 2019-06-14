import React from 'react';

// Components
import Header from '../Header/Header';
import Link from 'react-router-dom/Link';
import List from '../List/List';

import Button from 'react-bootstrap/Button';

// import '../MainPage.css';


const ExplorePage = () => (
    <div className="explorepage">
        <>
            <Header />
            <h1>EXPLORE!</h1>
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
            </div>
        </>
    </div>
);

export default ExplorePage;