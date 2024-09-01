"use client"; // Ensure this is a client component

import { useState } from "react";
import { addProduct } from "../_lib/sanityUtils";
import toast from "react-hot-toast";
import { client } from "../_lib/sanityClient";
// import { addProduct } from "../lib/sanityUtils"; // Adjust path as needed

export default function ProductForm() {
  const [formData, setFormData] = useState({
    name: "",
    slug: "",
    price: "",
    rate: "",
    numberOfSales: "",
    details: "",
    images: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData({ ...formData, images: files });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const imageRefs = await Promise.all(
      formData.images.map(async (image) => {
        const imageAsset = await client.assets.upload("image", image, {
          filename: image.name,
        });
        return {
          _type: "image",
          asset: {
            _type: "reference",
            _ref: imageAsset._id,
          },
        };
      })
    );
    // console.log(formData)
    try {
      // await addProduct(
      //   {
      //     name: formData.name,
      //     slug: formData.slug,
      //     price: formData.price,
      //     rate: formData.rate,
      //     numberOfSales: formData.numberOfSales,
      //     details: formData.details,
      //   },
      //   formData.images
      // );
      await client.create({
        _type: "product",
        name: formData.name,
        slug: { current: formData.slug },
        price: parseFloat(formData.price),
        rate: parseFloat(formData.rate),
        numberOfSales: parseInt(formData.numberOfSales, 10),
        details: formData.details,
        images: imageRefs,
      });

      toast.success("Product added successfully!");
      // Optionally, reset the form here
      setFormData({
        name: "",
        slug: "",
        price: "",
        rate: "",
        numberOfSales: "",
        details: "",
        images: [],
      });
    } catch (error) {
      toast.error("Failed to add product.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 max-w-lg mx-auto">
      <div>
        <label
          className="block text-sm font-medium text-gray-700"
          htmlFor="name"
        >
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          required
        />
      </div>

      <div>
        <label
          className="block text-sm font-medium text-gray-700"
          htmlFor="slug"
        >
          Slug
        </label>
        <input
          id="slug"
          name="slug"
          type="text"
          value={formData.slug}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          required
        />
      </div>

      <div>
        <label
          className="block text-sm font-medium text-gray-700"
          htmlFor="price"
        >
          Price
        </label>
        <input
          id="price"
          name="price"
          type="number"
          step="0.01"
          value={formData.price}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          required
        />
      </div>

      <div>
        <label
          className="block text-sm font-medium text-gray-700"
          htmlFor="rate"
        >
          Rate
        </label>
        <input
          id="rate"
          name="rate"
          type="number"
          step="0.1"
          value={formData.rate}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          required
        />
      </div>

      <div>
        <label
          className="block text-sm font-medium text-gray-700"
          htmlFor="numberOfSales"
        >
          Number of Sales
        </label>
        <input
          id="numberOfSales"
          name="numberOfSales"
          type="number"
          value={formData.numberOfSales}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          required
        />
      </div>

      <div>
        <label
          className="block text-sm font-medium text-gray-700"
          htmlFor="details"
        >
          Details
        </label>
        <textarea
          id="details"
          name="details"
          value={formData.details}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          rows="4"
        />
      </div>

      <div>
        <label
          className="block text-sm font-medium text-gray-700"
          htmlFor="images"
        >
          Images
        </label>
        <input
          id="images"
          name="images"
          type="file"
          multiple
          onChange={handleFileChange}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          required
        />
      </div>

      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        Add Product
      </button>
    </form>
  );
}
