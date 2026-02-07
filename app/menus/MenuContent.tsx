"use client";

import { useState, useRef } from "react";
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

interface MenuGroup {
    id: string;
    label: string;
    subCategories: MenuCategory[];
}

interface MenuContentProps {
    groups: MenuGroup[];
}

export default function MenuContent({ groups }: MenuContentProps) {
    const [activeGroup, setActiveGroup] = useState<string>(groups[0].id);
    const navRef = useRef<HTMLDivElement>(null);
    const [copied, setCopied] = useState(false);

    // Get current group data
    const currentGroup = groups.find(g => g.id === activeGroup) || groups[0];

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
            <div className="relative h-[50vh] bg-black">
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

            <div className="container mx-auto px-6 pt-16 pb-20">
                {/* Visual Group Navigation */}
                <div ref={navRef} className="sticky top-20 z-40 bg-secondary/95 backdrop-blur-sm border-b border-primary/10 mb-12 -mx-6 px-6">
                    <div className="flex flex-nowrap overflow-x-auto gap-8 py-4 w-full no-scrollbar items-center justify-start md:justify-center">
                        {groups.map((group) => (
                            <button
                                key={group.id}
                                onClick={() => {
                                    setActiveGroup(group.id);
                                    if (navRef.current) {
                                        const y = navRef.current.getBoundingClientRect().top + window.pageYOffset - 120;
                                        window.scrollTo({ top: y, behavior: 'smooth' });
                                    }
                                }}
                                className={`text-sm md:text-base uppercase tracking-widest transition-colors font-serif relative pb-2 whitespace-nowrap flex-shrink-0 ${activeGroup === group.id ? "text-accent" : "text-primary/60 hover:text-primary"
                                    }`}
                            >
                                {group.label}
                                {activeGroup === group.id && (
                                    <motion.div
                                        layoutId="activeGroup"
                                        className="absolute left-0 right-0 bottom-0 h-0.5 bg-accent"
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                    />
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Sub-Category Content */}
                <div className="max-w-4xl mx-auto min-h-[50vh]">
                    <motion.div
                        key={currentGroup.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-20"
                    >
                        {currentGroup.subCategories.map((cat) => (
                            <MenuSection key={cat.id} category={cat} />
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
