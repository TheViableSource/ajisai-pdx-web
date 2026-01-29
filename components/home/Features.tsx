"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const features = [
    {
        title: "Artisan Sushi",
        description:
            "Daily sourced fish from Toyosu Market and local waters, crafted into exquisite nigiri and rolls.",
        image: "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&q=80&w=2000",
        link: "/menus#sushi",
    },
    {
        title: "Handcrafted Ramen",
        description:
            "Rich, creamy tonkotsu broth simmered for 24 hours, served with house-made noodles.",
        image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&q=80&w=2000",
        link: "/menus#ramen",
    },
    {
        title: "Premium Steak & Bowls",
        description:
            "Wagyu beef and Donburi bowls prepared with precision and authentic Japanese flavors.",
        image: "https://images.unsplash.com/photo-1606416132922-22ab37c1231a?auto=format&fit=crop&q=80&w=2000",
        link: "/menus#steak",
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.2,
            duration: 0.8,
            ease: "easeOut" as const,
        },
    }),
};

export function Features() {
    return (
        <section className="py-24 bg-secondary text-primary">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-serif mb-6">Our Culinary Craft</h2>
                    <p className="max-w-2xl mx-auto text-lg opacity-80 font-light">
                        We bring the authentic taste of Japan to Portland, combining traditional techniques with contemporary elegance.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {features.map((feature, i) => (
                        <motion.div
                            key={feature.title}
                            custom={i}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={cardVariants}
                            className="group relative overflow-hidden"
                        >
                            <div className="relative h-[400px] w-full overflow-hidden mb-6">
                                <Image
                                    src={feature.image}
                                    alt={feature.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
                            </div>

                            <h3 className="text-2xl font-serif mb-3">{feature.title}</h3>
                            <p className="opacity-80 mb-6 font-light leading-relaxed">
                                {feature.description}
                            </p>

                            <Link
                                href={feature.link}
                                className="inline-flex items-center text-sm uppercase tracking-widest hover:text-accent transition-colors group/link"
                            >
                                View Menu
                                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
