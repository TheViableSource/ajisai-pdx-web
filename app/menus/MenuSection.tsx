"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";

interface MenuItem {
    name: string;
    price: string;
    description: string;
}

interface MenuCategory {
    id: string;
    title: string;
    description: string;
    items: MenuItem[];
}

interface MenuSectionProps {
    category: MenuCategory;
}

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

export default function MenuSection({ category }: MenuSectionProps) {
    const signatureItem = category.items[0];
    const otherItems = category.items.slice(1);

    return (
        <section id={category.id} className="scroll-mt-40">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
            >
                <motion.div variants={itemVariants}>
                    <h2 className="text-3xl md:text-4xl font-serif text-center mb-4 text-primary">
                        {category.title}
                    </h2>
                    <p className="text-center text-primary/60 italic mb-10">{category.description}</p>
                </motion.div>

                <div className="space-y-12">
                    {/* Signature Highlight Card */}
                    {signatureItem && (
                        <motion.div
                            variants={itemVariants}
                            className="relative border border-accent/30 bg-secondary/50 p-8 md:p-10 rounded-sm overflow-hidden group shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Award className="w-24 h-24 text-accent" />
                            </div>

                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 relative z-10">
                                <div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <Award className="w-5 h-5 text-accent" />
                                        <span className="text-xs font-bold tracking-[0.2em] text-accent uppercase">
                                            Chef's Selection
                                        </span>
                                    </div>
                                    <h3 className="font-serif text-2xl md:text-3xl font-medium text-primary">
                                        {signatureItem.name}
                                    </h3>
                                    <p className="text-base text-primary/70 mt-3 max-w-xl leading-relaxed">
                                        {signatureItem.description}
                                    </p>
                                </div>
                                <span className="font-serif text-2xl text-accent font-medium whitespace-nowrap">
                                    {signatureItem.price}
                                </span>
                            </div>
                        </motion.div>
                    )}

                    {/* Standard Items Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
                        {otherItems.map((item) => (
                            <motion.div
                                key={item.name}
                                variants={itemVariants}
                                className="flex justify-between items-start border-b border-primary/10 pb-4 group hover:border-primary/20 transition-colors"
                            >
                                <div className="pr-4">
                                    <h3 className="font-serif text-lg font-medium group-hover:text-primary transition-colors">
                                        {item.name}
                                    </h3>
                                    <p className="text-sm opacity-70 mt-1 font-light leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                                <span className="font-serif text-lg whitespace-nowrap text-primary/80 group-hover:text-primary transition-colors">
                                    {item.price}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
