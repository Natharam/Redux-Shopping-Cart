import { constants } from '../actions/constants';

import {
  GET_ALL_PRODUCT,
  // GET_NUMBER_CART,
  ADD_CART,
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
  DELETE_CART,
} from "../actions";

const initProduct = {
  totalItemInCart: 0,
  CartItems: [],
  _products: [],
};

export default function todoProduct(state = initProduct, action) {
  // console.log(state.CartItems[action.payload]);
  switch (action.type) {
    case GET_ALL_PRODUCT:
      return {
        ...state,
        _products: action.payload,
      };
    // case GET_NUMBER_CART:
    //   return {
    //     ...state,
    //   };
    case ADD_CART:
      if (state.totalItemInCart === 0) {
        let cart = {
          id: action.payload.id,
          quantity: 1,
          title: action.payload.title,
          price: action.payload.price,
        };
        state.CartItems.push(cart);
      } else {
        let check = false;
        state.CartItems.map((item, key) => {
          if (item.id === action.payload.id) {
            state.CartItems[key].quantity++;
            check = true;
          }
        });
        if (!check) {
          let _cart = {
            id: action.payload.id,
            quantity: 1,
            title: action.payload.title,
            price: action.payload.price,
          };
          state.CartItems.push(_cart);
        }
      }
      return {
        ...state,
        totalItemInCart: state.totalItemInCart + 1,
      };
    case INCREASE_QUANTITY:
      state.totalItemInCart++;
      state.CartItems[action.payload].quantity++;

      return {
        ...state,
      };
    case DECREASE_QUANTITY:
      let quantity = state.CartItems[action.payload].quantity;
      if (quantity > 1) {
        state.totalItemInCart--;
        state.CartItems[action.payload].quantity--;
      }

      return {
        ...state,
      };
    case DELETE_CART:
      let quantity_ = state.CartItems[action.payload].quantity;
      return {
        ...state,
        totalItemInCart: state.totalItemInCart - quantity_,
        CartItems: state.CartItems.filter((item) => {
          return item.id !== state.CartItems[action.payload].id;
        }),
      };
    default:
      return state;
  }
}