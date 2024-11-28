import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Journal, Journals, ListColumnsReverse, ListCheck, Book } from "react-bootstrap-icons";

import legalJson from "../data/legal.json";
import { useFetchRaw } from "../hooks";

const Legal = ({ legalType }) => {
  const legalData = legalJson[legalType];

  useEffect(() => {
    document.title = `${legalData.title} | Near`;
  });

  const { rawContent, isLoading, error } = useFetchRaw(legalData.raw_url);

  console.log(rawContent, isLoading, error)

  return (
    <>
      <div className="pt-10 md:pt-5 min-h-screen">
        <h1 className="text-3xl font-extrabold text-center">{legalData.title}</h1>
        <div className="grid grid-cols-1 bg-base-200 rounded-b-3xl rounded-t-3xl mx-4 md:mx-16 mt-5">
          <div className="rounded-b-2xl rounded-t-3xl h-[70vh] bg-base-100 pt-8 overflow-x-scroll">
            {isLoading ? (
              <div className="flex justify-center items-center h-72">
                <span className="loading loading-spinner text-error"></span>
              </div>
            ) : (
              <div className="prose max-w-full min-w-full w-full px-4 md:px-10">
                {error ? (`An error occured. Please try refreshing the page! ${error}`) : (
                  <>
                    {legalData.markdown ? (
                      <>
                        <Markdown remarkPlugins={[remarkGfm]}>{rawContent}</Markdown>
                      </>
                    ) : (
                      <>
                        <pre className="bg-base-100 text-gray-900 max-w-full min-w-full w-full">{rawContent}</pre>
                      </>
                    )}
                  </>
                )}
              </div>
            )}
          </div>
          <div className="flex justify-center items-center">
            <div className="min-h-full max-h-full h-full">
              <ul className="menu bg-base-200 menu-horizontal rounded-box text-lg">
                <li>
                  <NavLink to={"/license"}>
                    <Journal />
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/terms-of-service"}>
                    <Book />
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/privacy-policy"}>
                    <ListCheck />
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/credits"}>
                    <ListColumnsReverse />
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/open-source-licenses"}>
                    <Journals />
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { Legal };
