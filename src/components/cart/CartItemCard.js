import React from 'react'
import "./CartItemCard.css"
import { Link } from 'react-router-dom'
function CartItemCard({item , deleteCartItems}) {
  return (

        <div className='CartItemCard'>
                <div className='cart-product-img-div'>
                    <img  className='cart-product-img' src={item.image}  alt=""/>
                </div>
                <div className='cart-product-details'>
                  
                    <h3 className='cart-product-name'>{item.name}</h3>
                    <h4 className='cart-product-category'>Men's Shoes</h4>
                    {/* <label for="size" >Choose a Size:</label>

                            <select  className='cart-product-category-lable' name="cars" id="cars">
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                            </select> */}

                    
                    <div className='cart-product-btns'>
                        <button v className='cart-remove-btn' onClick={() => deleteCartItems(item.product)}>Remove</button>
                    </div>

                </div>
                {/* <div className='cart-product-row-total'>
                        <span>$230</span>
                    </div> */}
            </div>
   
  )
}

export default CartItemCard