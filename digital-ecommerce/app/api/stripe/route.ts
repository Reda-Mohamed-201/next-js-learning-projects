// "use server";

// import Stripe from "stripe";
// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// export default async function handler(req, res) {
//   if (req.method === "POST") {
//     try {
//       const params = {
//         submit_type: "pay",
//         mode: "payment",
//         payment_method_types: ["card"],
//         billing_address_collection: "auto",
//         shipping_options: [
//           {
//             shipping_rate: "shr_1PtFc7RvmgLfsqETqdgrXNVZ",
//           },
//           {
//             shipping_rate: "shr_1PtFdERvmgLfsqETHJc4F6r6",
//           },
//         ],

//         line_items: req.body.cartItems.map((item) => {
//           const img = item.images[0].assest._ref;
//           const newImage = img
//             .replace(
//               "image-",
//               "https://cdn.sanity.io/images/dxcar55j/production"
//             )
//             .replace("-webp", ".webp");
//           return {
//             price_data: {
//               currency: "usd",
//               product_data: {
//                 name: item.name,
//                 images: [newImage],
//               },
//               unit_amount: item.price * 100,
//             },
//             adjustable_quantity: {
//               enabled: true,
//               minimum: 1,
//             },
//             quantity: item.quantity,
//           };
//         }),
//         success_url: `${req.headers.origin}/?success=true`,
//         cancel_url: `${req.headers.origin}/?canceled=true`,
//       };
//       // Create Checkout Sessions from body params.
//       const session = await stripe.checkout.sessions.create(params);
//       res.status(200).json(session);
//     } catch (err) {
//       res.status(err.statusCode || 500).json(err.message);
//     }
//   } else {
//     res.setHeader("Allow", "POST");
//     res.status(405).end("Method Not Allowed");
//   }
// }

import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2022-08-01",
});

export async function POST(request: Request) {
  const { cartItems } = await request.json();

  try {
    const params = {
      submit_type: "pay",
      mode: "payment",
      payment_method_types: ["card"],
      billing_address_collection: "auto",
      shipping_options: [
        { shipping_rate: "shr_1PtFc7RvmgLfsqETqdgrXNVZ" },
        { shipping_rate: "shr_1PtFdERvmgLfsqETHJc4F6r6" },
      ],
      line_items: cartItems.map((item) => {
        console.log(item.images[0].asset);
        const img = item.images[0].asset._ref;
        const newImage = img
          .replace("image-", "https://cdn.sanity.io/image/dxcar55j/production")
          .replace("-webp", ".webp");
        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: item.name,
              images: [newImage],
            },
            unit_amount: item.price * 100,
          },
          adjustable_quantity: {
            enabled: true,
            minimum: 1,
          },
          quantity: item.quantity,
        };
      }),
      success_url: `${request.headers.get("origin")}/success`,
      cancel_url: `${request.headers.get("origin")}/canceled`,
    };

    const session = await stripe.checkout.sessions.create(params);
    return NextResponse.json(session);
  } catch (err) {
    return NextResponse.json(
      { error: err.message },
      { status: err.statusCode || 500 }
    );
  }
}
