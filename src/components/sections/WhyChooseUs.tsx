"use client";

import { motion } from "framer-motion";
import { Clock, UserCheck, ShieldCheck, ThumbsUp } from "lucide-react";

export default function WhyChooseUs() {
    const features = [
        {
            icon: Clock,
            title: "24/7 Support & Availability",
            description: "Our team is available round the clock to ensure your safety and address emergencies immediately."
        },
        {
            icon: UserCheck,
            title: "Trained Professionals",
            description: "Every member of our staff undergoes rigorous training to handle complex security challenges."
        },
        {
            icon: ShieldCheck,
            title: "Verified Backgrounds",
            description: "We conduct strict background checks and police verification for all our security personnel."
        },
        {
            icon: ThumbsUp,
            title: "Client Satisfaction",
            description: "With over a decade of excellence, we prioritize our clients' peace of mind above all else."
        }
    ];

    return (
        <section className="py-20 px-6 bg-[var(--card-bg-color)]/50">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="heading"
                    >
                        Why Choose <span className="text-[var(--highlight-color)]">BFS?</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: 0.1 }}
                        className="body-text max-w-2xl mx-auto"
                    >
                        We go beyond standard security. Our commitment to excellence, integrity, and proactive protection makes us the trusted choice in Mumbai.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: idx * 0.1 }}
                            className="card bg-[var(--card-bg-color)] flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300"
                        >
                            <div className="w-16 h-16 rounded-full bg-[var(--highlight-color)]/10 flex items-center justify-center mb-6 text-[var(--highlight-color)] group-hover:bg-[var(--highlight-color)] group-hover:text-[var(--button-text)] transition-colors duration-300">
                                <feature.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-[var(--heading-color)]">{feature.title}</h3>
                            <p className="text-[var(--text-color)] leading-relaxed">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
