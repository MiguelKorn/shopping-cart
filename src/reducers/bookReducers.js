"use strict";

// BOOKS REDUCERS
export const bookReducers = (state = {
    books: [
        {
            _id: 1,
            title: 'the book title',
            description: 'the book description',
            price: 33.33
        },
        {
            _id: 2,
            title: 'the book title2',
            description: 'the book description2',
            price: 66.66
        }]
}, action) => {
    switch (action.type) {
        case "GET_BOOK":
            return {...state, books: [...state.books]};
            break;
        case "POST_BOOK":
            // let books = state.books.concat(action.payload);
            // return {books};
            return {books: [...state.books, ...action.payload]};
            break;
        case 'DELETE_BOOK':
            // create copy
            const currentBookToDelete = [...state.books];
            // determine at which index of books array is going to be deleted
            const indexToDelete = currentBookToDelete.findIndex(book => book._id.toString() === action.payload);
            // use slice to remove the book
            return {books: [...currentBookToDelete.slice(0, indexToDelete), ...currentBookToDelete.slice(indexToDelete + 1)]};
            break;
        case 'UPDATE_BOOK':
            // create copy
            const currentBookToUpdate = [...state.books];
            // determine at which index of books array is going to be deleted
            const indexToUpdate = currentBookToUpdate.findIndex(book => book._id === action.payload._id);
            // create new book object with the new values and the same array index of the item to replace. Using spread can use .concat() too.
            const newBookToUpdate = {
                ...currentBookToUpdate[indexToUpdate],
                title: action.payload.title
            };
            // show new updated book
            console.log('newBookToUpdate:', newBookToUpdate);
            // use slice to remove the old book and replace it with the updated one
            return {books: [...currentBookToUpdate.slice(0, indexToUpdate), newBookToUpdate, ...currentBookToUpdate.slice(indexToUpdate + 1)]};
            break;
    }
    return state;
};