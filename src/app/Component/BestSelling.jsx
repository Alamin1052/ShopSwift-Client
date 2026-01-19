import React from 'react';

export default function BestSellingCategories() {
    const categories = [
        { id: 1, name: "Headphones", image: "/Headphone.jpeg" },
        { id: 2, name: "Smart Watch", image: "/Smart-watch.webp" },
        { id: 3, name: "Action Camera", image: "/Action.webp" },
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto text-center max-sm:px-5">
                <h2 className="text-3xl font-bold text-gray-900 mb-12">Best Selling Categories</h2>
                <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
                    {categories.map(category => (
                        <div key={category.id} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 p-6 flex flex-col items-center">
                            <img
                                src={category.image}
                                alt={category.name}
                                className="h-28 w-28 rounded-full object-cover mb-4"
                            />
                            <h3 className="text-xl font-semibold">{category.name}</h3>
                            <p className="text-gray-500 text-sm mt-2">Trending this month</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
