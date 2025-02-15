import { Link } from "react-router-dom";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Typewriter from "typewriter-effect";

import ImagePandaSitting from "../../../assets/sitting.png";

const Introduction = () => {
  return (
    // add `min-h-screen` if i'm gonna remove other sections of the home page
    <div className="relative">
      <div
        className="absolute inset-0 blur-xl h-full"
        style={{
          background:
            "linear-gradient(145deg, rgba(255, 0, 0, 0) 20.79%, rgba(255, 69, 58, 0.26) 40.92%, rgba(255, 0, 0, 0) 70.35%)",
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
              <a
                href="https://github.com/hirusha-adi/Near/releases/latest"
                className="gap-x-6 items-center rounded-2xl p-1 pr-6 border text-sm font-medium duration-150 hover:bg-white hidden md:inline-flex glass"
              >
                <span className="inline-block rounded-2xl px-3 py-1 bg-red-600 text-white">
                  News
                </span>
                <p className="flex items-center">
                  Version 0.8 has been released!
                  <ChevronRightIcon className="w-4" />
                </p>
              </a>
              <h1 className="text-4xl font-extrabold sm:text-5xl">
                I am Near,
                <Typewriter
                  options={{
                    strings: [
                      "I play music!",
                      "I help scambait!",
                      "I help with OSINT!",
                      "I generate fake info!",
                      "I provide useful tools!",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h1>
              <p>
                I am a Discord bot designed to help you with all your needs in
                the TeamSDS server. I can help you with a variety of tasks, such
                as playing music, finding resources, and even OSINT! I&apos;m
                always happy to help, so feel free to ask me anything!
              </p>
              <div className="flex items-center justify-center md:justify-start gap-x-3 sm:text-sm">
                <Link to={"/leaderboards"} className="btn">
                  Leaderboard
                  <ChevronRightIcon className="w-5" />
                </Link>
                <Link to={"/help"} className="btn btn-ghost">
                  Help & Support
                  <ChevronRightIcon className="w-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export { Introduction };
