import { motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import { ChartBarIcon } from "@heroicons/react/24/outline";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";

import "./Header.css";
import ImagePandaFace from "../../assets/face.png";
import { isUserLoggedIn, logout } from "../../lib/backend";

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
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/leaderboards"}>Leaderboards</NavLink>
              </li>
              <li>
                <NavLink to={"/help"}>Help & Support</NavLink>
              </li>
              <li>
                <NavLink to={"/admin/login"}>
                  Admin {isUserLoggedIn ? "Dashboard" : "Login"}
                </NavLink>
              </li>
              {isUserLoggedIn && (
                <li>
                  <div onClick={logout} className="font-bold italic">
                    Logout
                  </div>
                </li>
              )}
              <li className="menu-title">
                <span className="divider m-0 my-0 pointer-events-none"></span>
              </li>
              <li>
                <NavLink to={"/changelog"}>
                  Changelog
                </NavLink>
              </li>
              <li>
                <NavLink to={"/license"}>
                  License
                </NavLink>
              </li>
              <li>
                <NavLink to={"/terms-of-service"}>
                  Terms of Service
                </NavLink>
              </li>
              <li>
                <NavLink to={"/privacy-policy"}>
                  Privacy Policy
                </NavLink>
              </li>
              <li>
                <NavLink to={"/credits"}>
                  Credits
                </NavLink>
              </li>
              <li>
                <NavLink to={"/open-source-licenses"}>
                  Open Source Licenses
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <Link to={"/"}>
            <motion.a
              initial={{ y: -25, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.75, delay: 0.25 }}
              className="btn btn-ghost text-xl"
            >
              <div className="avatar">
                <div className="w-10">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={ImagePandaFace}
                  />
                </div>
              </div>
              Near
            </motion.a>
          </Link>
        </div>
        <div className="navbar-end">
          <NavLink to={"/leaderboards"} className="btn btn-ghost btn-circle">
            <ChartBarIcon className="w-6" />
          </NavLink>
          <NavLink to={"/help"} className="btn btn-ghost btn-circle">
            <div className="indicator">
              <QuestionMarkCircleIcon className="w-6" />
            </div>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export { Header };
