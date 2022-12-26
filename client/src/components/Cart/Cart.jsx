import React, { useState } from "react";
import { Link } from "react-router-dom";
//JSX
import NavBar from "../NavBar/NavBar";
import CardCart from "./CardCart";
import Payment from "../Paypal/Stripe/Payment";
//BS

const Cart = () => {
  let productsCart = localStorage.getItem("carrito");

  const [products, setProducts] = useState(
    productsCart?.length > 1 ? JSON.parse(productsCart) : false
  );
  // {productsCart.length>1? map:}
  //intera el objeto del local storage para renderizar todas las cards

  //precio total
  let priceTotal = 0;

  products.length >= 1
    ? products.map((el) => {
        priceTotal += el.totalPrice;
      })
    : (priceTotal += 0);

  let InfoToSend = {
    products: JSON.parse(localStorage.getItem("carrito")),
    finalAmount: priceTotal,
  };

  const handleDelete = (productId) => {
    let filtered = products.filter((el) => el.id + el.size !== productId);
    console.log(
      products.filter((el) => el.id + el.size !== productId),
      productId
    );
    localStorage.setItem("carrito", JSON.stringify(filtered));
    setProducts(filtered);
  };

  console.log("products in cart", products);

  //fin precio total
  console.log("Cart priceTotal", priceTotal);
  console.log("Cart products", products);

  return (
    <>
      <NavBar />
      <div className="d-flex p-5 justify-content-center align-items-center flex-column">
        {products.length >= 1 ? (
          products.map((el, i) => {
            return (
              <CardCart
                id={el.id}
                name={el.name}
                total={el.totalPrice}
                count={el.count}
                img={el.img}
                price={el.price}
                size={el.size}
                key={i}
                handleDelete={handleDelete}
              />
            );
          })
        ) : (
          <>You have no products in your cart</>
        )}
        <h2>Total: ${priceTotal}</h2>
        <Payment
          finalAmount={InfoToSend.finalAmount}
          products={InfoToSend.products}
        />
      </div>
    </>
  );
};

export default Cart;
