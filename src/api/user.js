import axios from "axios";

export const userService = {
  login,
  logout,
  register,
};

function login(username, password) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  };

  axios.post("https://reqres.in/api/users", requestOptions).then((user) => {
    return user;
  });
}

function logout(user) {
  axios.post("https://reqres.in/api/users", user).then((user) => {
    return user;
  });
}

function register(user) {
  axios.post("https://reqres.in/api/users", user).then((user) => {
    return user;
  });
}
