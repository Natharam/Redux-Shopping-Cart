import { constants } from "./constants";
import { userService } from "../api/user";

export function login(username, password, from) {
  return (dispatch) => {
    dispatch(request({ username }));

    userService.login(username, password).then(
      (user) => {
        dispatch(success(user));
        // history.push(from);
      },
      (error) => {
        dispatch(failure(error.toString()));
        // dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request(user) {
    return { type: constants.LOGIN_REQUEST, user };
  }
  function success(user) {
    return { type: constants.LOGIN_SUCCESS, user };
  }
  function failure(error) {
    return { type: constants.LOGIN_FAILURE, error };
  }
}
