import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone, Users } from "lucide-react";

export const metadata: Metadata = {
    title: "Reserve Your Table | Ajisai Portland",
    description:
        "Book a table at Ajisai for an unforgettable Japanese fine dining experience. Reservations recommended.",
};

export default function ReservationsPage() {
    return (
        <div className="bg-secondary min-h-screen text-primary pb-20">
            {/* Hero */}
            <div className="relative h-[40vh] bg-primary">
                <Image
                    src="https://images.unsplash.com/photo-1580442151529-343f2f5e0e31?auto=format&fit=crop&q=80&w=2000"
                    alt="Restaurant Interior"
                    fill
                    className="object-cover opacity-50"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-4xl md:text-5xl font-serif text-white tracking-widest uppercase">Reservations</h1>
                </div>
            </div>

            <div className="container mx-auto px-6 py-20">
                <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 shadow-2xl border-t-4 border-primary">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-serif mb-4">Book a Table</h2>
                        <p className="opacity-70">
                            We recommend making a reservation up to one month in advance.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        {/* Online Booking Simulation */}
                        <div className="space-y-6">
                            <h3 className="text-xl font-serif font-semibold border-b border-primary/10 pb-2">Online Reservations</h3>
                            <p className="text-sm opacity-80">
                                Select your party size and preferred date to check availability.
                            </p>

                            <form className="space-y-4" action="#">
                                <div>
                                    <label className="block text-xs uppercase tracking-widest mb-2 font-bold opacity-70">Party Size</label>
                                    <select className="w-full border border-primary/20 px-4 py-3 bg-transparent focus:border-primary focus:outline-none transition-colors">
                                        <option>2 People</option>
                                        <option>3 People</option>
                                        <option>4 People</option>
                                        <option>5 People</option>
                                        <option>6 People</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-xs uppercase tracking-widest mb-2 font-bold opacity-70">Date</label>
                                    <input
                                        type="date"
                                        className="w-full border border-primary/20 px-4 py-3 bg-transparent focus:border-primary focus:outline-none transition-colors"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs uppercase tracking-widest mb-2 font-bold opacity-70">Time</label>
                                    <select className="w-full border border-primary/20 px-4 py-3 bg-transparent focus:border-primary focus:outline-none transition-colors">
                                        <option>5:00 PM</option>
                                        <option>5:30 PM</option>
                                        <option>6:00 PM</option>
                                        <option>6:30 PM</option>
                                        <option>7:00 PM</option>
                                        <option>7:30 PM</option>
                                        <option>8:00 PM</option>
                                    </select>
                                </div>

                                <button className="w-full bg-primary text-white py-4 uppercase tracking-widest text-sm hover:bg-primary/90 transition-colors mt-4">
                                    Find a Table
                                </button>
                            </form>
                        </div>

                        {/* Large Party Info */}
                        <div className="flex flex-col items-center justify-center text-center space-y-6 bg-secondary/50 p-8 rounded-sm">
                            <Users className="w-10 h-10 text-accent opacity-80" />
                            <div>
                                <h3 className="text-xl font-serif font-semibold mb-2">Large Parties</h3>
                                <p className="text-sm opacity-80 mb-4">
                                    For parties of 7 or more, or private dining events, please contact us directly.
                                </p>
                                <div className="flex items-center justify-center gap-2 text-lg font-bold text-accent">
                                    <Phone className="w-5 h-5" />
                                    <span>(503) 555-0123</span>
                                </div>
                            </div>
                            <div className="pt-4 border-t border-primary/10 w-full">
                                <h4 className="text-sm font-bold uppercase tracking-widest mb-2">Hours</h4>
                                <p className="text-sm opacity-80">Monday - Sunday</p>
                                <p className="text-sm opacity-80">11:00 AM - 11:00 PM</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
