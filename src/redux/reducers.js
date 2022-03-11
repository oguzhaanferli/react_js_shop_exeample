import { combineReducers } from 'redux';
import { productReducer } from "./product/reducer";
import { cartReducer } from "./cart/reducer";

const rootReducer = combineReducers({
    productReducer: productReducer,
    cartReducer: cartReducer
});

export default rootReducer;