// actions/cartActions.js
import { ActionTypes } from '../constants/action-types';

export const addToCart = (product) => {
  return (dispatch, getState) => {
    const { cart } = getState();
    const existingItem = cart.cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      dispatch(updateCartItem({ ...existingItem, quantity: existingItem.quantity + 1 }));
    } else {
      dispatch({
        type: ActionTypes.ADD_TO_CART,
        payload: { ...product, quantity: 1 },
      });
    } 
  }; 
};

export const removeFromCart = (product) => {
  return {
    type: ActionTypes.REMOVE_FROM_CART,
    payload: product,
  };
};

export const updateCartItem = (updatedProduct) => {
  return {
    type: ActionTypes.UPDATE_CART_ITEM,
    payload: updatedProduct,
  };
};
