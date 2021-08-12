import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchAllProducts } from "./redux/allProducts/action";
import { rootStore } from "./redux/store";
import { ThunkDispatch } from "redux-thunk";
import { Product, fetchAllProductsAction } from "./redux/allProducts/typings";
import { getCategories } from "./redux/categories/action";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import NavBar from "./ui/organisms/NavBar";


function App() {
  const useAppDispatch = () =>
    useDispatch<ThunkDispatch<rootStore, [Product], fetchAllProductsAction>>();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchAllProducts());
    dispatch(getCategories());
  });

  return (
    <Router>
      <div className="App">
        <NavBar></NavBar>
        <Switch>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/">
            <Products />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
