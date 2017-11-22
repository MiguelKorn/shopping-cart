"use strict";
import {combineReducers} from 'redux';

// IMPRORT REDUCERS TO BE COMBINED
import {bookReducers} from './bookReducers';
import {cartReducers} from './cartReducers';

// COMBINE THE REDUCERS
export default combineReducers({
    books: bookReducers,
    cart: cartReducers
});