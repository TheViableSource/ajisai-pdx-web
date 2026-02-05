"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ArrowUp, Star, Quote, Sparkles } from "lucide-react";
import { useEffect, useState, useRef, MouseEvent } from "react";

// --- NEW COMPONENT: 3D TILT CARD ---
// This makes the images feel "alive" by following the mouse
const TiltCard = ({ src, alt }: { src: string, alt: string }) => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left;
    const y = e.clientY - box.top;
    const centerX = box.width / 2;
    const centerY = box.height / 2;

    // Calculate rotation (max 10 degrees)
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;

    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 }); // Reset position
  };

  return (
    <div
      className="relative h-[400px] w-full group perspective-1000 overflow-hidden rounded-sm shadow-2xl"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: "1000px" }}
    >
      <div
        className="relative w-full h-full transition-transform duration-200 ease-out"
        style={{
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale(1.05)`,
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
        {/* Shine Effect Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </div>
    </div>
  );
};

const REVIEWS = [
  {
    id: 1,
    text: "An absolute gem in Beaverton. The Omakase experience was akin to dining in Tokyo. The attention to detail is unmatched.",
    author: "Sarah J.",
    source: "OpenTable Diner"
  },
  {
    id: 2,
    text: "Finally, authentic Tonkotsu in Portland. The broth is rich without being heavy, and the atmosphere is simply stunning.",
    author: "Michael Chen",
    source: "Local Guide"
  },
  {
    id: 3,
    text: "The Wagyu steak was perfection. A romantic, upscale vibe that we have been missing in this city. Highly recommended.",
    author: "The Oregonian",
    source: "Food Critic"
  }
];

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.6;
    }

    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">

      {/* --- SCROLL TO TOP BUTTON --- */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 bg-primary text-secondary p-3 rounded-full shadow-2xl transition-all duration-500 ease-in-out transform hover:scale-110 hover:bg-accent hover:text-primary group ${showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
          }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6" />
      </button>

      {/* 1. HERO SECTION */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/hero-sushi.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <h2 className="text-white tracking-[0.2em] uppercase text-sm md:text-base mb-4 animate-fade-in-up">
            Welcome to Ajisai
          </h2>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8 tracking-tight leading-tight">
            The Art of <br />
            <span className="italic text-[#C5A059]">Japanese Dining</span>
          </h1>
          <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Experience authentic sushi, interactive teppanyaki, and handcrafted ramen located across the street from Beaverton Town Square.
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <Link
              href="/reservations"
              className="bg-[#5D182E] text-white px-8 py-4 rounded-sm uppercase tracking-widest text-sm transition-all duration-300 min-w-[200px] border border-[#5D182E] hover:bg-white hover:text-[#5D182E]"
            >
              Book a Table
            </Link>
            <Link
              href="/menus"
              className="border border-white text-white px-8 py-4 rounded-sm uppercase tracking-widest text-sm transition-all duration-300 min-w-[200px] hover:bg-white hover:text-[#5D182E]"
            >
              View Menus
            </Link>
          </div>
        </div>
      </section>

      {/* 2. ZIG-ZAG FEATURE SECTION WITH 3D TILT */}
      <section
        className="w-full bg-[#F9F4E8] py-24 bg-repeat bg-[length:400px_400px]"
        style={{ backgroundImage: 'url("/pattern-bg.png")' }}
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-[#5D182E] text-4xl md:text-5xl font-serif mb-4">Our Culinary Craft</h2>
            <div className="w-24 h-1 bg-[#C5A059] mx-auto" />
          </div>

          {/* Feature 1: Sushi */}
          <div className="flex flex-col md:flex-row items-center gap-12 mb-24">
            <div className="md:w-1/2 text-center md:text-left space-y-6">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <Sparkles className="text-[#C5A059] w-5 h-5" />
                <span className="text-xs tracking-widest uppercase text-[#C5A059] font-bold">Chef's Selection</span>
              </div>
              <h3 className="text-3xl font-serif text-[#5D182E]">Artisan Sushi</h3>
              <p className="text-gray-800 leading-loose">
                Our sushi is a testament to purity and precision. We source our fish daily from sustainable markets, ensuring that every piece of Nigiri and every roll captures the essence of the ocean.
              </p>
              <Link href="/menus#sushi" className="inline-flex items-center text-[#5D182E] hover:text-[#C5A059] transition-colors uppercase tracking-widest text-sm font-semibold mt-4">
                View Sushi Menu <ChevronRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
            {/* 3D TILT CARD IMPLEMENTATION */}
            <div className="md:w-1/2 w-full">
              <TiltCard
                src="/artisan-sushi.jpg"
                alt="Sushi Platter"
              />
            </div>
          </div>

          {/* Feature 2: Ramen */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-12 mb-24">
            <div className="md:w-1/2 text-center md:text-left space-y-6">
              <h3 className="text-3xl font-serif text-[#5D182E]">Handcrafted Ramen</h3>
              <p className="text-gray-800 leading-loose">
                Soul-warming comfort in a bowl. Our Tonkotsu broth is simmered for 24 hours to achieve a rich, creamy depth, paired perfectly with our house-made noodles and tender chashu pork.
              </p>
              <Link href="/menus#ramen" className="inline-flex items-center text-[#5D182E] hover:text-[#C5A059] transition-colors uppercase tracking-widest text-sm font-semibold mt-4">
                View Ramen Menu <ChevronRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
            {/* 3D TILT CARD IMPLEMENTATION */}
            <div className="md:w-1/2 w-full">
              <TiltCard
                src="/handcrafted-ramen.jpg"
                alt="Ramen Bowl"
              />
            </div>
          </div>

          {/* Feature 3: Steak */}
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 text-center md:text-left space-y-6">
              <h3 className="text-3xl font-serif text-[#5D182E]">Premium Steak & Bowls</h3>
              <p className="text-gray-800 leading-loose">
                Experience the melt-in-your-mouth texture of premium American Wagyu. Grilled to perfection and served with our signature truffle soy reduction, it is a modern twist on classic Japanese teppan flavors.
              </p>
              <Link href="/menus#steak" className="inline-flex items-center text-[#5D182E] hover:text-[#C5A059] transition-colors uppercase tracking-widest text-sm font-semibold mt-4">
                View Entrees <ChevronRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
            {/* 3D TILT CARD IMPLEMENTATION */}
            <div className="md:w-1/2 w-full">
              <TiltCard
                src="/wagyu-steak.jpg"
                alt="Wagyu Steak"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. TEPPANYAKI SECTION */}
      <section className="w-full bg-[#111] text-white py-24 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">

            {/* Text Content */}
            <div className="w-full lg:w-1/2 space-y-8 order-2 lg:order-1">
              <div className="space-y-4">
                <span className="text-[#C5A059] tracking-[0.2em] text-sm font-bold uppercase">Dinner & A Show</span>
                <h2 className="text-4xl md:text-5xl font-serif leading-tight">
                  <span className="text-[#C5A059]">Teppanyaki</span> Experience
                </h2>
              </div>

              <p className="text-gray-300 leading-loose text-lg font-light">
                Prepare for an unforgettable evening where culinary mastery meets theatrical performance.
                Our skilled chefs dazzle with a fiery display of knife skills and showmanship, grilling premium
                steaks, seafood, and fresh vegetables right before your eyes.
              </p>

              <ul className="space-y-4 text-gray-400">
                <li className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-[#C5A059] mt-1 shrink-0" />
                  <span>Interactive dining perfect for celebrations</span>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-[#C5A059] mt-1 shrink-0" />
                  <span>Premium Wagyu and Lobster options available</span>
                </li>
              </ul>

              <div className="pt-4">
                <Link
                  href="/reservations"
                  className="bg-[#C5A059] text-[#111] px-8 py-4 rounded-sm uppercase tracking-widest text-sm font-bold hover:bg-white transition-colors duration-300 inline-block"
                >
                  Reserve Your Seat
                </Link>
              </div>
            </div>

            {/* Video Placeholder */}
            <div className="w-full lg:w-1/2 order-1 lg:order-2">
              <div className="relative aspect-video w-full bg-black/50 border border-[#333] rounded-sm overflow-hidden group">
                {/* Placeholder Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 bg-[url('https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center">
                  <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-500" />
                  <div className="relative z-10">
                    <div className="w-20 h-20 rounded-full border-2 border-[#C5A059] flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                      <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-[#C5A059] border-b-[10px] border-b-transparent ml-1" />
                    </div>
                    <h3 className="text-2xl font-serif text-white mb-2">The Fire Show</h3>
                    <p className="text-[#C5A059] tracking-widest text-sm uppercase">Coming Soon</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. REVIEWS SECTION (renumbered) */}
      <section className="w-full bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-[#5D182E] text-3xl md:text-4xl font-serif mb-4">Guest Experiences</h2>
            <div className="flex justify-center gap-1 text-[#C5A059]">
              <Star fill="#C5A059" size={20} />
              <Star fill="#C5A059" size={20} />
              <Star fill="#C5A059" size={20} />
              <Star fill="#C5A059" size={20} />
              <Star fill="#C5A059" size={20} />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REVIEWS.map((review) => (
              <div key={review.id} className="bg-[#F9F4E8] p-8 relative rounded-sm shadow-sm hover:shadow-md transition-shadow">
                <Quote className="text-[#C5A059] opacity-30 w-10 h-10 mb-4" />
                <p className="text-gray-700 font-light italic mb-6 leading-relaxed">
                  "{review.text}"
                </p>
                <div className="border-t border-[#5D182E]/10 pt-4">
                  <p className="text-[#5D182E] font-serif font-medium">{review.author}</p>
                  <p className="text-xs text-[#C5A059] uppercase tracking-widest mt-1">{review.source}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. AMBIANCE BANNER */}
      <section className="relative w-full h-[60vh] flex items-center justify-center bg-fixed bg-center bg-cover"
        style={{ backgroundImage: 'url("/sushi-restaurant.jpg")' }}>
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center max-w-2xl px-6">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">A Sanctuary in the City</h2>
          <p className="text-gray-300 text-lg mb-8">
            Located across the street from Beaverton Town Square, our space reflects the timeless beauty of the Hydrangea (Ajisai).
          </p>
          <Link href="/about" className="text-white border-b border-[#C5A059] pb-1 hover:text-[#C5A059] transition-colors">
            Read Our Story
          </Link>
        </div>
      </section>
    </main>
  );
}