"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

const navLinks = [
    { name: "About", href: "/about" },
    { name: "Menus", href: "/menus" },
    { name: "Reservations", href: "/reservations" },
    { name: "Gift Cards", href: "https://order.toasttab.com/egiftcards/ajisai-beaverton", external: true },
    { name: "Contact", href: "/contact" },
    // { name: "Order Online", href: "#" }, // Hidden for now
];

import { usePathname } from "next/navigation";

// ...

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    // Define pages that have a dark hero image at the top
    // Define pages that have a dark hero image at the top
    // Define pages that have a dark hero image at the top
    const isHeroPage = ["/", "/menus", "/about", "/jobs", "/reservations"].includes(pathname);

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
                isScrolled
                    ? "bg-primary shadow-lg py-2"
                    : isHeroPage
                        ? "bg-transparent py-6"
                        : "bg-primary shadow-lg py-6"
            )}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="relative z-10 group flex items-center gap-3">
                    <div className={clsx(
                        "relative transition-all duration-500 will-change-transform",
                        isScrolled ? "w-0 h-0 opacity-0 -translate-x-4" : "w-32 h-32 opacity-100 translate-x-0"
                    )}>
                        <Image
                            src="/logo-new.png"
                            alt="Ajisai Logo"
                            fill
                            sizes="(max-width: 768px) 100vw, 20vw"
                            className="object-contain"
                        />
                    </div>
                    <span
                        className={clsx(
                            "font-serif text-2xl tracking-widest uppercase transition-all duration-500 whitespace-nowrap",
                            isScrolled
                                ? "text-secondary opacity-100 translate-x-0"
                                : "text-primary md:text-white opacity-0 -translate-x-4 w-0 overflow-hidden"
                        )}
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
                            {...((link as any).external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                            className={clsx(
                                "text-sm uppercase tracking-wider font-light hover:text-accent transition-colors",
                                isScrolled || !isHeroPage
                                    ? "text-secondary"
                                    : "text-white"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="/reservations"
                        className={clsx(
                            "px-6 py-2 border transition-all duration-300",
                            isScrolled || !isHeroPage
                                ? "border-secondary text-secondary hover:bg-secondary hover:text-primary"
                                : "border-white text-white hover:bg-white hover:text-primary"
                        )}
                    >
                        Reserve
                    </Link>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden z-10"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle Menu"
                >
                    {isMobileMenuOpen ? (
                        <X size={28} className="text-secondary" />
                    ) : (
                        <Menu
                            size={28}
                            className={clsx(
                                isScrolled || !isHeroPage
                                    ? "text-secondary"
                                    : "text-white"
                            )}
                        />
                    )}
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
                                    {...((link as any).external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
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
