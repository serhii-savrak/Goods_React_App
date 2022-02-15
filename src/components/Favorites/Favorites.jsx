import React from "react";
import { PropTypes } from "prop-types";

const Favorites = ({ className, quantity }) => {
  return (
    <div className={className}>
      <img
        src="../../../images/like.png"
        alt="favorite-rating"
        width="65px"
        height="65px"
      />
      <span style={{ color: "white", fontSize: "25px" }}> {quantity}</span>
    </div>
  );
};

Favorites.propTypes = {
  className: PropTypes.string,
  quantity: PropTypes.number,
};

export default Favorites;
