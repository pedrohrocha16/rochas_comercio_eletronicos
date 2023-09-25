import CartActionTypes from "./action-type"
const initialState = {
   products: [],
}

const cartReducer = (state = initialState, action: any) => {
   switch (action.type) {
      case CartActionTypes.ADD_PRODUCT:
         return { ...state, products: [...state.products, action.payLoad] }
      default:
         return state
   }
}

export default cartReducer