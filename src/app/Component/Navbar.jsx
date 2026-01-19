"use client";
import { useSession, signOut, signIn } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();
    const { data: session } = useSession();

    const linkClass = (path) =>
        pathname === path
            ? "text-indigo-300 font-bold bg-white/10 rounded-lg px-3 py-2 backdrop-blur-md"
            : "text-white hover:text-indigo-300 hover:bg-white/10 px-3 py-2 rounded-lg transition";

    return (
        <div className="sticky top-0 z-50 bg-gray-900/70 backdrop-blur-xl shadow-xl border-b border-white/10">
            <div className="navbar container mx-auto px-4 py-2">

                <div className="navbar-start">

                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden text-white"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-7 w-7"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </div>

                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-gray-800/90 backdrop-blur-lg text-white mt-3 w-52 p-3 rounded-xl shadow-lg border border-white/10"
                        >
                            <li><Link href="/" className={linkClass("/")}>Home</Link></li>
                            <li><Link href="/Product" className={linkClass("/Product")}>Product</Link></li>
                            <li><Link href="/AddProduct" className={linkClass("/AddProduct")}>Add Product</Link></li>
                            <li><Link href="/ManageProduct" className={linkClass("/ManageProduct")}>Manage Product</Link></li>
                        </ul>
                    </div>

                    <Link
                        href="/"
                        className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent tracking-wide"
                    >
                        ShopSwift
                    </Link>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="flex gap-4 text-lg font-urbanist">
                        <li><Link href="/" className={linkClass("/")}>Home</Link></li>
                        <li><Link href="/Product" className={linkClass("/Product")}>Product</Link></li>
                        <li><Link href="/AddProduct" className={linkClass("/AddProduct")}>Add Product</Link></li>
                        <li><Link href="/ManageProduct" className={linkClass("/ManageProduct")}>Manage Product</Link></li>
                    </ul>
                </div>

                <div className="navbar-end">
                    {/* {session ? (
                        <>
                            {session.user.image && (
                                <img
                                    src={session.user.image}
                                    alt={session.user.name}
                                    className="w-8 h-8 rounded-full object-cover"
                                />
                            )}
                            <span className="text-white">{session.user.name}</span>
                            <button
                                onClick={() => signOut()}
                                className="btn btn-sm bg-red-500 text-white"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <button onClick={() => signIn()} className="btn btn-sm bg-blue-500 text-white">
                            Login
                        </button>
                    )} */}
                    {session ? (
                        <div className="dropdown dropdown-end z-50">
                            <div
                                tabIndex={0}
                                role="button"
                                className="btn btn-ghost btn-circle avatar"
                            >
                                <div className="w-9 border-2 border-gray-300 rounded-full">
                                    <img
                                        alt="Tailwind CSS Navbar component"
                                        referrerPolicy="no-referrer"
                                        src={session.user.image || avatar}
                                    />
                                </div>
                            </div>
                            <ul
                                tabIndex="-1"
                                className="menu  menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
                            >
                                <div className=" pb-3 border-b border-b-gray-200">
                                    <li className="text-sm font-bold">{session.user.name || 'New user'}</li>
                                    <li className="text-xs">{session.user.email}</li>
                                </div>
                                <li><Link href="/AddProduct" className={("/AddProduct")}>Add Product</Link></li>
                                <li><Link href="/ManageProduct" className={("/ManageProduct")}>Manage Product</Link></li>

                                <li>
                                    <button
                                        onClick={() => signOut()}
                                        className="btn btn-xs text-left bg-linear-to-r from-blue-800 to-blue-500 text-white"
                                    >
                                        Logout
                                    </button>
                                </li>
                            </ul>
                        </div>
                    ) : (
                        <Link
                            href="/login"
                            className="btn rounded-full border-gray-300  btn-sm bg-linear-to-r from-blue-800 to-blue-500 px-8 text-white"
                        >Login
                        </Link>
                    )}
                </div>
            </div>
        </div >
    );
}
