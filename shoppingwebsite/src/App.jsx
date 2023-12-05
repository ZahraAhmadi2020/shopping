import { BrowserRouter, Route, Routes } from 'react-router-dom'
import kidsBanner from '../src/assets/img/kids-banner.jpeg'
import mensBanner from '../src/assets/img/mens-banner.jpeg'
import womanBanner from '../src/assets/img/womanBanner.jpeg'
import './App.css'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'
import Cart from './Pages/Cart'
import LoginSignup from './Pages/LoginSignup'
import Products from './Pages/Products'
import Shop from './Pages/Shop'
import ShopCategoty from './Pages/ShopCategoty'

function App() {


  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className='main'>
          <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/men' element={<ShopCategoty banner={mensBanner} category="men"/>} />
          <Route path='/women' element={<ShopCategoty banner={womanBanner} category="women" />} />
          <Route path='/kids' element={<ShopCategoty  banner={kidsBanner} category="kids"/>} />
          <Route path='/products' element={<Products />} >
            <Route path=':productId' element={<Products />}/>
          </Route>
          <Route path='/cart' element={<Cart/>} />
          <Route path='/login' element={<LoginSignup/>}/>
         </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
