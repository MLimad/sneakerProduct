import React, { useState,useEffect } from "react";
import Navbar from "./components/Navbar";
import Product from "./components/Product";


function App() {
  // Is Sent to cart
  const [toCart,setToCart] = useState(false)
  // Increment Decrement Number input
  const [value,setValue] = useState(1) 
  // Calc new price 
  const [discount,setDiscount] = useState(50)
  const [currPrice,setCurrPrice] = useState()
  const [prevPrice,setPrevPrice] = useState(250)
  // Show Product Img
  const [src,setSrc] = useState("./images/image-product-1.jpg");
  const [img,setimg] = useState(1)
  // Product name
  const [productName,setProductname] = useState("fall limited edition sneakers")

 

  useEffect(()=>{
    setCurrPrice(prevPrice-(prevPrice*discount/100))
  },[discount])


   const increment  = () =>{
    setValue(value + 1)
   }

   const decrement  = () =>{
    setValue(value - 1)
   }

   const bindValue = (e)=>{
    setValue(e.target.value)
   }

   useEffect(()=>{
    if (value <= 1) {
      setValue(1)
    }
 
    },[value])


  const myCart = () =>{
    setToCart(true)
  }

  const getUrl = (e) =>{
    setSrc(e.target.src);
  }

  const nextImg = () =>{
    setimg(img + 1)
    if (img>=4) {
      setimg(1)
    }
  }

  const prectImg = () =>{
    setimg(img - 1)
    if (img<=1) {
      setimg(4)
    }
  }


  return (
    <div className="App">
      <Navbar 
        toCart={toCart} 
        value={value} 
        currPrice={currPrice}
        productName={productName}
      />

      <Product 

        productName={productName}
        myCart={myCart} 
        value={value} 
        bindValue={bindValue} 
        increment={increment} 
        decrement={decrement}
        discount={discount}
        currPrice={currPrice}
        prevPrice={prevPrice}
        getUrl={getUrl}
        src={src}
        nextImg={nextImg}
        prectImg={prectImg}
        img={img}

      />
    </div>
  );
}

export default App;
