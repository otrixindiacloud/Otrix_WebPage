"use client";

import { createContext, useContext, useState } from "react";

const ServicesModalContext = createContext();

export function ServicesModalProvider({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <ServicesModalContext.Provider value={{
      isModalOpen,
      openModal,
      closeModal
    }}>
      {children}
    </ServicesModalContext.Provider>
  );
}

export function useServicesModal() {
  const context = useContext(ServicesModalContext);
  if (!context) {
    throw new Error('useServicesModal must be used within a ServicesModalProvider');
  }
  return context;
}
