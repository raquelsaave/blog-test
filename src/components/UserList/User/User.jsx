import React, { Component } from 'react';

// Components
import UpdateUser from '../UpdateUser/UpdateUser';
import { deleteData } from '../../../utils/api';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
    }

    // this.editItem = this.editItem.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.removeUser = this.removeUser.bind(this);
  }

  editUser() {
    this.setState({editing: true});
  }

  removeUser() {
      deleteData('users', this.props.id).then(this.props.updateList).catch(console.log);
  }

  closeModal() {
    this.setState({editing: false});
    this.props.updateUser();
  }

  render() {
    const {name, lastname, email, username, password} = this.props;
    return (
     <>   
        <CardDeck>
            <Card>
                <Card.Img variant="top" src="https://i.pinimg.com/236x/a7/12/71/a712716abfcd5d3cb39497ef4670d2ec.jpg" />
                <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Title>{lastname}</Card.Title>
                <Card.Text>
                <div> {email} </div>
                <hr />
                <div> {username} </div>
                <hr />
                <div> {password} </div>
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                        <Button variant="light" onClick={this.editUser}>Edit Info</Button>
                        <Button variant="light" onClick={this.removeUser}> Eliminate Account</Button>
                </Card.Footer>
            </Card>
        </CardDeck>
      <UpdateUser show={this.state.editing} hide={this.closeModal} {...this.props} />
      
      <hr/>
    </>
    );
  }
}

export default User;