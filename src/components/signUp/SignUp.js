import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signUp } from '../../actions/useAction';
import "./SignUp.css";

function SignUp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.user);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { name, email, password };
    dispatch(signUp(userData));
  };

  return (
    <div className="login-container">
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form className="login-form" onSubmit={handleSubmit}>
        <h3>Sign Up Here</h3>

        <label htmlFor="name">Name</label>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="signup-input"
          id="name"
        />

        <label htmlFor="email">Username</label>
        <input
          type="text"
          placeholder="Email or Phone"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="signup-input"
          id="email"
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="signup-input"
          id="password"
        />

        <button className="login-btn" type="submit">Sign Up</button>
        
        <div className="social">
          Have an account? &nbsp;
          <Link to="/login" style={{ color: "blue" }}>
            Sign In
          </Link>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
