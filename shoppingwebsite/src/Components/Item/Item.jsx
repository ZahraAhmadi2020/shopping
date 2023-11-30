import React from 'react'
import './Item.css'
const Item = (props) => {
  return (
    <div className='item'>
      <img src={props.image} className='item-img'/>
      <p>{props.name}</p>
      <div className='price'>
        <div className='new-price'>
          ${props.new_price}
        </div>
        <div className='old-price'>
          ${props.old_price}
        </div>
      </div>
    </div>
  )
}

export default Item
