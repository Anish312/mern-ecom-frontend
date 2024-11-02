import React from 'react'
import "./SignUpNow.css"
import { Link } from 'react-router-dom'
function SignUpNow() {
  return (
    <div className='signUpNow'>
        <div className='signUpNow-center-div'>
            <h1>BECOME A MEMBER AND GET 20% OFF</h1>
            <Link to="/signUp">
            <button type="">SIGN UP FOR FREE NOW </button>
            </Link>
        </div>
    </div>
  )
}

export default SignUpNow