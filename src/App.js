import { useEffect } from 'react';
import './App.css';
import Header from './components/layout/header/Header';
import {BrowserRouter  as Router ,Route ,Routes} from "react-router-dom"
import WebFont from 'webfontloader';
import Footer from './components/layout/footer/Footer';
import Home from './components/home/Home';
import ProductDetails from './components/productDetails/ProductDetails';
import Products from './components/products/Products';
import Search from './components/search/Search';
import MyProfile from './components/profile/MyProfile';
import Login from './components/login/Login';
import SignUp from './components/signUp/SignUp';
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from './actions/useAction';
import store from "./store"
import PrivateRoute from './components/privateRoute/PrivateRoute';
import Cart from './components/cart/Cart';
import Shipping from './components/shipping/Shipping';
import ConfirmOrder from './components/cart/ConfirmOrder';
import Cart1 from './components/cart/Cart';
import axios from 'axios';
function App() {
  axios.defaults.baseURL = 'https://shoes-server3.onrender.com'

  const { isAuthenticated, user } = useSelector((state) => state.user);


  useEffect(() => {
  WebFont.load({
    google: {
      families : ["Roboto" , "Droid Sans" , "Chilanka"]
    }
  })
console.log("hii")
  store.dispatch(loadUser())
}, [])
  return (
    <div className="app">
    
      <Router>
              <Header isAuthenticated={isAuthenticated} user={user}/>
              <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:category" element={<Products />} />
              {/* <Route path="/products/:categoryId" element={<Products />} /> */}

              <Route path="/search" element={<Search />} />
              <Route path="/myProfile" element={<MyProfile />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signUp" element={<SignUp />} />
              <Route path="/cart" element={<Cart />} />

              <Route path="/shipping" element={<Shipping />} />
              <Route path="/order/confirm" element={<ConfirmOrder />} />

              </Routes>
              <Footer/>
      </Router>

    </div>
  );
}
 
export default App;
