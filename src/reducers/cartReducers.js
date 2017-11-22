"use strict";

//CART REDUCERS
export const cartReducers = (state = {cart: []}, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                cart: action.payload,
                totalAmount: countTotal(action.payload).total,
                totalQuantity: countTotal(action.payload).quantity
            };
            break;
        case "UPDATE_CART":
            const currentBookToUpdate = [...state.cart];
            const indexToUpdate = currentBookToUpdate.findIndex(book => book._id === action._id);
            const newBookToUpdate = {
                ...currentBookToUpdate[indexToUpdate],
                quantity: currentBookToUpdate[indexToUpdate].quantity + action.unit
            };
            let updatedCart = [...currentBookToUpdate.slice(0, indexToUpdate), newBookToUpdate, ...currentBookToUpdate.slice(indexToUpdate + 1)];
            return {
                ...state,
                cart: updatedCart,
                totalAmount: countTotal(updatedCart).total,
                totalQuantity: countTotal(updatedCart).quantity
            };
            break;
        case "DELETE_CART_ITEM":
            return {
                ...state,
                cart: action.payload,
                totalAmount: countTotal(action.payload).total,
                totalQuantity: countTotal(action.payload).quantity
            };
            break;
    }
    return state;
};

// CALCULATE TOTAL
export const countTotal = (payload) => {
    const totalAmount = payload.map(cart => {
        return cart.price * cart.quantity;
    }).reduce((a, b) => {
        return a + b;
    }, 0);

    const totalQuantity = payload.map(q => {
        return q.quantity;
    }).reduce((a, b) => {
        return a + b;
    }, 0);

    return {total: totalAmount.toFixed(2), quantity: totalQuantity}
};