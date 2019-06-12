import React, { Component } from 'react';
// Actions
import { getData } from '../../utils/api';
// Component
import Item from './Item/Item';
import CreateItem from './CreateItem/CreateItem'

import Button from 'react-bootstrap/Button';
import './List.css';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            creating: false,
        }
        this.updateList = this.updateList.bind(this);
        this.createItem = this.createItem.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    componentDidMount() {
        this.updateList();
    }

    updateList() {
        getData('posts').then((items) => this.setState({ items }));
    }

    createItem() {
        this.setState({ creating: true });
    }

    closeModal() {
        this.setState({ creating: false });
        this.updateList();
    }

    renderItems() {
        return this.state.items.map((item, i) => (
            <Item
                key={`item-${i}`}
                updateList={this.updateList}
                {...item}
            />
        ));
    }

    render() {
        return (
            <>
                <CreateItem show={this.state.creating} hide={this.closeModal} />
                <Button variant="secondary" onClick={this.createItem}>Add new Post</Button>
                {this.renderItems()}
            </>
        );
    }
}

export default List;