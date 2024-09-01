import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: true,
  apiVersion: "2024-08-20",
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});
const builder =  imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}
