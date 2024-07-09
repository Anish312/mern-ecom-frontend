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
    if(finalMargin >-500 ) {
          setFinalMargin((prevMargin) => prevMargin - 100); // Adjust the scrolling distance

    }
  };
 
  const scrollUp = () => {
    if(finalMargin <0 ) {


      setFinalMargin((prevMargin) => prevMargin + 100); // Adjust the scrolling distance
    }

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

                   {/* {
                    products.slice(0, 3).map((product) => (
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
                 
               
                */}
                    <div className='topDesigns-right-box'>
                    <img src={firstBannerImg} alt=""  className='topDesigns-right-box-img' />
                      <div  className='topDesigns-right-box-texts'>
                        <p>$ 3003</p>
                        <p>Air Black<br/>
                        Z440</p>
                      </div>
                    </div>
                    <div className='topDesigns-right-box'>
                    <img src="https://www.nicepng.com/png/full/78-789462_nike-shoes-png.png" alt="" className='topDesigns-right-box-img'/>
                      <div  className='topDesigns-right-box-texts'>
                        <p>$ 3003</p>
                        <p>Red Thunder<br/>
                        007</p>
                      </div>
                    </div>
                    <div className='topDesigns-right-box'>
                    <img src="https://www.pinclipart.com/picdir/big/258-2583056_nike-mens-nike-flex-2017-rn-running-shoe.png" alt=""  className='topDesigns-right-box-img' />
                      <div  className='topDesigns-right-box-texts'>
                        <p>$ 3004</p>
                        <p>Classic Nike<br/>
                        Mens</p>
                      </div>
                    </div>
                    <div className='topDesigns-right-box'>
                    <img src="https://www.nicepng.com/png/full/78-789462_nike-shoes-png.png" alt="" className='topDesigns-right-box-img'/>
                      <div  className='topDesigns-right-box-texts'>
                        <p>$ 3003</p>
                        <p>Red Thunder<br/>
                        007</p>
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