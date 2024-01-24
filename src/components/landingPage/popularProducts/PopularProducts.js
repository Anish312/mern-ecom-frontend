import React from 'react'
import { Link, useNavigate } from "react-router-dom";

import "./PopularProducts.css"
function PopularProducts() {
  return (
    <div className='popularProducts'>
        
        <div className='popularProducts-heading'>
            <h2>Popular Right Now</h2>
        </div>


        <div className='popularProducts-categories'>
        <Link to="/products/mens" style={{textDecoration:"none" , color: "white"}}>
            <div className='popularProducts-category'>
                
                <button type="">Men's</button>
            </div>
            </Link>
            <Link to="/products/women" style={{textDecoration:"none" , color: "white"}}>

            <div className='popularProducts-category'>
                <button type="">Women's</button>
            </div>
            </Link>
            <Link to="/products/kids" style={{textDecoration:"none" , color: "white"}}>
            <div className='popularProducts-category'>
                <button type="">Kid's</button>
            </div>
            </Link>
            <div className='popularProducts-category'>
                <button type="">Sale</button>
            </div>
        </div>

        <div className='popularProducts-products'>            <Link to="/products/mens" style={{textDecoration:"none" , color: "white"}}>

            <div className='popularProducts-product'> 

                <img className="popularProducts-product-img" src="https://wallpapercave.com/wp/3eaIVZM.jpg"   alt=""/>
                <p>Men's</p>

            </div>                </Link>
            <Link to="/products/women" style={{textDecoration:"none" , color: "white"}}>

            <div className='popularProducts-product'> 

                <img src="https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?cs=srgb&dl=green-nike-runners-shoes-1456706.jpg&fm=jpg"  className='popularProducts-product-img' alt=""/>
                <p>Women's</p>
            

            </div>    </Link>            <Link to="/products/kids" style={{textDecoration:"none" , color: "white"}}>

            <div className='popularProducts-product'> 

                <img src="https://i.pinimg.com/originals/91/d3/03/91d3031dfbf8779e36dd19a6af739ce7.jpg"  className='popularProducts-product-img' alt=""/>
                <p>Kid's</p>

            </div>                </Link>

            {/* <div className='popularProducts-product'> 
                <img src="https://gearpatrol.com/wp-content/uploads/2019/09/Air-Jordan-XXXIV-gear-patrol-full-lead.jpg"  className='popularProducts-product-img' alt=""/>
                <p>Shoes Name</p>
            </div> */}
        </div>

    </div>
  )
}

export default PopularProducts