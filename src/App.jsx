import React, { useEffect, useState } from "react";
import Main from "./pages/Main/Main/Main";
import "./App.scss";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Favorite from "./pages/Favorite/Favorite";
import Cart from "./pages/Cart/Cart";
import Footer from "./components/Footer/Footer";
import DescriptionAlerts from "./components/Alert/Alert";
import { useDispatch, useSelector } from "react-redux";
import getGoods from "./store/goods/actions";
import setFavorite from "./store/favorites/actions";

const App = () => {
  const dispatch = useDispatch();
  const products = useSelector(({ products }) => products);
  const favorites = useSelector(({ favorite }) => favorite);

  const [isInBasket, setIsInBasket] = useState([]);
  const [isAlert, setIsAlert] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("favoritesCount")) {
      dispatch(setFavorite(JSON.parse(localStorage.getItem("favoritesCount"))));
    }
    if (localStorage.getItem("basket")) {
      setIsInBasket(JSON.parse(localStorage.getItem("basket")));
    }
    dispatch(getGoods());
  }, [dispatch]);

  const getFavorites = (favoriteId) => {
    dispatch(
      setFavorite([
        ...favorites,
        products.find((item) => item.id === favoriteId),
      ])
    );
  };

  const addToBasket = (currentProduct) => {
    const currentProd = isInBasket.find((item) => item.id === currentProduct);

    if (currentProd) {
      setIsInBasket([
        ...isInBasket.filter((item) => item.id !== currentProd.id),
        products.find((item) => item.id === currentProduct),
      ]);

      setIsAlert(true);
      setTimeout(() => {
        setIsAlert(false);
      }, 3000);
    } else {
      setIsInBasket([
        ...isInBasket,
        products.find((item) => item.id === currentProduct),
      ]);
    }
  };

  const removeFromBasket = (removeId) => {
    setIsInBasket([...isInBasket.filter((item) => item.id !== removeId)]);
  };

  const removeFavorite = (favoriteId) => {
    dispatch(
      setFavorite([...favorites.filter((item) => item.id !== favoriteId)])
    );
  };

  useEffect(() => {
    localStorage.setItem("favoritesCount", JSON.stringify(favorites));

    localStorage.setItem("basket", JSON.stringify(isInBasket));
  }, [favorites, isInBasket]);

  return (
    <>
      <Header
        quantity={favorites.length}
        quantityInBasket={isInBasket.length}
      />

      <Routes>
        <Route
          path="/"
          element={
            <Main
              products={products}
              removeFavorite={removeFavorite}
              addToBasket={addToBasket}
              getFavorites={getFavorites}
              removeFromBasket={removeFromBasket}
              alert={isAlert && <DescriptionAlerts />}
            />
          }
        />
        <Route
          path="favorites"
          element={
            <Favorite
              products={favorites}
              removeFavorite={removeFavorite}
              addToBasket={addToBasket}
              getFavorites={getFavorites}
            />
          }
        />
        <Route
          path="basket"
          element={
            <Cart
              products={isInBasket}
              removeFavorite={removeFavorite}
              addToBasket={addToBasket}
              getFavorites={getFavorites}
              removeFromBasket={removeFromBasket}
            />
          }
        />
      </Routes>

      <Footer />
    </>
  );
};
export default App;
