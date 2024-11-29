import { useState, useEffect } from "react";
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import { useFetchRaw } from "../../../hooks/useFetchRaw";

const CommandsHelp = () => {

  const [selectedCommand, setSelectedCommand] = useState("move");

  const url = `https://raw.githubusercontent.com/hirusha-adi/Near-Data/refs/heads/main/help/${selectedCommand}.md`;
  const { rawContent, isLoading, error } = useFetchRaw(url);


  return (
    <>
      {/* commands help (main section) */}
      <div className="flex flex-col md:flex-row mt-12">
        {/* Left (Desktop) / Top (Mobile) */}
        <div className="px-2 mx-2 mb-2 w-full md:w-auto">
          <div className="bg-base-200 rounded-box w-full md:w-64 overflow-y-auto overflow-x-hidden h-[82vh] max-h-[82vh] min-h-[82vh]" >
            <ul className="menu">
              <div className="menu-title text-lg text-gray-800">Commands List</div>
              <li>
                <details>
                  <summary>Administration</summary>
                  <ul>
                    <li><a onClick={() => setSelectedCommand("move")}>/move</a></li>
                  </ul>
                </details>
              </li>
              <li>
                <details>
                  <summary>Crypto</summary>
                  <ul>
                    <li><a onClick={() => setSelectedCommand("btc")}>/btc</a></li>
                    <li><a onClick={() => setSelectedCommand("eth")}>/eth</a></li>
                    <li><a onClick={() => setSelectedCommand("xmr")}>/xmr</a></li>
                    <li><a onClick={() => setSelectedCommand("doge")}>/doge</a></li>
                    <li><a onClick={() => setSelectedCommand("xrp")}>/xrp</a></li>
                    <li><a onClick={() => setSelectedCommand("rvn")}>/rvn</a></li>
                  </ul>
                </details>
              </li>
              <li>
                <details>
                  <summary>Encoding</summary>
                  <ul>
                    <li><a onClick={() => setSelectedCommand("b64encode")}>/b64encode</a></li>
                    <li><a onClick={() => setSelectedCommand("b64decode")}>/b64decode</a></li>
                    <li><a onClick={() => setSelectedCommand("md5")}>/md5</a></li>
                    <li><a onClick={() => setSelectedCommand("sha1")}>/sha1</a></li>
                    <li><a onClick={() => setSelectedCommand("sha224")}>/sha224</a></li>
                    <li><a onClick={() => setSelectedCommand("sha512")}>/sha512</a></li>
                    <li><a onClick={() => setSelectedCommand("leet")}>/leet</a></li>
                  </ul>
                </details>
              </li>
              <li>
                <details>
                  <summary>Fake Information</summary>
                  <ul>
                    <li><a onClick={() => setSelectedCommand("fake")}>/fake</a></li>
                    <li><a onClick={() => setSelectedCommand("fakeprofiles")}>/fakeprofiles</a></li>
                  </ul>
                </details>
              </li>
              <li>
                <details>
                  <summary>Fun</summary>
                  <ul>
                    <li><a onClick={() => setSelectedCommand("inspire")}>/inspire</a></li>
                    <li><a onClick={() => setSelectedCommand("meme")}>/meme</a></li>
                    <li><a onClick={() => setSelectedCommand("dadjoke")}>/dadjoke</a></li>
                    <li><a onClick={() => setSelectedCommand("joke")}>/joke</a></li>
                    <li><a onClick={() => setSelectedCommand("wyr")}>/wyr</a></li>
                    <li><a onClick={() => setSelectedCommand("advice")}>/advice</a></li>
                  </ul>
                </details>
              </li>
              <li>
                <details>
                  <summary>General</summary>
                  <ul>
                    <li><a onClick={() => setSelectedCommand("ping")}>/ping</a></li>
                    <li><a onClick={() => setSelectedCommand("uptime")}>/uptime</a></li>
                    <li><a onClick={() => setSelectedCommand("clean")}>/clean</a></li>
                  </ul>
                </details>
              </li>
              <li>
                <details>
                  <summary>Information Gathering</summary>
                  <ul>
                    <li><a onClick={() => setSelectedCommand("ipinfo")}>/ipinfo</a></li>
                    <li><a onClick={() => setSelectedCommand("avatar")}>/avatar</a></li>
                    <li><a onClick={() => setSelectedCommand("serverinfo")}>/serverinfo</a></li>
                    <li><a onClick={() => setSelectedCommand("userinfo")}>/userinfo</a></li>
                  </ul>
                </details>
              </li>
              <li>
                <details>
                  <summary>Music</summary>
                  <ul>
                    <li><a onClick={() => setSelectedCommand("lyrics")}>/lyrics</a></li>
                    <li><a onClick={() => setSelectedCommand("join")}>--join</a></li>
                    <li><a onClick={() => setSelectedCommand("leave")}>--leave</a></li>
                    <li><a onClick={() => setSelectedCommand("play")}>--play</a></li>
                    <li><a onClick={() => setSelectedCommand("skip")}>--skip</a></li>
                    <li><a onClick={() => setSelectedCommand("pause")}>--pause</a></li>
                    <li><a onClick={() => setSelectedCommand("resume")}>--resume</a></li>
                    <li><a onClick={() => setSelectedCommand("shuffle")}>--shuffle</a></li>
                    <li><a onClick={() => setSelectedCommand("volume")}>--volume</a></li>
                  </ul>
                </details>
              </li>
              <li>
                <details>
                  <summary>Tools</summary>
                  <ul>
                    <li><a onClick={() => setSelectedCommand("passwordgen")}>/passwordgen</a></li>
                    <li><a onClick={() => setSelectedCommand("passwordchk")}>/passwordchk</a></li>
                    <li><a onClick={() => setSelectedCommand("insta")}>/insta</a></li>
                    <li><a onClick={() => setSelectedCommand("bin")}>/bin</a></li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
        </div>

        {/* Right (Desktop) / Bottom (Mobile) */}
        <div className="bg-base-100 p-4 rounded-box flex-1 px-5 h-[82vh] max-h-[82vh] min-h-[82vh]">
          {isLoading ? (
            <div className="flex justify-center items-center h-80">
              <span className="loading loading-spinner text-error"></span>
            </div>
          ) : (
            <>
              {error ? (`An error occured. Please try refreshing the page! ${error}`) : (
                <div className="prose min-w-full max-w-full w-full">
                  <Markdown remarkPlugins={[remarkGfm]}>{rawContent}</Markdown>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}

export { CommandsHelp }