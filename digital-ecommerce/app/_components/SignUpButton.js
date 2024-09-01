import { signInAction } from "../_lib/actions";

function SignUpButton({ status }) {
  return (
    <form action={signInAction}>
      <button
        className="flex items-center  
      rounded-md text-center gap-6 text-md border border-primary-200 w-80 px-10 mx-auto py-3 font-medium"
      >
        <img
          src="https://authjs.dev/img/providers/google.svg"
          alt="Google logo"
          height="24"
          width="24"
        />
        
        <span>{`${status === "login" ? "Login with Google" : "Sign up with Google"} `}</span>
      </button>
    </form>
  );
}

export default SignUpButton;
