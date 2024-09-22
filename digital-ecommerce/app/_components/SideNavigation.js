"use client";

import Link from "next/link";
import appstore from "../../public/appstore.png";
import googleplay from "../../public/googleplay.png";
// import {
//   CalendarDaysIcon,
//   HomeIcon,
//   UserIcon,
// } from "@heroicons/react/24/solid";
import SignOutButton from "./SignOutButton";
import { usePathname } from "next/navigation";
import Image from "next/image";

const navLinks = [
  {
    name: "Account home",
    href: "/account",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M12 4a4 4 0 1 0 0 8a4 4 0 0 0 0-8M6 8a6 6 0 1 1 12 0A6 6 0 0 1 6 8m2 10a3 3 0 0 0-3 3a1 1 0 1 1-2 0a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5a1 1 0 1 1-2 0a3 3 0 0 0-3-3z"
        />
      </svg>
    ),
  },
  {
    name: "My orders",
    href: "/account/order/history",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 256 256"
      >
        <path
          fill="currentColor"
          d="m225.6 62.64l-88-48.17a19.91 19.91 0 0 0-19.2 0l-88 48.17A20 20 0 0 0 20 80.19v95.62a20 20 0 0 0 10.4 17.55l88 48.17a19.89 19.89 0 0 0 19.2 0l88-48.17a20 20 0 0 0 10.4-17.55V80.19a20 20 0 0 0-10.4-17.55M128 36.57L200 76l-72 39.4L56 76ZM44 96.79l72 39.4v76.67l-72-39.42Zm96 116.07v-76.67l72-39.4v76.65Z"
        />
      </svg>
    ),
  },
  {
    name: "My minicash",
    href: "/account/minicash",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 32 32"
      >
        <path
          fill="currentColor"
          d="M31.453 4.625A6.8 6.8 0 0 0 27.385.562c-1.745-.563-3.333-.563-6.557-.563h-9.682c-3.198 0-4.813 0-6.531.531A6.8 6.8 0 0 0 .547 4.613C0 6.347 0 7.946 0 11.144v9.693c0 3.214 0 4.802.531 6.536a6.8 6.8 0 0 0 4.068 4.063c1.734.547 3.333.547 6.536.547h9.703c3.214 0 4.813 0 6.536-.531a6.8 6.8 0 0 0 4.078-4.078c.547-1.734.547-3.333.547-6.536v-9.667c0-3.214 0-4.813-.547-6.547zm-8.224 6.177l-1.245 1.24a.67.67 0 0 1-.891.01a6.7 6.7 0 0 0-4.292-1.573c-1.297 0-2.589.427-2.589 1.615c0 1.198 1.385 1.599 2.984 2.198c2.802.938 5.12 2.109 5.12 4.854c0 2.99-2.318 5.042-6.104 5.266l-.349 1.604a.65.65 0 0 1-.635.516h-2.391l-.12-.01a.67.67 0 0 1-.505-.786l.375-1.693a8.75 8.75 0 0 1-3.844-2.094v-.016a.64.64 0 0 1 0-.906l1.333-1.292a.66.66 0 0 1 .896 0a6.45 6.45 0 0 0 4.521 1.76c1.734 0 2.891-.734 2.891-1.896s-1.172-1.464-3.385-2.292c-2.349-.839-4.573-2.026-4.573-4.802c0-3.224 2.677-4.797 5.854-4.943l.333-1.641a.64.64 0 0 1 .641-.51h2.37l.135.016a.64.64 0 0 1 .495.76l-.359 1.828a10 10 0 0 1 3.302 1.849l.031.031c.25.266.25.667 0 .906z"
        />
      </svg>
    ),
  },
];

function SideNavigation() {
  const pathname = usePathname();

  return (
    <nav className="md:w-52 ">
      <ul className="flex flex-col gap-2 h-fit mb-5 shadow-md rounded-md  text-lg">
        {navLinks.map((link) => (
          <li
            key={link.name}
            className={`border-b px-4 hover:bg-[#dcdcdc]  ${
              pathname === link.href ? " bg-[#dcdcdc]" : ""
            }`}
          >
            {link.href === "/account" ? (
              <Link
                className={`py-3 rounded-md  px-2 font-semibold text-[15px] transition-colors flex items-center gap-4 `}
                href={link.href}
              >
                {link.icon}
                <span>{link.name}</span>
              </Link>
            ) : (
              <span
                className={`py-3 rounded-md  px-2 font-semibold text-[15px] transition-colors flex items-center gap-4 `}
                href={link.href}
              >
                {link.icon}
                <span>{link.name}</span>
              </span>
            )}
          </li>
        ))}

        <li className="">
          <SignOutButton />
        </li>
      </ul>
      <ul className="flex flex-col gap-2 h-fit  shadow-md rounded-md  text-lg">
        <li className="border-b px-4 ">
          <span
            className={`py-3  rounded-md  px-2 font-semibold text-[15px] transition-colors flex items-center gap-4  `}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.3em"
              height="1.3em"
              viewBox="0 0 20 20"
            >
              <path
                fill="currentColor"
                d="M19.295 12a.704.704 0 0 1 .705.709v3.204a.704.704 0 0 1-.7.709a.704.704 0 0 1-.7-.709v-1.125C16.779 17.844 13.399 20 9.757 20c-4.41 0-8.106-2.721-9.709-6.915a.71.71 0 0 1 .4-.917c.36-.141.766.04.906.405c1.4 3.662 4.588 6.01 8.403 6.01c3.371 0 6.52-2.182 7.987-5.154l-1.471.01a.704.704 0 0 1-.705-.704a.705.705 0 0 1 .695-.714zm-9.05-12c4.408 0 8.105 2.721 9.708 6.915a.71.71 0 0 1-.4.917a.697.697 0 0 1-.906-.405c-1.4-3.662-4.588-6.01-8.403-6.01c-3.371 0-6.52 2.182-7.987 5.154l1.471-.01a.704.704 0 0 1 .705.704a.705.705 0 0 1-.695.714L.705 8A.704.704 0 0 1 0 7.291V4.087c0-.392.313-.709.7-.709s.7.317.7.709v1.125C3.221 2.156 6.601 0 10.243 0"
              />
            </svg>
            Return Policy
          </span>
          <p className="text-sm mt-[-2px] ml-6 mb-2">
            Most items can be returned within 30 days of delivery
          </p>
        </li>
        <li className="border-b px-4 ">
          <span
            className={`py-3  rounded-md  px-2 font-semibold text-[15px] transition-colors flex items-center gap-4  `}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.5em"
              height="1.5em"
              viewBox="0 0 24 24"
            >
              <g fill="none">
                <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                <path
                  fill="currentColor"
                  d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m0 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16m0 12a1 1 0 1 1 0 2a1 1 0 0 1 0-2m0-9.5a3.625 3.625 0 0 1 1.348 6.99a.8.8 0 0 0-.305.201c-.044.05-.051.114-.05.18L13 14a1 1 0 0 1-1.993.117L11 14v-.25c0-1.153.93-1.845 1.604-2.116a1.626 1.626 0 1 0-2.229-1.509a1 1 0 1 1-2 0A3.625 3.625 0 0 1 12 6.5"
                />
              </g>
            </svg>
            Have a question?
          </span>
          <p className="text-sm mt-[-2px] font-semibold text-[#0022ff] ml-12 mb-2">
            19966{" "}
          </p>
        </li>
      </ul>
      <ul className="flex mt-3 flex-col gap-2 h-fit  shadow-md rounded-md  text-lg">
        <li className="border-b px-4 py-2 ">
          <span
            className={`py-3  rounded-md  px-2 font-semibold text-[15px] transition-colors  gap-4  `}
          >
            Use our app
          </span>
          <p className="text-[15px] px-1">
            Enjoy benefits & features use Dragons app
          </p>
          <Link href="/" className="flex justify-around items-center">
            <Image src={googleplay} width={100} height={50} alt="Google play" />
            <Image src={appstore} width={100} height={50} alt="App store" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default SideNavigation;
