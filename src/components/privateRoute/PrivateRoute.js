import React, { Fragment } from 'react'
import { useDispatch, useSelector } from "react-redux";
import {Route ,Navigate } from "react-router-dom"

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated, user, loading } = useSelector((state) => state.user);

  const RenderContent = (props) => (isAuthenticated ? <Component {...props} /> : <Navigate to="/login" />);

  return <Route {...rest} render={RenderContent} />;
};

export default PrivateRoute;