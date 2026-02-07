"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export default function ReservationsPage() {
    const widgetContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!widgetContainerRef.current) return;

        // Check if script already exists to prevent duplicates
        if (widgetContainerRef.current.querySelector('script')) return;

        const script = document.createElement("script");
        script.src = "//www.opentable.com/widget/reservation/loader?rid=1459282&type=standard&theme=standard&color=1&dark=true&iframe=true&domain=com&lang=en-US&newtab=false&ot_source=Restaurant%20website&cfe=true";
        script.async = true;
        widgetContainerRef.current.appendChild(script);

        // Cleanup function not strictly needed if we check for existence, 
        // but good practice to clear if unmounting
        return () => {
            if (widgetContainerRef.current) {
                widgetContainerRef.current.innerHTML = '';
            }
        };
    }, []);

    return (
        <div className="bg-secondary min-h-screen text-primary pb-20">
            {/* Hero Section */}
            <div className="relative h-[50vh] min-h-[400px] w-full">
                <Image
                    src="/reservations-hero.jpg"
                    alt="Elegant Dining Room"
                    fill
                    style={{ objectFit: "cover" }}
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
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

                    <div className="mb-16">
                        {/* OpenTable Widget Container */}
                        <div ref={widgetContainerRef} className="opentable-widget-container flex justify-center" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center max-w-3xl mx-auto border-t border-[#5D182E]/10 pt-12">
                        <div>
                            <h3 className="text-[#5D182E] font-serif text-2xl mb-4">Hours of Operation</h3>
                            <p className="text-gray-600 text-lg">Daily: 11:00 AM – 10:00 PM</p>
                        </div>
                        <div>
                            <h3 className="text-[#5D182E] font-serif text-2xl mb-4">Teppanyaki Policy</h3>
                            <p className="text-gray-600 text-lg">
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
