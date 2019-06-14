import React, { Component } from 'react';

//Actions
import { postData } from '../../../utils/api';
import UserForm from '../UserForm/UserForm'

//Components
import Modal from 'react-bootstrap/Modal';
import Alert from 'react-bootstrap/Alert';


class CreateUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            lastname: '',
            email: '',
            username: '',
            password: '',
        }
        this.create = this.create.bind(this);
    }

    showError() {
        this.setState({ error: true });
    }

    create(data) {
        postData('users', data).then(this.props.hide).catch(this.showError);
    }

    render() {
        const alert = this.state.error && (<Alert variant="danger"> Something went wrong </Alert>);

        return (
            <Modal show={this.props.show} onHide={this.props.hide}>
                <Modal.Header closeButton>
                    <Modal.Title> Create Account </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <UserForm submit={this.create} data={{}} />
                </Modal.Body>
                {alert}
            </Modal>
        );
    }
}

export default CreateUser;