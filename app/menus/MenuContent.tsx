"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Share2, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import MenuSection from "./MenuSection";

interface MenuItem {
    name: string;
    price: string;
    description: string;
}

interface MenuCategory {
    id: string;
    title: string;
    description: string;
    items: MenuItem[];
}

interface MenuContentProps {
    categories: MenuCategory[];
}

export default function MenuContent({ categories }: MenuContentProps) {
    const [activeSection, setActiveSection] = useState<string>(categories[0].id);
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 200; // Offset for header

            // Find the section currently in view
            for (const category of categories) {
                const element = document.getElementById(category.id);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (
                        scrollPosition >= offsetTop &&
                        scrollPosition < offsetTop + offsetHeight
                    ) {
                        setActiveSection(category.id);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [categories]);

    const handleShare = async () => {
        try {
            await navigator.clipboard.writeText(window.location.href);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy link", err);
        }
    };

    return (
        <div className="bg-secondary min-h-screen text-primary pb-20">
            {/* Header */}
            <div className="relative h-[40vh] bg-black">
                <Image
                    src="https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&q=80&w=2000"
                    alt="Japanese Cuisine"
                    fill
                    className="object-cover opacity-60"
                    priority
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="relative flex items-center gap-4">
                        <h1 className="text-5xl md:text-6xl font-serif text-white tracking-widest uppercase">
                            Menus
                        </h1>
                        <button
                            onClick={handleShare}
                            className="p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors text-white group relative"
                            aria-label="Share Menu"
                        >
                            {copied ? <Check size={20} /> : <Share2 size={20} />}

                            {/* Toast Notification */}
                            <AnimatePresence>
                                {copied && (
                                    <motion.span
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        className="absolute left-full ml-3 top-1/2 -translate-y-1/2 whitespace-nowrap text-xs font-medium bg-black/80 text-white px-2 py-1 rounded shadow-lg"
                                    >
                                        Link Copied
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </button>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 py-16">
                {/* Sticky Navigation */}
                <div className="sticky top-20 z-40 bg-secondary/95 backdrop-blur-sm border-b border-primary/10 mb-16 -mx-6 px-6">
                    <div className="flex flex-wrap justify-center gap-8 py-4 w-full">
                        {categories.map((cat) => (
                            <a
                                key={cat.id}
                                href={`#${cat.id}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    const element = document.getElementById(cat.id);
                                    if (element) {
                                        window.scrollTo({
                                            top: element.offsetTop - 140, // Adjust for sticky header
                                            behavior: "smooth"
                                        });
                                        // Update active section immediately for better UX
                                        setActiveSection(cat.id);
                                    }
                                }}
                                className={`text-sm md:text-base uppercase tracking-widest transition-colors font-serif relative pb-1 ${activeSection === cat.id ? "text-accent" : "text-primary/60 hover:text-primary"
                                    }`}
                            >
                                {cat.title}
                                {activeSection === cat.id && (
                                    <motion.div
                                        layoutId="activeSection"
                                        className="absolute left-0 right-0 bottom-0 h-0.5 bg-accent"
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                    />
                                )}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Menu Sections */}
                <div className="max-w-4xl mx-auto space-y-20">
                    {categories.map((cat) => (
                        <MenuSection key={cat.id} category={cat} />
                    ))}
                </div>
            </div>
        </div>
    );
}
