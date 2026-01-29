import { Metadata } from "next";
import { Mail, MapPin, Phone, Clock } from "lucide-react";

export const metadata: Metadata = {
    title: "Visit Us | Ajisai Restaurant Portland, OR",
    description:
        "Contact information, location, and hours for Ajisai Restaurant in Portland's Pearl District.",
};

export default function ContactPage() {
    return (
        <div className="bg-secondary min-h-screen text-primary pb-20">
            <div className="container mx-auto px-6 py-20 pt-32">
                <h1 className="text-4xl md:text-5xl font-serif text-center mb-16 uppercase tracking-widest">Contact & Location</h1>

                <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
                    {/* Info */}
                    <div className="w-full lg:w-1/3 space-y-12">
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <MapPin className="w-6 h-6 text-accent" />
                                <h2 className="text-2xl font-serif">Location</h2>
                            </div>
                            <p className="pl-9 text-lg opacity-80 leading-relaxed">
                                123 Pearl District<br />
                                Portland, OR 97209<br />
                                <span className="text-sm opacity-60">(Corner of 10th & Glisan)</span>
                            </p>
                        </div>

                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <Phone className="w-6 h-6 text-accent" />
                                <h2 className="text-2xl font-serif">Contact</h2>
                            </div>
                            <p className="pl-9 text-lg opacity-80 leading-relaxed">
                                (503) 555-0123<br />
                                <span className="text-sm">reservations@ajisai-portland.com</span>
                            </p>
                        </div>

                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <Clock className="w-6 h-6 text-accent" />
                                <h2 className="text-2xl font-serif">Hours</h2>
                            </div>
                            <div className="pl-9 text-lg opacity-80 leading-relaxed">
                                <div className="flex justify-between max-w-[200px] mb-2">
                                    <span>Mon - Thu</span>
                                    <span>11:00 - 10:00</span>
                                </div>
                                <div className="flex justify-between max-w-[200px] mb-2 font-semibold text-primary">
                                    <span>Fri - Sat</span>
                                    <span>11:00 - 11:00</span>
                                </div>
                                <div className="flex justify-between max-w-[200px]">
                                    <span>Sunday</span>
                                    <span>11:00 - 10:00</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Map */}
                    <div className="w-full lg:w-2/3 h-[500px] bg-gray-200 relative shadow-xl border-4 border-white">
                        <iframe
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            scrolling="no"
                            marginHeight={0}
                            marginWidth={0}
                            src="https://maps.google.com/maps?q=Portland%2C%20OR%20Pearl%20District&t=&z=15&ie=UTF8&iwloc=&output=embed"
                            aria-label="Google Map of Portland, OR"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}
