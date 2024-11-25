import { useState } from "react";

const DrawerAndLayout = ({ children }) => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-1">
        {/* Sidebar */}
        <div
          className={`fixed z-20 bg-base-200 h-full w-64 transition-transform transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            } md:translate-x-0 md:static`}
        >
          <div className="p-4">
            {/* Sidebar Content */}
            <h2 className="text-lg font-bold mb-4">Sidebar</h2>
            <ul className="menu menu-vertical">
              <li><a href="#">Link 1</a></li>
              <li><a href="#">Link 2</a></li>
              <li><a href="#">Link 3</a></li>
            </ul>
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
    </div>
  );
};

export { DrawerAndLayout };
