import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import FavoritesStar from "../FavoritesStar/FavoritesStar";
import Modal from "../Modal/Modal";
import PropTypes from "prop-types";
import "./Card.scss";

const Card = ({
  id,
  name,
  img,
  color,
  price,
  getFavorite,
  addToBasket,
  removeFavorite,
  removeFromBasket,
  isInCart,
}) => {
  const [firstModal, setFirstModal] = useState(false);
  const [secondModal, setSecondModal] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    checkLocalStorage();
  }, []);

  const toLocaleStorage = (id) => {
    const currentFav = localStorage.getItem("favorites");
    let favorites = [];

    if (currentFav) {
      favorites = [...favorites, ...JSON.parse(currentFav)];
    }

    favorites.push(id);

    localStorage.setItem("favorites", JSON.stringify(favorites));
  };

  const updateLocalStorage = (id) => {
    const currentFav = localStorage.getItem("favorites");
    let favorites = [];

    if (currentFav) {
      favorites = JSON.parse(currentFav).filter((item) => {
        if (item !== id) {
          return item;
        }
      });
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));
  };

  const checkLocalStorage = () => {
    const currentFav = localStorage.getItem("favorites");

    if (currentFav) {
      const localFavorites = JSON.parse(currentFav);

      localFavorites.forEach((item) => {
        if (id === item) {
          setIsFavorite(!isFavorite);
        }
      });
    }
  };

  useEffect(() => {
    if (isFavorite) {
      toLocaleStorage(id);
    } else if (!isFavorite) {
      updateLocalStorage(id);
    }
  }, [isFavorite]);

  const handleFavoriteClick = () => {
    getFavorite(id);
    if (isFavorite) {
      updateLocalStorage(id);

      removeFavorite(id);
    }

    setIsFavorite(!isFavorite);
  };

  const handleModalConfirm = () => {
    addToBasket(id);
    closeButtonFirstModal();
  };

  const handleRemoveFromBasket = () => {
    removeFromBasket(id);
    closeButtonSecondModal();
  };

  const handleClickFirst = () => {
    setFirstModal(!firstModal);
  };
  const handleClickSecond = () => {
    setSecondModal(!secondModal);
  };

  const closeButtonFirstModal = () => {
    setFirstModal(false);
  };

  const closeButtonSecondModal = () => {
    setSecondModal(false);
  };

  return (
    <li className="product-card">
      {secondModal ? (
        <Modal
          className={"Modal Modal__second"}
          closeButton={closeButtonSecondModal}
          header={"Are you sure you wanna remove the phone from the cart?"}
          text={
            "If you submit your action, the phone will be removed from the cart"
          }
          actions={[
            <Button
              className="btn btn--normal"
              text="Ok"
              background={"gray"}
              onClick={handleRemoveFromBasket}
            />,
            <Button
              className="btn btn--normal"
              text="Cancel"
              background={"green"}
              onClick={closeButtonSecondModal}
            />,
          ]}
        />
      ) : (
        isInCart && (
          <Button
            className="remove-product"
            text="X"
            closeText=""
            background={"white"}
            onClick={handleClickSecond}
          />
        )
      )}
      <div className="product-card__flex-wrapper">
        <p className="product-card__title">{name}</p>
        <FavoritesStar
          id={id}
          isFavorite={isFavorite}
          onFavorite={handleFavoriteClick}
          className={"product-card__title-span"}
        />
      </div>

      <img className="product-card__image" alt="phone-samsung" src={img} />

      <div className="product-card__flex-wrapper">
        {firstModal ? (
          <Modal
            className={"Modal Modal__first"}
            closeButton={closeButtonFirstModal}
            header={"Are you sure you wanna add this phone to a cart?"}
            text={
              "If you add this phone to a cart, you will be able to find it on the top-right."
            }
            actions={[
              <Button
                className="btn btn--normal"
                onClick={handleModalConfirm}
                text="Ok"
                background={"green"}
              />,
              <Button
                className="btn btn--normal"
                text="Cancel"
                background={"gray"}
                onClick={closeButtonFirstModal}
              />,
            ]}
          />
        ) : isInCart ? (
          <Button
            className="btn buy-product"
            text="Order Now"
            closeText=""
            background={"gray"}
            onClick={(e) => e.preventDefault()}
          />
        ) : (
          <Button
            className="secondModal"
            text="Add to cart"
            closeText=""
            background={"black"}
            onClick={handleClickFirst}
          />
        )}

        <p className="product-card__color">
          Color: <span className="product-card__color-span">{color}</span>
          <span className="product-card__price">{price}</span>
        </p>
      </div>
    </li>
  );
};

Card.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
  price: PropTypes.string,
  img: PropTypes.string,
  id: PropTypes.number,
  getFavorite: PropTypes.func,
  removeFavorite: PropTypes.func,
  addToBasket: PropTypes.func,
};

export default Card;
