import React from "react";
import { connect } from "react-redux";
import { IncreaseQuantity, DecreaseQuantity, DeleteCart } from "../actions";

function Cart({ items, IncreaseQuantity, DecreaseQuantity, DeleteCart }) {
  let ListCart = [];
  let TotalCart = 0;

  // Making Copy of Item Array and 
  // console.log(items.CartItems);
  items.CartItems.forEach((item) => {
    ListCart.push(item);
    TotalCart += item.quantity * item.price;
  });

  // Object.keys(items.CartItems).forEach((item) => {
  //   TotalCart += items.CartItems[item].quantity * items.CartItems[item].price;
  //   ListCart.push(items.CartItems[item]);
  // });

  // Calculating Total Price Of Each a
  function TotalPrice(price, quantity) {
    return Number(price * quantity).toLocaleString("en-US");
  }

  return (
    <div className="row">
      <div className="col-md-12">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Unit Price</th>
              <th>Quantity</th>
              <th>Total Price</th>
            </tr>
          </thead>
          <tbody>
            {ListCart.map((item, key) => {
              return (
                <tr key={key}>
                  <td>
                    <i
                      className="badge badge-danger p-3"
                      onClick={() => DeleteCart(key)}
                      style={{ cursor: "pointer" }}
                    >
                      X
                    </i>
                  </td>
                  <td>{item.title}</td>
                  <td>{item.price} $</td>
                  <td>
                    <span
                      className="btn btn-primary"
                      style={{ margin: "2px" }}
                      onClick={() => DecreaseQuantity(key)}
                    >
                      -
                    </span>
                    <span className="btn btn-info">{item.quantity}</span>
                    <span
                      className="btn btn-primary"
                      style={{ margin: "2px" }}
                      onClick={() => IncreaseQuantity(key)}
                    >
                      +
                    </span>
                  </td>
                  <td>{TotalPrice(item.price, item.quantity)} $</td>
                </tr>
              );
            })}
            <tr>
              <td colSpan="5"><strong>Total Carts</strong></td>
              <td><strong>{Number(TotalCart).toLocaleString("en-US")} $</strong></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    items: state._todoProduct,
  };
};

export default connect(mapStateToProps, {
  IncreaseQuantity,
  DecreaseQuantity,
  DeleteCart,
})(Cart);
