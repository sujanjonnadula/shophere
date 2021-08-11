import {
  ADD_ALL_PRODUCTS_FAILED,
  ADD_ALL_PRODUCTS_SUCCESS,
} from "../actionTypes";

export interface Product {
  category: String;
  description: String;
  id: number;
  image: String;
  price: number;
  title: String;
}

export interface allProductsState {
  isLoading: boolean;
  products: [Product];
  error: boolean;
}

export type fetchAllProductsAction =
  | {
      type: string;
    }
  | {
      type: string;
      payload: [Product];
    };
