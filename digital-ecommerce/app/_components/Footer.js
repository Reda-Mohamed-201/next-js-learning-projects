"use client";
import Link from "next/link";
import React from "react";

import {
  AiOutlineTwitter,
  AiFillLinkedin,
  AiFillFacebook,
  AiFillInstagram,
} from "react-icons/ai";
import { useCart } from "./CartContext";

function Footer() {
  const { cartItems } = useCart();
  return (
    <footer
      className={`w-full relative min-[40px]:relative  bottom-0 min-[40px]:bottom-0  ${cartItems?.length === 0 ? "mt-[270px]" : "mt-[100px]"}`}
    >
      <div className="footer-content ">
        <h3>Dragons Team</h3>
        <p className="">
          CHICX Website is a E-Commerce website where you will find great
          Products on nice web design and development. Here each product is
          beautifully rated by each customer who bought this product.
        </p>
        <ul className="socials m-16">
          <li>
            <Link href="/" className="social-icons">
              <AiFillInstagram className="hover:text-red-600  s-icon" />
            </Link>
          </li>
          <li>
            <Link href="/" className="social-icons">
              <AiOutlineTwitter className="hover:text-red-600  s-icon" />
            </Link>
          </li>
          <li>
            <Link href="/" className="social-icons w-40 h-40">
              <AiFillLinkedin className="hover:text-red-600  s-icon" />
            </Link>
          </li>
          <li>
            <Link href="/" className="social-icons">
              <AiFillFacebook className="hover:text-red-600  s-icon" />
            </Link>
          </li>
        </ul>
        <p className="footer-bottom">
          copyright © <Link href="/">Dragons Team</Link>{" "}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
