import React from 'react';
import exclusive from '../../assets/img/exclusive.png';
import './Offers.css';
const Offers = () => {
  return (
    <div
      className='offers'>
      <div className='offers-left'>
        <h1>Exclusive</h1>
        <h1>Offers for you</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button>Check now</button>
      </div>
      <div className='offers-right'>
        <img src={exclusive } />
      </div>
    </div>
  )
}

export default Offers
