import { BookOpenIcon, CogIcon, ChatBubbleOvalLeftIcon, MusicalNoteIcon, ChartPieIcon } from "@heroicons/react/24/outline";
import { Robot, ClockHistory, LayoutSidebar } from "react-bootstrap-icons";

const DrawerAndLayout = ({ locationBreadcrumbs, children }) => {

  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">

          {/* page content goes here */}

          {/* start: top bar */}
          <div className="flex flex-row justify-between items-center flex-nowrap gap-4 bg-white px-4 md:px-6 py-2">
            {/* left side */}
            <div className="md:hidden">
              <label
                className="text-gray-800 btn rounded-xl btn-ghost"
                htmlFor="my-drawer-2"
              >
                <LayoutSidebar className="text-xl" /> Show Sidebar
              </label>
            </div>
            {/* right side */}
            <div className="flex items-center">
              <div className="breadcrumbs text-sm">
                <ul>
                  {locationBreadcrumbs.map((breadcrumb, index) => (
                    <li key={index}>{breadcrumb}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          {/* end: top bar */}

          <div className="px-2 md:px-5 pt-7">
            {children}
          </div>

        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu menu-md bg-base-200 rounded-box min-h-full w-80 p-4">
            <li><a><ChartPieIcon className="w-5 pt-1" />Statistics</a></li>
            <li>
              <details open>
                <summary><CogIcon className="w-5 pt-1" /> Settings</summary>
                <ul>
                  <li><a><Robot className="text-xl pt-1" />Bot</a></li>
                  <li>
                    <details open>
                      <summary><ChatBubbleOvalLeftIcon className="w-5 pt-1" />Embed</summary>
                      <ul>
                        <li><a>Configuration</a></li>
                        <li><a>Thumbnails</a></li>
                      </ul>
                    </details>
                  </li>
                  <li><a><MusicalNoteIcon className="w-5 pt-1" />Lavalink</a></li>
                </ul>
              </details>
            </li>
            <li>
              <details open>
                <summary><BookOpenIcon className="w-5 pt-1" /> Logs</summary>
                <ul>
                  <li><a><ClockHistory className="text-xl pt-1" />Commands</a></li>
                  <li><a><Robot className="text-xl pt-1" />Near</a></li>
                  <li><a><MusicalNoteIcon className="text-xl w-5 pt-1" />Lavalink</a></li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export { DrawerAndLayout };
