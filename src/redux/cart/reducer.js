import * as ActionTypes from "./actionTypes";

const initialState = {
    CartProduct: [],
    Cart: null
}

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.SET_CARTS:
            return {
                ...state,
                CartProduct: action.payload.products,
                Cart: action.payload
            }
        case ActionTypes.CLEAR_CART:
            return {
                ...state,
                CartProduct: [],
                Cart: null
            }
        default:
            return state;

    }
}
