export const ADD_ITEM ='ADD_ITEM'
export const UPDATE_CART = 'UPDATE_CART'



export const addItemToCart = (cartItems) => ({
    type: ADD_ITEM,
    cartItems
})

export const updateCartState = (cartItems) => ({
    type:UPDATE_CART,
    cartItems
})