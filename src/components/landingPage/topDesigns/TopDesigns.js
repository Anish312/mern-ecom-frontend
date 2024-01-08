import React , { useRef, useState }from 'react'
import "./TopDesigns.css"
import firstBannerImg from "../../../images/firstBannerImg.png"
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";

function TopDesigns() {
 
  const dispatch = useDispatch();




  const {
    products,
    loading,
    error,
 
  

  } = useSelector((state) => state.products);


  const [finalMargin, setFinalMargin] = useState(0);

  const scrollDown = () => {
    setFinalMargin((prevMargin) => prevMargin - 100); // Adjust the scrolling distance
  };

  const scrollUp = () => {
   
    setFinalMargin((prevMargin) => prevMargin + 100); // Adjust the scrolling distance
  };
  return (
    <div className='topDesigns'>
        <div className='topDesigns-container'>
            
            <div className='topDesigns-left'>
                <div>Our Top <br/>Designs</div>
            </div>
               
            <div className='topDesigns-right'>
            <spam onClick={scrollUp}><FaArrowUp size={25}/></spam>
                <div className='topDesigns-right-boxes' >
                  <div style={{marginTop:`${finalMargin}px`}}>  

                   {
                    products.map((product) => (
                          <div className='topDesigns-right-box' >
                    <img src={product.image[0].url} alt=""   className='topDesigns-right-box-img'/>
                      <div  className='topDesigns-right-box-texts'>
                        <p>$ {product.price}</p>
                        <p> {product.name}<br/>
                        </p>
                      </div>
                    </div>

                    ))
                   }
                 
               
               
                    <div className='topDesigns-right-box'>
                    <img src={firstBannerImg} alt=""  className='topDesigns-right-box-img' />
                      <div  className='topDesigns-right-box-texts'>
                        <p>$ 3003</p>
                        <p>dfds sdfsdf dsfsdf<br/>
                        sdfsdf</p>
                      </div>
                    </div>
                    <div className='topDesigns-right-box'>
                    <img src={firstBannerImg} alt=""  className='topDesigns-right-box-img' />
                      <div  className='topDesigns-right-box-texts'>
                        <p>$ 3004</p>
                        <p>dfds sdfsdf dsfsdf<br/>
                        sdfsdf</p>
                      </div>
                    </div>
                    <div className='topDesigns-right-box'>
                    <img src={firstBannerImg} alt="" className='topDesigns-right-box-img'/>
                      <div  className='topDesigns-right-box-texts'>
                        <p>$ 3003</p>
                        <p>dfds sdfsdf dsfsdf<br/>
                        sdfsdf</p>
                      </div>
                    </div>
                    </div>
                </div>              
                <div className='scroll-buttons'>
            
            <spam onClick={scrollDown}><FaArrowDown size={25}/></spam>
          </div>
            </div>
        </div>

    </div>
  )
}

export default TopDesigns