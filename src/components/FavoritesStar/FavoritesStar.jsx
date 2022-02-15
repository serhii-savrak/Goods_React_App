import React from "react";
import { PropTypes } from "prop-types";

const FavoritesStar = ({ isFavorite, className, onFavorite }) => {
  return isFavorite ? (
    <span
      className={className}
      onClick={onFavorite}
      style={{ color: "rgb(42, 165, 114)" }}
    >
      {" "}
      &#9733;
    </span>
  ) : (
    <span
      className={className}
      onClick={onFavorite}
      style={{ color: "rgba(0, 0, 0, 0.4)" }}
    >
      &#9733;
    </span>
  );
};

FavoritesStar.propTypes = {
  isFavourite: PropTypes.bool,
  className: PropTypes.string,
  onFavourite: PropTypes.func,
};

export default FavoritesStar;
