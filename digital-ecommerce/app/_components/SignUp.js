"use client";
import Link from "next/link";
import SignUpButton from "./SignUpButton";
import Shopingpic from "../../public/shopingpic.jpg";
import Image from "next/image";
import { signUpManual } from "../_lib/actions";
// import { signUpManual } from "../_lib/actions";

// components/Signup.js
export default function Signup() {
  return (
    <div className="flex justify-between align-center w-full h-[370px] space-x-8  md:mt-40  min-[1200px]:space-x-20 ">
      <div className="hidden  md:block">
        <Image
          src={Shopingpic}
          alt="shop pic"
          width={600}
          height={380}
          className="mt-[-70px]  min-[500px]:w-[450px] min-[768px]:w-[440px]  min-[1000px]:w-[670px] min-[1200px]:w-[750px]  mb-16 h-[630px]"
        />
      </div>
      <div className="min-[200px]:w-[550px] min-[200px]:m-auto  bg-white p-8 space-y-6 md:w-[1000px]  md:flex-1 min-[1200px]:w-[300px] rounded-md">
        <h2 className="text-2xl font-bold  font-serif text-[#1a1a1a]">
          Create an account
        </h2>
        <p className="text-md text-gray-600">Enter your details below</p>
        <form className="space-y-4" action={signUpManual}>
          <div>
            <input
              name="fullName"
              type="text"
              required
              id="name"
              className="w-full px-4 py-2 border-b border-gray-300  focus:outline-none focus:ring-0 "
              placeholder="Name"
            />
          </div>
          <div>
            <input
              type="email"
              id="email"
              required
              name="email"
              className="w-full px-4 py-2 border-b border-gray-300  focus:outline-none focus:ring-0 "
              placeholder=" Email "
            />
          </div>
          <div>
            <input
              type="password"
              id="password"
              required
              name="password"
              className="w-full px-4 py-2 border-b border-gray-300 mb-4  focus:outline-none focus:ring-0"
              placeholder="Password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition"
          >
            Create Account
          </button>
          {/* <button
            type="button"
            className="w-full bg-white text-black border border-gray-300 py-2 rounded-md flex justify-center items-center space-x-2 hover:bg-gray-100 transition"
          >
            <Image src={Shopingpic} alt="Google icon" className="w-5 h-5" />
            <span>Sign up with Google</span>
          </button> */}
        </form>
        <SignUpButton />
        <p className="text-center mt-4">
          Already have an account ?{"  "}
          <Link href="/login" className="underline text-blue-500 hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
