import CartActionTypes from "./action-type";

export const addProductToCart = (payLoad: any) => ({
  type: CartActionTypes.ADD_PRODUCT,
  payLoad,
});
