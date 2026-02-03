"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image with Parallax Effect (simulated via fixed or scroll) - Simplified for performance */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero-sushi.jpg"
                    alt="Dark moody sushi bar ambiance"
                    fill
                    className="object-cover"
                    priority
                    quality={90}
                />
                <div className="absolute inset-0 bg-black/60" /> {/* Dark Overlay */}
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    <h2 className="text-secondary text-sm md:text-lg uppercase tracking-[0.2em] mb-4">
                        Welcome to Ajisai
                    </h2>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-8 leading-tight">
                        The Art of Japanese Dining <br className="hidden md:block" />
                        in Beaverton
                    </h1>
                    <p className="text-gray-200 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light">
                        Experience authentic sushi, premium steak, and handcrafted ramen in an atmosphere of refined elegance.
                    </p>

                    <div className="flex flex-col md:flex-row gap-6 justify-center">
                        <Link
                            href="/menus"
                            className="px-8 py-4 border border-secondary text-secondary hover:bg-secondary hover:text-primary transition-all duration-300 uppercase tracking-widest text-sm"
                        >
                            View Our Menus
                        </Link>
                        <Link
                            href="/reservations"
                            className="px-8 py-4 bg-primary text-secondary hover:bg-secondary hover:text-primary transition-all duration-300 uppercase tracking-widest text-sm"
                        >
                            Reserve a Table
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
            >
                <span className="text-xs uppercase tracking-widest">Scroll</span>
            </motion.div>
        </section>
    );
}
