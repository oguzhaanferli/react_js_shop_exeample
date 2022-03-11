import * as ActionTypes from "./actionTypes";
import axios from "axios";
import * as Configs from "../../configs/config";

export const getProductSuccess = (productList) => ({
    type: ActionTypes.SET_PRODUCTLIST,
    payload: productList
});

export const setCategory = (categoryList) => ({
    type: ActionTypes.SET_CATEGORYLIST,
    payload: categoryList
});

export const setProduct = (productList) => ({
    type: ActionTypes.SET_PRODUCT,
    payload: productList
});

export const getProducts = () => {
    return async (dispatch) => {
        try {
            axios.get(Configs.API_URL + 'products?limit=5').then(function (response) {
                dispatch(getProductSuccess(response.data));

                let filtercategorylist = [];
                let categoryList = response.data.reduce((group, product) => {
                    const { category } = product;
                    if (!filtercategorylist.includes(category)) { filtercategorylist.push(category); }
                    return filtercategorylist;
                }, []);
                dispatch(setCategory(categoryList));
            });
        } catch (err) {
            console.error(err);
        }
    };
}

export const filterProduct = (filterList) => {
    return async (dispatch) => {
        try {
            if (filterList.length > 0)
                axios.get(Configs.API_URL + 'products?limit=5').then(function (response) { dispatch(getProductSuccess(response.data.filter(x => filterList.includes(x.category)))); });
            else
                dispatch(getProducts())
        } catch (err) {
            console.error(err);
        }
    };
}
