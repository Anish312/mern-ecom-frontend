import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import { useDispatch, useSelector } from "react-redux";
import { logout } from '../../../actions/useAction';
import { FiShoppingCart } from "react-icons/fi";

function Header({ isAuthenticated, user }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cartItems } = useSelector((state) => state.cart); // Access cart items from Redux state

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  // Calculate total items in the cart
  const getTotalItems = () => {
    return cartItems.reduce((acc, item) => acc + item.quantity, 0);
  };

  return (
    <header className='header'> 
      <Link to="/" style={{ textDecoration: "none", color: "white" }}>
        <div className='header-left'>
          <img src="https://www.nicepng.com/png/full/2-26056_nike-logo-png.png" alt="" className='header-logo' />
        </div>
      </Link>

      <div className='header-middle'>
        <ul className='header-middle-ul'>
          <Link to="/products/mens" style={{ textDecoration: "none", color: "white" }}>
            <li className='header-middle-l1'>Mens</li>
          </Link>
          <Link to="/products/women" style={{ textDecoration: "none", color: "white" }}>
            <li className='header-middle-l1'>Women</li>
          </Link>
          <Link to="/products/kids" style={{ textDecoration: "none", color: "white" }}>
            <li className='header-middle-l1'>Kids</li>
          </Link>
        </ul>
      </div>

      <div className='header-right'>
        <Link to='/cart'>
          <div style={{ color: "white", cursor: "pointer", marginRight: "10px" }}>
            <FiShoppingCart size={25} />
            {cartItems && getTotalItems() > 0 && (
              <span className="cart-count">{getTotalItems()}</span>
            )}
          </div>
        </Link>
        {isAuthenticated ? (
          <>
            <p style={{ color: 'white' }}>Hi! {user.name}</p>
            <p style={{ color: "white", cursor: "pointer" }} onClick={handleLogout}>Logout</p>
          </>
        ) : (
          <Link to="/login" style={{ textDecoration: "none" }}>
            <p style={{ color: "white", cursor: "pointer", margin: "0 15px" }}>Login</p>
          </Link>
        )}
      </div>
    </header>   
  );
}

export default Header;
