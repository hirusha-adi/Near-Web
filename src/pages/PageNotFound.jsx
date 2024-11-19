import { useEffect } from "react";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

import ImagePanda404 from "../assets/404.png";

const PageNotFound = () => {
  useEffect(() => {
    document.title = `Page Not Found!`;
  });

  return (
    <>
      <div className="hero bg-gray-50 lg:pt-24 pt-12 lg:pb-60 pb-32">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <img
              src={ImagePanda404}
              alt="404 Error"
              className="min-w-72 w-96"
            />
            <p className="py-6 pb-12">
              The page you requested is nowhere to be found...
            </p>
            <Link to="/" className="btn">
              <ArrowLeftIcon className="w-5 font-bold" />
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export { PageNotFound };
