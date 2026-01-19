import Image from 'next/image'
import React from 'react'

export default function CustomerReview() {
    return (
        <section className="py-20 bg-gray-50 max-sm:px-5">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-12">What Our Customers Say</h2>
                <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                        <Image
                            src="/Avater.png"
                            alt="Headphones"
                            width={60}
                            height={60}
                            className="rounded-full mx-auto"
                        />
                        <p className="text-gray-700 italic">“Amazing products and super fast delivery. Highly recommend ShopSwift!”</p>
                        <p className="mt-4 font-semibold text-indigo-600">Mashfi</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                        <Image
                            src="/Avater.png"
                            alt="Headphones"
                            width={60}
                            height={60}
                            className="rounded-full mx-auto"
                        />
                        <p className="text-gray-700 italic">“Customer service is fantastic. I got exactly what I needed.”</p>
                        <p className="mt-4 font-semibold text-indigo-600">Mahfuz Raihan</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                        <Image
                            src="/Avater.png"
                            alt="Headphones"
                            width={60}
                            height={60}
                            className="rounded-full mx-auto"
                        />
                        <p className="text-gray-700 italic">“The quality of products is top-notch. Will buy again!”</p>
                        <p className="mt-4 font-semibold text-indigo-600">Muntaha</p>
                    </div>
                </div>
            </div>
        </section>

    )
}
