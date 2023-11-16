// reducers/cartReducer.js
import { ActionTypes } from '../constants/action-types';

const initialState = {
  cartItems: [],
};

const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_TO_CART:
      // Add the product to the cart
      return {
        ...state,
        cartItems: [...state.cartItems, payload],
      };

    case ActionTypes.REMOVE_FROM_CART:
      // Remove a product from the cart
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== payload.id),
      };

    case ActionTypes.UPDATE_CART_ITEM:
      // Update the quantity of an item in the cart
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === payload.id ? payload : item
        ),
      };

    default:
      return state;
  }
};

export default cartReducer;
