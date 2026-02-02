"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Share2, Star, Check, ChevronRight } from "lucide-react";

// --- DATA ---
const menuCategories = [
    {
        id: "appetizers",
        title: "Appetizers",
        description: "Small plates perfect for sharing.",
        items: [
            { name: "Edamame", price: "$6.00", description: "Steamed soybeans lightly dusted with sea salt." },
            { name: "Gyoza", price: "$8.00", description: "Pan-fried pork and vegetable dumplings served with dipping sauce." },
            { name: "Agedashi Tofu", price: "$8.00", description: "Crispy deep-fried tofu served in a savory dashi broth with bonito flakes." },
            { name: "Soft Shell Crab", price: "$14.00", description: "Crispy fried soft shell crab served with ponzu sauce." },
        ],
    },
    {
        id: "sushi",
        title: "Sushi & Sashimi",
        description: "Expertly sliced fresh fish, sourced daily.",
        items: [
            { name: "Omakase Sashimi", price: "$75", description: "18pc Premium selection. Our Chef's daily masterpiece." },
            { name: "Maguro (Tuna) Nigiri", price: "$9", description: "2 pieces" },
            { name: "Sake (Salmon) Nigiri", price: "$8", description: "2 pieces" },
            { name: "Hamachi (Yellowtail) Nigiri", price: "$9", description: "2 pieces" },
            { name: "Unagi (Eel) Nigiri", price: "$10", description: "2 pieces" },
            { name: "Uni (Sea Urchin) Nigiri", price: "MP", description: "2 pieces, Seasonal" },
            { name: "Sashimi Deluxe", price: "$35", description: "9pc Chef's choice assortment" },
            { name: "Dragon Roll", price: "$18", description: "Shrimp tempura, cucumber, topped with eel and avocado" },
            { name: "Spicy Tuna Roll", price: "$12", description: "Fresh tuna, spicy mayo, cucumber" },
            { name: "Rainbow Roll", price: "$18", description: "Snow crab, avocado, topped with assorted fish" },
        ],
    },
    {
        id: "ramen",
        title: "Ramen & Udon",
        description: "Soul-warming broths and house-made noodles.",
        items: [
            { name: "Tonkotsu Ramen", price: "$16", description: "Rich pork broth, chashu, soft egg, bamboo shoots, scallions" },
            { name: "Spicy Miso Ramen", price: "$17", description: "Spicy soybean paste broth, minced pork, corn, bean sprouts" },
            { name: "Shoyu Ramen", price: "$16", description: "Soy sauce base chicken broth, pork chashu, spinach, nori" },
            { name: "Veggie Ramen", price: "$15", description: "Creamy vegetable broth, tofu, seasonal vegetables, corn" },
            { name: "Tempura Udon", price: "$16", description: "Thick udon noodles in dashi broth, side of shrimp & veg tempura" },
            { name: "Kitsune Udon", price: "$14", description: "Udon noodles, dashi broth, sweet fried tofu skin" },
        ],
    },
    {
        id: "steak",
        title: "Rice Bowls & Entrees",
        description: "Hearty donburi and signature plates.",
        items: [
            { name: "Wagyu Steak Don", price: "$45", description: "Premium American Wagyu beef, shimaji mushrooms, truffle soy sauce" },
            { name: "Ajisai Dinner Bento", price: "$40", description: "Served with Miso Soup, Salad, Rice, Tempura & CA Roll. Choose 2: Sush/Sashimi, Teriyaki, Katsu." },
            { name: "Unagi Don", price: "$25", description: "Grilled freshwater eel, sweet kabayaki sauce over rice" },
            { name: "Chirashi", price: "$32", description: "Assorted raw fish and vegetables over sushi rice" },
            { name: "Ten Don", price: "$18", description: "Assorted tempura over rice with tentsuyu sauce" },
            { name: "Spicy Orange Chicken", price: "$19", description: "Crispy chicken, house spicy orange glaze, broccoli" },
            { name: "Tofu Don", price: "$16", description: "Fried tofu and vegetables simmered in savory sauce" },
        ],
    },
];

// --- COMPONENTS ---

const SignatureHighlight = ({ item }: { item: { name: string; price: string; description: string } }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="col-span-1 md:col-span-2 bg-gradient-to-br from-[#F9F4E8] to-white border border-[#C5A059]/30 p-8 rounded-sm shadow-md mb-8 relative overflow-hidden group"
    >
        <div className="absolute top-0 right-0 bg-[#C5A059] text-white text-xs font-bold px-3 py-1 uppercase tracking-widest flex items-center gap-1">
            <Star size={12} fill="white" /> Chef's Selection
        </div>
        <h3 className="text-2xl font-serif text-[#5D182E] mb-2 group-hover:text-[#C5A059] transition-colors">{item.name}</h3>
        <p className="text-gray-600 italic mb-4 max-w-lg">{item.description}</p>
        <span className="text-xl font-medium text-[#5D182E]">{item.price}</span>
    </motion.div>
);

const MenuItem = ({ item, index }: { item: { name: string; price: string; description: string }, index: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ delay: index * 0.05 }} // Staggered delay
        className="flex justify-between items-start border-b border-[#5D182E]/10 pb-4 hover:bg-white/50 p-2 rounded transition-colors"
    >
        <div className="pr-4">
            <h3 className="font-serif text-lg font-medium text-[#5D182E]">{item.name}</h3>
            <p className="text-sm opacity-70 mt-1 font-light text-gray-700">{item.description}</p>
        </div>
        <span className="font-serif text-lg whitespace-nowrap text-[#C5A059]">{item.price}</span>
    </motion.div>
);

export default function MenusPage() {
    const [activeSection, setActiveSection] = useState("appetizers");
    const [copied, setCopied] = useState(false);

    // Scroll Spy Logic
    useEffect(() => {
        const handleScroll = () => {
            const sections = menuCategories.map(cat => document.getElementById(cat.id));
            const scrollPosition = window.scrollY + 200; // Offset for header

            sections.forEach(section => {
                if (section && section.offsetTop <= scrollPosition && (section.offsetTop + section.offsetHeight) > scrollPosition) {
                    setActiveSection(section.id);
                }
            });
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Share Function
    const handleShare = () => {
        navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="bg-[#F9F4E8] min-h-screen text-[#5D182E] pb-20">
            {/* Header */}
            <div className="relative h-[40vh] bg-black">
                <Image
                    src="https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&q=80&w=2000"
                    alt="Japanese Cuisine"
                    fill
                    className="object-cover opacity-60"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <h1 className="text-5xl md:text-6xl font-serif text-white tracking-widest uppercase mb-4">Menus</h1>

                    {/* Share Button */}
                    <button
                        onClick={handleShare}
                        className="flex items-center gap-2 text-white/80 hover:text-[#C5A059] transition-colors text-sm uppercase tracking-widest"
                    >
                        {copied ? <Check size={16} /> : <Share2 size={16} />}
                        {copied ? "Link Copied" : "Share Menu"}
                    </button>
                </div>
            </div>

            {/* Sticky Navigation */}
            <div className="sticky top-0 z-40 bg-[#F9F4E8]/95 backdrop-blur border-b border-[#5D182E]/10 shadow-sm">
                <div className="container mx-auto px-6 overflow-x-auto">
                    <div className="flex justify-center min-w-max gap-8 py-6">
                        {menuCategories.map((cat) => (
                            <a
                                key={cat.id}
                                href={`#${cat.id}`}
                                className={`text-sm md:text-base uppercase tracking-widest transition-colors font-serif relative pb-1 ${activeSection === cat.id ? "text-[#5D182E] font-bold" : "text-gray-400 hover:text-[#C5A059]"
                                    }`}
                            >
                                {cat.title}
                                {/* Animated Underline */}
                                {activeSection === cat.id && (
                                    <motion.div
                                        layoutId="activeSection"
                                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C5A059]"
                                    />
                                )}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 py-16">
                <div className="max-w-4xl mx-auto space-y-24">
                    {menuCategories.map((cat) => {
                        // Split items: First one is Signature, rest are standard
                        const [signatureItem, ...otherItems] = cat.items;

                        return (
                            <section key={cat.id} id={cat.id} className="scroll-mt-40">
                                <div className="text-center mb-10">
                                    <h2 className="text-3xl md:text-4xl font-serif text-[#5D182E] mb-2">{cat.title}</h2>
                                    <p className="text-[#C5A059] italic text-sm md:text-base">{cat.description}</p>
                                </div>

                                {/* Grid Layout */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                                    {/* Signature Item takes full width */}
                                    <SignatureHighlight item={signatureItem} />

                                    {/* Remaining Items */}
                                    {otherItems.map((item, idx) => (
                                        <MenuItem key={item.name} item={item} index={idx} />
                                    ))}
                                </div>
                            </section>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}