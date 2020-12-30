import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

export class Header extends Component {
  render() {
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
              <li className="nav-item">
                <Link to="/carts" className="nav-link">
                  Carts : {this.props.totalItemInCart}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    totalItemInCart: state._todoProduct.totalItemInCart,
  };
};

export default connect(mapStateToProps, null)(Header);
