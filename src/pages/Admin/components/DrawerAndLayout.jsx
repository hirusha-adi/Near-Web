import { BookOpenIcon, CogIcon, ChatBubbleOvalLeftIcon, MusicalNoteIcon, ChartPieIcon } from "@heroicons/react/24/outline";
import { Robot, ClockHistory, LayoutSidebar } from "react-bootstrap-icons";
import { NavLink } from "react-router-dom";

const DrawerAndLayout = ({ locationBreadcrumbs, pageTitle, children }) => {

  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

        {/* start: page content */}
        <div className="drawer-content">
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
          <div className="px-2 md:px-5">
            <div className="mt-6 font-bold text-3xl text-center md:text-left">
              {pageTitle}
            </div>
            <div className="pt-8">
              {children}
            </div>
          </div>
        </div>
        {/* end: page content */}

        {/* start: side drawer */}
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu menu-sm bg-base-200 rounded-box min-h-full w-80 p-4">
            <h2 className="menu-title text-lg text-gray-600">Admin Dashboard</h2>
            <li><NavLink to={"/admin/statistics"}><ChartPieIcon className="w-5 pt-1" />Statistics</NavLink></li>
            <li>
              <details open>
                <summary><CogIcon className="w-5 pt-1" /> Settings</summary>
                <ul>
                  <li><NavLink to={"/admin/settings/bot"}><Robot className="text-xl pt-1" />Bot</NavLink></li>
                  <li>
                    <details open>
                      <summary><ChatBubbleOvalLeftIcon className="w-5 pt-1" />Embed</summary>
                      <ul>
                        <li><NavLink to={"/admin/settings/embed/configuration"}>Configuration</NavLink></li>
                        <li><NavLink to={"/admin/settings/embed/thumbnails"}>Thumbnails</NavLink></li>
                      </ul>
                    </details>
                  </li>
                  <li><NavLink to={"/admin/settings/lavalink"}><MusicalNoteIcon className="w-5 pt-1" />Lavalink</NavLink></li>
                </ul>
              </details>
            </li>
            <li>
              <details open>
                <summary><BookOpenIcon className="w-5 pt-1" /> Logs</summary>
                <ul>
                  <li><NavLink to={"/admin/logs/commands"}><ClockHistory className="text-xl pt-1" />Commands</NavLink></li>
                  <li><NavLink to={"/admin/logs/near"}><Robot className="text-xl pt-1" />Near</NavLink></li>
                  <li><NavLink to={"/admin/logs/lavalink"}><MusicalNoteIcon className="text-xl w-5 pt-1" />Lavalink</NavLink></li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
        {/* end: side drawer */}
      </div>
    </>
  );
};

export { DrawerAndLayout };
