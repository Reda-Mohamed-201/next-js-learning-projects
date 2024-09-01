import NotFound from "../_components/NotFound";
import ProductItem from "../_components/ProductItem";
import { getProducts } from "../_lib/data-services";
import "./shop.css";
async function page({ searchParams }) {
  // console.log(searchParams)
  let displayedProducts = await getProducts();
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

  // console.log(displayedProducts)

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {displayedProducts.length > 0 ? (
          displayedProducts.map((product) => (
            <ProductItem product={product} key={product?._id} />
          ))
        ) : (
          <NotFound />
        )}
      </div>
      {/* Pagination can be added here */}
    </div>
  );
}

export default page;
