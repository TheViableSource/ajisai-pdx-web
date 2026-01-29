"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function AboutPreview() {
    return (
        <section className="py-24 bg-primary text-secondary relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-16">
                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2 relative h-[500px]"
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1493236272120-200db0da1927?auto=format&fit=crop&q=80&w=2000"
                            alt="Intimate restaurant ambiance"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute -bottom-6 -right-6 w-full h-full border border-secondary/20 z-0 pointer-events-none" />
                    </motion.div>

                    {/* Text */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2"
                    >
                        <h2 className="text-4xl md:text-5xl font-serif mb-6">
                            Intimate Ambiance <br /> for Every Occasion
                        </h2>
                        <p className="text-lg opacity-80 mb-8 font-light leading-relaxed">
                            Located in the heart of the Pearl District, Ajisai offers a sanctuary from the bustling city. Our interior reflects the calm and beauty of the Hydrangea (Ajisai), providing a warm, welcoming atmosphere perfect for romantic dinners, business meetings, or family celebrations.
                        </p>
                        <Link
                            href="/about"
                            className="px-8 py-3 border border-secondary text-secondary hover:bg-secondary hover:text-primary transition-colors duration-300 uppercase tracking-widest text-sm"
                        >
                            Our Story
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
