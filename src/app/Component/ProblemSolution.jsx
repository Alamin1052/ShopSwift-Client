// components/ProblemSolution.jsx
import React from 'react';
import { ShieldAlert, ShieldCheck } from "lucide-react";

const ProblemSolution = () => {
    const points = [
        {
            id: "01",
            title: "The Counterfeit & Warranty Trap",
            description: "The gadget market is flooded with clones and 'first-copy' products. Buying from unreliable sources often leads to zero warranty support and a total waste of your hard-earned money.",
            icon: <ShieldAlert className="text-red-500 w-8 h-8" />,
            bg: "bg-red-50"
        },
        {
            id: "02",
            title: "The ShopSwift Authenticity Promise",
            description: "We bridge the gap by offering 100% genuine gadgets sourced directly from official distributors. With ShopSwift, you get valid serial numbers, official brand warranties, and total peace of mind.",
            icon: <ShieldCheck className="text-blue-600 w-8 h-8" />,
            bg: "bg-blue-50"
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                        Stop Risking Your Money on Fakes
                    </h2>
                    <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                        Your tech journey should be exciting, not stressful. Here is how we protect your investment.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                    {points.map((point) => (
                        <div key={point.id} className={`p-10 rounded-3xl border border-slate-100 ${point.bg} transition-all duration-300 hover:shadow-xl`}>
                            <div className="flex items-center gap-5 mb-6">
                                <div className="bg-white p-3 rounded-2xl shadow-sm">
                                    {point.icon}
                                </div>
                                <span className="text-5xl font-bold opacity-10 text-slate-900 leading-none">
                                    {point.id}
                                </span>
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">{point.title}</h3>
                            <p className="text-slate-700 leading-relaxed text-lg">{point.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProblemSolution;