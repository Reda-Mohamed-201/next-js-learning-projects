import ProductForm from "../_components/ProductForm";
import HandleAddProducts from "../_components/HandleAddProducts";
import { auth } from "../_lib/auth";

async function page() {
  const session = await auth();
  console.log(session.user.email.toString());
  return (
    <div className="">
      <h2 className="text-2xl font-semibold font-mono ">
        Hi, {session?.user?.name.split(" ").at(0)}
      </h2>
      {session?.user?.email.toString() === process.env.ADMIN_EMAIL && (
        <HandleAddProducts />
      )}
    </div>
  );
}

export default page;
