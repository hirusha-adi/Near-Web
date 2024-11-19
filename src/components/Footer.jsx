import ImagePandaSitting from "../assets/sitting.png";
import { ChartBarIcon } from "@heroicons/react/24/outline";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import { CodeBracketIcon } from "@heroicons/react/24/outline";
import { Discord } from "react-bootstrap-icons";

const Footer = () => {
  return (
    <>
      <footer className="footer footer-center bg-base-200 p-10">
        <aside className="flex flex-col items-center md:flex-row md:justify-center md:gap-8">
          <img src={ImagePandaSitting} alt="" className="w-28" />
          <div className="flex flex-col justify-center items-center text-center md:items-start md:text-left">
            <p>
              <p>
                <span className="font-bold text-2xl">Near,</span>
                <br />
                <span className="text-md">a Discord bot for TeamSDS.</span>
              </p>
              <p className="mt-5">
                <a className="btn mx-1">
                  <ChartBarIcon className="w-6 inline-block" />
                </a>
                <a className="btn mx-1">
                  <QuestionMarkCircleIcon className="w-6 inline-block" />
                </a>
                <a className="btn mx-1">
                  <CodeBracketIcon className="w-6 inline-block" />
                </a>
                <a className="btn mx-1">
                  <Discord className="text-xl w-6 inline-block" />
                </a>
              </p>
            </p>
          </div>
        </aside>
        <p className="mt-1 text-center">
          © 2021-{new Date().getFullYear()} Hirusha Adikari. All rights
          reserved.
        </p>
      </footer>
    </>
  );
};

export { Footer };
