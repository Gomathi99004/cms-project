import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaPizzaSlice,
  FaHamburger,
  FaIceCream,
  FaFish,
  FaDrumstickBite,
  FaLeaf,
  FaBacon,
  FaCheese,
  FaAppleAlt,
  FaCarrot,
  FaBreadSlice,
} from "react-icons/fa";

const foodIcons = [
  FaPizzaSlice,
  FaHamburger,
  FaIceCream,
  FaFish,
  FaDrumstickBite,
  FaLeaf,
  FaBacon,
  FaCheese,
  FaAppleAlt,
  FaCarrot,
  FaBreadSlice,
];

const words = ["F", "O", "R", "K", " ", "&", " ", "F", "L", "A", "M", "E"];

export default function HomePage() {
  const [icons, setIcons] = useState([]);

  useEffect(() => {
    const generateIcons = () => {
      const tempIcons = Array.from({ length: 50 }).map(() => {
        const Icon = foodIcons[Math.floor(Math.random() * foodIcons.length)];
        return {
          id: Math.random(),
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: 20 + Math.random() * 30,
          Icon,
        };
      });
      setIcons(tempIcons);
    };
    generateIcons();
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-yellow-50 via-white to-orange-100 overflow-hidden">
      {/* Floating Icons */}
      {icons.map(({ id, x, y, size, Icon }) => (
        <motion.div
          key={id}
          className="absolute text-yellow-400 opacity-30"
          style={{ top: `${y}%`, left: `${x}%`, fontSize: `${size}px` }}
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        >
          <Icon />
        </motion.div>
      ))}

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center">
        <div className="flex space-x-1 mb-4">
          {words.map((char, index) => (
            <motion.span
              key={index}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.15, type: "spring", stiffness: 300 }}
              className="text-6xl md:text-7xl font-bold text-orange-700 drop-shadow-lg"
            >
              {char}
            </motion.span>
          ))}
        </div>

        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="mb-8"
        >
          <motion.h1 className="text-4xl font-bold text-orange-600">
            WELCOME TO FLAVOR
          </motion.h1>
        </motion.div>

        <Link
          to="/signup"
          className="px-10 py-3 bg-orange-600 text-white rounded-lg font-semibold text-lg hover:bg-orange-700 transition"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}
