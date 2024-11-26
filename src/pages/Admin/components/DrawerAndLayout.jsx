import { useState, useEffect } from "react";
import { BookOpenIcon, CogIcon, ChatBubbleOvalLeftIcon, MusicalNoteIcon, ChartPieIcon } from "@heroicons/react/24/outline";
import { Robot, ClockHistory } from "react-bootstrap-icons";
import { CardsLayout } from "../Home/components/Cards/CardLayout";

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
          <div className="md:hidden p-4">
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="btn btn-outline btn-error w-full"
            >
              Hide
            </button>
          </div>

          {/* Sidebar Content */}
          <div className="p-4 flex-1 overflow-y-auto">
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
        <div className="flex flex-row justify-between items-center flex-nowrap gap-4 bg-beige-100 p-4 md:p-6">
          {/* left column */}
          <div className="">
            <div className="text-gray-800 btn " onClick={() => setIsSidebarOpen(!isSidebarOpen)}>Show Sidebar</div>
          </div>
          {/* right column */}
          <div className="flex items-center">
            <div className="breadcrumbs text-sm">
              <ul>
                <li><a>Home</a></li>
                <li><a>Documents</a></li>
                <li>Add Document</li>
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
