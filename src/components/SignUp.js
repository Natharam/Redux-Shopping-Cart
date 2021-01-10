import React, { Component } from "react";
import { connect } from "react-redux";
import { register } from "../actions/register";
import { Link } from "react-router-dom";

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        username: "",
        password: "",
        confirmPassword: "",
        rememberMe: false,
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
    if (user.username && user.password && user.confirmPassword) {
      this.props.register(user);
    }
  };

  render() {
    return (
      <div id="login">
        <h3 className="text-center text-white pt-5">Sign-Up Form</h3>
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
                  <h3 className="text-center text-info">Sign-Up</h3>
                  <div className="form-group">
                    <label htmlFor="username" className="text-info">
                      Username/Name:
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
                    <label htmlFor="email" className="text-info">
                      Email:
                    </label>
                    <br />
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="form-control"
                      value={this.state.email}
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
                    <label htmlFor="password" className="text-info">
                      Confirm Password:
                    </label>
                    <br />
                    <input
                      type="password"
                      name="confirmPassword"
                      id="confirm-password"
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
                      Login here
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
    register: state.register,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    register: (user) => dispatch(register(user)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
