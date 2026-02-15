"use client";

import { useState, useEffect } from "react";
import { Mail } from "lucide-react";

/**
 * Client-side email link component.
 * The email address is assembled in JavaScript at runtime,
 * so it never appears in the raw HTML that scrapers see.
 */
export function EmailLink() {
    const [email, setEmail] = useState("");

    useEffect(() => {
        // Assemble email client-side — bots scraping HTML won't see it
        const user = "manager";
        const domain = "ajisaisushisteak";
        const tld = "com";
        setEmail(`${user}@${domain}.${tld}`);
    }, []);

    if (!email) {
        return (
            <span className="inline-flex items-center gap-3 bg-[#5D182E] text-white px-8 py-4 rounded-sm uppercase tracking-widest text-sm">
                <Mail className="w-5 h-5" />
                Loading...
            </span>
        );
    }

    return (
        <a
            href={`mailto:${email}?subject=Job%20Application%20-%20[Position]`}
            className="inline-flex items-center gap-3 bg-[#5D182E] text-white px-8 py-4 rounded-sm uppercase tracking-widest text-sm hover:bg-[#C5A059] hover:text-white transition-all duration-300"
        >
            <Mail className="w-5 h-5" />
            {email}
        </a>
    );
}
