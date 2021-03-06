import React from 'react';
import {Well, Panel, FormControl, FormGroup, ControlLabel, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {findDOMNode} from 'react-dom';
import {postBook, deleteBook} from '../../actions/bookActions';

class BookForm extends React.Component {
    handleSubmit() {
        const book = [{
            title: findDOMNode(this.refs.title).value,
            description: findDOMNode(this.refs.description).value,
            price: findDOMNode(this.refs.price).value,
        }];
        this.props.postBook(book);
    }

    onDelete() {
        let bookId = findDOMNode(this.refs.delete).value;
        this.props.deleteBook(bookId);
    }

    render() {
        const bookList = this.props.books.map(book=>{
            return (
                <option key={book._id}>{book._id}</option>
            )
        });
        return (
            <Well>
                <Panel>
                    <FormGroup controlId="title">
                        <ControlLabel>Title</ControlLabel>
                        <FormControl
                            type="text"
                            placeholder="Enter Title"
                            ref="title"
                        />
                    </FormGroup>
                    <FormGroup controlId="description">
                        <ControlLabel>Description</ControlLabel>
                        <FormControl
                            type="text"
                            placeholder="Enter Description"
                            ref="description"
                        />
                    </FormGroup>
                    <FormGroup controlId="price">
                        <ControlLabel>Price</ControlLabel>
                        <FormControl
                            type="text"
                            placeholder="Enter Price"
                            ref="price"
                        />
                    </FormGroup>
                    <Button onClick={() => this.handleSubmit()} bsStyle="primary">Save</Button>
                </Panel>
                <Panel style={{marginTop:'25px'}}>
                    <ControlLabel>Select a book to delete</ControlLabel>
                    <FormControl ref="delete" componentClass="select" placeholder="select">
                        <option value="select">select</option>
                        {bookList}
                    </FormControl>
                    <Button onClick={()=>this.onDelete()} bsStyle="danger">DELETE BOOK</Button>
                </Panel>
            </Well>
        )
    }
}

function mapStateToProps(state) {
    return {
        books: state.books.books
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({postBook, deleteBook}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookForm);