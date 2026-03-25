"use client";

import { useEffect, useState, useCallback } from "react";
import { X } from "lucide-react";
import ConsultationForm from "./ConsultationForm";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  const [submitted, setSubmitted] = useState(false);

  const handleClose = useCallback(() => {
    onClose();
    // Reset after modal animation completes
    setTimeout(() => setSubmitted(false), 300);
  }, [onClose]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) handleClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleClose]);

  // Auto-close modal 4 seconds after successful submission
  useEffect(() => {
    if (submitted && isOpen) {
      const timer = setTimeout(() => handleClose(), 4000);
      return () => clearTimeout(timer);
    }
  }, [submitted, isOpen, handleClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy/60 backdrop-blur-sm transition-opacity duration-300"
      onClick={handleClose}
    >
      <div
        className="bg-white rounded-[12px] max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl transform transition-all duration-300 animate-slideUp"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-6 py-5 md:px-7 md:py-6">
          {/* Header row with close button */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1 pr-4">
              {!submitted && (
                <>
                  <h2 className="font-outfit text-xl md:text-2xl font-semibold text-navy mb-1">
                    Book a Consultation
                  </h2>
                  <p className="font-outfit text-sm text-text-gray">
                    Free, confidential, no obligation.
                  </p>
                </>
              )}
            </div>
            <button onClick={handleClose} className="text-text-gray hover:text-navy transition-colors p-1 -mr-1 -mt-1" aria-label="Close modal">
              <X size={20} />
            </button>
          </div>

          <ConsultationForm compact onSuccess={() => setSubmitted(true)} />
        </div>
      </div>

      <style jsx>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slideUp { animation: slideUp 0.3s ease-out; }
      `}</style>
    </div>
  );
}
