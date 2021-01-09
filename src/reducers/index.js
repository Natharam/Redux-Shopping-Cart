import { combineReducers } from "redux";

import todoProduct from './productReducer';
import signupReducer from './signupReducer';
import loginReducer from './loginReducer';

const ShopApp = combineReducers({
  _todoProduct: todoProduct,
  signup: signupReducer,
  login: loginReducer
});

export default ShopApp;
