import { useEffect } from "react";

const AdminLogin = () => {
  useEffect(() => {
    document.title = `Admin Login`;
  });

  return (
    <>
      <div className="flex min-h-screen w-screen w-full items-center justify-center text-gray-600 bg-gray-50">
        <div className="relative">
          {/* ---------------------- */}
          {/* bg grid - top */}
          <div className="hidden sm:block h-56 w-56 text-red-300 absolute a-z-10 -left-20 -top-20">
            <svg
              id="patternId"
              width="100%"
              height="100%"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern
                  id="a"
                  patternUnits="userSpaceOnUse"
                  width="40"
                  height="40"
                  patternTransform="scale(0.6) rotate(0)"
                >
                  <rect x="0" y="0" width="100%" height="100%" fill="none" />
                  <path
                    d="M11 6a5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5 5 5 0 015 5"
                    stroke="none"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width="800%"
                height="800%"
                transform="translate(0,0)"
                fill="url(#a)"
              />
            </svg>
          </div>
          {/* bg grid - bottom */}
          <div className="hidden sm:block h-28 w-28 text-red-300 absolute a-z-10 -right-20 -bottom-20">
            <svg
              id="patternId"
              width="100%"
              height="100%"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern
                  id="b"
                  patternUnits="userSpaceOnUse"
                  width="40"
                  height="40"
                  patternTransform="scale(0.5) rotate(0)"
                >
                  <rect x="0" y="0" width="100%" height="100%" fill="none" />
                  <path
                    d="M11 6a5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5 5 5 0 015 5"
                    stroke="none"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width="800%"
                height="800%"
                transform="translate(0,0)"
                fill="url(#b)"
              />
            </svg>
          </div>
          {/* ---------------------- */}

          <div className="relative flex flex-col sm:w-[30rem] rounded-lg border-gray-400 bg-white shadow-lg px-4">
            <div className="flex-auto p-6">
              <div className="mb-10 flex flex-shrink-0 flex-grow-0 items-center justify-center overflow-hidden">
                <a className="flex cursor-pointer items-center gap-2 text-red-500 no-underline hover:text-red-500">
                  <span className="flex-shrink-0 text-3xl font-black tracking-tight opacity-100">
                    Admin Login
                  </span>
                </a>
              </div>
              <form id="" className="mb-4">
                <div className="mb-4">
                  <label className="mb-2 inline-block text-xs font-medium uppercase text-gray-700">
                    Email or Username
                  </label>
                  <input
                    type="text"
                    className="block w-full cursor-text appearance-none rounded-md border border-gray-400 bg--100 py-2 px-3 text-sm outline-none focus:border-red-500 focus:bg-white focus:text-gray-600 focus:shadow"
                    id="email"
                    name="email-username"
                    placeholder="Enter your email or username"
                  />
                </div>
                <div className="mb-4">
                  <label className="mb-2 inline-block text-xs font-medium uppercase text-gray-700">
                    Password
                  </label>
                  <div className="relative flex w-full flex-wrap items-stretch">
                    <input
                      type="password"
                      id="password"
                      className="relative block flex-auto cursor-text appearance-none rounded-md border border-gray-400 bg--100 py-2 px-3 text-sm outline-none focus:border-red-500 focus:bg-white focus:text-gray-600 focus:shadow"
                      name="password"
                      placeholder="············"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <a className="grid w-full cursor-pointer select-none rounded-md border border-red-500 bg-red-500 py-2 px-5 text-center align-middle text-sm text-white shadow hover:border-red-600 hover:bg-red-600 hover:text-white focus:border-red-600 focus:bg-red-600 focus:text-white focus:shadow-none">
                    Sign in
                  </a>
                </div>
              </form>

              <p className="mb-4 text-center">Don&apos;t have an account?</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { AdminLogin };
