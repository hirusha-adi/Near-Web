import { ChevronRightIcon } from "@heroicons/react/24/outline";
import ImagePandaFace from "../../../assets/face.png";
import ImagePandaSitting from "../../../assets/sitting.png";

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
          <div className="max-w-screen-xl mx-auto px-4 pb-28 pt-12 md:pt-24 gap-12 text-gray-600 overflow-hidden md:px-16 md:flex md:flex-row-reverse">
            {/* Image Section */}
            <div className="flex justify-center md:block md:flex-1 order-first md:order-none">
              <img
                src={ImagePandaSitting}
                className="w-48 sm:w-64 md:w-96 mx-auto block"
                alt="Panda Face"
              />
            </div>
            {/* Text Section */}
            <div className="flex-none space-y-5 max-w-xl">
              <a
                href="javascript:void(0)"
                className="gap-x-6 items-center rounded-2xl p-1 pr-6 border text-sm font-medium duration-150 hover:bg-white hidden md:inline-flex glass"
              >
                <span className="inline-block rounded-2xl px-3 py-1 bg-red-600 text-white">
                  News
                </span>
                <p className="flex items-center">
                  Version 8.0 has been released!
                  <ChevronRightIcon className="w-4" />
                </p>
              </a>
              <h1 className="text-4xl text-gray-900 font-extrabold sm:text-5xl">
                I am Near, The discord of TeamSDS.
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
          </div>
        </section>
      </div>
    </div>
  );
};

export { Introduction };
