// components/Navbar.js
"use client";
import { useState } from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { useCart } from "./CartContext";
import defaultUser from "@/public/defaultUser.webp";
import Image from "next/image";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Navbar({ session }) {
  const [searchFor, setSearchFor] = useState("");
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  function handleSearch() {
    // console.log(searchFor);
    // const { search } = formData.get("search");
    const params = new URLSearchParams(searchParams);
    // console.log(pathname)
    params.set("productType", searchFor);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    setSearchFor("");
  }

  const { totalQuantity } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white w-full rounded-md shadow-sm pb-12 mb-5 left-0 min-[340px]:mx-2 fixed mx-auto z-10 h-12">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-12">
          <div className="flex items-center justify-between w-full  sm:w-auto">
            <div className="flex items-center ">
              <Link href="/" className=" text-xl font-bold text-black">
                DRAGONS
              </Link>
            </div>
            <div className="flex items-center sm:hidden">
              {totalQuantity ? (
                <Link
                  href="/cart"
                  className="cart-icon transition-all duration-500 text-black px-3 py-2 rounded-md text-2xl font-medium hover:bg-black hover:text-white"
                >
                  <AiOutlineShopping />
                  <span className="cart-item-qty"> {totalQuantity}</span>
                </Link>
              ) : null}

              {session?.user ? (
                <Link
                  href="/account"
                  className=" transition-colors flex items-center gap-4"
                >
                  {session.user.image ? (
                    <img
                      className="h-8 rounded-full w-8"
                      src={session?.user?.image}
                      alt={session?.user?.name}
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <Image
                      className="h-8 rounded-full w-8"
                      width={18}
                      height={18}
                      src={defaultUser}
                      alt={session?.user?.name}
                      referrerPolicy="no-referrer"
                    />
                  )}
                  <span className="font-semibold text-md">
                    {" "}
                    {session?.user?.name?.split(" ")?.at(0) ||
                      session?.user?.email
                        ?.split(".")
                        ?.at(0)
                        ?.split("@")
                        ?.at(0) ||
                      session?.user?.email?.split("@").at(0)}
                  </span>
                </Link>
              ) : (
                <>
                  <Link
                    href="/login"
                    className="text-black px-3 py-2 bg-gray-100 mx-2 rounded-md text-sm font-medium hover:bg-black hover:text-white transition-all duration-500"
                  >
                    Login
                  </Link>

                  <Link
                    href="/signup"
                    className="text-black px-3 py-2 bg-gray-100 rounded-md text-sm font-medium hover:bg-black hover:text-white  transition-all duration-500"
                  >
                    Sign up
                  </Link>
                </>
              )}
              <button
                onClick={toggleMenu}
                className="ml-2 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded={isOpen}
              >
                <span className="sr-only mr-3">Open main menu</span>
                {/* Icon when menu is closed. */}
                <svg
                  className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
                {/* Icon when menu is open. */}
                <svg
                  className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
          {/* Links Section */}
          <div className="hidden sm:flex transition-all  sm:items-center sm:justify-between sm:flex-1">
            <ul className="flex space-x-5 ml-10">
              <li>
                <Link
                  href="/"
                  className="transition-all  duration-500 text-black px-3 py-2 rounded-md text-sm font-medium hover:bg-black hover:text-white"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="transition-all  duration-500 text-black px-3 py-2 rounded-md text-sm font-medium hover:bg-black hover:text-white"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/shop"
                  className="text-black  transition-all duration-500 px-3 py-2 rounded-md text-sm font-medium hover:bg-black hover:text-white"
                >
                  Shop
                </Link>
              </li>
            </ul>

            <form className="search-form" action={handleSearch}>
              <input
                value={searchFor}
                onChange={(e) => {
                  setSearchFor(e.target.value);
                  handleSearch;
                }}
                type="text"
                placeholder="What are you looking for ? "
                className="search-input"
                name="search"
              />
              <button className="search-button">
                <CiSearch className="search-icon" />
              </button>
            </form>

            <ul className="flex space-x-4 items-center transition-all duration-500 ease-in-out justify-between">
              {session?.user ? (
                <Link
                  href="/account"
                  className=" transition-colors flex items-center gap-4"
                >
                  {session.user.image ? (
                    <img
                      className="h-8 rounded-full w-8"
                      src={session?.user?.image}
                      alt={session?.user?.name}
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <Image
                      className="h-8 rounded-full w-8"
                      width={18}
                      height={18}
                      src={defaultUser}
                      alt={session?.user?.name}
                      referrerPolicy="no-referrer"
                    />
                  )}
                  <span className="font-semibold text-md">
                    {" "}
                    {session?.user?.name?.split(" ")?.at(0) ||
                      session?.user?.email
                        ?.split(".")
                        ?.at(0)
                        ?.split("@")
                        ?.at(0) ||
                      session?.user?.email?.split("@").at(0)}
                  </span>
                </Link>
              ) : (
                <>
                  <li>
                    <Link
                      href="/login"
                      className="text-black transition-all bg-gray-100 duration-500 px-3 py-2 rounded-md text-sm font-medium hover:bg-black hover:text-white"
                    >
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/signup"
                      className="text-black transition-all duration-500 px-3 py-2 rounded-md text-sm font-medium hover:bg-black hover:text-white bg-gray-100"
                    >
                      Sign up
                    </Link>
                  </li>
                </>
              )}

              {totalQuantity ? (
                <li>
                  <Link
                    href="/cart"
                    className="cart-icon transition-all duration-500 text-black px-3 py-2 rounded-md text-2xl font-medium  "
                  >
                    <AiOutlineShopping />
                    <span className="cart-item-qty"> {totalQuantity}</span>
                  </Link>
                </li>
              ) : null}
            </ul>
          </div>
        </div>
      </div>
      {/* Mobile menu with transition */}
      <div
        className={`${isOpen ? "max-h-56 opacity-100 " : "max-h-0 opacity-0"} transition-all duration-500 ease-in-out bg-white opacity-90  overflow-hidden sm:hidden`}
        id="mobile-menu"
      >
        <ul className="px-2 pt-2 pb-3 space-y-1 transition-all duration-500 ease-in-out ">
          <form
            action={handleSearch}
            className="flex focus:border-none mt-[-11px] bg-gray-200  border-b border-black "
          >
            <input
              value={searchFor}
              onChange={(e) => {
                setSearchFor(e.target.value);
                handleSearch;
              }}
              type="text"
              placeholder="What are you looking for ? "
              className="search-input"
              name="search"
            />
            <button className=" text-2xl px-4 py-3 bg-gray-300">
              <CiSearch className="" />
            </button>
          </form>
          <li className="border-b border-black m-l-5">
            <Link
              href="/"
              className="text-black block px-3 py-2 rounded-md text-base font-medium hover:bg-black hover:text-white hover:ml-2 transition-all duration-500 ease-in-out"
            >
              Home
            </Link>
          </li>
          <li className="border-b border-black m-l-5">
            <Link
              href="/blog"
              className="text-black block px-3 py-2 rounded-md text-base font-medium hover:bg-black hover:text-white e hover:ml-2 transition-all duration-500 ease-in-out"
            >
              Blog
            </Link>
          </li>
          <li className="border-b border-black m-l-5">
            <Link
              href="/sale"
              className="text-black block px-3 py-2 rounded-md text-base font-medium hover:bg-black hover:text-white e hover:ml-2 transition-all duration-500 ease-in-out"
            >
              shop
            </Link>
          </li>
          {totalQuantity ? (
            <li className="border-b border-black m-l-5">
              <Link
                href="/cart"
                className="text-black block px-3 py-2 rounded-md text-base font-medium hover:bg-black hover:text-white e hover:ml-2 transition-all duration-500 ease-in-out"
              >
                cart
              </Link>
            </li>
          ) : null}
        </ul>
      </div>
    </nav>
  );
}
