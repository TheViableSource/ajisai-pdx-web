import Link from "next/link";
import { Facebook, Instagram, MapPin, Phone, Mail, Clock } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-primary text-secondary py-16">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
                    {/* Brand & Address */}
                    <div className="flex flex-col items-center md:items-start space-y-4">
                        <Link href="/" className="text-3xl font-serif tracking-widest mb-2">
                            AJISAI
                        </Link>
                        <div className="flex items-start gap-3 opacity-90">
                            <MapPin className="w-5 h-5 mt-1 shrink-0 text-accent" />
                            <p>
                                123 Pearl District
                                <br />
                                Portland, OR 97209
                            </p>
                        </div>
                        <div className="flex items-center gap-3 opacity-90">
                            <Phone className="w-5 h-5 text-accent" />
                            <p>(503) 555-0123</p>
                        </div>
                        <div className="flex items-center gap-3 opacity-90">
                            <Mail className="w-5 h-5 text-accent" />
                            <p>reservations@ajisai-portland.com</p>
                        </div>
                    </div>

                    {/* Hours */}
                    <div className="flex flex-col items-center space-y-4">
                        <h3 className="text-xl font-serif text-accent mb-2">Hours of Operation</h3>
                        <div className="flex items-start gap-3 opacity-90">
                            <Clock className="w-5 h-5 mt-1 text-accent" />
                            <div>
                                <p className="font-semibold">Monday - Sunday</p>
                                <p>11:00 AM – 11:00 PM</p>
                            </div>
                        </div>
                        <div className="pt-4">
                            <Link
                                href="/reservations"
                                className="inline-block px-8 py-3 border border-accent text-accent hover:bg-accent hover:text-primary transition-colors duration-300 uppercase tracking-widest text-sm"
                            >
                                Book a Table
                            </Link>
                        </div>
                    </div>

                    {/* Social & Links */}
                    <div className="flex flex-col items-center md:items-end space-y-4">
                        <h3 className="text-xl font-serif text-accent mb-2">Connect</h3>
                        <div className="flex gap-6">
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-accent transition-colors"
                                aria-label="Instagram"
                            >
                                <Instagram className="w-6 h-6" />
                            </a>
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-accent transition-colors"
                                aria-label="Facebook"
                            >
                                <Facebook className="w-6 h-6" />
                            </a>
                        </div>
                        <nav className="flex flex-col gap-2 mt-4 text-center md:text-right text-sm opacity-80">
                            <Link href="/about" className="hover:text-accent">
                                Our Story
                            </Link>
                            <Link href="/menus" className="hover:text-accent">
                                Menus
                            </Link>
                            <Link href="/contact" className="hover:text-accent">
                                Contact & Location
                            </Link>
                            <Link href="#" className="hover:text-accent">
                                Privacy Policy
                            </Link>
                        </nav>
                    </div>
                </div>

                <div className="border-t border-secondary/20 mt-12 pt-8 text-center text-sm opacity-60">
                    <p>&copy; {new Date().getFullYear()} Ajisai Restaurant. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
