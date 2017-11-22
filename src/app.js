"use strict";
// React
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route, Switch, browserHistory} from 'react-router-dom';

import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';

// IMPORT COMBINED REDUCERS
import reducers from './reducers/index';

// IMPORT ACTIONS
import {addToCart} from './actions/cartActions';
import {postBook, deleteBook, updateBook} from './actions/bookActions';

// STEP 1 create the store
const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);

import Main from './Main';

const Routes = (
    <Provider store={store}>
        <Main/>
    </Provider>
);

ReactDOM.render(
    Routes,
    document.getElementById('app'));

// store.dispatch(postBook([
//     {
//         id: 1,
//         title: 'the book title',
//         description: 'the book description',
//         price: 33.33
//     },
//     {
//         id: 2,
//         title: 'the book title2',
//         description: 'the book description2',
//         price: 66.66
//     }
// ]));

// // DELETE A BOOK
// store.dispatch(deleteBook({
//     id: 1
// }));
//
// // UPDATE A BOOK
// store.dispatch(updateBook({
//     id: 2,
//     title: 'Updated book 2'
// }));
//
// // CART ACTIONS
//
// // ADD to cart
// store.dispatch(addToCart([{id: 1}]));
