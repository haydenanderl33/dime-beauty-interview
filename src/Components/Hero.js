import { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import toast, { Toaster } from "react-hot-toast";
import DiscountBar from "./DiscountBar";

const Hero = () => {
  const [progress, setProgress] = useState(0);
  const [products, setProducts] = useState([
    {
      name: "Probiotic Gel Cream",
      reviews: 7,
      price: 40,
    },
    {
      name: "Creamy Foam Cleanser",
      reviews: 146,
      price: 32,
    },
    {
      name: "Volume Mascara",
      reviews: 25,
      price: 22,
    },
    {
      name: "Cleansing Balm",
      reviews: 184,
      price: 38,
    },
  ]);

  const [myCart, setMyCart] = useState([]);

  useEffect(() => {
    if(progress >= 50){
      
      toast.success('Eligible for 10% Discount',{duration: 4000,icon:'💰'})
    }
  })

  const addToCart = (product) => {
    let cart = [...myCart];
    cart.push(product);
    setMyCart(cart);
    toast.success(`${product.name} added to cart`);

    let cartPrice = cart.map((e) => e.price);
    console.log(cartPrice);

    let prog = cartPrice.reduce((prev, curr) => prev + curr, 0);

    setProgress(prog / 2);
  };

  return (
    <div className="hero-cont">
      <div className="hero-wrapper">
        {products.map((product, index) => (
          <div key={index} className="product-box">
            <div className="pic"></div>
            <div className="description">
              <h3>{product.name}</h3>
              <div className="star-review-cont">
                <div className="star-cont">
                  <AiFillStar />
                </div>
                <div className="star-cont">
                  <AiFillStar />
                </div>
                <div className="star-cont">
                  <AiFillStar />
                </div>
                <div className="star-cont">
                  <AiFillStar />
                </div>
                <div className="star-cont">
                  <AiFillStar />
                </div>

                <p>{product.reviews} Reviews</p>
              </div>
              <h3>${product.price}</h3>

              <div className="btn-cont">
                <button onClick={() => addToCart(product)}>
                  Add To Bundle
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <DiscountBar progress={progress} />
      <Toaster />
    </div>
  );
};

export default Hero;
