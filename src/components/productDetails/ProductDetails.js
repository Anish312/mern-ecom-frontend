import React, { Fragment, useEffect ,useState} from "react";
import Carousel from "react-material-ui-carousel";
import { useSelector, useDispatch } from "react-redux";
// import {
//     Dialog,
//     DialogActions,
//     DialogContent,
//     DialogTitle,
//     Button,
//   } from "@material-ui/core";
import { useAlert } from "react-alert";
import { useParams } from 'react-router-dom';
import "./ProductDetails.css"
// import { Rating } from "@material-ui/lab";
import { getProductDetails } from "../../actions/productAction";
// import { NEW_REVIEW_RESET } from "../../constants/productConstants";
import {  addItemsToCart } from "../../actions/cartAction"
function ProductDetails() {
    const {id} =  useParams();
    const dispatch = useDispatch();
  const alert = useAlert();

  const [quantity , setQuantity] = useState(1);

  const { product, loading, error } = useSelector((state) => state.productDetails);


 console.log(product)

const increaseQuantity = () =>{
  if(product.stock <= quantity) {
    return ;
  }
  const qty = quantity +1;
  setQuantity(qty);
}

const decreaseQuantity = () =>{
  if(1>= quantity) {
    return 
  }
  const qty = quantity -1;
  setQuantity(qty);
}

  useEffect(() => {
    if (error) {
      alert.error(error);
    //   dispatch(clearErrors());
    }

   
    dispatch(getProductDetails(id)); 
  }, [dispatch, id, alert,error]);



  const addToCartHandler =() => {
    dispatch(addItemsToCart(id , quantity))
    alert.success("Item Added To Cart");

  }
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const showNextImage = () => {
      if (currentImageIndex < product.image.length - 1) {
          setCurrentImageIndex(currentImageIndex + 1);
      } else {
          setCurrentImageIndex(0); // Reset to the first image if currently on the last one
      }
  };
  
  const [selectedColorIndex, setSelectedColorIndex] = useState(0); // Initialize selected color index

  // Function to handle color selection
  const handleColorSelection = (index) => {
    setSelectedColorIndex(index); // Update selected color index when a color is clicked
  };

  return (
    <Fragment>
    {loading ? (
    <p>loading</p>
    ) : (
      <Fragment>
        <div class="card">
          <div className="productDetails-card-container">
            
        
          <div class="left">
          {product.image && product.image.length > 0 && (
            <img
              src={product.image[selectedColorIndex].url} // Display image based on selected color index
              alt={`Product ${currentImageIndex + 1}`}
              className="productDetails-img"
            />
          )}
            {/* <button onClick={showNextImage}>Next</button> */}
        </div>
    <div class="right">
      <div class="product-info">
        <div class="product-name">
          <h1 className="productDetails-h1">{product.name}</h1>
          <i class="fa fa-search"></i>
          <i class="fa fa-user"></i>
          <i class="fa fa-shopping-cart"></i>
        </div>
        <div class="details">
          <h3 className="productDetails-h3">Winter Collection</h3>
          <h2 className="productDetails-h2">Men Black Sneakers</h2>
          <h4 className="productDetails-h4"><span class="fa fa-dollar"></span>{product.price} $</h4>
          <h4 class="dis"><span class="fa fa-dollar"></span>200 $</h4>
        </div>
        <ul className="productDetails-ul">
          <li className="productDetails-li">SIZE</li>
      {product.sizes && product.sizes.length > 0 && product.sizes.map((size, index) => (
                      <li key={index} className="bg productDetails-li">{size.size}</li>
                    ))}
        </ul>
        <ul className="productDetails-ul ">
          <li className="productDetails-li " >COLOR</li>
          {product.image && product.image.length > 0 && product.image.map((color, index) => (
              <span
                key={index}
                style={{
                  backgroundColor: `${color.color} `,
                  borderRadius: '50%',
                  display: 'inline-block',
                  width: '20px',
                  height: '20px',
                  margin: '0 5px',
                  cursor: 'pointer' // Add cursor pointer for selection
                }}
                onClick={() => handleColorSelection(index)} // Handle click on color
              ></span>
            ))}
        </ul>
        <span class="foot"><i class="fa fa-shopping-bag"></i>Buy Now</span>
        <span class="foot"   
                    onClick={addToCartHandler}><i class="fa fa-shopping-cart" ></i>Add To Cart</span>
      </div>
    </div>
    </div>
  </div>

      
      </Fragment>
    )}
  </Fragment>
  )
}

export default ProductDetails