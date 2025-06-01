import { Link } from 'react-router-dom';
import React from 'react';

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100 flex flex-col">
            {/* Navbar */}
            <nav className="w-full flex justify-end items-center p-6">
                <div className="space-x-4">
                    <Link
                        to="/login"
                        className="px-5 py-2 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
                    >
                        Login
                    </Link>
                    <Link
                        to="/signup"
                        className="px-5 py-2 rounded-md bg-purple-600 text-white font-semibold hover:bg-purple-700 transition"
                    >
                        Sign Up
                    </Link>
                </div>
            </nav>
            {/* Main Content */}
            <main className="flex flex-1 flex-col items-center justify-center text-center">
                <h1 className="text-5xl font-bold text-gray-800 mb-4">Welcome to CMS Project</h1>
                <p className="text-lg text-gray-600 mb-8">
                    Manage your content efficiently and securely.
                </p>
                <div className="space-x-4">
                    <Link
                        to="/signup"
                        className="px-8 py-3 rounded-md bg-purple-600 text-white font-semibold hover:bg-purple-700 transition"
                    >
                        Get Started
                    </Link>
                    <Link
                        to="/login"
                        className="px-8 py-3 rounded-md border border-blue-600 text-blue-600 font-semibold hover:bg-blue-50 transition"
                    >
                        Login
                    </Link>
                </div>
            </main>
        </div>
    );
}