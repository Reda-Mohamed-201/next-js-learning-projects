"use client";
import { useState } from "react";
import ProductForm from "./ProductForm";

async function HandleAddProducts() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className={`${!showForm ? "md:mt-[450px] md:ml-[700px]" : ""}`}>
      {!showForm && (
        <button
          onClick={() => setShowForm((prev) => !prev)}
          className="rounded-md mt-auto text-xl text-white px-5 py-5 bg-[#001451] hover:bg-[#00103e] transition-all duration-300"
        >
          Add more Products
        </button>
      )}
      {showForm && <ProductForm />}
    </div>
  );
}

export default HandleAddProducts;
