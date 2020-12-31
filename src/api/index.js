import axios from "axios";

//mock API
let API_URL = "https://api4286.s3.ap-south-1.amazonaws.com/products.json";
export default async function callApi(method = "GET", body) {
  try {
    return await axios({
      method,
      url: API_URL,
      data: body,
    });
  } catch (err) {
    console.log(err);
  }
}