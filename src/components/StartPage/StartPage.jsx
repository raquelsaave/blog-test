import React, { Component } from 'react';

import Button from 'react-bootstrap/Button';

// Components
import Header from '../Header/Header';
import Login from '../Login/Login'
import UserList from '../UserList/UserList'
import CreateUser from '../UserList/CreateUser/CreateUser'

// import './List.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import './StartPage.css';


class StartPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            creating: false,
        }
        this.createUser = this.createUser.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    createUser() {
        this.setState({ creating: true });
    }

    closeModal() {
        this.setState({ creating: false });
    }
    render() {

        return (
            <>
                <div className="welcome">
                    <div className="titleWelcome">
                        <h1>Welcome to Blogosfera</h1>
                    </div>
                    <div className="body">
                        <Button variant="primary" >Log In</Button>
                        <Button variant="secondary" onClick={this.createUser}> <FontAwesomeIcon icon={faHeart} /> Create Account</Button>
                        <Login />
                    </div>
                </div>
                <CreateUser show={this.state.creating} hide={this.closeModal} />
            </>
        )
    }
};


export default StartPage;