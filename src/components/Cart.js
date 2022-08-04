import React from 'react'
import Cart_item from './Cart_item'

function Cart({toCart,value,currPrice,productName}) {
  return (
    <div>
         <div class="cart-box">
                <div class="heading">
                  <h6>Cart</h6>
                </div>
                <div class="cart-items">
                  {toCart ? <Cart_item value={value} currPrice={currPrice} productName={productName}  /> : <p>Your cart is empty</p> }
                </div>
              </div>
    </div>
  )
}

export default Cart