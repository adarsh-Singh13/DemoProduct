import { combineReducers } from '@reduxjs/toolkit';
import productReducer from './reducers/productReducer/productReducer';

const rootReducer = combineReducers({
  product: productReducer,
});

export default rootReducer;
