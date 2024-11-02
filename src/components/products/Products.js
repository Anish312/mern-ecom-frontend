import React, { useEffect, useState } from "react";
import "./Products.css";
import ProductCard from '../home/ProductCard';
import { clearErrors, getProduct } from '../../actions/productAction';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { useAlert } from "react-alert";

function Products() {
  const { keyword, category } = useParams();
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

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(getProduct(keyword, currentPage, price, category, ratings));
  }, [dispatch, keyword, currentPage, price, category, ratings, alert, error]);

  useEffect(() => {
    const acc = document.getElementsByClassName('accordion');
    for (let i = 0; i < acc.length; i++) {
      acc[i].addEventListener('click', function() {
        this.classList.toggle('active');
        const panel = this.nextElementSibling;
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
        <button className="accordion">Size</button>
        <div className="panel">
          <ul className='products-panel-ul'>
            <li className='products-panel-li'>8</li>
            <li className='products-panel-li'>9</li>
          </ul>
        </div>

        <button className="accordion">Color</button>
        <div className="panel">
          <ul className='products-panel-ul'>
            <li className='products-panel-li'>Red</li>
            <li className='products-panel-li'>White</li>
          </ul>
        </div>

        <button className="accordion">Price</button>
        <div className="panel">
          <ul className='products-panel-ul'>
            <li className='products-panel-li'>$100+</li>
            <li className='products-panel-li'>$1000+</li>
          </ul>
        </div>
      </div>

      <div className='products-main'>
        {loading ? (
         <div className="loader">
           <div className="spinner"></div>
         </div>       
       ) : (
          <div className="product-container">
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Products;
