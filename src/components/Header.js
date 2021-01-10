import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { GoogleLogin, GoogleLogout } from "react-google-login";

export const Header = ({ token, totalItemInCart, responseGoogle, logout }) => {
  let cart = token ? totalItemInCart : 0;
  let clientId = process.env.REACT_APP_CLIENT_ID;
  return (
    <div className="row">
      <div className="col-md-12">
        <nav className="navbar  navbar-dark bg-dark ">
          <ul className="nav">
            <li className="nav-item">
              <Link to="/" className="nav-link active">
                Products
              </Link>
            </li>
            {token ? (
              <li className="nav-item">
                <Link to="/carts" className="nav-link">
                  Carts: {cart}
                </Link>
              </li>
            ) : null}
            <li className="nav-item position-relative">
              {token ? (
                <GoogleLogout
                  clientId={clientId}
                  buttonText="Logout"
                  onLogoutSuccess={logout}
                  className="float-right"
                  id="customButton"
                />
              ) : (
                <GoogleLogin
                  clientId={clientId}
                  buttonText="Login"
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                  cookiePolicy={"single_host_origin"}
                  isSignedIn={true}
                  className="float-right"
                />
              )}
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    totalItemInCart: state._todoProduct.totalItemInCart,
  };
};

export default connect(mapStateToProps, null)(Header);
