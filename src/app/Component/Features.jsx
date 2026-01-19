// components/Features.jsx
import React from 'react';
import { Zap, Headphones, BadgeCheck } from "lucide-react";

const Features = () => {
    const features = [
        {
            number: "1",
            title: "Official Brand Warranty",
            description: "Every device sold comes with an official manufacturer warranty. No hidden terms—just valid, claimable protection for your tech.",
            icon: <BadgeCheck className="w-10 h-10 text-cyan-600" />,
            bgColor: "bg-cyan-50"
        },
        {
            number: "2",
            title: "Lightning-Fast Delivery",
            description: "We know you can't wait to unbox. Our optimized logistics ensure your order reaches your doorstep within 24 to 48 hours.",
            icon: <Zap className="w-10 h-10 text-amber-500" />,
            bgColor: "bg-amber-50"
        },
        {
            number: "3",
            title: "Expert Tech Assistance",
            description: "Confused about which specs to choose? Our dedicated tech experts are available 24/7 to help you find the perfect gadget for your needs.",
            icon: <Headphones className="w-10 h-10 text-indigo-600" />,
            bgColor: "bg-indigo-50"
        }
    ];

    return (
        <section className="py-24 bg-slate-50 text-slate-900">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900">
                        Engineered for Tech Enthusiasts
                    </h2>
                    <p className="mt-4 text-lg text-slate-600">
                        Experience the gold standard of gadget shopping.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-10">
                    {features.map((feature) => (
                        <div key={feature.number} className="group relative">
                            {/* Decorative Background Blur (Very Subtle in White Theme) */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-slate-200 to-slate-100 rounded-[2rem] blur opacity-25 group-hover:opacity-100 transition duration-500"></div>

                            <div className="relative bg-white p-10 rounded-[2rem] border border-slate-200 shadow-sm group-hover:shadow-xl group-hover:-translate-y-2 transition-all duration-300 h-full">
                                <div className="mb-8 flex items-center justify-between">
                                    <div className={`p-4 ${feature.bgColor} rounded-2xl group-hover:scale-110 transition-transform duration-300`}>
                                        {feature.icon}
                                    </div>
                                    <span className="text-5xl font-black text-slate-100 group-hover:text-slate-200 transition-colors">
                                        0{feature.number}
                                    </span>
                                </div>

                                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                                    {feature.title}
                                </h3>
                                <p className="text-slate-600 leading-relaxed text-lg">
                                    {feature.description}
                                </p>

                                {/* Bottom Accent Line */}
                                <div className="mt-8 w-12 h-1 bg-slate-100 group-hover:w-full group-hover:bg-blue-500 transition-all duration-500"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;