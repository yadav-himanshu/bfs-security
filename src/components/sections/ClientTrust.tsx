"use client";

import { motion } from "framer-motion";
import { Building2, Home, Building, Shield } from "lucide-react";

export default function ClientTrust() {
    const clients = [
        { name: "Corporate Parks", icon: Building2 },
        { name: "Residential Societies", icon: Home },
        { name: "Banks & ATMs", icon: Building },
        { name: "VIP Security", icon: Shield },
    ];

    return (
        <section className="py-16 px-6 bg-[var(--highlight-color)] text-[var(--button-text)]">
            <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 pt-2 text-[#011e2b]">
                        Trusted Across Mumbai
                    </h2>
                    <p className="text-xl md:text-2xl font-semibold opacity-90 max-w-3xl mx-auto mb-12">
                        We deliver unparalleled security and facility management solutions to a diverse range of sectors.
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full">
                    {clients.map((client, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors"
                        >
                            <client.icon className="w-10 h-10 mb-4 text-[#011e2b]" />
                            <h3 className="font-bold text-lg text-[#011e2b]">{client.name}</h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
