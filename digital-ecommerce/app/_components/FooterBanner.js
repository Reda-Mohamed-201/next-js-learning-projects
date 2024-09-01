"use client";
import Link from "next/link";
import { urlFor } from "../_lib/sanityClient";

function FooterBanner({ bannerData }) {
  const {
    discount,
    largeText1,
    largeText2,
    smallText,
    saleTime,
    midText,
    product,
    buttonText,
    image,
  } = bannerData;
  return (
    <div className="footer-banner-container">
      <div className="banner-desc flex items-start justify-between flex-wrap">
        <div className="left">
          <p>{discount}</p>
          <h3>{largeText1}</h3>
          <h3>{midText}</h3>
          <p>{saleTime}</p>
        </div>
        <div className="items-center  ">
          <img src={urlFor(image)} className="footer-banner-image " />
        </div>
        <div className="right">
          <p>{smallText}</p>

          <p>{midText}</p>
          <p>{discount}</p>

          <button type="button">Shop Now</button>
        </div>
      </div>
    </div>
  );
}

export default FooterBanner;
