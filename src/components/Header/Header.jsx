import React from "react";
import Favorites from "../Favorites/Favorites";
import { Basket } from "../Basket/Basket";
import "./Header.scss";
import { Link } from "react-router-dom";

const Header = ({ quantityInBasket, quantity }) => {
  return (
    <header className="page-header">
      <nav className="page-header__navigation">
        <Link to="/">
          <div className="page-header__logo-container logo">
            <h1 className="logo__title">MobStore</h1>
            <img
              src="../../../images/logo.png"
              className="logo__image"
              alt="logo-img"
              width="100px"
              height="100px"
            />
          </div>
        </Link>

        <div className="page-header__purchase-navigation purchase-navigation">
          <Link to="basket">
            <Basket
              quantityInBasket={quantityInBasket}
              className="purchase-navigation__basket"
            />
          </Link>

          <Link to="/favorites">
            <Favorites
              quantity={quantity}
              className="purchase-navigation__favourites"
            />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
