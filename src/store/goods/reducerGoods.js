export const reducerGoods = (state = [], action) => {
  switch (action.type) {
    case "GET_GOODS":
      return action.payload;

    default:
      return state;
  }
};
