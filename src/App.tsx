import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import styled from 'styled-components';
import { fetchAllProducts } from "./redux/allProducts/action";
import { rootStore } from "./redux/store";
import { ThunkDispatch } from "redux-thunk";
import { Product, fetchAllProductsAction } from "./redux/allProducts/typings";
import { getCategories } from "./redux/categories/action";
import Products from "./pages/Products";
import Cart from "./pages/Cart";

const StyleNav = styled.nav`
  background-color:#101522;
  height:80px;
  display:flex;
  position:sticky;
  top:0;
`


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
        <StyleNav></StyleNav>
      <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </nav>
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
