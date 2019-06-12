import React from 'react';

import Button from 'react-bootstrap/Button';

// Components
import Header from '../Header/Header';
import Login from '../Login/Login'



const StartPage = () => {
    return (
    <div className="start">
        <Header />
        CONTENIDO INICIAL
        <Login />
        <Button variant="link">Login</Button>
    </div>
    )
};

export default StartPage;