import React from 'react';

import Button from 'react-bootstrap/Button';

// Components
import Header from '../Header/Header';
import Login from '../Login/Login'

import './StartPage.css';


const StartPage = () => {
    return (
    <>
    <div className="welcome">
    <div className="start">
        <Header />
    </div>
    <div className="body">
        <Login />
        login, create account
    </div>
    </div>
    </>
    )
};


export default StartPage;