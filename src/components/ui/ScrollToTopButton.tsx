"use client";

import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import DraggableFloating, { commonButtonStyle } from "./DraggableFloating";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <DraggableFloating initialPosition={{ bottom: 92, right: 24 }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 30 }}
            transition={{
              type: "spring",
              stiffness: 110,
              damping: 14,
            }}
            className="relative flex items-center justify-center"
          >
            {/* Tooltip */}
            <AnimatePresence>
              {hovered && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, x: -10 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.9, x: -10 }}
                  className="absolute right-[70px] px-3.5 py-1.5 rounded-xl bg-slate-900/90 dark:bg-slate-800/90 text-white text-xs font-bold whitespace-nowrap shadow-lg border border-white/10 pointer-events-none"
                >
                  Scroll to Top
                </motion.div>
              )}
            </AnimatePresence>

            {/* Button */}
            <button
              onClick={scrollToTop}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              style={{
                ...commonButtonStyle,
                backgroundColor: "var(--card-bg-color)",
                color: "var(--text-color)",
                border: "1px solid var(--card-border-color)",
              }}
              className="hover:scale-110 shadow-lg hover:border-[var(--highlight-color)]/50 active:scale-95 transition-all duration-300 flex items-center justify-center relative z-10"
              aria-label="Scroll to top"
            >
              <FaArrowUp size={16} className="text-[var(--highlight-color)] animate-bounce-slow" />
            </button>
          </motion.div>
        </DraggableFloating>
      )}
    </AnimatePresence>
  );
}
