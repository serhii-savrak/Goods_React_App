import React from "react";
import PropTypes from "prop-types";
import Card from "../Card/Card";

const ProductList = ({
  products,
  getFavorite,
  removeFavorite,
  addToBasket,
  removeFromBasket,
  isInCart,
}) => {
  return products.map(({ id, name, price, color, imageUrl }) => (
    <Card
      key={id}
      name={name}
      price={price}
      color={color}
      img={imageUrl}
      id={id}
      getFavorite={getFavorite}
      removeFavorite={removeFavorite}
      addToBasket={addToBasket}
      removeFromBasket={removeFromBasket}
      isInCart={isInCart}
    />
  ));
};

ProductList.propTypes = {
  products: PropTypes.array,
  getFavorite: PropTypes.func,
  removeFavorite: PropTypes.func,
  addToBasket: PropTypes.func,
};

export default ProductList;
