"use client";

import { useEffect, useState } from "react";
import { useCart } from "./CartContext";
import { BsBagCheckFill } from "react-icons/bs";
import Link from "next/link";
import { runFireWorks } from "../_lib/grtStripe";

function Success() {
  const { setCartItems, setTotalPrice, setTotalQuantity } = useCart();
  const [order, setOrder] = useState(null);
  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantity(0);
    runFireWorks();
  }, []);
  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Thank you for your order!</h2>
        <p className="email-msg">Check your email inbox for the receipt</p>
        <p className="description">
          If you have any questions, please email us
          <Link className="email" href="mailto:dragons@gmail.com">
            dragons@1.com{" "}
          </Link>
        </p>
        <Link href="/">
          <button width="300px" className="btn">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Success;
