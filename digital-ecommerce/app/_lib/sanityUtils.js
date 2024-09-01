// import { client } from "./sanityClient"; // Adjust path as needed

// /**
//  * Uploads images to Cloudinary and returns the URLs.
//  * @param {File[]} files - Array of image files.
//  * @returns {Promise<string[]>} - Promise resolving to an array of image URLs.
//  */
// async function uploadImages(files) {
//   const cloudName = process.env.CLOUDINARY_CLOUD_NAME; // Replace with your Cloudinary cloud name
//   const uploadPreset = process.env.CLOUDINARY_UPLOAD_PRESET; // Replace with your Cloudinary upload preset

//   const imageUploadPromises = files.map(async (file) => {
//     const formData = new FormData();
//     formData.append("file", file);
//     formData.append("upload_preset", uploadPreset);

//     const res = await fetch(
//       `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
//       {
//         method: "POST",
//         body: formData,
//       }
//     );

//     const data = await res.json();
//     return data.secure_url; 
//   });

//   return Promise.all(imageUploadPromises);
// }

// export async function addProduct(product, images) {
//   try {
//     // const imageUrls = images.length ? await uploadImages(images) : [];

//     await client.create({
//       _type: "product",
//       name: product.name,
//       slug: { current: product.slug },
//       price: parseFloat(product.price),
//       rate: parseFloat(product.rate),
//       numberOfSales: parseInt(product.numberOfSales, 10),
//       details: product.details,
//       images: imageUrls.map((url) => ({
//         _type: "image",
//         asset: {
//           _ref: `image-${url}`,
//         },
//       })),
//     });

//     console.log("Product added successfully!");
//   } catch (error) {
//     console.error("Error adding product:", error);
//     throw new Error("Failed to add product.");
//   }
// }
