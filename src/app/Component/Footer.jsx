import React from "react";
import { Facebook, Twitter, Youtube } from "lucide-react";

export default function Footer() {
    return (
        <footer className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-200 py-12 border-t border-white/10">
            <div className="container mx-auto flex flex-col items-center justify-center gap-4 px-5 text-center">

                <p className="font-extrabold text-3xl text-indigo-400 tracking-wide drop-shadow">
                    ShopSwift
                </p>

                <p className="max-w-md text-sm opacity-80 leading-relaxed">
                    ShopSwift — your trusted mini marketplace for quality products,
                    smooth shopping, and a delightful experience every time.
                </p>

                <div className="flex gap-6 mt-3">
                    <a href="#" className="hover:scale-125 transition transform duration-300">
                        <Facebook size={26} className="text-blue-400 hover:text-white" />
                    </a>
                    <a href="#" className="hover:scale-125 transition transform duration-300">
                        <Twitter size={26} className="text-sky-400 hover:text-white" />
                    </a>
                    <a href="#" className="hover:scale-125 transition transform duration-300">
                        <Youtube size={26} className="text-red-500 hover:text-white" />
                    </a>
                </div>

                <p className="text-xs opacity-60 mt-4 tracking-wide">
                    © {new Date().getFullYear()} ShopSwift — All Rights Reserved.
                </p>
            </div>
        </footer>
    );
}
