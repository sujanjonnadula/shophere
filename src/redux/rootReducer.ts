import { combineReducers } from "redux";
import { addAllProductsReducer } from "./allProducts/reducer";
import { getCategoriesReducer } from "./categories/reducer";
import { cartReducer } from "./cart/reducer";

export const rootReducer = combineReducers({
    allProducts : addAllProductsReducer,
    categories:getCategoriesReducer,
    cart: cartReducer
});