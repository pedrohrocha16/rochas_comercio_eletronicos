import CartActionTypes from "./action-type";

export const addProductToCart = (payLoad) => ({
  type: CartActionTypes.ADD_PRODUCT,
  payLoad,
});
