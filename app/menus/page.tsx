import { Metadata } from "next";
import MenuContent from "./MenuContent";

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
    return <MenuContent categories={menuCategories} />;
}