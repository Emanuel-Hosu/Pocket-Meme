import React, { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const CModalHeader = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white/80 backdrop-blur-sm shadow-lg rounded-lg w-96 p-6 relative animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        <a
          className="absolute top-4 left-4 flex items-center text-gray-600 hover:text-gray-900"
          onClick={onClose}
        >
          <ArrowLeft className="w-6 h-6" />
          <span className="ml-2 text-sm">Atrás</span>
        </a>
        <div className="flex flex-col items-center justify-center w-full">
          <div className="mb-6 flex justify-center">
            <img
              src="/logopkt.png"
              alt="Logo"
              className="w-24 h-24 object-contain"
            />
          </div>
          <p className="text-sm text-gray-600">BLABLABLA</p>
        </div>
      </div>
    </div>
  );
};

export default CModalHeader;
