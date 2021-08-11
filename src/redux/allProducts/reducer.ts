import { ADD_ALL_PRODUCTS, ADD_ALL_PRODUCTS_FAILED, ADD_ALL_PRODUCTS_SUCCESS } from "../actionTypes"
import { allProductsState, fetchAllProductsAction, Product } from "./typings"

const initialState:allProductsState ={
    isLoading: false,
    products: [{
        category: "",
        description: "",
        id: 0,
        image: "",
        price: 0,
        title: "",
    }],
    error : false
};

export const addAllProductsReducer = (state:allProductsState=initialState,action:fetchAllProductsAction)=>{
    
    switch (action.type) {
        case ADD_ALL_PRODUCTS:
            return {
                ...state,
                isLoading: true
            }
            break;
        case ADD_ALL_PRODUCTS_SUCCESS:
            if("payload" in action){
                return {
                    ...state,
                    isLoading:false,
                    products:action.payload
                }
            }
            break;
        case ADD_ALL_PRODUCTS_FAILED:
            return {
                ...state,
                isLoading:false,
                error:true
            }
        default:
            return state;
    }
    
}