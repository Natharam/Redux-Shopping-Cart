import { constants } from "./constants";

export function register(user) {
  return (dispatch) => {
    dispatch(request(user));

    user.register(user).then(
      (user) => {
        dispatch(success());
        history.push("/login");
        // dispatch(alertActions.success("Registration successful"));
        console.log(user);
      },
      (error) => {
        dispatch(failure(error.toString()));
        // dispatch(alertActions.error(error.toString()));
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
