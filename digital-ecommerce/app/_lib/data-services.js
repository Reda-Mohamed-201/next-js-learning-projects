// fetchProducts.js

import { client } from "./sanityClient";
import { supabase } from "./supabase";

export async function getProducts() {
  const query = '*[_type == "product"]'; // Query to fetch all products
  try {
    const products = await client.fetch(query);
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}
export async function getProduct(slug) {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;

  try {
    const product = await client.fetch(query);
    return product;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null; // Return null or handle errors as needed
  }
}

export async function getBanner() {
  const query = '*[_type == "banner"]'; // Query to fetch all products
  try {
    const bannerData = await client.fetch(query);
    return bannerData;
  } catch (error) {
    console.error("Error fetching Banner Data : ", error);
    return [];
  }
}
export async function getGuest(email) {
  const { data, error } = await supabase
    .from("guests")
    .select("*")
    .eq("email", email)
    .single();

  // No error here! We handle the possibility of no guest in the sign in callback
  return data;
}

export async function createGuest(newGuest) {
  const { data, error } = await supabase.from("guests").insert([newGuest]);

  if (error) {
    console.error(error);
    throw new Error("Guest could not be created");
  }

  return data;
}



