import { GET_CATEGORIES } from "../actionTypes";
import { categories, getCategoriesAction } from "./typings";

const initialState:categories = [""];

export const getCategoriesReducer = (state:categories=initialState,action:getCategoriesAction)=>{
    if(action.type===GET_CATEGORIES){
        return action.payload;
    }else{
        return state;
    }
}