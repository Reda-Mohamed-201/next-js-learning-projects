import { urlFor } from "../_lib/sanityClient";
import { useCart } from "./CartContext";
import { useEffect } from "react";
function CartItems({ item }) {
  const {
    cartItems,
    qty,
    incQty,
    decQty,
    totalPrice,
    totalQuantity,
    setTotalQuantity,
    setCartItems,
    setTotalPrice,
    setQty,
  } = useCart();

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

  const handleChangeQuantity = (itemId, change) => {
    const product = cartItems.find((item) => item._id === itemId);

    if (!product) return;

    const newQuantity = product.quantity + change;

    if (newQuantity <= 0) {
      setCartItems((prevItems) =>
        prevItems.filter((item) => item._id !== itemId)
      );

      setTotalQuantity(
        (prevTotalQuantity) => prevTotalQuantity - product.quantity
      );
      setTotalPrice(
        (prevTotalPrice) => prevTotalPrice - product.price * product.quantity
      );
    } else {
      // Update item quantity
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item._id === itemId
            ? {
                ...item,
                quantity: newQuantity,
              }
            : item
        )
      );

      // Update total quantity and price
      setTotalQuantity((prevTotalQuantity) => prevTotalQuantity + change);
      setTotalPrice(
        (prevTotalPrice) => prevTotalPrice + product.price * change
      );
    }
  };

  // const imgSrc = urlFor(item && item.images && item?.images?.at(0));
  return (
    <li key={item?._id} className=" p-3 border-b border-gray-200 ">
      <div className="flex items-center min-[340px]:justify-center space-x-9 min-[340px]:flex-col sm:flex-row sm:justify-between">
        <div className="">
          <img
            src={urlFor(item?.images?.at(0))}
            alt={item?.name}
            className="w-32 h-32 object-cover rounded-md hover:bg-red-500 transition-all duration-500"
          />
        </div>
        <div className="flex flex-col min-[340px]:space-y-4  min-[340px]:items-center min-[340px]:justify-center md:justify-start md:items-start flex-1">
          <div className="flex-col flex">
            <span className="font-semibold text-xl text-left text-[#324d67]">
              {item?.name}
            </span>
            <span className="text-[#253b4f] text-lg font-semibold">
              ${item?.price.toFixed(2)}
            </span>
          </div>
          <div className="flex items-center space-x-2 mt-2">
            <button
              onClick={() => handleChangeQuantity(item._id, -1)}
              className="bg-gray-200   flex items-center justify-center pb-1 text-2xl w-9 h-9 rounded-full  text-gray-600 hover:bg-red-500 transition-all duration-500 hover:text-white "
            >
              -
            </button>
            <span className="text-lg min-[340px]:mx-2">{item?.quantity}</span>
            <button
              onClick={() => handleChangeQuantity(item._id, 1)}
              className="bg-gray-200 flex items-center justify-center pb-1 text-2xl w-9 h-9 rounded-full text-gray-600 hover:bg-red-500 transition-all duration-500 hover:text-white"
            >
              +
            </button>
          </div>
        </div>
        <button
          onClick={() => handleRemoveItem(item._id)}
          className="text-[#253b4f] min-[340px]:mt-7 md:right-5 md:text-left  hover:text-white hover:bg-red-500 transition-all duration-500 py-2 px-3 rounded-lg bg-gray-200"
        >
          Remove
        </button>
      </div>
    </li>
  );
}

export default CartItems;
