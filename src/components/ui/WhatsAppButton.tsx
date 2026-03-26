"use client";
import { FaWhatsapp } from "react-icons/fa";
import DraggableFloating, { commonButtonStyle } from "./DraggableFloating";

export default function WhatsAppButton() {
  const bfsNumber = "919819758831";
  const message = "Hello BFS! I would like to inquire about your services.";

  const handleClick = () => {
    const url = `https://wa.me/${bfsNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <DraggableFloating initialPosition={{ bottom: 110, right: 24 }}>
      <button
        onClick={handleClick}
        style={{
          ...commonButtonStyle,
          backgroundColor: "#25D366",
          color: "white",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.1)";
          e.currentTarget.style.boxShadow = "0 0 20px rgba(37,211,102,0.6)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "0 4px 15px rgba(37,211,102,0.4)";
        }}
      >
        <FaWhatsapp size={24} color="white" />
      </button>
    </DraggableFloating>
  );
}
