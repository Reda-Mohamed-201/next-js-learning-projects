"use client";
import Link from "next/link";
import { urlFor } from "../_lib/sanityClient";
import "../_styles/slider.css"
import { useState } from "react";
function HeroBanner({ bannerData }) {
  const [ind, setInd] = useState(0);
  function inc() {
    setInd((ind) => {
      if (ind + 1 === 3) return 2;
      return ind + 1;
    });
  }
  function dec() {
    setInd((ind) => {
      if (ind - 1 === -1) return 0;
      return ind - 1;
    });
  }
  return (
    <div className="hero-banner-container min-[340px]:w-full min-h-max max-w-full  ">
      <div>
        <p className="beats-solo">{bannerData[ind].smallText}</p>
        <h3>{bannerData[ind].midText}</h3>
        <h1>{bannerData[ind].largeText1}</h1>
        <img
          src={urlFor(bannerData[ind].image)}
          alt="headphones"
          className="hero-banner-image object-contain h-16"
        />
        <div>
          <Link href="/">
            <button type="button">{bannerData[ind].buttonText}</button>
          </Link>
          <div className="desc">
            <h5>Description</h5>
            <p>{bannerData[ind].largeText2}</p>
          </div>
        </div>
      </div>
      <svg
        onClick={inc}
        className="change-background right cursor-pointer "
        xmlns="http://www.w3.org/2000/svg"
        width="4em"
        height="1.5em"
        viewBox="0 0 1024 1024"
      >
        <path
          fill="gray"
          d="M754.752 480H160a32 32 0 1 0 0 64h594.752L521.344 777.344a32 32 0 0 0 45.312 45.312l288-288a32 32 0 0 0 0-45.312l-288-288a32 32 0 1 0-45.312 45.312z"
        />
      </svg>
      <svg
        onClick={dec}
        className="change-background left cursor-pointer "
        xmlns="http://www.w3.org/2000/svg"
        width="4em"
        height="1.5em"
        viewBox="0 0 32 32"
      >
        <path
          fill="gray"
          d="m14 26l1.41-1.41L7.83 17H28v-2H7.83l7.58-7.59L14 6L4 16z"
        />
      </svg>
    </div>
  );
}

export default HeroBanner;
