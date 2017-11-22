"use strict";
import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Menu from './components/Menu';
import Footer from './components/Footer';

import BookList from './components/pages/BookList';
import Cart from './components/pages/Cart';
import BooksForm from './components/pages/BookForm';

import {connect} from 'react-redux';

class Main extends React.Component {
    render() {
        return (
            <div>
                <Menu cartItemsNumber={this.props.totalQuantity}/>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={BookList}/>
                        <Route path="/admin" component={BooksForm}/>
                        <Route path="/cart" component={Cart}/>
                    </Switch>
                </BrowserRouter>
                <Footer/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        totalQuantity: state.cart.totalQuantity
    }
}

export default connect(mapStateToProps)(Main);