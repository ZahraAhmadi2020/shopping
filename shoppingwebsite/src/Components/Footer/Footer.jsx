import React from 'react'
import instagram from '../../assets/icons/instagram.svg'
import telegram from '../../assets/icons/telegram.svg'
import whatsapp from '../../assets/icons/whatsapp.svg'
import footerLogo from '../../assets/img/logo.png'
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-logo'>
        <img src={footerLogo} />
        <p>Shopper</p>
      </div>
      <ul className='footer-links'>
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className='footer-icon'>
        <div className='footer-icon-container'>
          <img src={instagram} />
        </div>
        <div className='footer-icon-container'>
          <img src={ telegram} />
        </div>
        <div className='footer-icon-container'>
          <img src={whatsapp} />
        </div>
      </div>
      <div className='footer-copyright'>
        <hr/>
        <p>Copyright @ 2024 All Right Reserved</p>
      </div>
    </div>
  )
}

export default Footer
