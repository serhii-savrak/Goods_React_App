const setFavorite = (favorites) => {
  return {
    type: "SET_FAVORITE",
    payload: favorites,
  };
};

export default setFavorite;
