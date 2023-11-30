import React, { useContext } from 'react'
import Item from '../Components/Item/Item'
import { ShopContext } from '../Context/ShopContwxt'
import dropdown from '../assets/icons/dropdown.svg'
import './ShopCategory.css'
const ShopCategoty = (props) => {
  const {all_product}=useContext(ShopContext)
  return (
    <div className='shopCategory'>
      <img className='banner-shop' src={props.banner} />
      <div className='shopCategory-indexSort'>
        <p>
          <span>Showing 1-12</span>out of 36 products
        </p>
        <div className='shopCategory-Sort'>
          sort by <img src={dropdown} />
        </div>
      </div>
      <div className='shopCategory-products'>
        {all_product && all_product.map((item, i) => {
          if (props.category === item.category) {
             return <Item key={i} id={item.id}
            name={item.name} image={item.image}
             />
          } else {
            return null;
          }

        })}

      </div>
      <div className='shopCategory-more'>
        Explore more
      </div>
    </div>
  )
}

export default ShopCategoty
