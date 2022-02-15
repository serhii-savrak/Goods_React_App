import React from "react";
import ProductList from "../../components/ProductList/ProductList";
import "./Favorite.scss";

const Favorite = ({ products, getFavorites, removeFavorite, addToBasket }) => {
  return (
    <>
      <div className="container favorite">
        {products.length > 0 ? (
          <h1 className="favorite__title favorite__title--full">
            There are {products.length} phones in your favorites
          </h1>
        ) : (
          <h1 className="favorite__title favorite__title--empty">
            Your favorite list is empty
          </h1>
        )}

        <div className="sub-container">
          <ProductList
            products={products}
            getFavorite={getFavorites}
            removeFavorite={removeFavorite}
            addToBasket={addToBasket}
          />
        </div>
      </div>
    </>
  );
};

export default Favorite;
