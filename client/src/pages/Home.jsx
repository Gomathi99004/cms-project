import { Link } from 'react-router-dom';
import React from 'react';

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-200 via-yellow-100 to-pink-200 flex flex-col relative overflow-hidden">
            {/* Animated Food Theme - Floating Burger */}
            <div className="absolute left-10 top-24 animate-bounce-slow z-0">
                <img
                    src="https://cdn-icons-png.flaticon.com/512/3075/3075977.png"
                    alt="Burger"
                    className="w-24 h-24 opacity-80 drop-shadow-lg"
                />
            </div>
            {/* Animated Food Theme - Floating Pizza */}
            <div className="absolute right-10 top-40 animate-float z-0">
                <img
                    src="https://cdn-icons-png.flaticon.com/512/3132/3132693.png"
                    alt="Pizza"
                    className="w-20 h-20 opacity-80 drop-shadow-lg"
                />
            </div>
            {/* Animated Food Theme - Floating Drink */}
            <div className="absolute left-1/2 bottom-10 animate-bounce z-0">
                <img
                    src="https://cdn-icons-png.flaticon.com/512/1046/1046784.png"
                    alt="Drink"
                    className="w-16 h-16 opacity-80 drop-shadow-lg"
                />
            </div>
            {/* More Food Items for Background */}
            <div className="absolute right-1/4 top-10 animate-float z-0">
                <img
                    src="https://cdn-icons-png.flaticon.com/512/135/135620.png"
                    alt="Fries"
                    className="w-16 h-16 opacity-60 drop-shadow-lg"
                />
            </div>
            <div className="absolute left-1/4 bottom-24 animate-bounce-slow z-0">
                <img
                    src="https://cdn-icons-png.flaticon.com/512/1046/1046786.png"
                    alt="Ice Cream"
                    className="w-14 h-14 opacity-60 drop-shadow-lg"
                />
            </div>
            {/* Navbar */}
            <nav className="w-full flex justify-end items-center p-6 z-10 relative">
                <div className="space-x-4">
                    <Link
                        to="/signin"
                        className="px-5 py-2 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
                    >
                        Sign In
                    </Link>
                    <Link
                        to="/signup"
                        className="px-5 py-2 rounded-md bg-purple-600 text-white font-semibold hover:bg-purple-700 transition"
                    >
                        Sign Up
                    </Link>
                </div>
            </nav>
            {/* Main Content in a Card */}
            <main className="flex flex-1 flex-col items-center justify-center text-center z-10 relative">
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 rounded-2xl shadow-2xl px-10 py-12 max-w-lg w-full border-4 border-orange-300 ring-4 ring-orange-100 ring-opacity-40 backdrop-blur-md">
        <h1 className="text-5xl font-bold text-orange-400 mb-4 drop-shadow-lg">Welcome to <strong>FORK & FLAME</strong></h1>
        <p className="text-lg text-gray-200 mb-8">
            Manage your content efficiently and securely.
        </p>
        <div className="space-x-4">
            <Link
                to="/signup"
                className="px-8 py-3 rounded-md bg-purple-600 text-white font-semibold hover:bg-purple-700 transition shadow-lg ring-2 ring-purple-300"
            >
                Get Started
            </Link>
            <Link
                to="/signin"
                className="px-8 py-3 rounded-md border border-blue-400 text-blue-300 font-semibold hover:bg-blue-900 hover:text-white transition shadow-lg ring-2 ring-blue-200"
            >
                Sign In
            </Link>
        </div>
    </div>
</main>
            {/* Custom Animations */}
            <style>
                {`
                @keyframes float {
                    0% { transform: translateY(0px);}
                    50% { transform: translateY(-30px);}
                    100% { transform: translateY(0px);}
                }
                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }
                .animate-bounce-slow {
                    animation: bounce 2.5s infinite;
                }
                `}
            </style>
        </div>
    );
}