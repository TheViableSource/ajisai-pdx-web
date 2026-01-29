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
        className="w-full h-full transition-transform duration-200 ease-out"
        style={{ 
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale(1.05)`,
        }}
      >
        <Image 
          src={src} 
          alt={alt} 
          fill 
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
    text: "An absolute gem in the Pearl District. The Omakase experience was akin to dining in Tokyo. The attention to detail is unmatched.",
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
        className={`fixed bottom-8 right-8 z-50 bg-[#C5A059] text-white p-4 rounded-full shadow-2xl transition-all duration-500 ease-in-out transform hover:scale-110 hover:bg-[#5D182E] group ${
          showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        <span className="absolute -inset-1 rounded-full border border-[#C5A059] opacity-0 group-hover:opacity-100 group-hover:animate-ping"></span>
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
            Experience authentic sushi, premium steak, and handcrafted ramen in the heart of Portland's Pearl District.
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
                 src="/artisan-sushi .jpg" 
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

      {/* 3. REVIEWS SECTION */}
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
        style={{backgroundImage: 'url("/sushi-restaurant.jpg")'}}>
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center max-w-2xl px-6">
           <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">A Sanctuary in the City</h2>
           <p className="text-gray-300 text-lg mb-8">
             Located in the Pearl District, our space reflects the timeless beauty of the Hydrangea (Ajisai). 
           </p>
           <Link href="/about" className="text-white border-b border-[#C5A059] pb-1 hover:text-[#C5A059] transition-colors">
             Read Our Story
           </Link>
        </div>
      </section>
    </main>
  );
}