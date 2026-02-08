"use client";

// Imports delegated to MenuContent

// --- DATA ---
const menuGroups = [
    {
        id: "appetizers",
        label: "Appetizers",
        subCategories: [
            {
                "id": "cold-appetizers",
                "title": "Cold Appetizers",
                "description": "Refresh your palate with our chilled starters.",
                "items": [
                    {
                        "name": "Sushi Platter",
                        "price": "18",
                        "description": "1 piece of each tuna, salmon, yellowtail, white fish, ebi"
                    },
                    {
                        "name": "Sashimi Platter",
                        "price": "25",
                        "description": "Chef's choice 8 pieces of assorted fish"
                    },
                    {
                        "name": "Yellowtail Jalapeño",
                        "price": "20",
                        "description": ""
                    },
                    {
                        "name": "Salmon Carpaccio",
                        "price": "20",
                        "description": "Salmon, mango, avocado, cucumber, grape tomato, w/ truffle ponzu sauce"
                    },
                    {
                        "name": "Salmon OR Tuna Tartar",
                        "price": "18",
                        "description": "Mango, avocado, crab salad w/soy mustard sauce, tobiko"
                    },
                    {
                        "name": "Albacore Crispy Onion",
                        "price": "22",
                        "description": "Yuzu ponzu, garlic aioli, micro cilantro"
                    }
                ]
            },
            {
                "id": "hot-appetizers",
                "title": "Hot Appetizers",
                "description": "Warm, savory bites to begin your meal.",
                "items": [
                    {
                        "name": "Chicken Karaage",
                        "price": "13",
                        "description": "(Japanese fried chicken)"
                    },
                    {
                        "name": "Gyoza (Chicken)",
                        "price": "12",
                        "description": ""
                    },
                    {
                        "name": "Gyoza (Veggie)",
                        "price": "13",
                        "description": ""
                    },
                    {
                        "name": "Yakitori (Chicken skewer w/onion)",
                        "price": "13",
                        "description": ""
                    },
                    {
                        "name": "Tempura (Veggie)",
                        "price": "13",
                        "description": ""
                    },
                    {
                        "name": "Tempura (Shrimp)",
                        "price": "15",
                        "description": ""
                    },
                    {
                        "name": "Tempura (Both)",
                        "price": "16",
                        "description": ""
                    },
                    {
                        "name": "Spring Roll",
                        "price": "9",
                        "description": ""
                    },
                    {
                        "name": "Edamame (Salted)",
                        "price": "6.75",
                        "description": ""
                    },
                    {
                        "name": "Edamame (Spicy Garlic)",
                        "price": "8.95",
                        "description": ""
                    },
                    {
                        "name": "Deep Fried Squid Tentacle",
                        "price": "12",
                        "description": ""
                    },
                    {
                        "name": "Grilled Hamachi Collar (w/ ponzu sauce)",
                        "price": "18",
                        "description": ""
                    },
                    {
                        "name": "Spicy Shrimp Wonton",
                        "price": "16",
                        "description": ""
                    }
                ]
            }
        ]
    },
    {
        id: "soups-salads",
        label: "Soups & Salads",
        subCategories: [
            {
                "id": "soups-salads",
                "title": "Soups & Salads",
                "description": "Light, fresh, and flavorful.",
                "items": [
                    {
                        "name": "House Miso Soup",
                        "price": "4",
                        "description": ""
                    },
                    {
                        "name": "House Salad",
                        "price": "5",
                        "description": ""
                    },
                    {
                        "name": "Sunomono Salad",
                        "price": "6.5",
                        "description": ""
                    },
                    {
                        "name": "Seaweed Salad",
                        "price": "8.75",
                        "description": ""
                    },
                    {
                        "name": "Avocado Salad",
                        "price": "8.75",
                        "description": ""
                    },
                    {
                        "name": "Grilled Salmon Salad",
                        "price": "20",
                        "description": "Grilled salmon and avocado cucumber mango on the top of mix greens, with soy mustard sauce"
                    },
                    {
                        "name": "Ajisai Sashimi Salad",
                        "price": "20",
                        "description": "Seared salmon and pepper tuna sashimi on the top of mix greens, avocado, cucumber, with soy mustard sauce"
                    }
                ]
            }
        ]
    },
    {
        id: "sushi",
        label: "Sushi",
        subCategories: [
            {
                "id": "sushi-bar-entrees",
                "title": "Sushi Bar Entrées",
                "description": "Chef's premium selection of fresh fish.",
                "items": [
                    {
                        "name": "Maki Combo",
                        "price": "28",
                        "description": "Served with miso soup or house salad Choice of any 3 rolls: Tuna roll, salmon roll, eel roll, yellowtail roll, spicy tuna roll, spicy salmon roll, California roll, philly roll, Alaska roll, spicy, yellowtail roll, sweet potato roll"
                    },
                    {
                        "name": "Sushi Deluxe",
                        "price": "48",
                        "description": "8 pieces of chef’s choice assorted sushi, 1 Tuna roll or 1 California roll"
                    },
                    {
                        "name": "Sashimi Deluxe",
                        "price": "58",
                        "description": "18 pieces of chef’s choice sashimi and a bowl of rice"
                    },
                    {
                        "name": "Sushi & Sashimi Combo",
                        "price": "48",
                        "description": "10 pieces of chef’s choice sashimi, 4 pieces sushi & 1 Tuna roll or California roll"
                    },
                    {
                        "name": "AJISAI LOVE BOAT(for two)",
                        "price": "120",
                        "description": "10 pieces of sashimi (tuna, salmon, albacore tuna, yellowtail, tako), 12 pieces of nigiri (tuna, salmon, yellowtail, red snapper, eel, ebi), shrimp tempura roll & spicy tuna crispy rice"
                    }
                ]
            },
            {
                "id": "nigiri-or-sashimi",
                "title": "Nigiri Only",
                "description": "Traditional hand-pressed sushi.",
                "items": [
                    {
                        "name": "*MAGURO (Tuna)",
                        "price": "9",
                        "description": ""
                    },
                    {
                        "name": "*HAMACHI (Yellowtail)",
                        "price": "9",
                        "description": ""
                    },
                    {
                        "name": "*TAI (Red Snapper)",
                        "price": "8",
                        "description": ""
                    },
                    {
                        "name": "UNAGI (Eel)",
                        "price": "9",
                        "description": ""
                    },
                    {
                        "name": "*SABA (Mackerel)",
                        "price": "8",
                        "description": ""
                    },
                    {
                        "name": "*HOTATEGAI (Scallop)",
                        "price": "9",
                        "description": ""
                    },
                    {
                        "name": "TAKO (Octopus)",
                        "price": "8",
                        "description": ""
                    },
                    {
                        "name": "EBI (Shrimp)",
                        "price": "8",
                        "description": ""
                    },
                    {
                        "name": "*AMAEBI (Sweet Shrimp)",
                        "price": "12",
                        "description": ""
                    },
                    {
                        "name": "*IKURA (Salmon Roe)",
                        "price": "12",
                        "description": ""
                    },
                    {
                        "name": "INARI (Fried Tofu)",
                        "price": "6",
                        "description": ""
                    },
                    {
                        "name": "TAMAGO (Egg Cake)",
                        "price": "6",
                        "description": ""
                    },
                    {
                        "name": "*Spicy Salmon Roll",
                        "price": "10.95",
                        "description": ""
                    },
                    {
                        "name": "*Spicy Tuna Roll",
                        "price": "10.95",
                        "description": ""
                    },
                    {
                        "name": "*Tuna Roll",
                        "price": "10",
                        "description": ""
                    },
                    {
                        "name": "*Salmon Roll",
                        "price": "9",
                        "description": ""
                    },
                    {
                        "name": "*Yellowtail w/Scallion Roll",
                        "price": "10",
                        "description": ""
                    }
                ]
            },
            {
                "id": "sushi-roll",
                "title": "Sushi Rolls",
                "description": "Classic and contemporary rolls.",
                "items": [
                    {
                        "name": "California Roll",
                        "price": "9.75",
                        "description": "With tobiko"
                    },
                    {
                        "name": "Shrimp Tempura Roll",
                        "price": "12.5",
                        "description": ""
                    },
                    {
                        "name": "Eel Avocado Cucumber Roll",
                        "price": "11",
                        "description": ""
                    },
                    {
                        "name": "Philadelphia Roll",
                        "price": "10.95",
                        "description": "Smoked salmon, cream cheese & cucumber"
                    },
                    {
                        "name": "Avocado Roll",
                        "price": "5",
                        "description": ""
                    },
                    {
                        "name": "Cucumber Roll",
                        "price": "5",
                        "description": ""
                    },
                    {
                        "name": "Avocado & Cucumber Roll",
                        "price": "7",
                        "description": ""
                    },
                    {
                        "name": "Sweet Potato Roll",
                        "price": "8",
                        "description": ""
                    },
                    {
                        "name": "Vegetable Green Dragon Roll",
                        "price": "14.5",
                        "description": "Sweet potato & cucumber topped w/ avocado"
                    }
                ]
            },
            {
                "id": "tempura-roll",
                "title": "Tempura Rolls",
                "description": "Crispy, deep-fried rolls.",
                "items": [
                    {
                        "name": "*Spicy Tuna Crispy Rice",
                        "price": "17",
                        "description": "Micro green, crunch, avocado, truffle eel sauce"
                    },
                    {
                        "name": "Crispy California Roll",
                        "price": "14.95",
                        "description": "Deep fried roll. w/crab stick, cucumber & avocado, crunch, spicy mayo, eel sauce"
                    },
                    {
                        "name": "Spider-Man Roll",
                        "price": "18",
                        "description": "Cucumber, avocado, masago and lettuce, soft-shell crab"
                    },
                    {
                        "name": "*Volcano Roll",
                        "price": "17.95",
                        "description": "Deep fried roll. Spicy tuna ,crab salad, cream cheese, avocado topped w/eel sauce and spicy mayo"
                    },
                    {
                        "name": "Las Vegas Roll",
                        "price": "16.95",
                        "description": "Deep fried roll w/Smoked salmon, cream cheese & avocado, crunch, spicy mayo, eel sauce"
                    }
                ]
            },
            {
                "id": "ajisai-special-roll",
                "title": "Ajisai Special Rolls",
                "description": "Our signature creations.",
                "items": [
                    {
                        "name": "*AJISAI HOUSE SPECIAL ROLL",
                        "price": "18",
                        "description": "Salmon, avocado, mango inside, Topped w/ tempura crab stick, crunch, mango sauce, spicy mayo, eel sauce, crispy kale"
                    },
                    {
                        "name": "*FAIRY ROLL",
                        "price": "17.95",
                        "description": "Tuna, Salmon, mango topped w/ tobiko avocado, mango sauce"
                    },
                    {
                        "name": "DRAGON ROLL",
                        "price": "17.95",
                        "description": "Shrimp tempura & crab stick topped w/ eel, avocado and eel sauce"
                    },
                    {
                        "name": "HOT SAMURAI ROLL",
                        "price": "17.95",
                        "description": "Baked whole roll. Crab salad, avocado, tempura flakes topped w/salmon, spicy mayo, eel sauce, tobiko, onion"
                    },
                    {
                        "name": "*PINK LADY",
                        "price": "18.95",
                        "description": "Spicy Salmon, shrimp tempura, cucumber, avocado, tobiko wrapped w/ soybean paper. Topped w. spicy mayo & eel sauce"
                    },
                    {
                        "name": "*SEX ON THE BEACH ROLL",
                        "price": "17.95",
                        "description": "Shrimp tempura & spicy tuna w/ yellowtail, avocado, tobiko spicy mayo"
                    },
                    {
                        "name": "*SPICY GIRL ROLL",
                        "price": "17.95",
                        "description": "Albacore tuna, jalapeño pepper, cucumber, radish sprouts, topped w/spicy tuna & tempura flakes, spicy mayo"
                    },
                    {
                        "name": "*BUDDY ROLL",
                        "price": "18.5",
                        "description": "Shrimp tempura, spicy tuna topped w. spicy shrimp, eel, avocado, tempura flakes, drizzled w/ spicy mayo and eel sauce"
                    },
                    {
                        "name": "NINJA TURTLE ROLL",
                        "price": "17.95",
                        "description": "Tempura crab stick and cream cheese, avocado inside, topped w/deep fried eel, spicy mayo, eel sauce, tobiko, green onion"
                    },
                    {
                        "name": "FANTASY ROLL",
                        "price": "15.5",
                        "description": "Tuna, Salmon, Yellow tail, avocado, tempura flakes topped w/ tobiko & eel sauce"
                    },
                    {
                        "name": "RAINBOW ROLL",
                        "price": "17",
                        "description": "Crab salad, cucumber, topped w/ salmon tuna, yellow tail, red snapper, avocado"
                    }
                ]
            }
        ]
    },
    {
        id: "hibachi",
        label: "Hibachi",
        subCategories: [
            {
                "id": "hibachi-entree",
                "title": "Hibachi Entree",
                "description": "Grilled to perfection with our signature style.",
                "items": [
                    {
                        "name": "Japanese A5 Wagyu",
                        "price": "65",
                        "description": ""
                    },
                    {
                        "name": "Japanese A5 Wagyu Tiger Prawn",
                        "price": "43",
                        "description": ""
                    },
                    {
                        "name": "Hibachi Chateaubriand",
                        "price": "53",
                        "description": "8 oz of center cut tenderloin and mushroom"
                    },
                    {
                        "name": "Hibachi Chicken",
                        "price": "35",
                        "description": "Mushroom with sesame seeds"
                    },
                    {
                        "name": "Filet Mignon",
                        "price": "44",
                        "description": "Tenderloin and mushroom"
                    },
                    {
                        "name": "Hibachi Steak",
                        "price": "41",
                        "description": "Mushroom, grilled to your specification"
                    },
                    {
                        "name": "Hibachi Scallop",
                        "price": "44",
                        "description": ""
                    },
                    {
                        "name": "Hibachi Salmon",
                        "price": "45",
                        "description": "Sautéed Japanese udon with mixed vegetables, cilantro sweet chili aioli"
                    },
                    {
                        "name": "Hibachi Shrimp",
                        "price": "39.5",
                        "description": ""
                    },
                    {
                        "name": "Hibachi Calamari",
                        "price": "39.5",
                        "description": ""
                    },
                    {
                        "name": "Twin Lobster Tails",
                        "price": "60",
                        "description": "Two cold-water lobster tails grilled with lemon"
                    },
                    {
                        "name": "Teriyaki Steak",
                        "price": "40",
                        "description": "Grilled with mushroom and scallions in homemade teriyaki sauce"
                    },
                    {
                        "name": "Teriyaki Chicken",
                        "price": "36",
                        "description": "Grilled with mushroom and scallions in homemade teriyaki sauce"
                    },
                    {
                        "name": "Tofu Steak",
                        "price": "32",
                        "description": "Tofu and scallions grilled with homemade sauce"
                    },
                    {
                        "name": "Spicy Seafood Udon",
                        "price": "41",
                        "description": "Hokkaido scallop, calamari, shrimp, Japanese udon, and mixed vegetables grilled in a homemade spicy sauce"
                    },
                    {
                        "name": "Yakisoba (Chicken)",
                        "price": "35",
                        "description": "Sautéed Japanese noodles with mixed vegetables"
                    },
                    {
                        "name": "Yakisoba (Steak)",
                        "price": "36",
                        "description": "Sautéed Japanese noodles with mixed vegetables"
                    },
                    {
                        "name": "Yakisoba (Shrimp)",
                        "price": "36",
                        "description": "Sautéed Japanese noodles with mixed vegetables"
                    },
                    {
                        "name": "Yakisoba (Tofu)",
                        "price": "33",
                        "description": "Sautéed Japanese noodles with mixed vegetables"
                    }
                ]
            },
            {
                "id": "hibachi-combos",
                "title": "Hibachi Combos",
                "description": "The best of both worlds.",
                "items": [
                    {
                        "name": "N.Y. Steak & Scallop",
                        "price": "50",
                        "description": ""
                    },
                    {
                        "name": "N.Y. Steak & Tiger Prawn",
                        "price": "48",
                        "description": ""
                    },
                    {
                        "name": "N.Y. Steak & Chicken",
                        "price": "46",
                        "description": ""
                    },
                    {
                        "name": "Scallop & Tiger Prawn",
                        "price": "48",
                        "description": ""
                    },
                    {
                        "name": "Chicken & Tiger Prawn",
                        "price": "45",
                        "description": ""
                    },
                    {
                        "name": "Filet Mignon & Tiger Prawn",
                        "price": "52",
                        "description": ""
                    },
                    {
                        "name": "Filet Mignon & Chicken",
                        "price": "50",
                        "description": ""
                    },
                    {
                        "name": "Filet Mignon & Scallop",
                        "price": "53",
                        "description": ""
                    },
                    {
                        "name": "Surf & Turf",
                        "price": "58",
                        "description": "Chicken, Tiger Prawn & Filet Mignon"
                    },
                    {
                        "name": "Ocean View",
                        "price": "53",
                        "description": "Calamari, Scallop & Tiger Prawn"
                    },
                    {
                        "name": "Ajisai Emperor Deluxe",
                        "price": "65",
                        "description": "8 oz of center cut tenderloin and mushroom, grilled cold-water lobster tail with lemon"
                    },
                    {
                        "name": "King of the Sea",
                        "price": "60",
                        "description": "Lobster, Tiger Prawn & Scallop,"
                    }
                ]
            },
            {
                "id": "caution-500-degree-grill",
                "title": "Specialty: 500 Degree Grill",
                "description": "Sizzling specialties from our hot stone grill.",
                "items": [
                    {
                        "name": "*FOODGASM (2 Spoons)",
                        "price": "34",
                        "description": "Seared A5 wagyu, japanese uni, bluefin toro, tobiko, uni, soy sauce"
                    },
                    {
                        "name": "*BLUEFIN TORO",
                        "price": "20",
                        "description": ""
                    },
                    {
                        "name": "*BLUEFIN TORO+UNI",
                        "price": "28",
                        "description": ""
                    },
                    {
                        "name": "*UNI",
                        "price": "22",
                        "description": ""
                    },
                    {
                        "name": "*SAKE (Salmon)",
                        "price": "8",
                        "description": ""
                    }
                ]
            }
        ]
    },
    {
        id: "lunch",
        label: "Lunch",
        subCategories: [
            {
                "id": "hibachi-lunch",
                "title": "Hibachi Lunch",
                "description": "Served with soup or salad.",
                "items": [
                    {
                        "name": "Hibachi Chicken",
                        "price": "22",
                        "description": ""
                    },
                    {
                        "name": "Hibachi Shrimp",
                        "price": "24",
                        "description": ""
                    },
                    {
                        "name": "Hibachi Steak",
                        "price": "25",
                        "description": ""
                    },
                    {
                        "name": "Hibachi Filet Mignon",
                        "price": "27",
                        "description": ""
                    },
                    {
                        "name": "Hibachi Calamari",
                        "price": "24",
                        "description": ""
                    },
                    {
                        "name": "Hibachi Combo (any 2 item)",
                        "price": "28",
                        "description": "Yakisoba or Udon Japanese noodles with vegetable in a special sauce"
                    },
                    {
                        "name": "Yakisoba (Chicken)",
                        "price": "22",
                        "description": ""
                    },
                    {
                        "name": "Yakisoba (Steak)",
                        "price": "23",
                        "description": ""
                    },
                    {
                        "name": "Yakisoba (Shrimp)",
                        "price": "23",
                        "description": ""
                    }
                ]
            },
            {
                "id": "kitchen-lunch-bento",
                "title": "Kitchen Lunch Bento",
                "description": "Served with Miso Soup, Salad, Rice, Tempura & CA Roll.",
                "items": [
                    {
                        "name": "Chicken Teriyaki",
                        "price": "19",
                        "description": ""
                    },
                    {
                        "name": "Steak Teriyaki",
                        "price": "23",
                        "description": ""
                    },
                    {
                        "name": "Salmon Teriyaki",
                        "price": "22",
                        "description": ""
                    },
                    {
                        "name": "Filet Mignon",
                        "price": "25",
                        "description": ""
                    },
                    {
                        "name": "Chicken katsu",
                        "price": "19",
                        "description": ""
                    },
                    {
                        "name": "Assorted Tempura",
                        "price": "19",
                        "description": "Lunch Chicken Teriyaki Bento"
                    }
                ]
            },
            {
                "id": "sushi-bar-lunch",
                "title": "Sushi Bar Lunch",
                "description": "Lunch specials.",
                "items": [
                    {
                        "name": "*Sushi and Sashimi Combo",
                        "price": "38",
                        "description": "6 pieces sashimi, 4 pieces sushi, California roll or tuna roll"
                    },
                    {
                        "name": "*Lunch Maki Combo",
                        "price": "19",
                        "description": "Choice of any 2 rolls."
                    }
                ]
            }
        ]
    },
    {
        id: "dessert",
        label: "Dessert",
        subCategories: [
            {
                "id": "dessert",
                "title": "Dessert",
                "description": "A sweet ending.",
                "items": [
                    {
                        "name": "Tai Yaki",
                        "price": "7",
                        "description": ""
                    },
                    {
                        "name": "Mochi Ice Cream",
                        "price": "6",
                        "description": ""
                    }
                ]
            }
        ]
    },
    {
        id: "kids-menu",
        label: "Children's Menu",
        subCategories: [
            {
                "id": "kids-entrees",
                "title": "Children's Entrées",
                "description": "For kids 10 and younger. Entrées served with miso soup or Ajisai house salad, shrimp appetizer, Vegetables (zucchini, onion), white rice, ice cream.",
                "items": [
                    { "name": "Chicken & Shrimp", "price": "27", "description": "" },
                    { "name": "Chicken & Steak", "price": "28", "description": "" },
                    { "name": "Steak & Shrimp", "price": "28", "description": "" },
                    { "name": "Filet Mignon & Chicken", "price": "29", "description": "" },
                    { "name": "Filet Mignon & Shrimp", "price": "30", "description": "" },
                    { "name": "California Roll", "price": "18", "description": "Served with edamame, fresh fruit" },
                    { "name": "Chicken Katsu", "price": "23", "description": "Served with French fries" },
                    { "name": "Hibachi Chicken", "price": "23", "description": "" },
                    { "name": "Hibachi Shrimp", "price": "23", "description": "" },
                    { "name": "Hibachi Steak", "price": "25", "description": "" },
                    { "name": "Hibachi Filet Mignon", "price": "28", "description": "" },
                    { "name": "Yaki Udon or Yaki Soba", "price": "7", "description": "" },
                    { "name": "Chicken Fried Rice", "price": "7", "description": "" },
                    { "name": "French Fries", "price": "6", "description": "" }
                ]
            },
            {
                "id": "kids-drinks",
                "title": "Kids Drinks",
                "description": "Refreshing beverages.",
                "items": [
                    { "name": "Soda", "price": "4", "description": "Free Refills" },
                    { "name": "Shirley Temple", "price": "5", "description": "" },
                    { "name": "Raspberry Lemonade", "price": "5", "description": "" },
                    { "name": "Milk", "price": "6", "description": "" },
                    { "name": "Juice", "price": "6", "description": "Apple, Orange, Cranberry, Pineapple, or Pomegranate" },
                    { "name": "Bubble Tea", "price": "6", "description": "" },
                    { "name": "Ramune", "price": "6", "description": "" }
                ]
            }
        ]
    }
];

// --- COMPONENTS ---
import MenuContent from "./MenuContent";

export default function MenusPage() {
    return <MenuContent groups={menuGroups} />;
}