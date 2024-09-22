import { getProduct, getProducts } from "../../_lib/data-services";
import ProductDetails from "../../_components/ProductDetails";
async function page({ params }) {
  // console.log(params)
  const productData = await getProduct(params?.productSlug);
  // console.log(productData);

  const products = await getProducts();
  return (
    <div>
      <ProductDetails productData={productData} products={products} />
    </div>
  );
}

export default page;
