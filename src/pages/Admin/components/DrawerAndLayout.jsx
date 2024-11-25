import { useState, useEffect } from "react";

const DrawerAndLayout = ({ children }) => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    if (isSidebarOpen) {
      // Disable scrolling on mobile when the sidebar is open
      document.body.style.overflow = "hidden";
    } else {
      // Re-enable scrolling
      document.body.style.overflow = "";
    }

    // Cleanup on unmount
    return () => {
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
            <h2 className="text-lg font-bold mb-4">Sidebar</h2>
            <ul className="menu menu-vertical">
              <li><a href="#">Link 1</a></li>
              <li><a href="#">Link 2</a></li>
              <li><a href="#">Link 3</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 flex-col md:ml-64">
        {/* Mobile Sidebar Toggle */}
        <div className="md:hidden p-4 bg-base-100">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="btn btn-primary"
          >
            {isSidebarOpen ? "Hide Sidebar" : "Show Sidebar"}
          </button>
        </div>

        {/* Page Content */}
        <main className="p-4">{children}</main>
      </div>
    </div>
  );
};

export { DrawerAndLayout };
