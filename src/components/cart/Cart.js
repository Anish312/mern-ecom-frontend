import React from "react";
import "./Cart.css";
import CartItemCard from "./CartItemCard";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addItemsToCart, removeItemsFromCart } from "../../actions/cartAction";

function Cart() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  const increaseQuantity = (id, quantity, stock) => {
    const newQty = quantity + 1;
    if (stock <= quantity) {
      return;
    }
    dispatch(addItemsToCart(id, newQty));
  };

  const decreaseQuantity = (id, quantity) => {
    if (quantity === 1) {
      // Delete the item if quantity is 1 and the user clicks the decrease button
      deleteCartItems(id);
    } else {
      const newQty = quantity - 1;
      dispatch(addItemsToCart(id, newQty));
    }
  };

  const deleteCartItems = (id) => {
    dispatch(removeItemsFromCart(id));
  };

  const checkoutHandler = () => {
    navigate("/shipping");
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );
  const shippingCharge = 20;
  const total = subtotal + shippingCharge;

  return (
    <div className='cart'>
      <div className='cart-container'>
        <div className='cart-left'>
          <h2>Cart</h2>
          <div className='cart-product-row'>
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
                    <input
                      className="cart-input"
                      type="number"
                      value={item.quantity}
                      readOnly
                    />
                    <button
                      onClick={() =>
                        increaseQuantity(item.product, item.quantity, item.stock)
                      }
                    >
                      +
                    </button>
                    <p className="cartSubTotal">
                      ${ (item.price * item.quantity).toFixed(2) }
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div className='cart-right'>
          <h2>Summary</h2>
          <div className='cart-summary-calculation'>
            <div className='cart-summary-subtotal'>
              <h5>Subtotal</h5>
              <span>$ { subtotal.toFixed(2) }</span>
            </div>
            <div className='cart-summary-shipping'>
              <h5>Shipping Charge</h5>
              <span>$ { shippingCharge.toFixed(2) }</span>
            </div>
          </div>

          <div className='cart-summary-total-div'>
            <h3>Total</h3>
            <p>$ { total.toFixed(2) }</p>
          </div>
          
          <button onClick={checkoutHandler} className="checkout-button">
            Proceed to Checkout
          </button>
        </div> 
      </div>
    </div>
  );
}

export default Cart;
