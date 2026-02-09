"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const navLinks = [
    { name: "About", href: "/about" },
    { name: "Menus", href: "/menus" },
    { name: "Reservations", href: "/reservations" },
    { name: "Contact", href: "/contact" },
];

const giftRewardsLinks = [
    { name: "Gift Cards", href: "https://order.toasttab.com/egiftcards/ajisai-beaverton" },
    { name: "Rewards Signup", href: "https://www.toasttab.com/ajisai-beaverton/rewardsSignup" },
    { name: "Check Rewards", href: "https://www.toasttab.com/ajisai-beaverton/rewardsLookup" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDesktopDropdownOpen, setIsDesktopDropdownOpen] = useState(false);
    const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
    const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const pathname = usePathname();

    const isHeroPage = ["/", "/menus", "/about", "/jobs", "/reservations", "/gift-cards-rewards"].includes(pathname);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile dropdown when mobile menu closes
    useEffect(() => {
        if (!isMobileMenuOpen) setIsMobileDropdownOpen(false);
    }, [isMobileMenuOpen]);

    const handleDropdownEnter = () => {
        if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
        setIsDesktopDropdownOpen(true);
    };

    const handleDropdownLeave = () => {
        dropdownTimeoutRef.current = setTimeout(() => {
            setIsDesktopDropdownOpen(false);
        }, 150);
    };

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

                    {/* Gift Cards & Rewards Dropdown */}
                    <div
                        className="relative"
                        onMouseEnter={handleDropdownEnter}
                        onMouseLeave={handleDropdownLeave}
                    >
                        <div className="flex items-center gap-1">
                            <Link
                                href="/gift-cards-rewards"
                                className={clsx(
                                    "text-sm uppercase tracking-wider font-light hover:text-accent transition-colors",
                                    isScrolled || !isHeroPage
                                        ? "text-secondary"
                                        : "text-white"
                                )}
                            >
                                Gift Cards & Rewards
                            </Link>
                            <ChevronDown
                                size={14}
                                className={clsx(
                                    "transition-transform duration-200",
                                    isScrolled || !isHeroPage
                                        ? "text-secondary"
                                        : "text-white",
                                    isDesktopDropdownOpen && "rotate-180"
                                )}
                            />
                        </div>

                        <AnimatePresence>
                            {isDesktopDropdownOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: -8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -8 }}
                                    transition={{ duration: 0.15 }}
                                    className="absolute top-full right-0 mt-3 w-56 bg-primary border border-secondary/20 shadow-xl rounded-sm overflow-hidden"
                                >
                                    {giftRewardsLinks.map((link) => (
                                        <a
                                            key={link.name}
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block px-5 py-3 text-sm text-secondary hover:bg-accent hover:text-primary transition-colors duration-200"
                                        >
                                            {link.name}
                                        </a>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

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
                                    className="text-2xl font-serif text-secondary hover:text-accent"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}

                            {/* Mobile Gift Cards & Rewards Accordion */}
                            <div className="flex flex-col items-center">
                                <div className="flex items-center gap-2">
                                    <Link
                                        href="/gift-cards-rewards"
                                        className="text-2xl font-serif text-secondary hover:text-accent"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        Gift Cards & Rewards
                                    </Link>
                                    <button
                                        className="text-secondary hover:text-accent"
                                        onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                                        aria-expanded={isMobileDropdownOpen}
                                        aria-label="Toggle Gift Cards & Rewards submenu"
                                    >
                                        <ChevronDown
                                            size={20}
                                            className={clsx(
                                                "transition-transform duration-200",
                                                isMobileDropdownOpen && "rotate-180"
                                            )}
                                        />
                                    </button>
                                </div>
                                <AnimatePresence>
                                    {isMobileDropdownOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.25 }}
                                            className="overflow-hidden flex flex-col items-center gap-3 mt-3"
                                        >
                                            {giftRewardsLinks.map((link) => (
                                                <a
                                                    key={link.name}
                                                    href={link.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-lg text-accent hover:text-secondary transition-colors"
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                >
                                                    {link.name}
                                                </a>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

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
