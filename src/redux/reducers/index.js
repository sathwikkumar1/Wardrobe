// reducers/index.js
import { combineReducers } from 'redux';
import { productReducer, selectedProductReducer} from './productReducer';
import cartReducer from './cartreducer';
import { categoryReducer } from './CategoryReducer';

const reducers = combineReducers({
  allProducts: productReducer,
  product: selectedProductReducer,
  cart: cartReducer, // Include the cart reducer here
  categories:categoryReducer
});

export default reducers;
