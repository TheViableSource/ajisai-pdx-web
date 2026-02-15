import { Metadata } from "next";
import Image from "next/image";
import { FileText, Briefcase, Mail } from "lucide-react";
import { EmailLink } from "./EmailLink";

export const metadata: Metadata = {
    title: "Careers | Ajisai Restaurant",
    description:
        "Join the Ajisai team. View career opportunities and learn how to apply at our Beaverton, OR location.",
    robots: { index: false, follow: false },
};

const positions = [
    "Server",
    "Sushi Chef",
    "Kitchen Staff",
    "Host / Hostess",
    "Bartender",
];

export default function JobsPage() {
    return (
        <div className="bg-secondary min-h-screen text-primary pb-20">
            {/* Hero Section */}
            <div className="relative h-[50vh]">
                <Image
                    src="/jobs-hero.jpg"
                    alt="Ajisai Team"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <h1 className="text-5xl md:text-6xl font-serif text-white tracking-widest uppercase">Join Our Team</h1>
                </div>
            </div>

            <div className="container mx-auto px-6 py-20 max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif text-[#5D182E] mb-6">Career Opportunities</h2>
                    <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
                        At Ajisai, we are always looking for passionate individuals who share our dedication to culinary excellence and hospitality.
                        If you thrive in a fast-paced, detail-oriented environment, we would love to hear from you.
                    </p>
                </div>

                {/* How to Apply */}
                <div className="bg-white p-8 md:p-12 rounded-sm shadow-xl border-t-4 border-[#C5A059]">
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#F9F4E8] mb-6">
                            <Mail className="w-8 h-8 text-[#5D182E]" />
                        </div>
                        <h3 className="text-2xl font-serif text-[#5D182E] mb-4">How to Apply</h3>
                        <p className="text-gray-600 leading-relaxed max-w-xl mx-auto">
                            Please send your resume as a <strong>PDF attachment</strong> to the email address below.
                            Include the position you are interested in as your subject line.
                        </p>
                    </div>

                    {/* Email CTA — rendered client-side to prevent scraping */}
                    <div className="text-center mb-12">
                        <EmailLink />
                    </div>

                    {/* Instructions */}
                    <div className="bg-[#F9F4E8] p-6 md:p-8 rounded-sm space-y-4">
                        <h4 className="font-serif text-lg text-[#5D182E] mb-4">Please include:</h4>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <FileText className="w-5 h-5 text-[#C5A059] mt-0.5 shrink-0" />
                                <span className="text-gray-700">Your resume in <strong>PDF format</strong></span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Briefcase className="w-5 h-5 text-[#C5A059] mt-0.5 shrink-0" />
                                <span className="text-gray-700">The <strong>position</strong> you are applying for in the subject line</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Mail className="w-5 h-5 text-[#C5A059] mt-0.5 shrink-0" />
                                <span className="text-gray-700">A brief introduction and any <strong>relevant experience</strong></span>
                            </li>
                        </ul>
                    </div>

                    {/* Positions */}
                    <div className="mt-10">
                        <h4 className="font-serif text-lg text-[#5D182E] text-center mb-6">Positions We Commonly Hire For</h4>
                        <div className="flex flex-wrap justify-center gap-3">
                            {positions.map((position) => (
                                <span
                                    key={position}
                                    className="px-5 py-2 bg-[#F9F4E8] text-[#5D182E] text-sm tracking-wider border border-[#5D182E]/10 rounded-sm"
                                >
                                    {position}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
