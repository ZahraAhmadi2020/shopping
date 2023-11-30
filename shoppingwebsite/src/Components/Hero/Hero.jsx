import React from 'react'
import hand from '../../assets/icons/hand.svg'
import rightArrow from '../../assets/icons/rightArrow.svg'
import hero from '../../assets/img/hero.png'
import './Hero.css'
const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-left'>
        <h2>New Arivalls only</h2>

        <div >
          <div className='hand-icon'>
            <p>new</p>
            <img src={hand } />
          </div>
          <p>Collections</p>
          <p>For everyOne</p>
        </div>

        <div className='hero-latest-btn'>
          <div>Latest collection</div>
          <img src={ rightArrow} />
        </div>
      </div>

      <div className='hero-right'>
        <img src={hero} />
      </div>
    </div>
  )
}

export default Hero
