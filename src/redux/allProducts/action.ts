import axios from "axios";
import { ThunkDispatch } from "redux-thunk";
import {ADD_ALL_PRODUCTS,ADD_ALL_PRODUCTS_FAILED,ADD_ALL_PRODUCTS_SUCCESS} from "../../redux/actionTypes";
import { rootStore } from "../store";
import { fetchAllProductsAction, Product } from "./typings";

export const addProducts =() =>{
    return {
        type: ADD_ALL_PRODUCTS
    }
}

export const addProductsFailed =() =>{
    return{
        type:ADD_ALL_PRODUCTS_FAILED
    }
}

export const fetchAllProducts = ()=>{
    return (dispatch:ThunkDispatch<rootStore,[Product],fetchAllProductsAction>):fetchAllProductsAction|void=>{
        dispatch(addProducts());        
        axios.get('https://fakestoreapi.com/products')
            .then(response=>{
                dispatch({
                    type:ADD_ALL_PRODUCTS_SUCCESS,
                    payload:response.data
                }); 
            }).catch(err=>{
                dispatch(addProductsFailed());
                console.error(err)
            });
                   
    }
}

