import React, { Component } from "react";
import { fetchProducts, AddCart } from "../actions";
import { connect } from "react-redux";

export class Product extends Component {
  constructor() {
    super();
    this.state = {
      suggestions: [],
      text: "",
    };
  }

  onTextChange = (e) => {
    const { _products } = this.props._products;
    const value = e.target.value;
    let suggestions = [];
    if (value.length > 0 && _products.length > 0) {
      const regex = new RegExp(`^${value}`, "i");
      suggestions = _products.sort().filter((v) => regex.test(v.title));
    }

    this.setState(() => ({
      suggestions,
      text: value,
    }));
  };

  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    const { text, suggestions } = this.state;
    const { _products } = this.props._products;
    let logged = this.props.token ? true : false;

    console.log(suggestions, _products);

    if (_products.length > 0) {
      return (
        <div className="row my-1">
          <div className="col-md-12">
            <div className="row m-2">
              <label htmlFor="query" className="text-primary my-auto">
                <strong>Search Products :</strong>
              </label>
              <input
                className="mx-3"
                id="query"
                type="text"
                onChange={this.onTextChange}
                value={text}
              />
            </div>
            <div className="row m-2">
              {suggestions.map((item, index) => (
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
                  {logged ? (
                    <div
                      className="badge badge-primary p-2 my-2"
                      style={{ cursor: "pointer" }}
                      onClick={() => this.props.AddCart(item)}
                    >
                      Add to Cart
                    </div>
                  ) : (
                    <div className="badge badge-primary p-2 my-2">
                      Login to add item in Cart
                    </div>
                  )}
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
