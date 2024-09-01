"use client";
import Link from "next/link";
import { useCart } from "./CartContext";
import CartItems from "./CartItems";
import getStripe from "../_lib/grtStripe";
import toast from "react-hot-toast";
import { useEffect } from "react";

function Cart() {
  const {
    cartItems,
    qty,
    incQty,
    decQty,
    totalPrice,
    totalQuantity,
    setCartItems,
    setQty,
  } = useCart();

  async function handleCheckout() {
    const stripe = await getStripe();

    try {
      const response = await fetch("/api/stripe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cartItems: cartItems }), // Fix: Convert the body to JSON string
      });

      if (response.status === 500) {
        console.error("Internal Server Error");
        return;
      }

      const data = await response.json();
      toast.loading("Redirecting...");

      const result = await stripe.redirectToCheckout({ sessionId: data.id });

      if (result.error) {
        console.error(result.error.message);
        toast.error("Error redirecting to checkout");
      }
    } catch (error) {
      console.error("Error during checkout:", error);
      toast.error("An unexpected error occurred");
    }
  }

  return (
    <div className={`mt-14 sm:w-full `}>
      <div className="p-4 bg-white shadow-md rounded-md max-w-4xl sm:w-full mx-auto mt-6">
        <h2 className="text-2xl font-bold mb-4 text-[#253b4f]">
          Your Cart ({totalQuantity} items)
        </h2>
        {cartItems?.length === 0 ? (
          <div className="px-4 py-3">
            <Link
              href="/shop"
              className="text-sm text-blue-500 hover:text-blue-600 hover:underline"
            >
              &larr; return to continue your Shopping
            </Link>

            <p className="mt-7 font-semibold">
              Your cart is still empty. Start adding some products :)
            </p>
          </div>
        ) : (
          <>
            <ul className="h-auto">
              {cartItems?.map((item) => (
                <CartItems item={item} key={item?._id} />
              ))}
            </ul>
            <div className="mt-4  border-t border-gray-200 pt-4">
              <div className="flex justify-between mb-2">
                <span className="font-semibold">Total Quantity:</span>
                <span>{totalQuantity}</span>
              </div>
              <div className="flex justify-between mb-4">
                <span className="font-semibold">Total Price:</span>
                <span>${totalPrice}</span>
              </div>
              <button
                type="button"
                className=" text-center py-3 px-4 rounded-xl hover:scale-110 transition-all duration-300 ml-[45%] w-fit bg-red-500 text-white  "
                onClick={handleCheckout}
              >
                Pay with Stripe
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;
