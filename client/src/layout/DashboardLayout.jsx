import { Link, Outlet, useLocation } from "react-router-dom";
import { useState } from "react";

function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: "/dashboard/contact", label: "Contact" },
    { to: "/dashboard/menu", label: "Menu" },
    // Add more links if needed
  ];

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      {/* Sidebar */}
      <aside
        className={`
          fixed inset-y-0 left-0 z-30 w-64 bg-white shadow-lg transform
          transition-transform duration-300 ease-in-out
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:static md:inset-auto
        `}
      >
        <div className="flex items-center justify-center h-16 border-b border-gray-200 font-bold text-purple-700 text-xl">
          CMS Dashboard
        </div>
        <nav className="flex flex-col p-4 space-y-2">
          {navLinks.map(({ to, label }) => {
            const isActive = location.pathname === to;
            return (
              <Link
                key={to}
                to={to}
                className={`px-4 py-2 rounded cursor-pointer transition
                  ${
                    isActive
                      ? "bg-purple-600 text-white"
                      : "text-gray-700 hover:bg-purple-100 hover:text-purple-700"
                  }
                `}
                onClick={() => setSidebarOpen(false)} // close on mobile nav click
              >
                {label}
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Overlay for mobile sidebar */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-20 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main content area */}
      <div className="flex flex-col flex-1 w-full overflow-auto">
        {/* Header */}
        <header className="flex items-center justify-between bg-white shadow px-6 h-16">
          <button
            className="md:hidden text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-label="Toggle sidebar"
          >
            {/* Hamburger Icon */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <div className="flex items-center space-x-4">
            <div className="text-gray-700 font-semibold">Welcome, Admin</div>
            <button
              className="px-3 py-1 rounded bg-purple-600 text-white hover:bg-purple-700 transition"
              onClick={() => alert("Logout clicked!")}
            >
              Logout
            </button>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-8 bg-gray-100 min-h-[calc(100vh-64px)]">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;
