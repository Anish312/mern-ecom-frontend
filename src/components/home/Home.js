import React, { Fragment, useEffect, useState } from "react";
import "./Home.css";
import {  useDispatch, useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import MetaData from "../layout/MetaData";
import { getProduct } from "../../actions/productAction";
import Loader from "../layout/loading/Loader";
import { CircularProgress } from '@material-ui/core';
import { useAlert } from "react-alert";
import Banner from "../landingPage/banner/Banner";
import loadingImg from "../../images/loadingImg.gif"
import TopDesigns from "../landingPage/topDesigns/TopDesigns";
import PopularProducts from "../landingPage/popularProducts/PopularProducts";
import SignUpNow from "../landingPage/SignUpNow/SignUpNow";
import WeeklyPick from "../landingPage/weeklyPick/WeeklyPick";

function Home() {
const alert = useAlert();
  const dispatch = useDispatch();
  const {loading , error, products  , productCount} = useSelector(state => state.products)
  useEffect(() => {
    if(error) {
      return alert.error(error)
    }
   dispatch(getProduct())
  }, [dispatch , error ,alert])
  
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3000 milliseconds = 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <Fragment>

      
   {isLoading ? (
      <img src={loadingImg} alt="" className="loading-image"/>
     
    ) : (
      
      <div className="home">
        <MetaData title="ECOMMERCE" />

        <div className="banner">
      
      <Banner/>
      <TopDesigns/>
      <PopularProducts/>
      <WeeklyPick/>
      <SignUpNow/>
      
        </div>

       
      </div>
    )}
  </Fragment>
  )
}

export default Home