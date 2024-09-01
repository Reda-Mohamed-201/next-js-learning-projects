"use server";

import { signIn, signOut } from "./auth";
import { createGuest, getGuest } from "./data-services";
import { redirect } from "next/navigation";
import Stripe from "stripe";
export async function signInAction() {
  await signIn("google", { redirectTo: "/account" });
}

export async function signUpManual(formData) {
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  function isValidPassword(password) {
    return passwordRegex.test(password.toString());
  }
  const email = formData.get("email");
  const password = formData.get("password");
  const fullName = formData.get("fullName");
  // console.log(passwordRegex instanceof RegExp)
  if (!email || !fullName || !password) {
    throw new Error("All fields are required 🤔");
  }
  if (!isValidPassword(password)) {
    throw new Error(
      "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:"
    );
  }
  const data = await getGuest(email); //supabase
  // console.log(data)
  if (data) {
    throw new Error("This Account is Already Exist so you can login 🤦‍♂️");
  } else {
    // const hashedPassword = await hash(password, 12);
    const newUser = { fullName, email, password };
    await createGuest(newUser);
    redirect("/login");
  }
}
export async function handleLogIn(formData) {
  // console.log(formData);
  const email = formData.get("email");
  const password = formData.get("password");

  const guest = await getGuest(email); // supabase
  const fullName = guest?.fullName;
  if (!guest) {
    throw new Error("This Account does not exist please sign up first 🤦‍♂️");
  }
  const isMatched = password === guest.password;
  if (!isMatched) {
    throw new Error("Invalid password");
  }
  await signIn("credentials", {
    redirect: "false",
    callback: "/",
    email,
    password,
    fullName,
  });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}

