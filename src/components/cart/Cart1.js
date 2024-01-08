import React, { Fragment } from "react";
import "./Cart.css";
import CartItemCard from "./CartItemCard";
import { useDispatch, useSelector } from "react-redux";
import { addItemsCart, removeItemsCart } from "../../actions/cartAction";
import { Link, useNavigate } from "react-router-dom";

function Cart1() {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  const increaseQuantity = (id, quantity, stock) => {
    const newQnt = quantity + 1;
    if (stock <= quantity) {
      return;
    }
    dispatch(addItemsCart(id, newQnt));
  };

  const decreaseQuantity = (id, quantity) => {
    const newQnt = quantity - 1;
    if (1 >= quantity) {
      return;
    }
    dispatch(addItemsCart(id, newQnt));
  };

  const deleteCartItems = (id) => {
    dispatch(removeItemsCart(id));
  };

  const checkoutHandler = () => {
    navigate("/shipping");
  };
  return (
    <Fragment>
      <div className="cartPage">
        <div className="cartHeader">
          <p>Product</p>
          <p>Quantity</p>
          <p>Subtotal</p>
        </div>

        {cartItems &&
          cartItems.map((item) => (
            <div className="cartContainer" key={item.product}>
              <CartItemCard item={item} deleteCartItems={deleteCartItems} />

              <div className="cartInput">
                <button
                  onClick={() => decreaseQuantity(item.product, item.quantity)}
                >
                  -
                </button>
                <input type="" value={item.quantity} name="" />
                <button
                  onClick={() =>
                    increaseQuantity(item.product, item.quantity, item.stock)
                  }
                >
                  +
                </button>
                <p className="cartSubTotal">{`${item.price * item.quanity}`}</p>
              </div>
            </div>
          ))}

        <div className="cartGrossProfit">
          <div></div>
          <div className="cartGrossProfitBox">
            <p>Gross Profit</p>
            <p>{`${
              cartItems.reduce(
                (acc, item) => acc + item.quantity * item.price,
                0
              )
            }`}</p>
          </div>
          <div className="checkOutBtn">
            <button onClick={checkoutHandler} >Check out</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Cart1;
