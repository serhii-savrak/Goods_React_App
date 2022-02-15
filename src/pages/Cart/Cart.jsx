import React from "react";
import ProductList from "../../components/ProductList/ProductList";
import "./Cart.scss";

const Cart = ({
  products,
  getFavorites,
  removeFavorite,
  addToBasket,
  removeFromBasket,
}) => {
  const isInCart = true;

  return (
    <>
      <div className="container cart">
        {products.length > 0 ? (
          <h1 className="cart__title cart__title--full">
            You added {products.length} phones to the cart
          </h1>
        ) : (
          <h1 className="cart__title cart__title--empty">The cart is empty</h1>
        )}
        <div className="sub-container">
          <ProductList
            products={products}
            getFavorite={getFavorites}
            removeFavorite={removeFavorite}
            addToBasket={addToBasket}
            removeFromBasket={removeFromBasket}
            isInCart={isInCart}
          />
        </div>
      </div>
    </>
  );
};

export default Cart;
