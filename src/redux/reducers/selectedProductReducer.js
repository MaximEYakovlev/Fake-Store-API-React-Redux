import { actionTypes } from "../constants/action-types";

export const selectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case actionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    default:
      return state;
  }
};
