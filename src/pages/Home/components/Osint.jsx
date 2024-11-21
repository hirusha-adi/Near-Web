import { Link } from "react-router-dom";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

import ImagePandaSitting from "../../../assets/sitting.png";

const Osint = () => {
  return (
    <div className="relative">
      <div
        className="absolute inset-0 blur-xl h-full"
        style={{
          background:
            "linear-gradient(136deg, rgba(255, 0, 0, 0) 20.79%, rgba(255, 69, 58, 0.26) 40.92%, rgba(255, 0, 0, 0) 70.35%)",
        }}
      ></div>
      <div className="relative">
        <section>
          <div className="max-w-screen-xl mx-auto px-4 pb-28 pt-12 md:pt-24 gap-12 overflow-hidden md:px-16 md:flex md:flex-row-reverse">
            {/* Image Section */}
            <div className="flex justify-center md:block md:flex-1 order-first md:order-none">
              <img
                src={ImagePandaSitting}
                className="w-64 sm:w-64 md:w-96 mx-auto block"
                alt="Panda Face"
              />
            </div>
            {/* Text Section */}
            <div className="flex-none space-y-5 max-w-xl mt-12 md:mt-2 text-center md:text-left">
              <h1 className="text-4xl font-extrabold sm:text-5xl">
                I help with OSINT!
              </h1>
              <p>
                I assist with OSINT to fight against scammers by providing
                powerful tools and insights for uncovering fraudulent
                activities. Whether it&apos;s tracking down suspicious patterns,
                identifying malicious actors, or analyzing data, I aim to help
                protect communities and promote safety online. Together, we can
                work to expose scams and create a more secure digital
                environment.
              </p>
              <div className="flex items-center justify-center md:justify-start gap-x-3 sm:text-sm">
                <Link to={"/help"} className="btn btn-ghost">
                  Help & Support
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

export { Osint };
