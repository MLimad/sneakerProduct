import React from 'react'

function Cart_item({value,currPrice,productName}) {
  return (
    <div>
        <div className="item">
            <div className="img-item">
                <img src="./images/image-product-1-thumbnail.jpg" alt="img product"  />
            </div>
            <div className="name-product">
                <h6> {productName} ${currPrice} * {value} <b>${currPrice*value}</b> </h6>
            </div>
            <div className="delete-item">
                <img src="./images/icon-delete.svg" alt="delete" />
            </div>
        </div>
        <div className="checkout">
            <button>checkout</button>
        </div>
    </div>
  )
}

export default Cart_item