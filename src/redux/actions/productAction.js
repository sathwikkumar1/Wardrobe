import { ActionTypes } from "../constants/action-types"
import fakeStoreApi from "../../apis/fakeStoreApi"

export const fetchProducts =  () =>{
    return async function (dispatch){
        const response = await fakeStoreApi.get("/products");
        dispatch({type:ActionTypes.FETCH_PRODUCTS , payload :response.data})
    }
}

export const fetchProduct =  (id) =>{
    return async function (dispatch){
        const response = await fakeStoreApi.get(`/products/${id}`);
        dispatch({type:ActionTypes.SELECTED_PRODUCTS, payload :response.data})
    }
}

export const fetchCategories = () => {
    return async function(dispatch){
        const response = await fakeStoreApi.get('products/categories');
        dispatch({type:ActionTypes.FETCH_CATEGORIES, payload:response.data})
    }
}

export const setProducts = (products) =>{
    return{
        type: ActionTypes.SET_PRODUCTS,
        payload : products 
    }
}

export const selectedProducts = (product) =>{
    return{
        type: ActionTypes.SELECTED_PRODUCTS,
        payload : product 
    }
}
  
export const removeSelectedProducts = () =>{
    return{
        type: ActionTypes.REMOVE_SELECTED_PRODUCTS,
    }
}


export const filterCategories = (categories) => {
    return{
        type:ActionTypes.FILTER_CATEGORY,
        payload:categories
    }
}


export const setSearchTerm  = (searchTerm) => {
    return{
        type:ActionTypes.SEARCH_TERM,
        payload: searchTerm
    }
}

export const setSortBy = (sortItem) => {

    return {
        type: ActionTypes.SORT_BY,  
        payload: sortItem
    }
}