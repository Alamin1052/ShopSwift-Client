import React from 'react'

export default function StoreLocation() {
    return (
        <section className="py-20 bg-white/50 backdrop-blur-sm max-sm:px-5">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-3">Our Stores in Bangladesh</h2>
                <p className="text-gray-600 mb-12">Visit any of our branches for the best shopping experience!</p>

                <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Dhaka */}
                    <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition transform hover:-translate-y-1">
                        <h3 className="font-semibold text-xl mb-3 flex items-center justify-center gap-2">
                            <span>📍</span> Dhaka Branch
                        </h3>
                        <p className="text-gray-500 text-sm">Bashundhara City Shopping Mall, Panthapath</p>
                        <p className="text-gray-500 text-sm mt-1">Hotline: +880 1700-123456</p>
                        <p className="text-gray-600 text-sm mt-3">Open: 10am – 9pm</p>
                    </div>

                    {/* Chattogram */}
                    <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition transform hover:-translate-y-1">
                        <h3 className="font-semibold text-xl mb-3 flex items-center justify-center gap-2">
                            <span>📍</span> Chattogram Branch
                        </h3>
                        <p className="text-gray-500 text-sm">GEC Circle, East Nasirabad</p>
                        <p className="text-gray-500 text-sm mt-1">Hotline: +880 1711-987654</p>
                        <p className="text-gray-600 text-sm mt-3">Open: 10am – 8pm</p>
                    </div>

                    {/* Rajshahi */}
                    <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition transform hover:-translate-y-1">
                        <h3 className="font-semibold text-xl mb-3 flex items-center justify-center gap-2">
                            <span>📍</span> Rajshahi Branch
                        </h3>
                        <p className="text-gray-500 text-sm">Shaheb Bazar, Zero Point</p>
                        <p className="text-gray-500 text-sm mt-1">Hotline: +880 1705-445566</p>
                        <p className="text-gray-600 text-sm mt-3">Open: 11am – 8pm</p>
                    </div>
                </div>
            </div>
        </section>


    )
}
