import React from 'react'
import "./WeeklyPick.css"
function WeeklyPick() {
    const colors = ['#FF5733', '#33FF57', '#3366FF']; // Array of colors



    
  return (
    <div className='weeklyPick'>
        <div className='weeklyPick-container'>
            

        <div className='weeklyPick-heading'>
            <h1>OUR WEEKLY PICK</h1>
        </div>

       <div className='weeklyPick-main'>
        <div className='weeklyPick-img-container'>
            <img src="https://gearpatrol.com/wp-content/uploads/2019/09/Air-Jordan-XXXIV-gear-patrol-full-lead.jpg" className='weeklyPick-img' alt=""/>
        </div>

        <div className='weeklyPick-product-details'>
            <h4>Nike - The Joyride</h4>
            <span>$340</span>

            <div className='weeklyPick-color-and-size-container'>

                <div className='weeklyPick-color-container'>
                     <span>Colour</span>
                     <div className='color-container'>

                    <div className='color-options'>
                        {colors.map((color, index) => (
                        <div key={index} className='color-circle' style={{ backgroundColor: color }}></div>
                        ))}
                    </div>
                    </div>
                </div>
               
                <div className='weeklyPick-size-container'>
                     <span>Size</span>
                    <div className='weeklyPick-sizes'>
                        <span>4</span>
                        <span>6</span>

                        <span>8</span>


                    </div>
                </div>
            </div>
            <div className='weeklyPick-imgs'>
            <img src="https://images.stockx.com/images/Nike-Kobe-4-Black-White-Varsity-Red.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=webp&auto=compress&dpr=3&trim=color&updated_at=1618255467&q=41" className='weeklyPick-img-extra'  alt=""/>
            <img src="https://sneakernews.com/wp-content/uploads/2010/04/nike-air-max-lebron-7-PS-pop-white-black.jpg" className='weeklyPick-img-extra' alt=""/>
            <img src="https://sneakernews.com/wp-content/uploads/2010/04/nike-air-max-lebron-7-PS-black-sport-red-white.jpg" className='weeklyPick-img-extra' alt=""/>

            </div>
            <div className='weeklyPick-btn'>
                <button type="">Add to cart</button>
            </div>
        </div>
       </div>
        </div>
    </div>
  )
}

export default WeeklyPick