import { ChevronRightIcon } from "@heroicons/react/24/outline";
import ImagePandaFace from "../../../assets/face.png";

const Introduction = () => {
  return (
    <div className="relative">
      <div
        className="absolute inset-0 blur-xl h-full"
        style={{
          background:
            "linear-gradient(143.6deg, rgba(255, 0, 0, 0) 20.79%, rgba(255, 69, 58, 0.26) 40.92%, rgba(255, 0, 0, 0) 70.35%)",
        }}
      ></div>
      <div className="relative">
        <section>
          <div className="max-w-screen-xl mx-auto px-4 py-28 gap-12 text-gray-600 overflow-hidden md:px-16 md:flex">
            <div className="flex-none space-y-5 max-w-xl">
              <a
                href="javascript:void(0)"
                className="inline-flex gap-x-6 items-center rounded-full p-1 pr-6 border text-sm font-medium duration-150 hover:bg-white"
              >
                <span className="inline-block rounded-full px-3 py-1 bg-red-600 text-white">
                  News
                </span>
                <p className="flex items-center">
                  Version 8.0 has been released!
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                      clipRule="evenodd"
                    />
                  </svg>
                </p>
              </a>
              <h1 className="text-4xl text-gray-800 font-extrabold sm:text-5xl">
                Build your SaaS exactly how you want
              </h1>
              <p>
                Sed ut perspiciatis unde omnis iste natus voluptatem accusantium
                doloremque laudantium, totam rem aperiam, eaque ipsa quae.
              </p>
              <div className="flex items-center gap-x-3 sm:text-sm">
                <a href="javascript:void(0)" className="btn">
                  Get started
                  <ChevronRightIcon className="w-5" />
                </a>
                <a href="javascript:void(0)" className="btn btn-ghost">
                  Contact sales
                  <ChevronRightIcon className="w-5" />
                </a>
              </div>
            </div>
            <div className="flex-1 md:block">
              {/* Replace with your image */}
              <img src={ImagePandaFace} className="w-96" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export { Introduction };
