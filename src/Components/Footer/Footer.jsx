import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.png'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
            <img src={logo} alt=""/>
            
        </div>
      </div>
       <hr/>
       <div className="footer-bottom">
        <p className="footer-bottom-left"> @Ayodya Thathsarani.All rights reserved.</p>
        <div className="footer-bottom-right">
        
            <p>Term of Service</p>
            <p>Contact With Me</p>
            <p>Privacy Policy</p>
            
        </div>
       </div>
    </div>
  )
}

export default Footer
