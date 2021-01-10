import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../actions/login";
import {Link} from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        username: "",
        password: "",
      },
      submitted: false,
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    const { user } = this.state;
    this.setState({
      user: {
        ...user,
        [name]: value,
      },
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({ submitted: true });
    const { user } = this.state;
    if (user.username && user.password) {
      this.props.register(user);
    }
  };

  render() {
    return (
      <div id="login">
        <h3 className="text-center text-white pt-5">Login Form</h3>
        <div className="container">
          <div
            id="login-row"
            className="row justify-content-center align-items-center"
          >
            <div id="login-column" className="col-md-6">
              <div id="login-box" className="col-md-12">
                <form
                  id="login-form"
                  className="form"
                  onSubmit={this.handleSubmit}
                >
                  <h3 className="text-center text-info">Login</h3>
                  <div className="form-group">
                    <label htmlFor="username" className="text-info">
                      Username:
                    </label>
                    <br />
                    <input
                      type="text"
                      name="username"
                      id="username"
                      className="form-control"
                      value={this.state.username}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password" className="text-info">
                      Password:
                    </label>
                    <br />
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="form-control"
                      value={this.state.password}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="remember-me" className="text-info">
                      <span>Remember me</span> 
                      <span>
                        <input
                          id="remember-me"
                          name="rememberMe"
                          type="checkbox"
                          checked={this.state.rememberMe}
                          onChange={this.handleChange}
                        />
                      </span>
                    </label>
                    <br />
                    <input
                      type="submit"
                      name="submit"
                      className="btn btn-info btn-md"
                      value="submit"
                    />
                  </div>
                  <div id="register-link" className="text-right">
                    <Link to="/" clLinkssName="text-info">
                      Register here
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.login,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    login: () => dispatch(login()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
