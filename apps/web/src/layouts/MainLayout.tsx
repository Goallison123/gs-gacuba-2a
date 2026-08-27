import React, { useState } from 'react';
import { PageId } from '../types/index.js';
import { TopBar } from '../components/layout/TopBar.js';
import { Header } from '../components/navigation/Header.js';
import { Footer } from '../components/layout/Footer.js';
import { Modal } from '../components/ui/Modal.js';
import { AdmissionApplicationForm } from '../components/forms/AdmissionApplicationForm.js';

export interface MainLayoutProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  children: React.ReactNode;
}

export function MainLayout({ currentPage, onNavigate, children }: MainLayoutProps) {
  const [admissionModalOpen, setAdmissionModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#353e5c] antialiased selection:bg-[#ff8c00] selection:text-white">
      {/* Informational TopBar */}
      <TopBar />

      {/* Main Navigation Header */}
      <Header
        currentPage={currentPage}
        onNavigate={onNavigate}
        onOpenAdmissionModal={() => setAdmissionModalOpen(true)}
      />

      {/* Page Body */}
      <main className="flex-1 w-full">{children}</main>

      {/* Footer */}
      <Footer onNavigate={onNavigate} />

      {/* Global Admission Application Modal */}
      <Modal
        isOpen={admissionModalOpen}
        onClose={() => setAdmissionModalOpen(false)}
        title="Student Admission Application (2026/2027 Academic Year)"
        maxWidth="2xl"
      >
        <AdmissionApplicationForm onSuccess={() => {}} />
      </Modal>
    </div>
  );
}
