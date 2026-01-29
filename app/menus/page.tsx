import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Japanese Menu | Sushi, Ramen & Steak in Portland | Ajisai",
    description:
        "Explore our exquisite menu featuring fresh Sashimi, Nigiri, rich Tonkotsu Ramen, and Premium Steak rice bowls. Authentic flavors in Portland, OR.",
};

const menuCategories = [
    {
        id: "appetizers",
        title: "Appetizers",
        description: "Small plates perfect for sharing.",
        items: [
            { name: "Edamame", price: "$6.00", description: "Steamed soybeans lightly dusted with sea salt." },
            { name: "Gyoza", price: "$8.00", description: "Pan-fried pork and vegetable dumplings served with dipping sauce." },
            { name: "Agedashi Tofu", price: "$8.00", description: "Crispy deep-fried tofu served in a savory dashi broth with bonito flakes." },
            { name: "Soft Shell Crab", price: "$14.00", description: "Crispy fried soft shell crab served with ponzu sauce." },
        ],
    },
    {
        id: "sushi",
        title: "Sushi & Sashimi",
        description: "Expertly sliced fresh fish, sourced daily.",
        items: [
            { name: "Maguro (Tuna) Nigiri", price: "$9", description: "2 pieces" },
            { name: "Sake (Salmon) Nigiri", price: "$8", description: "2 pieces" },
            { name: "Hamachi (Yellowtail) Nigiri", price: "$9", description: "2 pieces" },
            { name: "Unagi (Eel) Nigiri", price: "$10", description: "2 pieces" },
            { name: "Uni (Sea Urchin) Nigiri", price: "MP", description: "2 pieces, Seasonal" },
            { name: "Sashimi Deluxe", price: "$35", description: "9pc Chef's choice assortment" },
            { name: "Omakase Sashimi", price: "$75", description: "18pc Premium selection" },
            { name: "Dragon Roll", price: "$18", description: "Shrimp tempura, cucumber, topped with eel and avocado" },
            { name: "Spicy Tuna Roll", price: "$12", description: "Fresh tuna, spicy mayo, cucumber" },
            { name: "Rainbow Roll", price: "$18", description: "Snow crab, avocado, topped with assorted fish" },
        ],
    },
    {
        id: "ramen",
        title: "Ramen & Udon",
        description: "Soul-warming broths and house-made noodles.",
        items: [
            { name: "Tonkotsu Ramen", price: "$16", description: "Rich pork broth, chashu, soft egg, bamboo shoots, scallions" },
            { name: "Spicy Miso Ramen", price: "$17", description: "Spicy soybean paste broth, minced pork, corn, bean sprouts" },
            { name: "Shoyu Ramen", price: "$16", description: "Soy sauce base chicken broth, pork chashu, spinach, nori" },
            { name: "Veggie Ramen", price: "$15", description: "Creamy vegetable broth, tofu, seasonal vegetables, corn" },
            { name: "Tempura Udon", price: "$16", description: "Thick udon noodles in dashi broth, side of shrimp & veg tempura" },
            { name: "Kitsune Udon", price: "$14", description: "Udon noodles, dashi broth, sweet fried tofu skin" },
        ],
    },
    {
        id: "steak",
        title: "Rice Bowls & Entrees",
        description: "Hearty donburi and signature plates.",
        items: [
            { name: "Ajisai Dinner Bento", price: "$40", description: "Served with Miso Soup, Salad, Rice, Tempura & CA Roll. Choose 2: Sush/Sashimi, Teriyaki, Katsu." },
            { name: "Wagyu Steak Don", price: "$45", description: "Premium American Wagyu beef, shimaji mushrooms, truffle soy sauce" },
            { name: "Unagi Don", price: "$25", description: "Grilled freshwater eel, sweet kabayaki sauce over rice" },
            { name: "Chirashi", price: "$32", description: "Assorted raw fish and vegetables over sushi rice" },
            { name: "Ten Don", price: "$18", description: "Assorted tempura over rice with tentsuyu sauce" },
            { name: "Spicy Orange Chicken", price: "$19", description: "Crispy chicken, house spicy orange glaze, broccoli" },
            { name: "Tofu Don", price: "$16", description: "Fried tofu and vegetables simmered in savory sauce" },
        ],
    },
];

export default function MenusPage() {
    return (
        <div className="bg-secondary min-h-screen text-primary pb-20">
            {/* Header */}
            <div className="relative h-[40vh] bg-black">
                <Image
                    src="https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&q=80&w=2000"
                    alt="Japanese Cuisine"
                    fill
                    className="object-cover opacity-60"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-5xl md:text-6xl font-serif text-white tracking-widest uppercase">Menus</h1>
                </div>
            </div>

            <div className="container mx-auto px-6 py-16">
                {/* Navigation Anchors */}
                <div className="flex flex-wrap justify-center gap-6 mb-16 border-b border-primary/10 pb-8 sticky top-20 z-10 bg-secondary/95 backdrop-blur py-4">
                    {menuCategories.map((cat) => (
                        <a
                            key={cat.id}
                            href={`#${cat.id}`}
                            className="text-lg uppercase tracking-widest hover:text-accent transition-colors font-serif"
                        >
                            {cat.title}
                        </a>
                    ))}
                </div>

                {/* Menu Sections */}
                <div className="max-w-4xl mx-auto space-y-20">
                    {menuCategories.map((cat) => (
                        <section key={cat.id} id={cat.id} className="scroll-mt-40">
                            <h2 className="text-3xl md:text-4xl font-serif text-center mb-4 text-primary">
                                {cat.title}
                            </h2>
                            <p className="text-center text-primary/60 italic mb-10">{cat.description}</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                                {cat.items.map((item) => (
                                    <div key={item.name} className="flex justify-between items-start border-b border-primary/10 pb-4">
                                        <div className="pr-4">
                                            <h3 className="font-serif text-lg font-medium">{item.name}</h3>
                                            <p className="text-sm opacity-70 mt-1 font-light">{item.description}</p>
                                        </div>
                                        <span className="font-serif text-lg whitespace-nowrap">{item.price}</span>
                                    </div>
                                ))}
                            </div>
                        </section>
                    ))}
                </div>
            </div>
        </div>
    );
}