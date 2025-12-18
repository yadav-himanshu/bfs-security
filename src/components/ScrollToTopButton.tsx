"use client";
import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import DraggableFloating, { commonButtonStyle } from "./DraggableFloating";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

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
        <DraggableFloating initialPosition={{ bottom: 180, right: 24 }}>
          <motion.button
            onClick={scrollToTop}
            style={{
              ...commonButtonStyle,
              backgroundColor: "#fff",
            }}
            initial={{ opacity: 0, y: 80 }} // 👈 Start below screen
            animate={{ opacity: 1, y: 0 }} // 👈 Slide up into view
            exit={{ opacity: 0, y: 80 }} // 👈 Slide back down on hide
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 12,
              duration: 0.6,
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow =
                "0 0 20px rgba(255,215,0,0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow =
                "0 4px 15px rgba(0,0,0,0.15)";
            }}
          >
            <FaArrowUp size={20} className="text-yellow-500" />
          </motion.button>
        </DraggableFloating>
      )}
    </AnimatePresence>
  );
}
