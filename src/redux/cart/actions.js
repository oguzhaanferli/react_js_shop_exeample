import * as ActionTypes from "./actionTypes";
import axios from "axios";
import * as Configs from "../../configs/config";

export const getCartSuccess = (productList) => ({
    type: ActionTypes.SET_CARTS,
    payload: productList
});

export const clearCart = () => ({
    type: ActionTypes.CLEAR_CART,
});

export const getCart = () => {
    return async (dispatch) => {
        try {
            axios.get(Configs.API_URL + 'carts/1').then(function (response) {
                dispatch(getCartSuccess(response.data));
            });
        } catch (err) {
            console.error(err);
        }
    };
}

export const deleteCart = (id) => {
    return async (dispatch) => {
        try {
            axios.delete(Configs.API_URL + `carts/${id}`).then(function (response) {
                dispatch(clearCart());
            });
        } catch (err) {
            console.error(err);
        }
    };
}
