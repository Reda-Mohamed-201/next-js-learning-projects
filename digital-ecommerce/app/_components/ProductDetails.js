"use client";

import { useState } from "react";
import Product from "./Product";
import {
  AiFillStar,
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineStar,
} from "react-icons/ai";
import { urlFor } from "../_lib/sanityClient";
import { useCart } from "./CartContext";
function ProductDetails({ productData, products }) {
  const {
    decQty,
    setCartItems,
    setTotalPrice,
    setTotalQuantity,
    incQty,
    cartItems,
    qty,
    onAddToCart,
  } = useCart();
  function handleBuyNow() {
    onAddToCart(productData, qty);
  }
  const handleRemoveItem = (itemId) => {
    const deletedProduct = cartItems?.filter((item) => item?._id === itemId);
    const deletedQuantity = deletedProduct[0]?.quantity;
    //  console.log(deletedProduct)
    //  console.log(totalQuantityAfterDeletion)
    setTotalQuantity((prevQuantity) => prevQuantity - deletedQuantity);
    setTotalPrice(
      (prevTotalPrice) =>
        prevTotalPrice - deletedProduct[0]?.price * Number(deletedQuantity)
    );
    setCartItems((prevItems) =>
      prevItems.filter((item) => item._id !== itemId)
    );
  };
  const [index, setIndex] = useState(0);
  const { name, details, price } = productData || {};
  const images = productData?.images ? productData.images : productData?.image;
  // console.log(productData);

  return (
    <div className="mt-24">
      <div className="product-detail-container">
        <div>
          <div className="product-detail-image">
            <img
              src={urlFor(images && images[index])}
              className="w-fit mb-5 shadow rounded-lg"
            />
          </div>
          <div className="small-images-container">
            {images?.map((item, i) => (
              <img
                src={urlFor(item)}
                className={
                  i === index ? "small-image shadow mt-6" : "small-image mt-6"
                }
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        </div>

        <div className="product-detail-desc">
          <h1 className="mt-2 text-3xl font-bold">{name}</h1>
          <div className="reviews">
            <div className="flex">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>(20)</p>
          </div>
          <h4 className="font-bold">Details: </h4>
          <p>{details}</p>
          <p className="price">${price}</p>
          <div className="quantity flex items-center">
            <h3 className="font-bold text-lg">Quantity:</h3>
            <p className="quantity-desc">
              <span className="minus" onClick={() => decQty()}>
                <AiOutlineMinus />
              </span>
              <span className="num">{qty}</span>
              <span className="plus" onClick={() => incQty()}>
                <AiOutlinePlus />
              </span>
            </p>
          </div>
          <div>
            <button
              type="button"
              className="bg-gray-200 mt-6 transition-all duration-300  p-3 rounded-xl text-black hover:bg-red-500 hover:text-white "
              onClick={() => handleRemoveItem(productData._id)}
            >
              Delete from Cart
            </button>
          </div>
          <div className="buttons">
            <button
              type="button"
              className="add-to-cart"
              onClick={() => onAddToCart(productData, qty)}
            >
              Add to Cart
            </button>
            <button type="button" className="buy-now" onClick={handleBuyNow}>
              Buy Now
            </button>
          </div>
        </div>
      </div>

      <div className="maylike-products-wrapper">
        <h2>You may also like</h2>
        <div className="marquee">
          <div className="maylike-products-container track">
            {products.map((item) => (
              <Product key={item._id} product={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
