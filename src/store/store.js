import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import reducerFavorite from "./favorites/reducerFavorites";
import { reducerGoods } from "./goods/reducerGoods";

const rootReducer = combineReducers({
  products: reducerGoods,
  favorite: reducerFavorite,
});

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk), devTools)
);
