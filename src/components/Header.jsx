import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChartBarIcon } from "@heroicons/react/24/outline";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

import ImagePandaFace from "../assets/face.png";

const Header = () => {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/leaderboards"}>Leaderboards</Link>
              </li>
              <li>
                <Link to={"/help"}>Help & Support</Link>
              </li>
              <li>
                <Link to={"/admin/login"}>Admin Login</Link>
              </li>
              <li className="menu-title">
                <span className="divider m-0 my-0 pointer-events-none"></span>
              </li>
              <li>
                <a>
                  Changelog <ArrowTopRightOnSquareIcon className="w-4" />
                </a>
              </li>
              <li>
                <a>
                  Source Code <ArrowTopRightOnSquareIcon className="w-4" />
                </a>
              </li>
              <li>
                <a>
                  Privacy Policy <ArrowTopRightOnSquareIcon className="w-4" />
                </a>
              </li>
              <li>
                <a>
                  Terms and Agreement{" "}
                  <ArrowTopRightOnSquareIcon className="w-4" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <motion.a
            initial={{ y: -25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.75, delay: 0.25 }}
            className="btn btn-ghost text-xl"
          >
            <div className="avatar">
              <div className="w-10">
                <img alt="Tailwind CSS Navbar component" src={ImagePandaFace} />
              </div>
            </div>
            Near
          </motion.a>
        </div>
        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle">
            <ChartBarIcon className="w-6" />
          </button>
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <QuestionMarkCircleIcon className="w-6" />
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export { Header };
