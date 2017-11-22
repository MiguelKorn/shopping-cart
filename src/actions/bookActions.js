"use strict";

// GET ALL BOOKS
export const getBooks = () => {
    return {
        type: 'GET_BOOK'
    }
};

// POST A BOOK
export const postBook = book => {
    return {
        type: 'POST_BOOK',
        payload: book
    }
};

// DELETE A BOOK
export const deleteBook = id => {
    return {
        type: 'DELETE_BOOK',
        payload: id
    }
};

// UPDATE A BOOK
export const updateBook = book => {
    return {
        type: 'UPDATE_BOOK',
        payload: book
    }
};