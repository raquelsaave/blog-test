import React, { Component } from 'react';

// Components
import UpdateItem from '../UpdateItem/UpdateItem';
import { deleteData } from '../../../utils/api';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
    }

    this.editItem = this.editItem.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  editItem() {
    this.setState({editing: true});
  }

  removeItem() {
      deleteData('posts', this.props.id).then(this.props.updateList).catch(console.log);
  }

  closeModal() {
    this.setState({editing: false});
    this.props.updateList();
  }

  render() {
    const {id, author, title, content} = this.props;
    return (
     <>   
        <CardDeck>
            <Card>
                <Card.Img variant="top" src="https://i.pinimg.com/236x/a7/12/71/a712716abfcd5d3cb39497ef4670d2ec.jpg" />
                <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                <div> {author} </div>
                <hr />
                <div> {id} </div>
                <hr />
                <div> {content} </div>
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
        </CardDeck>
      <UpdateItem show={this.state.editing} hide={this.closeModal} {...this.props} />
      <Button variant="light" onClick={this.editItem}>Edit Post</Button>
      <Button variant="light" onClick={this.removeItem}> Remove Post</Button>
      
      <hr/>
    </>
    );
  }
}

export default Item;