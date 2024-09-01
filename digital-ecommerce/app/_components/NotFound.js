import Link from "next/link";

function NotFound() {
  return (
    <div className="text-center w-full  absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] mb-[-200px] space-y-6 mt-4">
      <h1 className="text-3xl font-semibold">
        This Product could not be found :(
      </h1>
      <Link
        href="/shop"
        className="inline-block bg-accent-500 text-primary-800 px-6 py-3 text-lg"
      >
        Back to all Products
      </Link>
    </div>
  );
}

export default NotFound;
