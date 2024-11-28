import { useEffect } from "react";
import { Link } from "react-router-dom";
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import legalJson from "../../data/legal.json";
import { useFetchRaw } from "../../hooks";

const Legal = ({ legalType }) => {
  const legalData = legalJson[legalType];

  useEffect(() => {
    document.title = `${legalData.title}`;
  });

  const { rawContent, isLoading, error } = useFetchRaw(legalData.raw_url);

  console.log(rawContent, isLoading, error)

  return (
    <>
      <div className="pt-5 min-h-screen">
        <h1 className="text-3xl font-extrabold text-center">{legalData.title}</h1>

        <div className="grid grid-cols-1 bg-base-200 rounded-b-3xl rounded-t-3xl mx-16 mt-5">
          <div className="rounded-b-2xl rounded-t-3xl h-96 bg-base-100 pt-8 overflow-x-scroll">
            {isLoading ? (
              <div className="flex justify-center items-center h-72">
                <span className="loading loading-spinner text-error"></span>
              </div>
            ) : (
              <div className="prose max-w-full min-w-full w-full px-10">
                {error ? (`An error occured. Please try refreshing the page! ${error}`) : (
                  <>
                    {legalData.markdown ? (
                      <>
                        <Markdown remarkPlugins={[remarkGfm]}>{rawContent}</Markdown>
                      </>
                    ) : (
                      <>
                        <pre className="bg-base-100 text-gray-900">{rawContent}</pre>
                      </>
                    )}
                  </>
                )}
              </div>
            )}
          </div>
          <div className="flex justify-center items-center">
            <div className="min-h-full max-h-full h-full">
              <ul className="menu bg-base-200 menu-horizontal rounded-box">
                <li>
                  <a>
                    Inbox
                  </a>
                </li>
                <li>
                  <a>
                    Updates
                  </a>
                </li>
                <li>
                  <a>
                    Stats
                  </a>
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
