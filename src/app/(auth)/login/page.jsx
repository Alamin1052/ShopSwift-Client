"use client";
import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);



    return (
        <div className="bg-gradient-to-br from-[#f8fbff] via-[#eef3ff] to-[#e9f0ff] flex items-center justify-center p-10">
            <div className="bg-white/70 backdrop-blur-xl p-10 rounded-2xl shadow-xl w-full max-w-md text-gray-800 relative overflow-hidden border border-white/40">

                <div className="absolute -top-7 -left-7 w-28 h-28 bg-indigo-200/40 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-purple-200/40 rounded-full blur-xl animate-pulse"></div>

                <h1 className="text-4xl font-extrabold text-center mb-2 text-indigo-600">ShopSwift</h1>
                <p className="text-center text-sm mb-8 text-gray-600">Welcome back! Login to continue</p>

                <form className="space-y-5">

                    <div>
                        <label className="text-sm font-medium">Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full mt-1 px-4 py-3 rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-200 placeholder-gray-400"
                        />
                    </div>

                    <div>
                        <label className="text-sm font-medium">Password</label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter your password"
                                className="w-full mt-1 px-4 py-3 rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-200 placeholder-gray-400"
                            />
                            <span
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-[55%] -translate-y-1/2 cursor-pointer text-xs text-gray-600 hover:text-indigo-600"
                            >
                                {showPassword ? "Hide" : "Show"}
                            </span>
                        </div>
                    </div>

                    <button
                        className="w-full py-3 bg-indigo-600 text-white font-bold rounded-lg shadow-md hover:bg-indigo-700 transition"
                    >
                        Login
                    </button>
                </form>

                <div className="text-center text-sm my-5 text-gray-500">OR</div>

                <button
                    onClick={() => signIn("google")}
                    className="w-full py-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition text-gray-700 font-medium">
                    Continue with Google
                </button>

                <p className="text-center text-sm mt-6 text-gray-600">
                    Don't have an account?
                    <Link href="/register" className="font-semibold text-indigo-600 hover:underline">
                        Register Now
                    </Link>
                </p>
            </div>
        </div>
    );
}
