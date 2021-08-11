import axios from "axios";
import { ThunkDispatch } from "redux-thunk";
import {ADD_ALL_PRODUCTS, GET_CATEGORIES} from "../actionTypes";
import { Product, fetchAllProductsAction } from "../allProducts/typings";
import { rootStore } from "../store";
import { getCategoriesAction, categories} from "./typings";

export const getCategories = ()=>{
    return (dispatch:ThunkDispatch<rootStore,categories,getCategoriesAction>):getCategoriesAction|void=>{
        axios.get('https://fakestoreapi.com/products/categories')
        .then(response=>{
            dispatch({
                type:GET_CATEGORIES,
                payload:response.data
            }); 
        }).catch(err=>console.error(err));
    }
}