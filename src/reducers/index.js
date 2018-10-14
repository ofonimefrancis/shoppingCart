import {ADD_ITEM, UPDATE_CART} from '../actions/index'

let initialState = {
    cartItems: []
}

let cartReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_ITEM:
            let newState = {...state, ...state.cartItems.push(action.cartItems)}
            let cartItem = [...state.cartItems]
            localStorage.setItem("cartItems", JSON.stringify(cartItem))
            return newState
        case UPDATE_CART:
            return {...state, ...state.cartItems.push(action.cartItems)}
        case 'REMOVE_ITEM':
            return null;
        default:
            return state;
    }
}

export default cartReducer