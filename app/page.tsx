"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { useEffect, useRef } from "react";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.6; // 60% speed
    }
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* 1. HERO SECTION WITH VIDEO BACKGROUND */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
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

        {/* Hero Content */}
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          {/* FIXED: White text for visibility */}
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
          
          {/* FIXED: Buttons now turn White with Burgundy text on hover */}
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

      {/* 2. ZIG-ZAG "MAGAZINE" FEATURE SECTION */}
      {/* FIXED: Hardcoded Cream Background (#F9F4E8) to revert the black background issue */}
      <section className="w-full bg-[#F9F4E8] py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            {/* FIXED: Text color forced to Burgundy (#5D182E) */}
            <h2 className="text-[#5D182E] text-4xl md:text-5xl font-serif mb-4">Our Culinary Craft</h2>
            <div className="w-24 h-1 bg-[#C5A059] mx-auto" />
          </div>

          {/* Feature 1: Sushi */}
          <div className="flex flex-col md:flex-row items-center gap-12 mb-24">
            <div className="md:w-1/2 text-center md:text-left space-y-6">
              <h3 className="text-3xl font-serif text-[#5D182E]">Artisan Sushi</h3>
              {/* FIXED: Text color forced to Dark Gray for readability on cream */}
              <p className="text-gray-800 leading-loose">
                Our sushi is a testament to purity and precision. We source our fish daily from sustainable markets, ensuring that every piece of Nigiri and every roll captures the essence of the ocean.
              </p>
              <Link href="/menus#sushi" className="inline-flex items-center text-[#5D182E] hover:text-[#C5A059] transition-colors uppercase tracking-widest text-sm font-semibold mt-4">
                View Sushi Menu <ChevronRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
            <div className="md:w-1/2 relative h-[400px] w-full group overflow-hidden">
               <Image 
                src="https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&q=80&w=1000" 
                alt="Sushi Platter" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105"
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
            <div className="md:w-1/2 relative h-[400px] w-full group overflow-hidden">
               <Image 
                src="/ramen-bowl.jpg"
                alt="Ramen Bowl" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105"
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
            <div className="md:w-1/2 relative h-[400px] w-full group overflow-hidden">
               <Image 
                src="https://images.unsplash.com/photo-1606416132922-22ab37c1231a?auto=format&fit=crop&q=80&w=1000" 
                alt="Wagyu Steak" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. FULL WIDTH "AMBIANCE" BANNER */}
      <section className="relative w-full h-[60vh] flex items-center justify-center bg-fixed bg-center bg-cover" 
        style={{backgroundImage: 'url("https://images.unsplash.com/photo-1493236272120-200db0da1927?auto=format&fit=crop&q=80&w=2000")'}}>
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