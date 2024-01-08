import React, { Fragment, useEffect, useState } from "react";
import "./Products.css"
import ProductCard from '../home/ProductCard';
import { clearErrors, getProduct } from '../../actions/productAction';
import { useParams } from 'react-router-dom';

import { useSelector, useDispatch } from "react-redux";
import { useAlert } from "react-alert";

// const  products =[
//     {
//         "_id": "1",
//       "productImg": "http://pngimg.com/uploads/running_shoes/running_shoes_PNG5782.png",
//       "productName": "Nike Shoes",
//       "sizes": ["7", "8", "9", "10"],
//       "colors": ["Red", "Blue", "Black"]
//     },
//     {
//         "_id": "2",
//       "productImg": "http://pngimg.com/uploads/running_shoes/running_shoes_PNG5782.png",
//       "productName": "Adidas Sneakers",
//       "sizes": ["6", "7", "8", "9"],
//       "colors": ["White", "Green", "Yellow"]
//     },
//     {
//         "_id": "3",
//       "productImg": "http://pngimg.com/uploads/running_shoes/running_shoes_PNG5782.png",
//       "productName": "Puma Running Shoes",
//       "sizes": ["7", "8", "9", "10", "11"],
//       "colors": ["Black", "Gray", "Orange"]
//     },
//     {
//         "_id": "3",
//       "productImg": "http://pngimg.com/uploads/running_shoes/running_shoes_PNG5782.png",
//       "productName": "New Balance Athletic Shoes",
//       "sizes": ["6", "7", "8"],
//       "colors": ["Blue", "Red", "White"]
      
//     }
//   ]
  
function Products() {

    const {keyword} = useParams()
    const {category} = useParams()
  const dispatch = useDispatch();

  const alert = useAlert();

  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([0, 25000]);


  const [ratings, setRatings] = useState(0);

  const {
    products,
    loading,
    error,
    productsCount,
    resultPerPage,
    filteredProductsCount,
  } = useSelector((state) => state.products);



  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };

  const priceHandler = (event, newPrice) => {
    setPrice(newPrice);
  };
  let count = filteredProductsCount;

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(getProduct(keyword, currentPage, price, category, ratings));
  }, [dispatch, keyword, currentPage, price, category, ratings, alert, error]);


  



    useEffect(() => {
        // Get all buttons with the class 'accordion'
        const acc = document.getElementsByClassName('accordion');
    
        // Loop through them and attach a click event listener
        for (let i = 0; i < acc.length; i++) {
          acc[i].addEventListener('click', function() {
            // Toggle the active class to expand/collapse the panel
            this.classList.toggle('active');
    
            // Get the sibling panel
            const panel = this.nextElementSibling;
    
            // If the panel is already open, close it; otherwise, open it
            if (panel.style.maxHeight) {
              panel.style.maxHeight = null;
            } else {
              panel.style.maxHeight = panel.scrollHeight + 'px';
            }
          });
        }
      }, []);
    
  return (
    <div className='products'>
        <div className='products-filters'>
        <button class="accordion">Size</button>
<div class="panel">
<ul className='products-panel-ul'>
  <li className='products-panel-li'>8</li>
  <li className='products-panel-li'>8</li>

</ul>
</div>

<button class="accordion">Color</button>
<div class="panel">

<ul className='products-panel-ul'>
<li className='products-panel-li'>Red</li>
  <li className='products-panel-li'>White</li>

</ul>

  
  </div>

<button class="accordion">Price</button>
<div class="panel">
<ul className='products-panel-ul'>
<li className='products-panel-li'>$100+</li>
  <li className='products-panel-li'>$1000+</li>

</ul></div>

        </div>

        <div className='products-main'>
        <div class="product-container">
        {products.map((product, index) => (
                          <ProductCard key={product._id} product={product} />

        // <div className='product-card' key={index}>
        //   <div className='product-imgBx'>
        //     <img src={product.productImg} alt={product.productName} />
        //   </div>
        //   <div className='product-contentBx'>
        //     <h2>{product.productName}</h2>
        //     <div className='product-size'>
        //       <h3>Size :</h3>
        //       {product.sizes.map((size, idx) => (
        //         <span key={idx}>{size}</span>
        //       ))}
        //     </div>
        //     <div className='product-color'>
        //       <h3>Color :</h3>
        //       {product.colors.map((color, idx) => (
        //         <span key={idx}></span>
        //       ))}
        //     </div>
        //     <a href='#'>Buy Now</a>
        //   </div>
        // </div>
      ))}
    </div>

        </div>
    </div>
  )
}

export default Products