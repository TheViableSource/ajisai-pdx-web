"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export default function ReservationsPage() {
    const widgetContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Clean up any existing widgets to prevent duplicates if user navigates back and forth
        if (widgetContainerRef.current) {
            widgetContainerRef.current.innerHTML = '';
        }

        const script = document.createElement("script");
        script.src = "//www.opentable.com/widget/reservation/loader?rid=1459282&type=standard&theme=standard&color=1&dark=true&iframe=true&domain=com&lang=en-US&newtab=false&ot_source=Restaurant%20website&cfe=true";
        script.async = true;

        if (widgetContainerRef.current) {
            widgetContainerRef.current.appendChild(script);
        }

        return () => {
            if (widgetContainerRef.current) {
                widgetContainerRef.current.innerHTML = '';
            }
        };
    }, []);

    return (
        <div className="bg-secondary min-h-screen text-primary pb-20">
            {/* Hero Section */}
            <div className="relative h-[60vh] min-h-[400px]">
                <Image
                    src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=2000"
                    alt="Elegant Dining Room"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-5xl md:text-6xl font-serif text-white tracking-widest uppercase mb-4">
                            Reservations
                        </h1>
                        <div className="w-24 h-1 bg-[#C5A059] mx-auto" />
                    </div>
                </div>
            </div>

            {/* Reservation Content */}
            <div className="container mx-auto px-6 py-20">
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-12">
                        We invite you to experience the art of Japanese cuisine at Ajisai.
                        For parties of 7 or more, or for private Teppanyaki room inquiries,
                        please contact us directly at <a href="tel:9717273180" className="text-[#5D182E] font-semibold hover:underline">(971) 727-3180</a>.
                    </p>

                    <div className="bg-white p-8 rounded-sm shadow-lg border border-[#5D182E]/10 min-h-[600px]">
                        {/* OpenTable Widget Container */}
                        <div ref={widgetContainerRef} className="opentable-widget-container flex justify-center" />
                    </div>

                    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                        <div className="bg-[#F9F4E8] p-6 rounded-sm">
                            <h3 className="text-[#5D182E] font-serif text-xl mb-3">Dinner Service</h3>
                            <p className="text-gray-600 text-sm">Sunday - Thursday: 4:30 PM - 9:30 PM</p>
                            <p className="text-gray-600 text-sm">Friday - Saturday: 4:30 PM - 10:00 PM</p>
                        </div>
                        <div className="bg-[#F9F4E8] p-6 rounded-sm">
                            <h3 className="text-[#5D182E] font-serif text-xl mb-3">Lunch Service</h3>
                            <p className="text-gray-600 text-sm">Monday - Friday: 11:30 AM - 2:30 PM</p>
                            <p className="text-gray-600 text-sm">Saturday - Sunday: 12:00 PM - 3:00 PM</p>
                        </div>
                        <div className="bg-[#F9F4E8] p-6 rounded-sm">
                            <h3 className="text-[#5D182E] font-serif text-xl mb-3">Teppanyaki Policy</h3>
                            <p className="text-gray-600 text-sm">
                                We recommend arriving 15 minutes prior to your reservation time.
                                Teppanyaki shows start promptly.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
