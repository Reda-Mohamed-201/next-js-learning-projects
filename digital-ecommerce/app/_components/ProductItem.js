"use client";

import { urlFor } from "../_lib/sanityClient";
import Link from "next/link";
import StarRating from "./StarRating";
import { useCart } from "./CartContext";
{
  /* <>
      <div
        key={product?._id}
        className="group relative overflow-hidden bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
      >
        <div className="relative">
          <img
            src={urlFor(product?.images?.at(0))}
            alt={product?.name}
            width={300}
            height={300}
            className="w-full h-48 object-cover object-center transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 flex items-center justify-center">
            <button className="bg-white text-black py-2 px-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Quick View
            </button>
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800">
            {product.name}
          </h3>
          <p className="text-gray-600 mt-1">${product.price}</p>
          <div className="flex items-center mt-2">
            <span className="text-yellow-500">★★★★☆</span>
          </div>
        </div>
      </div>
    </> */
}
function ProductItem({ product }) {
  const {
    cartItems,
    qty,
    incQty,
    decQty,
    totalPrice,
    totalQuantity,
    setCartItems,
    onAddToCart,
    setQty,
  } = useCart();
  return (
    <>
      <div
        key={product?._id}
        className="group relative overflow-hidden bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
      >
        <div className="relative">
          <img
            src={urlFor(product?.images?.at(0))}
            alt={product?.name}
            width={300}
            height={300}
            className="w-full h-48 object-contain object-center transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 flex items-center justify-center">
            <Link
              href={`/product/${product?.slug?.current}`}
              className="bg-white text-black py-2 px-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              Quick View
            </Link>
          </div>
        </div>
        <div className="p-4 h-24">
          <h3 className="text-lg font-semibold text-gray-800">
            {product.name.split(" ").slice(0, 4).join(" ")}
          </h3>
          <p className="text-gray-600 mt-1 mb-0 text-md font-semibold">
            ${product.price}
          </p>
        </div>
        <div className="mb-3 ml-2 mt-[-2px] flex justify-between">
          <StarRating size={21} defaultRating={product?.rate} />
          <button
            className="rounded-md min-[100px]:py-2 min-[100px]:px-1 min-[100px]:mr-2 md:py-1 lg:py-2 md:px-3 mr-1 flex-1 hover:bg-[#cab900] hover:text-white transition-all duration-300 bg-[#fcc419]"
            onClick={() => onAddToCart(product, 1)}
          >
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
}

export default ProductItem;
