import React, { useState } from 'react';

function Contact() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        number: '',
        seats: '',
        time: '',
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        alert('Form submitted!');
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100">
            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md"
            >
                <h2 className="text-2xl font-bold mb-6 text-purple-700 text-center">Contact Us / Book a Table</h2>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="number">
                        Phone Number
                    </label>
                    <input
                        type="tel"
                        id="number"
                        name="number"
                        value={form.number}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="seats">
                        How many seats?
                    </label>
                    <input
                        type="number"
                        id="seats"
                        name="seats"
                        min="1"
                        value={form.seats}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 mb-2" htmlFor="time">
                        Time
                    </label>
                    <input
                        type="time"
                        id="time"
                        name="time"
                        value={form.time}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-purple-600 text-white py-2 rounded-md font-semibold hover:bg-purple-700 transition"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export default Contact;