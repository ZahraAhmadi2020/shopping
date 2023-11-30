import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import shopping from '../../assets/icons/shopping.svg'
import logo from '../../assets/img/logo.png'
import './Navbar.css'
const Navbar = () => {
  const[menu,setMenu]=useState('')
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt='' />
        <p>Shopping</p>
      </div>

      <ul className='nav-menu'>
         <li onClick={() => setMenu('shop')}    >
          {menu === 'shop' ? <Link className='nav-link active' to='/'>Shop</Link> :
         <Link className='nav-link  ' to='/'>Shop</Link> }

        </li>
        <li onClick={() => setMenu('men')}>
          {menu === 'men' ? <Link className='nav-link active' to='/men'>Men</Link> :
         <Link className='nav-link' to='/men'>Men</Link>  }
        </li>
        <li onClick={() => setMenu('women')}>
          <Link className='nav-link' to='/women'>Women</Link>
        </li>
        <li onClick={() => setMenu('kids')}>
          <Link className='nav-link' to='/kids'>Kids</Link>
        </li>
      </ul>

      <div className='nav-login'>
       <Link to='/link'> <button>Login</button></Link>
       <Link to='/cart'> <img src={shopping} /></Link>
        <div className='cart-count'>0</div>
      </div>

    </div>
  )
}

export default Navbar
