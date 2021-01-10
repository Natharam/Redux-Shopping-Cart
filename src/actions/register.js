import { constants } from "./constants";
import { userService } from "../api/user";

export function register(user) {
  return (dispatch) => {
    dispatch(request(user));

    userService.register(user).then(
      (user) => {
        dispatch(success());
        console.log(user);
      },
      (error) => {
        dispatch(failure(error.toString()));
      }
    );
  };

  function request(user) {
    return { type: constants.REGISTER_REQUEST, user };
  }
  function success(user) {
    return { type: constants.REGISTER_SUCCESS, user };
  }
  function failure(error) {
    return { type: constants.REGISTER_FAILURE, error };
  }
}
