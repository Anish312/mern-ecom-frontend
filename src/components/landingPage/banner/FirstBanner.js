import React from 'react'
import "./FirstBanner.css"
import firstBannerImg from "../../../images/firstBannerImg.png"
function FirstBanner() {
  return (
    <div className='firstBanner'>

        <div className='firstBanner-bg-texts'>
            <h1 className='firstBanner-bg-text1'>  &nbsp;Jump &nbsp; &nbsp;Man</h1>
            <h2 className='firstBanner-bg-text2'>Jump &nbsp;&nbsp;  Man</h2>
        </div>
        <div className='firstBanner-img-container'>
            <img  className='firstBanner-img' src={firstBannerImg} alt="" />

        </div>

        <div className='firstBanner-bottom'>
           
            <div className='firstBanner-bottom-btns'>
                <button className='firstBanner-bottom-btn1' type="">Add To Cart</button>
                <button className='firstBanner-bottom-btn2' type="">Buy Now</button>

            </div>
 </div>
            <div  className='firstBanner-bottom-texts'>
                <h2>Nike Air 90 Max</h2>
                <p>$ 300</p>
                <p  className='firstBanner-bottom-desc'>Nothing as fly, nothing as comfortable, nothing as proven—the Nike Air Max 90 stays true to its roots with the iconic Waffle sole, stitched overlays and classic TPU accents.</p>
            </div>
       
        
    </div>
  )
}

export default FirstBanner