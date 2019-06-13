import React, {Component} from 'react';

//Components
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class ItemForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            author: props.data.author || '',
            title: props.data.title || '',
            content: props.data.content || '',
            fullcontent: props.data.fullcontent || '',
        };

        this.updateAuthor = this.updateAuthor.bind(this);
        this.updateTitle = this.updateTitle.bind(this);
        this.updateContent = this.updateContent.bind(this);
        this.updateFullContent = this.updateFullContent.bind(this);
    }
    
    updateAuthor({ target }) {
        this.setState({ author: target.value });
    }

    updateTitle({ target }) {
        this.setState({ title: target.value });
    }

    updateContent({ target }) {
        this.setState({ content: target.value });
    }
    updateFullContent({ target }) {
        this.setState({ fullcontent: target.value });
    }

    render(){
        return(
            <Form>
                <Form.Group>
                    <Form.Label> Author </Form.Label>
                    <Form.Control
                        type="text"
                        palceholder="Author Name"
                        value={this.state.author}
                        onChange={this.updateAuthor}
                    />
                    <Form.Label> Title </Form.Label>
                    <Form.Control
                        type="text"
                        palceholder="Title"
                        value={this.state.title}
                        onChange={this.updateTitle}
                    />
                    <Form.Label> Content (Opening) </Form.Label>
                    <Form.Control
                        as="textarea"
                        rows="10"
                        value={this.state.content}
                        onChange={this.updateContent}
                    />   
                    <Form.Label> Full Content </Form.Label>
                    <Form.Control
                        as="textarea"
                        rows="20"
                        value={this.state.fullcontent}
                        onChange={this.updateFullContent}
                    />
                    <Button variant="primary" onClick={() => this.props.submit({...this.state})}> Save </Button>
                </Form.Group>
            </Form>
        )
    }
}
export default ItemForm;