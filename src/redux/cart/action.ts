import {ADD_ITEM_TO_CART,REMOVE_ITEM_FROM_CART} from '../actionTypes'

export const addItemToCart = (id:number)=>{
    return {
        type: ADD_ITEM_TO_CART,
        payload: id
    }
}

export const removeItemFromCart = (id:number)=>{
    return{
        type: REMOVE_ITEM_FROM_CART,
        payload : id
    }
}