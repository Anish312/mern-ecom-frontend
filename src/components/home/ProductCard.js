import React from 'react'
import { Link } from "react-router-dom";
import { Rating } from "@material-ui/lab";
import "./ProductCard.css"
function Product({ product }) {
    const options = {
        value: product.ratings,
        readOnly: true,
        precision: 0.5,
      };


      // console.log(product.image)
  return (
    <div className="">
       
         <Link to={`/product/${product._id}`}>
       <div className='product-card' >
          <div className='product-imgBx'>
           <img  className='productCard-img' src={product.image[0].url} alt={product.productName} />
          </div>
          <div className='product-contentBx'>
            <h3 style={{color:"white"}}>{product.name}</h3>
           <div className='product-size'>
             <h3>Size :</h3>
            {product?.sizes.map((size, idx) => (
                <span key={idx}>{size.size.slice(3)}</span>
                ))}
            </div>
           <div className='product-color'>
              <h3>Color :</h3>
            {product?.image.map((color, idx) => (
              // console.log(color.color)
              <span   key={idx} style={{backgroundColor:`${color.color}`}}></span>
              ))}
            </div>
           <a href='#'>Buy Now</a>
          </div>
        </div> 
    </Link>
    </div>
  )
}

export default Product