import { Link, Outlet } from 'react-router-dom';

function BasicLayout(props) {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            {/* Navbar */}
            <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center">
                <div className="text-2xl font-bold text-purple-700">
                    <Link to="/">CMS Project</Link>
                </div>
                <div className="space-x-6">
                    <Link
                        to="/"
                        className="text-gray-700 hover:text-purple-700 font-medium transition"
                    >
                        Home
                    </Link>
                    <Link
                        to="/contact"
                        className="text-gray-700 hover:text-purple-700 font-medium transition"
                    >
                        Contact
                    </Link>
                    <Link
                        to="/login"
                        className="px-4 py-2 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
                    >
                        Login
                    </Link>
                    <Link
                        to="/menu"
                        className="text-gray-700 hover:text-purple-700 font-medium transition"
                    >
                        Menu
                    </Link>
                </div>
            </nav>
            {/* Main Content */}
            <main className="flex-1 p-8">
                <Outlet />
            </main>
        </div>
    );
}

export default BasicLayout;