"use client";

import { useState } from "react";
import Image from "next/image";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function JobsPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        position: "",
        message: "",
        // Honeypot field - should be left empty by humans
        confirm_email: "",
    });

    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");

        // Spam Protection: Check if honeypot field is filled
        if (formData.confirm_email) {
            // Silently fail for bots - pretend it worked but do nothing
            console.log("Spam detected: Honeypot field filled.");
            setTimeout(() => setStatus("success"), 1000);
            return;
        }

        // Simulate API call
        setTimeout(() => {
            console.log("Form submitted locally:", formData);
            setStatus("success");
            setFormData({
                name: "",
                email: "",
                phone: "",
                position: "",
                message: "",
                confirm_email: "",
            });
        }, 1500);
    };

    return (
        <div className="bg-secondary min-h-screen text-primary pb-20">
            {/* Hero Section */}
            <div className="relative h-[50vh]">
                <Image
                    src="https://images.unsplash.com/photo-1554672408-730436b60dde?auto=format&fit=crop&q=80&w=2000"
                    alt="Refined Japanese Cuisine Preparation"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <h1 className="text-5xl md:text-6xl font-serif text-white tracking-widest uppercase">Join Our Team</h1>
                </div>
            </div>

            <div className="container mx-auto px-6 py-20 max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif text-[#5D182E] mb-6">Career Opportunities</h2>
                    <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
                        At Ajisai, we are always looking for passionate individuals who share our dedication to culinary excellence and hospitality.
                        If you thrive in a fast-paced, detail-oriented environment, we would love to hear from you.
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white p-8 md:p-12 rounded-sm shadow-xl border-t-4 border-[#C5A059]"
                >
                    {status === "success" ? (
                        <div className="text-center py-12">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
                                <CheckCircle className="w-8 h-8 text-green-600" />
                            </div>
                            <h3 className="text-2xl font-serif text-[#5D182E] mb-4">Application Received</h3>
                            <p className="text-gray-600 mb-8">
                                Thank you for your interest in joining Ajisai. We have received your information and will review it shortly.
                            </p>
                            <button
                                onClick={() => setStatus("idle")}
                                className="text-[#C5A059] font-medium hover:text-[#5D182E] transition-colors uppercase tracking-widest text-sm"
                            >
                                Send Another Inquiry
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {/* Name */}
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm uppercase tracking-widest font-semibold text-[#5D182E]">Full Name *</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full bg-[#F9F4E8] border-b-2 border-transparent focus:border-[#C5A059] px-4 py-3 outline-none transition-colors placeholder:text-gray-400"
                                        placeholder="John Doe"
                                    />
                                </div>

                                {/* Email */}
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm uppercase tracking-widest font-semibold text-[#5D182E]">Email Address *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full bg-[#F9F4E8] border-b-2 border-transparent focus:border-[#C5A059] px-4 py-3 outline-none transition-colors placeholder:text-gray-400"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {/* Phone */}
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-sm uppercase tracking-widest font-semibold text-[#5D182E]">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full bg-[#F9F4E8] border-b-2 border-transparent focus:border-[#C5A059] px-4 py-3 outline-none transition-colors placeholder:text-gray-400"
                                        placeholder="(555) 123-4567"
                                    />
                                </div>

                                {/* Position */}
                                <div className="space-y-2">
                                    <label htmlFor="position" className="text-sm uppercase tracking-widest font-semibold text-[#5D182E]">Position of Interest *</label>
                                    <select
                                        id="position"
                                        name="position"
                                        required
                                        value={formData.position}
                                        onChange={handleChange}
                                        className="w-full bg-[#F9F4E8] border-b-2 border-transparent focus:border-[#C5A059] px-4 py-3 outline-none transition-colors text-gray-700"
                                    >
                                        <option value="" disabled>Select a position</option>
                                        <option value="Server">Server</option>
                                        <option value="Sushi Chef">Sushi Chef</option>
                                        <option value="Kitchen Staff">Kitchen Staff</option>
                                        <option value="Host/Hostess">Host/Hostess</option>
                                        <option value="Bartender">Bartender</option>
                                        <option value="Management">Management</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                            </div>

                            {/* Message */}
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm uppercase tracking-widest font-semibold text-[#5D182E]">Experience / Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full bg-[#F9F4E8] border-b-2 border-transparent focus:border-[#C5A059] px-4 py-3 outline-none transition-colors placeholder:text-gray-400 resize-none"
                                    placeholder="Tell us about your relevant experience..."
                                ></textarea>
                            </div>

                            {/* HONEYPOT FIELD - Hidden from users, visible to bots */}
                            <div className="hidden absolute opacity-0 -z-10 h-0 w-0 overflow-hidden">
                                <label htmlFor="confirm_email">Do not fill this out if you are human</label>
                                <input
                                    type="text"
                                    id="confirm_email"
                                    name="confirm_email"
                                    value={formData.confirm_email}
                                    onChange={handleChange}
                                    tabIndex={-1}
                                    autoComplete="off"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={status === "submitting"}
                                className="w-full bg-[#5D182E] text-white py-4 font-serif uppercase tracking-widest hover:bg-[#C5A059] hover:text-white transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
                            >
                                {status === "submitting" ? (
                                    "Sending..."
                                ) : (
                                    <>
                                        Submit Application <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </>
                                )}
                            </button>
                        </form>
                    )}
                </motion.div>
            </div>
        </div>
    );
}
