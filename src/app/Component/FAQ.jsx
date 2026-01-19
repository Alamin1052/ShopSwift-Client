// components/FAQ.jsx
"use client";
import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ShoppingCart } from "lucide-react";

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "Are all your gadgets 100% authentic?",
            answer: "Yes, absolutely. We source all our products directly from official brand distributors. Every product comes with a verifiable serial number to ensure authenticity."
        },
        {
            question: "How does the official warranty work?",
            answer: "Every gadget includes an official manufacturer warranty. If you face any issues, you can visit any authorized brand service center with the warranty card provided by us."
        },
        {
            question: "What is your delivery timeline?",
            answer: "For city areas, we deliver within 24 hours. For other regions, it typically takes 48 to 72 hours via our premium logistics partners."
        },
        {
            question: "Can I return a product if there is a defect?",
            answer: "Yes. We have a 7-day easy replacement policy for any manufacturing defects. Please keep the original packaging and invoice safe."
        },
        {
            question: "What payment methods do you accept?",
            answer: "We accept all major Credit/Debit cards, Mobile Banking (BKash, Nagad), and Cash on Delivery for most locations."
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-24 bg-white text-slate-900">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900">
                        Got Questions? We’ve Got Answers.
                    </h2>
                    <p className="mt-4 text-lg text-slate-600">
                        Everything you need to know about shopping at ShopSwift.
                    </p>
                </div>

                {/* FAQ Accordion */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`border rounded-2xl transition-all duration-300 ${openIndex === index ? 'border-blue-500 shadow-md' : 'border-slate-200'
                                }`}
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                            >
                                <div className="flex items-center gap-4">
                                    <HelpCircle className={`w-5 h-5 ${openIndex === index ? 'text-blue-500' : 'text-slate-400'}`} />
                                    <span className="font-bold text-lg text-slate-800">{faq.question}</span>
                                </div>
                                <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-blue-500' : 'text-slate-400'}`} />
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <p className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-50">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Final CTA Box */}
                <div className="mt-24 p-10 rounded-[3rem] bg-slate-900 text-white text-center relative overflow-hidden group">
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-blue-600 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity"></div>

                    <h3 className="text-3xl font-bold mb-4">Ready to upgrade your tech?</h3>
                    <p className="text-slate-400 mb-8 max-w-md mx-auto">
                        Join thousands of tech lovers and get your hands on the latest gadgets today.
                    </p>

                    <button className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-blue-900/20">
                        <ShoppingCart className="w-5 h-5" />
                        Start Shopping Now
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FAQ;