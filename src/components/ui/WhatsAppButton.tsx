"use client";

import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import DraggableFloating, { commonButtonStyle } from "./DraggableFloating";

export default function WhatsAppButton() {
  const bfsNumber = "919819758831";
  const message = "Hello BFS! I would like to inquire about your services.";
  const [hovered, setHovered] = useState(false);

  const handleClick = () => {
    const url = `https://wa.me/${bfsNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <DraggableFloating initialPosition={{ bottom: 24, right: 24 }}>
      <div className="relative flex items-center justify-center">
        {/* Tooltip */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: -10 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.9, x: -10 }}
              className="absolute right-[70px] px-3.5 py-1.5 rounded-xl bg-slate-900/90 dark:bg-slate-800/90 text-white text-xs font-bold whitespace-nowrap shadow-lg border border-white/10 pointer-events-none"
            >
              Chat with BFS Officer
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pulsing Outer Glow */}
        <div className="absolute inset-0 rounded-full bg-[var(--whatsapp-color)]/20 animate-ping pointer-events-none scale-105"></div>

        {/* Button */}
        <button
          onClick={handleClick}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            ...commonButtonStyle,
            backgroundColor: "var(--whatsapp-color)",
            color: "white",
            border: "none",
          }}
          className="hover:scale-110 shadow-lg active:scale-95 transition-all duration-300 flex items-center justify-center relative z-10"
          aria-label="Chat on WhatsApp"
        >
          <FaWhatsapp size={26} color="white" />
        </button>
      </div>
    </DraggableFloating>
  );
}
