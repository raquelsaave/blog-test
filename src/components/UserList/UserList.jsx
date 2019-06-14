import React, { Component } from 'react';
// Actions
import { getData } from '../../utils/api';
// Component
import User from './User/User';

import Button from 'react-bootstrap/Button';


class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            creating: false,
        }
        this.updateList = this.updateList.bind(this);
        this.createUser = this.createUser.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    componentDidMount() {
        this.updateList();
    }

    updateList() {
        getData('users').then((users) => this.setState({ users }));
    }

    createUser() {
        this.setState({ creating: true });
    }

    closeModal() {
        this.setState({ creating: false });
        this.updateList();
    }

    renderItems() {
        return this.state.users.map((user, i) => (
            <User
                key={`user-${i}`}
                updateList={this.updateList}
                {...user}
            />
        ));
    }

    render() {
        return (
            <>
                
                {this.renderItems()}
            </>
        );
    }
}

export default UserList;