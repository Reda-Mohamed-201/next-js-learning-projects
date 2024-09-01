"use client";
import Link from "next/link";
import { urlFor } from "../_lib/sanityClient";

function product({ product }) {
  return (
    <div className="">
      <Link href={`/product/${product?.slug?.current}`} >
        <div className="product-card w-64 rounded-lg p-5 m-1 h-72 shadow">
          <img
            src={urlFor(product?.images?.at(0))}
            quality={100}
            width={250}
            height={250}
            className="product-image w-44 h-44"
          />
          <p className="product-name">{product?.name.split(" ").slice(0, 5).join(" ") }</p>
          <p className="product-price">${product?.price}</p>
        </div>
      </Link>
    </div>
  );
}

export default product;
