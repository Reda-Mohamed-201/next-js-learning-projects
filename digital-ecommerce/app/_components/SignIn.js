"use client";
import Link from "next/link";
import Shopingpic from "@/public/shopingpic.jpg";
import Image from "next/image";
import { handleLogIn } from "../_lib/actions";
import { useRouter } from "next/navigation";
import SignUpButton from "./SignUpButton";
// components/Signup.js
export default function SignIn() {
  const router = useRouter();
  return (
    <div className="flex justify-between align-center w-full h-[370px] space-x-8  md:mt-40  min-[1200px]:space-x-20">
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
        <h2 className="text-2xl font-bold font-serif text-[#1a1a1a]">
          Log in to Dragons
        </h2>
        <p className="text-md text-gray-600">Enter your details below</p>
        <form
          class="space-y-4"
          action={async (formData) => {
            await handleLogIn(formData);
            router.push("/account");
          }}
        >
          <div>
            <input
              type="email"
              required
              name="email"
              id="email"
              className="w-full px-4 py-2 border-b border-gray-300  focus:outline-none focus:ring-0 "
              placeholder=" Email "
            />
          </div>
          <div>
            <input
              required
              name="password"
              type="password"
              id="password"
              className="w-full px-4 py-2 border-b border-gray-300 mb-4  focus:outline-none focus:ring-0"
              placeholder="Password"
            />
          </div>
          <button
            type="submit"
            class="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition"
          >
            Log in
          </button>
        </form>
        <p class="text-center mt-4">
          Forgot Password ?{"  "}
          <Link href="/login" class="text-blue-500 underline hover:underline">
            change it
          </Link>
        </p>
        <SignUpButton status="login" />
      </div>
    </div>
  );
}
