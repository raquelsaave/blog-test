import React, { Component } from 'react';

//Actions
import { postData } from '../../../utils/api';
import ItemForm from '../ItemForm/ItemForm'

//Components
import Modal from 'react-bootstrap/Modal';
import Alert from 'react-bootstrap/Alert';


class CreateItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            author: '',
            title: '',
            content: '',
            fullcontent: '',
            error: false,
        }
        this.create = this.create.bind(this);
    }

    showError() {
        this.setState({ error: true });
    }

    create(data) {
        postData('posts', data).then(this.props.hide).catch(this.showError);
    }

    render() {
        const alert = this.state.error && (<Alert variant="danger"> Something went wrong </Alert>);

        return (
            <Modal show={this.props.show} onHide={this.props.hide}>
                <Modal.Header closeButton>
                    <Modal.Title> New Blog Post </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <ItemForm submit={this.create} data={{}} />
                </Modal.Body>
                {alert}
            </Modal>
        );
    }
}

export default CreateItem;