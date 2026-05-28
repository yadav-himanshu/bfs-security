"use client";

import { motion } from "framer-motion";
import { ReactNode, CSSProperties } from "react";

interface DraggableFloatingProps {
  children: ReactNode;
  initialPosition?: {
    bottom?: number;
    right?: number;
    top?: number;
    left?: number;
  };
}

// 🧩 Common reusable button style
export const commonButtonStyle: CSSProperties = {
  width: "56px",
  height: "56px",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.15)",
  transition: "all 0.3s ease",
  backgroundColor: "var(--card-bg-color)",
  cursor: "pointer",
};

// 📦 Draggable Floating Wrapper
export default function DraggableFloating({
  children,
  initialPosition = { bottom: 20, right: 20 },
}: DraggableFloatingProps) {
  return (
    <motion.div
      drag
      dragMomentum
      dragElastic={0.25}
      dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
      whileTap={{ scale: 0.9 }}
      className="fixed z-50 cursor-grab active:cursor-grabbing"
      style={{
        ...initialPosition,
        touchAction: "none",
      }}
    >
      {children}
    </motion.div>
  );
}
