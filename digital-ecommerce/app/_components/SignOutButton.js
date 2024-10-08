import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid";
import { signOutAction } from "../_lib/actions";

function SignOutButton() {
  return (
    <form action={signOutAction}>
      <button className="py-3 px-5 hover:bg-red-700 hover:text-primary-100 transition-colors flex  gap-4 font-semibold  w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 36 36"
        >
          <path
            fill="currentColor"
            d="M7 6h16v9.8h2V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2H7Z"
            class="clr-i-outline clr-i-outline-path-1"
          />
          <path
            fill="currentColor"
            d="M28.16 17.28a1 1 0 0 0-1.41 1.41L30.13 22h-14.5a1 1 0 0 0-1 1a1 1 0 0 0 1 1h14.5l-3.38 3.46a1 1 0 1 0 1.41 1.41l5.84-5.8Z"
            class="clr-i-outline clr-i-outline-path-2"
          />
          <path fill="none" d="M0 0h36v36H0z" />
        </svg>{" "}
        <span>Sign out</span>
      </button>
    </form>
  );
}

export default SignOutButton;
