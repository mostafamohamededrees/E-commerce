import React, { useState } from "react";

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Common/Header/Header";

import Pages from "./Component/pages/Pages";
import Data from "./Component/flashDeals/Data";
import Cart from "./Cart/Cart";
import Sdata from "./Component/shops/shopData";
import Footer from "./Common/Footer/Footer";

function App() {
  const [CartItem, setCartItem] = useState([]);
  const { productItems } = Data;
  const { shopItems } = Sdata;

  // to add data in cart and doesn't add the card number in page more than once
  const addToCart = (product) => {
    const existingProduct = CartItem.find((item) => item.id === product.id);
    console.log(existingProduct);

    if (existingProduct) {
      setCartItem(
        CartItem.map((item) =>
          item.id === product.id
            ? { ...existingProduct, qty: existingProduct.qty + 1 }
            : item
        )
      );
    } else {
      setCartItem([...CartItem, { ...product, qty: 1 }]);
    }
  };
  console.log(CartItem);

  const decreaseQty = (product) => {
    const existingProduct = CartItem.find((item) => item.id === product.id);
    if (existingProduct.qty === 1) {
      setCartItem(CartItem.filter((item) => item.id !== product.id));
    } else {
      setCartItem(
        CartItem.map((item) =>
          item.id === product.id
            ? { ...existingProduct, qty: existingProduct.qty - 1 }
            : item
        )
      );
    }
  };
  return (
    <BrowserRouter>
      <Header CartItem={CartItem} />
      <Routes>
        {/* <Route path="/" element={<Header CartItem={CartItem} />} /> */}
        <Route
          path="/"
          element={
            <Pages
              addToCart={addToCart}
              proproductItems={productItems}
              shopItems={shopItems}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              decreaseQty={decreaseQty}
              CartItem={CartItem}
              addToCart={addToCart}
              proproductItems={productItems}
            />
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
