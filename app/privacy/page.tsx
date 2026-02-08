"use client";

import { motion } from "framer-motion";

export default function PrivacyPolicy() {
    return (
        <div className="bg-secondary min-h-screen text-primary pb-20 pt-32">
            <div className="container mx-auto px-6 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl md:text-5xl font-serif mb-8 text-center text-accent">Privacy Policy</h1>
                    <p className="text-sm opacity-60 text-center mb-12">Last Updated: {new Date().toLocaleDateString()}</p>

                    <div className="space-y-12 text-lg leading-relaxed opacity-90">
                        <section>
                            <h2 className="text-2xl font-serif mb-4 text-accent">1. Introduction</h2>
                            <p>
                                Welcome to Ajisai. We respect your privacy and are committed to protecting your personal data.
                                This privacy policy will inform you as to how we look after your personal data when you visit our website
                                (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-serif mb-4 text-accent">2. Information We Collect</h2>
                            <p className="mb-4">
                                We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
                                <li><strong>Contact Data:</strong> includes billing address, delivery address, email address and telephone numbers.</li>
                                <li><strong>Technical Data:</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, and operating system and platform.</li>
                                <li><strong>Usage Data:</strong> includes information about how you use our website, products and services.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-serif mb-4 text-accent">3. How We Use Your Information</h2>
                            <p className="mb-4">
                                We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Where we need to perform the contract we are about to enter into or have entered into with you (e.g., processing a reservation or order).</li>
                                <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                                <li>Where we need to comply with a legal or regulatory obligation.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-serif mb-4 text-accent">4. Data Security</h2>
                            <p>
                                We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-serif mb-4 text-accent">5. Third-Party Links</h2>
                            <p>
                                This website may include links to third-party websites, plug-ins and applications (such as our reservation and ordering systems). Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-serif mb-4 text-accent">6. Contact Us</h2>
                            <p className="mb-4">
                                If you have any questions about this privacy policy or our privacy practices, please contact us at:
                            </p>
                            <div className="bg-primary p-6 border border-accent/20 rounded-lg">
                                <p className="font-serif text-xl mb-2 text-white">Ajisai Restaurant</p>
                                <p>4050 SW 114th Ave</p>
                                <p>Beaverton, OR 97005</p>
                                <p className="mt-2 text-accent">(971) 727-3180</p>
                            </div>
                        </section>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
