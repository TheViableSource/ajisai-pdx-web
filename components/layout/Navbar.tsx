"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Menus", href: "/menus" },
    { name: "About", href: "/about" },
    { name: "Reservations", href: "/reservations" },
    { name: "Contact", href: "/contact" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={clsx(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled ? "bg-primary shadow-lg py-2" : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="relative z-10 group">
                    <span
                        className={clsx(
                            "font-serif text-2xl tracking-widest uppercase transition-colors",
                            isScrolled ? "text-secondary" : "text-primary md:text-white" // Text white on transparent info (assuming heavy hero image)
                        )}
                    // Note: If hero is light, we need text-primary consistently.
                    // If hero has dark overlay, white text is good.
                    // Let's assume Hero will have dark overlay.
                    >
                        Ajisai
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={clsx(
                                "text-sm uppercase tracking-wider font-light hover:text-accent transition-colors",
                                isScrolled ? "text-secondary" : "text-white"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="/reservations"
                        className={clsx(
                            "px-6 py-2 border transition-all duration-300",
                            isScrolled
                                ? "border-secondary text-secondary hover:bg-secondary hover:text-primary"
                                : "border-white text-white hover:bg-white hover:text-primary"
                        )}
                    >
                        Reserve
                    </Link>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden z-10 text-secondary"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle Menu"
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} className={isScrolled ? "text-secondary" : "text-primary"} />}
                </button>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="absolute inset-0 h-screen bg-primary/95 backdrop-blur-md flex flex-col items-center justify-center gap-8 md:hidden"
                        >
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-2xl font-serif text-secondary hover:text-accent"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                href="/reservations"
                                className="mt-4 px-8 py-3 border border-secondary text-secondary hover:bg-accent hover:border-accent hover:text-primary transition-all text-xl"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Book a Table
                            </Link>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
}
