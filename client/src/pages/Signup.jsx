import React, { useState } from 'react';

function Signup() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        // Add signup logic here
        alert(`Username: ${username}\nPassword: ${password}`);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-orange-100 via-orange-200 to-orange-400">
            <div className="bg-white rounded-2xl shadow-2xl flex flex-col md:flex-row w-full max-w-4xl overflow-hidden">
                {/* Left Side - Illustration */}
                <div className="md:w-1/2 flex flex-col items-center justify-center bg-orange-500 p-8">
                    <img
                        src="https://img.freepik.com/free-vector/restaurant-interior_1284-16521.jpg?w=826&t=st=1685530356~exp=1685530956~hmac=3e2e2e2e2e2e2e2e2e2e2e2e2e2e2e2e"
                        alt="Restaurant"
                        className="rounded-xl shadow-lg mb-6 w-64 h-48 object-cover"
                    />
                    <h2 className="text-2xl font-bold text-white mb-2">Join Us!</h2>
                    <p className="text-orange-100 text-center">
                        Create your account to manage your restaurant.
                    </p>
                </div>
                {/* Right Side - Signup Form */}
                <div className="md:w-1/2 p-8 flex flex-col justify-center">
                    <h1 className="text-3xl font-bold text-orange-600 mb-6 text-center drop-shadow">
                        Restaurant CMS Signup
                    </h1>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2" htmlFor="username">
                                Username
                            </label>
                            <input
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
                                type="text"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="Enter your username"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2" htmlFor="password">
                                Password
                            </label>
                            <input
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 mb-2" htmlFor="confirmPassword">
                                Confirm Password
                            </label>
                            <input
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
                                type="password"
                                id="confirmPassword"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                placeholder="Confirm your password"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-orange-500 text-white py-2 rounded-lg font-semibold hover:bg-orange-600 transition shadow"
                        >
                            Sign Up
                        </button>
                    </form>
                    <p className="mt-6 text-center text-gray-500">
                        Already have an account?{' '}
                        <a href="/login" className="text-orange-500 font-semibold hover:underline">
                            Login
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Signup;