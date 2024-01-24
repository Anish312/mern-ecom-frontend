import React from 'react'
import "./Footer.css"
function Footer() {
  return (
    <footer class="footer">
        <div class="container">
          <div class="footer-content">
            <div class="footer-logo">
            <img src="https://www.nicepng.com/png/full/2-26056_nike-logo-png.png" alt="" width={55} style={{margin: " 30px 20px"}}/>

            </div>
            <div class="footer-links">
              <ul class="footer-menu">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
            <div class="footer-social">
              <ul class="social-icons">
                <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
              </ul>
            </div>
          </div>
          <div class="footer-bottom">
            <p>&copy; 2023 Your Company. All rights reserved.</p>
          </div>
        </div>
      </footer>

 
  )
}

export default Footer