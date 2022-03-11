import * as ActionTypes from "./actionTypes";

const initialState = {
    Products: [],
    Categories: [],
    ProductItem: null,
}

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.SET_PRODUCTLIST:
            return {
                ...state,
                Products: action.payload
            }
            case ActionTypes.SET_CATEGORYLIST:
                return {
                    ...state,
                    Categories: action.payload
                }
        case ActionTypes.SET_PRODUCT:
            return {
                ...state,
                ProductItem: action.payload
            }
        default:
            return state;

    }
}
