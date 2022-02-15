import React from "react";
import { PropTypes } from "prop-types";

export const Basket = (props) => {
  const { className, quantityInBasket } = props;

  return (
    <div className={className}>
      <img
        src="../../../images/shopping_cart.png"
        alt="shopping-cart"
        width="100px"
        height="100px"
      />
      <span style={{ color: "white", fontSize: "25px", fontWeight: "bold" }}>
        {quantityInBasket}
      </span>
    </div>
  );
};

Basket.propTypes = {
  className: PropTypes.string,
  quantityInBasket: PropTypes.number,
};
