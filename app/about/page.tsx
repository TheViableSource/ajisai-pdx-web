import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Our Story | Authentic Japanese Cuisine in Portland | Ajisai",
    description:
        "Learn about Ajisai's commitment to culinary excellence, our heritage, and why we are Portland's premier destination for fine Japanese dining.",
};

export default function AboutPage() {
    return (
        <div className="bg-secondary min-h-screen text-primary pb-20">
            {/* Hero */}
            <div className="relative h-[60vh]">
                <Image
                    src="https://images.unsplash.com/photo-1493236272120-200db0da1927?auto=format&fit=crop&q=80&w=2000"
                    alt="Rainy Portland Window Ambiance"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <h1 className="text-5xl md:text-6xl font-serif text-white tracking-widest uppercase">Our Story</h1>
                </div>
            </div>

            <div className="container mx-auto px-6 py-20 max-w-4xl">
                <div className="prose prose-lg prose-headings:font-serif prose-headings:text-primary text-primary/80 mx-auto">
                    <h2 className="text-3xl text-center mb-8">Japanese Tradition, Portland Spirit</h2>
                    <p className="mb-6 leading-relaxed">
                        Welcome to <strong>Ajisai</strong> (Hydrangea), a sanctuary of Japanese culinary art nestled in Beaverton, located just across the street from Beaverton Town Square. Just as the hydrangea flower blooms with grace and vibrance, we strive to bring beauty and life to every plate we serve.
                    </p>
                    <p className="mb-6 leading-relaxed">
                        Our journey began with a simple philosophy: to honor the centuries-old traditions of Sushi, Teppanyaki, and Kaiseki while embracing the bountiful fresh ingredients of the Pacific Northwest. Our chefs are masters of their craft, expertly balancing flavors, textures, and aesthetics to create an unforgettable dining experience.
                    </p>

                    <div className="my-12 relative h-[400px] w-full rounded-sm overflow-hidden">
                        <Image
                            src="https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&fit=crop&q=80&w=2000"
                            alt="Chef at work"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <h2 className="text-3xl text-center mb-8">The Experience</h2>
                    <p className="mb-6 leading-relaxed">
                        Dining at Ajisai is more than just a meal; it is an immersion into a world of refined elegance. From the moment you step through our doors, you are greeted by warm wood tones, soft lighting, and the quiet dedication of our staff. Whether you are enjoying a casual lunch of Tonkotsu Ramen or an elaborate Omakase dinner, we ensure that every detail is perfect.
                    </p>
                    <p className="mb-6 leading-relaxed">
                        We invite you to join us and discover why Ajisai has become a beloved staple in Portland's fine dining scene.
                    </p>
                </div>
            </div>
        </div>
    );
}
