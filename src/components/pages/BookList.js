import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getBooks} from '../../actions/bookActions';
import {Grid, Col, Row, Button} from 'react-bootstrap';

import BookItem from './BookItem';
import BookForm from './BookForm';
import Cart from './Cart';

class BookList extends React.Component {
    componentDidMount() {
        // Dispatch an action
        this.props.getBooks();
    }

    render() {
        const bookList = this.props.books.map(bookArray => {
            return (
                <Col xs={12} sm={6} md={4} key={bookArray._id}>
                    <BookItem
                        _id={bookArray._id}
                        title={bookArray.title}
                        description={bookArray.description}
                        price={bookArray.price}/>
                </Col>
            )
        });
        return (
            <Grid>
                <Row>
                    <Cart />
                </Row>
                <Row>
                    <Col xs={12} sm={6}>
                        <BookForm/>
                    </Col>
                    {bookList}
                </Row>
            </Grid>
        )
    }
}

function mapStateToProps(state) {
    return {
        books: state.books.books
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({getBooks}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);