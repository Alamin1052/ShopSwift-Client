"use client";
import Link from 'next/link'
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const pathname = usePathname();
    return (
        <div className=' bg-gray-800 shadow-lg'>
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-blue-500">
                            <li><Link href="/" className="nav-link font-semibold"> Home</Link></li>
                            <li><Link href="/" className="nav-link font-semibold">All Product</Link></li>
                            <li><Link href="/" className="nav-link font-semibold">Add Product</Link></li>

                        </ul>
                    </div>
                    <Link href="/" className=" text-indigo-400  text-2xl font-extrabold">ShopSwift</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1  text-lg">
                        <li><Link href="/" className={pathname === "/" ? "text-blue-500 bg-amber-300/80 font-bold" : "text-white hover:bg-amber-300/80"}> Home</Link></li>
                        <li><Link href="/Product" className={pathname === "/Product" ? "text-blue-500 bg-amber-300/80 font-bold" : "text-white hover:bg-amber-300/80"}> Product</Link></li>
                        <li><Link href="/AddProduct" className={pathname === "/AddProduct" ? "text-blue-500 bg-amber-300/80 font-bold" : "text-white hover:bg-amber-300/80"}> Add Product</Link></li>
                        <li><Link href="/ManageProduct" className={pathname === "/ManageProduct" ? "text-blue-500 bg-amber-300/80 font-bold" : "text-white hover:bg-amber-300/80"}> Manage Product</Link></li>


                    </ul>
                </div>
                <div className="navbar-end">

                    {/* {user ? (
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
                                        src={user.photoURL || avatar}
                                    />
                                </div>
                            </div>
                            <ul
                                tabIndex="-1"
                                className="menu  menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
                            >
                                <div className=" pb-3 border-b border-b-gray-200">
                                    <li className="text-sm font-bold">{user.displayName || 'New user'}</li>
                                    <li className="text-xs">{user.email}</li>
                                </div>

                                <li>
                                    <button
                                        onClick={handleLogout}
                                        className="btn btn-xs text-left bg-linear-to-r from-blue-800 to-blue-500 text-white"
                                    >
                                        Logout
                                    </button>
                                </li>
                            </ul>
                        </div>
                    ) : ( */}
                    <Link
                        href="/login"
                        className="btn rounded-full border-0 btn-outline  btn-sm bg-linear-to-r from-indigo-800 to-indigo-500 px-8 py-6 text-xl text-white"
                    > Login
                    </Link>
                    {/* )} */}
                </div>
            </div>
        </div >
    )
}
