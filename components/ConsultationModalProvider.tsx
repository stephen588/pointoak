"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import ConsultationModal from "./ConsultationModal";

interface ModalContextType {
  openModal: () => void;
}

const ModalContext = createContext<ModalContextType>({
  openModal: () => {},
});

export function useConsultationModal() {
  return useContext(ModalContext);
}

export default function ConsultationModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ModalContext.Provider value={{ openModal: () => setIsOpen(true) }}>
      {children}
      <ConsultationModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </ModalContext.Provider>
  );
}
