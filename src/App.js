import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Login from "./components/Login";
import Product from "./components/Product";
import SignUp from "./components/SignUp";
// import { PrivateRoute } from "./components/PrivateRoute";

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      email: "",
      name: "",
      imageUrl: "",
      token: "",
    };
  }

  responseGoogle = (response) => {
    let propfile = response.profileObj;
    console.log(propfile);
    this.setState({
      email: propfile.email,
      name: propfile.name,
      imageUrl: propfile.imageUrl,
      token: response.tokenObj.access_token,
    });
  };

  logout = () => {
    this.setState({
      email: "",
      name: "",
      imageUrl: "",
      token: "",
    });
  };

  render() {
    return (
      <Router>
        <div className="container col-12 px-5">
          <Header
            responseGoogle={this.responseGoogle}
            logout={this.logout}
            token={this.state.token}
          />
          <Switch>
            <Route
              path="/"
              exact
              render={(props) => (
                <Product {...props} token={this.state.token} />
              )}
            />
            <Route path="/carts" exact component={Cart} />
            <Route path="/login" exact component={Login} />
            <Route path="/signup" exact component={SignUp} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
