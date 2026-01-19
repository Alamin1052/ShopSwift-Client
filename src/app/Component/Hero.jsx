"use client";

import { motion } from "framer-motion";
import { ShoppingBag, Sparkles, Heart } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative overflow-hidden">

            <div className="absolute inset-0 bg-gradient-to-br from-indigo-200 via-pink-50 to-purple-100"></div>
            <div className="absolute top-10 left-5 w-64 md:w-96 h-64 md:h-96 bg-indigo-200 opacity-30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-5 w-72 md:w-96 h-72 md:h-96 bg-purple-300 opacity-30 rounded-full blur-3xl"></div>

            <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-32 left-8 md:left-20 text-indigo-600"
            >
                <ShoppingBag size={50} className="opacity-70" />
            </motion.div>

            <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute bottom-32 right-10 md:right-24 text-purple-600"
            >
                <Sparkles size={45} className="opacity-70" />
            </motion.div>

            <motion.div
                animate={{ y: [0, -25, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute top-1/2 right-1/4 text-pink-500 hidden md:block"
            >
                <Heart size={40} className="opacity-70" />
            </motion.div>

            <div className="relative z-10 container mx-auto px-6 py-24 md:py-32 text-center">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 font-urbanist">
                    Discover. Shop. <span className="text-indigo-600">Enjoy.</span>
                </h1>

                <p className="text-gray-700 text-lg md:text-xl lg:text-2xl mt-6 max-w-3xl mx-auto font-urbanist">
                    Premium products designed for a modern lifestyle — all in one smooth,
                    stylish, and smart shopping experience.
                </p>

                <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                    <button className="px-8 py-4 text-lg font-semibold rounded-full bg-indigo-600 text-white hover:bg-indigo-700 shadow-xl hover:shadow-2xl transition-all duration-300">
                        Explore Products
                    </button>
                    <button className="px-8 py-4 text-lg font-semibold rounded-full bg-white/80 backdrop-blur-md border border-gray-300 hover:bg-white shadow-lg transition-all duration-300">
                        Learn More
                    </button>
                </div>
            </div>
        </section>
    );
}
