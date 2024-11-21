import { useEffect } from "react";
import { UserIcon } from "@heroicons/react/24/outline";
import { KeyIcon } from "@heroicons/react/24/outline";

const AdminLogin = () => {
  useEffect(() => {
    document.title = `Admin Login`;
  });

  return (
    <>
      <div className="min-h-screen flex fle-col items-center justify-center py-6 px-4">
        <div className="grid md:grid-cols-2 items-center gap-4 max-w-6xl w-full">
          <div className="border border-gray-300 rounded-lg p-6 max-w-md shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] max-md:mx-auto">
            <form className="space-y-4">
              <div className="mb-8">
                <h3 className="text-gray-800 text-3xl font-extrabold">
                  Sign in
                </h3>
                <p className="text-gray-500 text-sm mt-4 leading-relaxed">
                  Sign in to manage Near and all related settings.
                </p>
              </div>

              <label className="input input-bordered flex items-center gap-2">
                <UserIcon className="w-5" />
                <input type="text" className="grow" placeholder="Username" />
              </label>

              <label className="input input-bordered flex items-center gap-2">
                <KeyIcon className="w-5" />
                <input
                  type="password"
                  className="grow"
                  placeholder="Password"
                />
              </label>

              <div className="!mt-8">
                <button
                  type="button"
                  className="btn btn-error w-full text-white"
                >
                  Login
                </button>
              </div>

              <p className="text-sm !mt-8 text-center text-gray-800">
                Don&apos;t have an account?{" "}
                <a
                  href="javascript:void(0);"
                  className="text-red-600 font-semibold hover:underline ml-1 whitespace-nowrap"
                >
                  Contact Us
                </a>
              </p>
            </form>
          </div>
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

export { AdminLogin };
