import React, { useState } from 'react';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add authentication logic here
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
                    <h2 className="text-2xl font-bold text-white mb-2">Welcome Back!</h2>
                    <p className="text-orange-100 text-center">
                        Sign in to manage your restaurant with ease.
                    </p>
                </div>
                {/* Right Side - Login Form */}
                <div className="md:w-1/2 p-8 flex flex-col justify-center">
                    <h1 className="text-3xl font-bold text-orange-600 mb-6 text-center drop-shadow">
                        Restaurant CMS Login
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
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center">
                                <input
                                    id="remember"
                                    type="checkbox"
                                    className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                                />
                                <label htmlFor="remember" className="ml-2 block text-sm text-gray-600">
                                    Remember me
                                </label>
                            </div>
                            <a href="#" className="text-sm text-orange-500 hover:underline">
                                Forgot password?
                            </a>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-orange-500 text-white py-2 rounded-lg font-semibold hover:bg-orange-600 transition shadow"
                        >
                            Login
                        </button>
                    </form>
                    <p className="mt-6 text-center text-gray-500">
                        Don&apos;t have an account?{' '}
                        <a href="#" className="text-orange-500 font-semibold hover:underline">
                            Sign up
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login;