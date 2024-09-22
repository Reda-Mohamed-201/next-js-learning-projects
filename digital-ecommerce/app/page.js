import Product from "./_components/Product";
import FooterBanner from "./_components/FooterBanner";
import HeroBanner from "./_components/HeroBanner";
import { getBanner, getProducts } from "./_lib/data-services";
import Link from "next/link";
import NotFound from "./_components/NotFound";

export default async function Home({ searchParams }) {
  // Fetch products and banner data
  let displayedProducts = await getProducts();
  const bannerData = await getBanner();
  const filter = searchParams?.productType ?? "";

  // Ensure params is handled correctly
  const searchTerm =
    filter && typeof filter === "string" ? filter.toLowerCase() : "";

  if (searchTerm) {
    // Filter products based on the search term
    displayedProducts = displayedProducts.filter(
      (product) =>
        product.details.toLowerCase().includes(searchTerm) ||
        product.name.toLowerCase().includes(searchTerm)
    );
  }

  return (
    <div>
      <HeroBanner bannerData={bannerData.length ? bannerData : []} />
      <div className="products-heading">
        <h2>Best Seller Products</h2>
        <p>Speaker, there are many variations passages</p>
      </div>
      <div className="products-container">
        {displayedProducts.length > 0 ? (
          displayedProducts?.map((product) => (
            <Product key={product._id} product={product} />
          ))
        ) : (
          <div className="relative products-container mt-16 ">
            <NotFound />
          </div>
        )}
      </div>
      {displayedProducts > 0 && (
        <div className="mt-16 mb-16 text-center">
          <Link href="/shop">
            <button className="bg-red-600 py-4 px-5 w-46 h-16 rounded-lg text-lg hover:bg-red-700 transition-all duration-300 text-white">
              Show more Products
            </button>
          </Link>
        </div>
      )}
      <FooterBanner bannerData={bannerData.length ? bannerData[0] : null} />
    </div>
  );
}
