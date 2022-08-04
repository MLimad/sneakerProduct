import React, { useEffect, useState } from 'react'

function Product({productName,myCart,decrement,increment,value,bindValue,prevPrice,currPrice,discount,getUrl,src,nextImg,img,prectImg}) {
  // Calc Discount Price
  // discounted_price = original_price - (original_price * discount / 100)
  


  return (
    <div>
        <div class="container">
        <main id="product">
          <div class="row">
            <div class="col-md-6">
              <div class="main-product">
                <div className="next-prev">
                      <div className="prev" onClick={()=>prectImg()}>
                    <img src="./images/icon-previous.svg" alt="previous"  />
                  </div>
                  <div className="next" onClick={()=>nextImg()}>
                    <img src="./images/icon-next.svg" alt="next"  />
                  </div>
                </div>
                <div className="mobile-slide">
                  <img src={`./images/image-product-${img}.jpg`} alt="" />
                </div>
                <div className="desktop-slide">
                   <img src={src} alt="" />
                </div>
              </div>
              <div class="product-thumb">
                <div class="box-img">
                  <img src="./images/image-product-1.jpg" alt="" onClick={(e)=>getUrl(e)}/>
                </div>
                <div class="box-img">
                  <img src="./images/image-product-2.jpg" alt=""  onClick={(e)=>getUrl(e)}/>
                </div>
                <div class="box-img">
                  <img src="./images/image-product-3.jpg" alt=""  onClick={(e)=>getUrl(e)} />
                </div>
                <div class="box-img">
                  <img src="./images/image-product-4.jpg" alt=""  onClick={(e)=>getUrl(e)}/>
                </div>
               
                
            </div>
          </div>
            <div class="col-md-6 p-5">
              <h5>sneaker company</h5>
              <h1>{productName}</h1>
              <p>These low-profile sneakers are your perfect casual wear companion.Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
              <div class="current-price">
                <h2>${currPrice}.00</h2>
                <span class="discount">
                  {discount}%
                </span>
              </div>
              <div class="prev-price">
                <h6>${prevPrice}.00</h6>
              </div>

              <div class="actions">
                
                <div class="row">
                  <div class="col-md-4">
                    <div class="nbr-of-itmes">
                      <input type="button" value="-" onClick={()=>decrement()} />
                      <input type="number" value={value} onChange={()=>bindValue()} />
                      <input type="button" value="+" onClick={()=>increment()} />
                    </div>
                  </div>
                  <div class="col-md-8">
                    <div class="command-item">
                      <button  onClick={()=>myCart()}>
                        <h6> <i class="fa fa-cart-plus" aria-hidden="true"></i> 
                          Add to Cart</h6>
                      </button>
                    </div>
                  </div>
                </div>
               
              </div>
             
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Product