import { ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART } from '../actionTypes';
import {cartAction, cartState} from './typings'

const initialState : cartState = []


export const cartReducer = (state:cartState = initialState, action:cartAction) =>{
    switch (action.type) {
        case ADD_ITEM_TO_CART:
            return state.push(action.payload);
            break;
        case REMOVE_ITEM_FROM_CART:
            const index = state.indexOf(5);
            if (index > -1) {
                state.splice(index, 1);
            }    
            return state;
            break;
        default:
            return state;
    }
}