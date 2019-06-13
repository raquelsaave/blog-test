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
        <Login />
    </div>
    <div className="nav"> 
        hola
    </div>
    </div>
    </>
    )
};

export default StartPage;