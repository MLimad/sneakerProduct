import React, { useState } from 'react'
import Cart from './Cart'
import Drawer from "./Drawer";


function Navbar({toCart,value,currPrice,productName}) {
    const [cart,setCart] = useState(false)
    const [drawer,setDrawer] = useState(false)

  return (
    <div>
        {drawer && <Drawer setDrawer={setDrawer} />}
        <div class="container">
        <nav>
          
          <div class="navs-btn">
            <div class="menu-icon" onClick={()=>setDrawer(true)}>
              <img src="./images/icon-menu.svg" alt="menu" />
            </div>
          <div class="logo-website">
            <a href="#logo"><img src="./images/logo.svg" alt="logo Website" /></a>
          </div>
            <ul>
              <li><a href="#collections">collections</a></li>
              <li><a href="#men">men</a></li>
              <li><a href="#women">women</a></li>
              <li><a href="#about">about</a></li>
              <li><a href="#contact">contact</a></li>
            </ul>
          </div>
          <div class="righ-div">
           
            <div class="cart" onClick={()=>setCart(!cart)}>
              <img src="./images/icon-cart.svg" alt="" />
                {cart &&  <Cart toCart={toCart} value={value} currPrice={currPrice} productName={productName}/>}
            </div>
            <div class="profile-avatar">
                <img src="./images/image-avatar.png" alt="" />
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar