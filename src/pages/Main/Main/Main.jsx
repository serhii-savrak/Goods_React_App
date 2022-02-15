import React from "react";
import ProductList from "../../../components/ProductList/ProductList";

const Main = ({
  products,
  removeFavorite,
  addToBasket,
  getFavorites,
  removeFromBasket,
  alert,
}) => {
  return (
    <>
      <div className="container main-section">
        <div className="sub-container">
          {alert}
          <ProductList
            products={products}
            getFavorite={getFavorites}
            removeFavorite={removeFavorite}
            addToBasket={addToBasket}
            removeFromBasket={removeFromBasket}
            isInCart={false}
          />
        </div>
      </div>
    </>
  );
};

export default Main;
