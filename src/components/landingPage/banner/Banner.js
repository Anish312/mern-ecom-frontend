import React, { useState } from 'react'
import "./Banner.css"
import FirstBanner from './FirstBanner'
import SecondBanner from './SecondBanner'
import {  useDispatch, useSelector } from "react-redux";
import loadingImg from "../../../images/loadingImg.gif"
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

function Banner() {

  const [currentBanner, setCurrentBanner] = useState(1);
  const {loading , error, products  , productCount} = useSelector(state => state.products)

  const goToNextBanner = () => {
    setCurrentBanner(currentBanner === 1 ? 2 : 1);
  };

  const goToPrevBanner = () => {
    setCurrentBanner(currentBanner === 1 ? 2 : 1);
  };

   

  return (
    <>


 <div className="banner">
    {currentBanner === 1 ? 
    
    <FirstBanner /> 
    
    : <SecondBanner />}
    <div className="banner-controls">
      <div className="prev-button" onClick={goToPrevBanner}>
     <IoIosArrowBack  color="white" size={35}/>
      </div>
      <div className="next-button" onClick={goToNextBanner}>
       <IoIosArrowForward color="white" size={35}/>
      </div>
    </div>
  </div>

  
    
    </>
   
  )
}

export default Banner