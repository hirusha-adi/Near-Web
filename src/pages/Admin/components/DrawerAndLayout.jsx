import { useState, useEffect } from "react";
import { BookOpenIcon, CogIcon, ChatBubbleOvalLeftIcon, MusicalNoteIcon, ChartPieIcon } from "@heroicons/react/24/outline";
import { Robot, ClockHistory, LayoutSidebar } from "react-bootstrap-icons";

const DrawerAndLayout = ({ children }) => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // disable scrolling on mobile when the sidebar is open
  // used only for small screens
  // -----
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = ""; // re-enable scrolling
    }
    return () => {
      // cleanup on unmount
      document.body.style.overflow = "";
    };
  }, [isSidebarOpen]);

  return (
    <div className="min-h-screen flex">

      {/* Sidebar */}
      <div
        className={`fixed z-20 bg-base-200 h-screen w-64 transition-transform transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 md:static`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Collapse Button */}
          <div className="md:hidden p-3 border-b border-gray-300">
            <div
              className="text-gray-800 btn rounded-xl w-full btn-ghost"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <LayoutSidebar className="text-xl" /> Hide Sidebar
            </div>
          </div>
          {/* Sidebar Content */}
          <div className="px-4 pt-2 pb-4 flex-1 overflow-y-auto">
            <h2 className="text-xl font-bold mb-4">Sections</h2>
            <ul className="menu menu-md bg-base-200 rounded-box w-56">
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
      </div>

      {/* Body Content */}
      <div className="flex flex-1 flex-col ">

        {/* Top Bar */}
        <div className="flex flex-row justify-between items-center flex-nowrap gap-4 bg-white px-4 md:px-6 py-2">
          {/* left column */}
          <div className="md:hidden">
            <div
              className="text-gray-800 btn rounded-xl btn-ghost"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <LayoutSidebar className="text-xl" /> Show Sidebar
            </div>
          </div>
          {/* right column */}
          <div className="flex items-center">
            <div className="breadcrumbs text-sm">
              <ul>
                <li>Statistics</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Page Content */}
        <main className="p-4">
          {children}
        </main>
      </div>

    </div>
  );
};

export { DrawerAndLayout };
