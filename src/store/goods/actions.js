import axios from "axios";

const getGoods = () => (dispatch, getState) => {
  const { products } = getState();

  if (products.length === 0) {
    axios
      .get("../../products.json")
      .then(({ data }) => dispatch({ type: "GET_GOODS", payload: data }));
  }
};

export default getGoods;
