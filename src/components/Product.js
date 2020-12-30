import React, { Component } from "react";
import { fetchProducts, AddCart } from "../actions";
import { connect } from "react-redux";
// import '../styles.css';

export class Product extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    const { _products } = this.props._products;
    if (_products.length > 0) {
      return (
        <div className="row my-1">
          <div className="col-md-12">
            <div className="row m-2">
              {_products.map((item, index) => (
                <div key={index} className="col-s-6 col-xs-12 m-2">
                  <h5
                    className="my-3"
                    style={{ width: "230px", wordBreak: "break-word" }}
                  >
                    {item.title}
                  </h5>
                  <img
                    src={item.filename}
                    className="img-responsive my-2"
                    alt="filename"
                    style={{ width: "230px", height: "160px" }}
                  />
                  <div
                    className="my-2 text-left"
                    style={{ width: "230px", wordBreak: "break-word" }}
                  >
                    <strong>Description :</strong> {item.description}
                  </div>
                  <div className="my-2">
                    <strong>Unit Price :</strong> {item.price}
                  </div>
                  <div className="my-2">
                    <strong>Rating :</strong> {item.rating}
                  </div>
                  <div
                    className="badge badge-primary p-2 my-2"
                    style={{ cursor: "pointer" }}
                    onClick={() => this.props.AddCart(item)}
                  >
                    Add to Cart
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="row mx-1">
        <h2>Loading...!</h2>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    _products: state._todoProduct,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    fetchProducts: () => dispatch(fetchProducts()),
    AddCart: (item) => dispatch(AddCart(item)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);
