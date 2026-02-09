import { Metadata } from "next";
import Image from "next/image";
import { Gift, Star, Search } from "lucide-react";

export const metadata: Metadata = {
    title: "Gift Cards & Rewards | Ajisai",
    description:
        "Purchase Ajisai gift cards for any occasion, or join our rewards program to earn points on every visit. Check your rewards balance anytime.",
};

const cards = [
    {
        icon: Gift,
        title: "Gift Cards",
        description:
            "Give the gift of exceptional Japanese dining. Ajisai e-gift cards are perfect for birthdays, holidays, or any special occasion. Available in any amount and delivered instantly via email.",
        cta: "Purchase a Gift Card",
        href: "https://order.toasttab.com/egiftcards/ajisai-beaverton",
    },
    {
        icon: Star,
        title: "Join Rewards",
        description:
            "Sign up for our free rewards program and start earning points with every visit. Enjoy exclusive perks, special offers, and complimentary treats as you dine with us.",
        cta: "Sign Up Now",
        href: "https://www.toasttab.com/ajisai-beaverton/rewardsSignup",
    },
    {
        icon: Search,
        title: "Check Your Points",
        description:
            "Already a rewards member? Check your current points balance and see how close you are to your next reward.",
        cta: "Check Balance",
        href: "https://www.toasttab.com/ajisai-beaverton/rewardsLookup",
    },
];

export default function GiftCardsRewardsPage() {
    return (
        <div className="bg-secondary min-h-screen text-primary pb-20">
            {/* Hero */}
            <div className="relative h-[60vh]">
                <Image
                    src="/sanctuary-bg.jpg"
                    alt="Ajisai Restaurant Interior"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-6">
                    <h1 className="text-5xl md:text-6xl font-serif text-white tracking-widest uppercase">
                        Gift Cards & Rewards
                    </h1>
                    <p className="mt-4 text-white/80 text-lg max-w-xl">
                        Share the Ajisai experience or earn rewards every time you dine with us.
                    </p>
                </div>
            </div>

            {/* Cards Section */}
            <div className="container mx-auto px-6 py-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
                    {cards.map((card) => (
                        <div
                            key={card.title}
                            className="bg-white border border-primary/10 rounded-sm p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow duration-300"
                        >
                            <div className="w-14 h-14 rounded-full bg-primary/5 flex items-center justify-center mb-6">
                                <card.icon className="w-7 h-7 text-accent" />
                            </div>
                            <h2 className="text-2xl font-serif mb-4">{card.title}</h2>
                            <p className="text-primary/70 leading-relaxed mb-8 flex-grow">
                                {card.description}
                            </p>
                            <a
                                href={card.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block px-8 py-3 bg-primary text-secondary hover:bg-accent hover:text-primary transition-colors duration-300 uppercase tracking-widest text-sm"
                            >
                                {card.cta}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
