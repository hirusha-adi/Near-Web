
const CommandsHelp = () => {
  return (
    <>
      {/* commands help (main section) */}
      <div className="flex flex-col md:flex-row mt-12">
        {/* Left (Desktop) / Top (Mobile) */}
        <div className="px-2 m-2 w-full md:w-auto">
          <div className="bg-base-200 rounded-box w-full md:w-64 max-h-96 min-h-96 overflow-y-auto overflow-x-hidden" style={{ minHeight: '28rem', maxHeight: '28rem' }}>
            <ul className="menu">
              <div className="menu-title text-lg text-gray-800">Commands List</div>
              <li>
                <details>
                  <summary>Administration</summary>
                  <ul>
                    <li><a>/move</a></li>
                  </ul>
                </details>
              </li>
              <li>
                <details>
                  <summary>Crypto</summary>
                  <ul>
                    <li><a>/btc</a></li>
                    <li><a>/eth</a></li>
                    <li><a>/xmr</a></li>
                    <li><a>/doge</a></li>
                    <li><a>/xrp</a></li>
                    <li><a>/rvn</a></li>
                  </ul>
                </details>
              </li>
              <li>
                <details>
                  <summary>Encoding</summary>
                  <ul>
                    <li><a>/b64encode</a></li>
                    <li><a>/b64decode</a></li>
                    <li><a>/md5</a></li>
                    <li><a>/sha1</a></li>
                    <li><a>/sha224</a></li>
                    <li><a>/sha512</a></li>
                    <li><a>/leet</a></li>
                  </ul>
                </details>
              </li>
              <li>
                <details>
                  <summary>Fake Information</summary>
                  <ul>
                    <li><a>/fake</a></li>
                    <li><a>/fakeprofiles</a></li>
                  </ul>
                </details>
              </li>
              <li>
                <details>
                  <summary>Fun</summary>
                  <ul>
                    <li><a>/inspire</a></li>
                    <li><a>/meme</a></li>
                    <li><a>/dadjoke</a></li>
                    <li><a>/joke</a></li>
                    <li><a>/wyr</a></li>
                    <li><a>/advice</a></li>
                  </ul>
                </details>
              </li>
              <li>
                <details>
                  <summary>General</summary>
                  <ul>
                    <li><a>/ping</a></li>
                    <li><a>/uptime</a></li>
                    <li><a>/clean</a></li>
                  </ul>
                </details>
              </li>
              <li>
                <details>
                  <summary>Information Gathering</summary>
                  <ul>
                    <li><a>/ipinfo</a></li>
                    <li><a>/avatar</a></li>
                    <li><a>/serverinfo</a></li>
                    <li><a>/userinfo</a></li>
                  </ul>
                </details>
              </li>
              <li>
                <details>
                  <summary>Music</summary>
                  <ul>
                    <li><a>/lyrics</a></li>
                    <li><a>--join</a></li>
                    <li><a>--leave</a></li>
                    <li><a>--play</a></li>
                    <li><a>--skip</a></li>
                    <li><a>--pause</a></li>
                    <li><a>--resume</a></li>
                    <li><a>--shuffle</a></li>
                    <li><a>--volume</a></li>
                  </ul>
                </details>
              </li>
              <li>
                <details>
                  <summary>Tools</summary>
                  <ul>
                    <li><a>/passwordgen</a></li>
                    <li><a>/passwordchk</a></li>
                    <li><a>/insta</a></li>
                    <li><a>/bin</a></li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
        </div>

        {/* Right (Desktop) / Bottom (Mobile) */}
        <div className="bg-base-100 p-4 rounded-box flex-1 px-5">
          Help Context, coverted from MD to HTML
        </div>
      </div>
    </>
  );
}

export { CommandsHelp }