import callApi from "../api";

/*making API reaquest*/
export const fetchProducts = () => {
  return async (dispatch) => {
    const res = await callApi("GET", null);
    dispatch(GetAllProduct(res.data));
  };
};

// let API_URL = "https://api4286.s3.ap-south-1.amazonaws.com/products.json";
// export const fetchProducts = () => {
//   return async (dispatch) => {
//     const res = await axios(API_URL);
//     dispatch(GetAllProduct(res.data));
//   };
// };

/*GET_ALL_PRODUCT*/
export function GetAllProduct(payload) {
  return {
    type: "GET_ALL_PRODUCT",
    payload,
  };
}

/*GET NUMBER CART*/
// export function GetNumberCart() {
//   return {
//     type: "GET_NUMBER_CART",
//   };
// }

/*UPDATE CART*/
// export function UpdateCart(payload) {
//   return {
//     type: "UPDATE_CART",
//     payload,
//   };
// }

/*ADD TO CART*/
export function AddCart(payload) {
  return {
    type: "ADD_CART",
    payload,
  };
}

/*DELETE CART*/
export function DeleteCart(payload) {
  return {
    type: "DELETE_CART",
    payload,
  };
}

/*INCREASE QUANTITY*/
export function IncreaseQuantity(payload) {
  return {
    type: "INCREASE_QUANTITY",
    payload,
  };
}

/*DECREASE QUANTITY*/
export function DecreaseQuantity(payload) {
  return {
    type: "DECREASE_QUANTITY",
    payload,
  };
}
