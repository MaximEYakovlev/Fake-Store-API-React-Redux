import { combineReducers } from "redux";
import { productReducer } from "./productReducer";
import { selectedProductReducer } from "./selectedProductReducer";

export const rootReducer = combineReducers({
  allProducts: productReducer,
  product: selectedProductReducer,
});
