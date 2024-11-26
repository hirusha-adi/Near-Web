import { useEffect, useState } from "react";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { KeyIcon } from "@heroicons/react/24/outline";
import Swal from "sweetalert2";

import { login } from "../../lib/backend";

const Login = () => {
  useEffect(() => {
    document.title = `Admin Login | Near`;
  });

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleLogin(e) {
    e.preventDefault();
    setErrorMessage(""); // reset for new attempt
    setIsLoading(true);

    console.log(user, password);
    if (!user || !password) {
      setErrorMessage("Username and password are required.");
      setIsLoading(false);
      Swal.fire({
        icon: "warning",
        title: "Missing Information",
        text: errorMessage,
        showCancelButton: true,
        showConfirmButton: false,
        cancelButtonText: "Close",
        customClass: {
          popup: "custom-swal-popup",
          cancelButton: "custom-swal-cancel-button",
        },
      });
      return;
    }

    try {
      /* 
        error catching doesn't work without `await`
        no idea why 
      */
      await login(user, password);
      setErrorMessage(""); // Clear error message on success
    }
    catch (error) {
      let errorMessage;
      if (error.status === 400) {
        errorMessage = "Invalid credentials. Please check your username and password.";
      } else if (error.status === 404) {
        errorMessage = "User not found. Please check your details.";
      } else {
        errorMessage = "An unexpected error occurred. Please try again later.";
      }
      setErrorMessage(errorMessage); // Update state with the error message

      // Show SweetAlert2 popup for the error
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: errorMessage,
        showCancelButton: true,
        showConfirmButton: false,
        cancelButtonText: "Close",
        customClass: {
          popup: "custom-swal-popup",
          cancelButton: "custom-swal-cancel-button",
        },
      });
    }
    finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <div className="min-h-screen pb-12 md:pb-56 flex flex-col items-center justify-center px-4">
        <div className="grid md:grid-cols-2 items-center gap-4 max-w-6xl w-full">
          <div className="border border-gray-300 rounded-lg p-6 max-w-md shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] max-md:mx-auto">
            <form className="space-y-4" onSubmit={handleLogin}>
              {/* Topic */}
              <div className="mb-8">
                <h3 className="text-3xl font-extrabold">Sign in</h3>
                <p className="text-sm mt-4 leading-relaxed">
                  Sign in to manage Near and all related settings.
                </p>
              </div>
              {/* Fields */}
              <label className="input input-bordered flex items-center gap-2">
                <EnvelopeIcon className="w-5" />
                <input
                  type="email"
                  className="grow"
                  placeholder="Email"
                  onChange={(e) => {
                    setUser(e.target.value);
                  }}
                  disabled={isLoading}
                />
              </label>
              <label className="input input-bordered flex items-center gap-2">
                <KeyIcon className="w-5" />
                <input
                  type="password"
                  className="grow"
                  placeholder="Password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  disabled={isLoading}
                />
              </label>
              {/* Login Button */}
              <div className="!mt-8">
                <button
                  className="btn btn-error w-full text-white"
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading ?
                    (<span className="loading loading-dots loading-lg"></span>)
                    : "Login"}
                </button>
              </div>
              {/* Contact */}
              <p className="text-sm !mt-8 text-center text-gray-800">
                Don&apos;t have an account?{" "}
                <a className="text-red-500 font-semibold hover:underline ml-1 whitespace-nowrap">
                  Contact Us
                </a>
              </p>
            </form>
          </div>
          {/* Image */}
          <div className="lg:h-[400px] md:h-[300px] max-md:mt-8">
            <img
              src="https://readymadeui.com/login-image.webp"
              className="w-full h-full max-md:w-4/5 mx-auto block object-cover"
              alt="Image"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export { Login };
