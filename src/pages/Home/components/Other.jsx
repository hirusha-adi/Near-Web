import { Link } from "react-router-dom";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

import ImagePandaMusic2 from "../../../assets/music-2.png";

const Other = () => {
  return (
    <div className="relative">
      <div
        className="absolute inset-0 blur-xl h-full"
        style={{
          background:
            "linear-gradient(40deg, rgba(255, 0, 0, 0) 20.79%, rgba(255, 69, 58, 0.26) 40.92%, rgba(255, 0, 0, 0) 70.35%)",
        }}
      ></div>
      <div className="relative">
        <section>
          <div className="max-w-screen-xl mx-auto px-4 pb-28 pt-12 md:pt-24 gap-12 overflow-hidden md:px-16 flex flex-col md:flex-row items-center">
            {/* Image Section */}
            <div className="flex justify-center flex-shrink-0 md:flex-1 w-full md:w-auto">
              <img
                src={ImagePandaMusic2}
                className="w-64 sm:w-64 md:w-96 mx-auto"
                alt="Panda Music"
              />
            </div>
            {/* Text Section */}
            <div className="flex-none space-y-5 max-w-xl mt-12 md:mt-2 text-center md:text-left">
              <h1 className="text-4xl font-extrabold sm:text-5xl">
                I do all sorts of stuff!
              </h1>
              <p>
                I do all sorts of stuff to keep your server fun and functional!
                From engaging jokes to encryption and decryption tools,
                generating fake information for scam baiting, password
                utilities, and basic server administration, I&apos;ve got you
                covered. Whether it&apos;s entertainment, security, or
                management, I&apos;m here to handle it all and make your
                experience seamless.
              </p>
              <div className="flex items-center justify-center md:justify-start gap-x-3 sm:text-sm">
                <Link to={"/help"} className="btn btn-ghost">
                  Learn more
                  <ArrowLongRightIcon className="w-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export { Other };
