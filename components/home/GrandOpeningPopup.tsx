"use client";

import { useState, useEffect } from "react";
import { X, Sparkles } from "lucide-react";

export default function GrandOpeningPopup() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Small delay so the page loads first, then the popup animates in
        const timer = setTimeout(() => {
            const dismissed = sessionStorage.getItem("grand-opening-dismissed");
            if (!dismissed) {
                setIsOpen(true);
            }
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        setIsOpen(false);
        sessionStorage.setItem("grand-opening-dismissed", "true");
    };

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-label="Grand Opening Celebration"
        >
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/70 backdrop-blur-sm animate-[fadeIn_0.4s_ease-out]"
                onClick={handleClose}
            />

            {/* Popup Card */}
            <div className="relative w-full max-w-lg bg-[#111] border border-[#C5A059]/40 rounded-sm shadow-2xl animate-[slideUp_0.5s_ease-out] overflow-hidden">

                {/* Top gold accent line */}
                <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#C5A059] to-transparent" />

                {/* Close button */}
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 z-10 text-gray-400 hover:text-white transition-colors"
                    aria-label="Close popup"
                >
                    <X className="w-5 h-5" />
                </button>

                {/* Content */}
                <div className="px-8 pt-10 pb-8 text-center">

                    {/* Sparkle badge */}
                    <div className="flex items-center justify-center gap-2 mb-6">
                        <Sparkles className="w-4 h-4 text-[#C5A059]" />
                        <span className="text-[10px] tracking-[0.3em] uppercase text-[#C5A059] font-bold">
                            You&apos;re Invited
                        </span>
                        <Sparkles className="w-4 h-4 text-[#C5A059]" />
                    </div>

                    {/* Title */}
                    <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight mb-2">
                        Grand Opening
                    </h2>
                    <p className="text-[#C5A059] font-serif text-lg italic mb-6">
                        Ribbon Cutting Ceremony
                    </p>

                    {/* Date / Time */}
                    <div className="border border-[#C5A059]/20 rounded-sm py-4 px-6 mb-6 bg-[#C5A059]/5">
                        <p className="text-white text-xl font-serif tracking-wide">
                            March 9, 2026
                        </p>
                        <p className="text-gray-400 text-sm tracking-widest uppercase mt-1">
                            11:30 AM
                        </p>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 text-sm leading-relaxed mb-8 max-w-sm mx-auto">
                        Celebrate with us as we officially open our doors and welcome the community. We look forward to seeing you there.
                    </p>

                    {/* 50% Off Promo */}
                    <div className="bg-[#5D182E] rounded-sm p-6 mb-8">
                        <p className="text-[#C5A059] text-4xl font-serif font-bold mb-1">
                            50% OFF
                        </p>
                        <p className="text-white text-sm uppercase tracking-widest mb-3">
                            Opening Day Courtesy
                        </p>
                        <div className="w-12 h-px bg-[#C5A059]/40 mx-auto mb-3" />
                        <p className="text-gray-300 text-xs leading-relaxed">
                            Walk-in only. Excludes A5 Wagyu and alcohol.<br />
                            Valid only on March 9, 2026.
                        </p>
                    </div>

                    {/* Location */}
                    <p className="text-gray-500 text-xs tracking-widest uppercase">
                        4050 SW 114th Ave, Beaverton
                    </p>
                </div>

                {/* Bottom gold accent line */}
                <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#C5A059] to-transparent" />
            </div>
        </div>
    );
}
