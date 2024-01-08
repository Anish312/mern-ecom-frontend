import React from 'react'
import "./SecondBanner.css"
import secondBannerImg from "../../../images/secondBannerImg.png"

function SecondBanner() {
  return (
    <div className='secondBanner'>


<div className='secondBanner-bg-texts'>
            <h1 className='secondBanner-bg-text1'>Just &nbsp; &nbsp;Do</h1>
            <h2 className='secondBanner-bg-text2'>It &nbsp;&nbsp;  </h2>
        </div>
        <div className='secondBanner-img-container'>
            <img  className='secondBanner-img' src={secondBannerImg} alt="" />

        </div>

        <div className='secondBanner-bottom'>
           
            <div className='secondBanner-bottom-btns'>
                <button className='secondBanner-bottom-btn1' type="">Add To Cart</button>
                <button className='secondBanner-bottom-btn2' type="">Buy Now</button>

            </div>
 </div>
            <div  className='secondBanner-bottom-texts'>
                <h2>Nike Air 90 Max</h2>
                <p>$ 300</p>
                <p  className='secondBanner-bottom-desc'>Nothing as fly, nothing as comfortable, nothing as proven—the Nike Air Max 90 stays true to its roots with the iconic Waffle sole, stitched overlays and classic TPU accents.</p>
            </div>
       
      
    </div>
  )
}

export default SecondBanner