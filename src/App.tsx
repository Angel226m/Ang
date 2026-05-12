import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { HowToBuySection } from './components/HowToBuySection';
import { ProductsSection } from './components/ProductsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingButtons } from './components/FloatingButtons';
import { LegalModal } from './components/LegalModal';

type LegalType = 'terms' | 'privacy' | 'cookies' | null;

function App() {
  const [legalModal, setLegalModal] = useState<LegalType>(null);

  const openModal = (type: LegalType) => setLegalModal(type);
  const closeModal = () => setLegalModal(null);

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ProductsSection />
      <HowToBuySection />
      <ContactSection />
      <Footer onOpenModal={openModal} />
      <FloatingButtons />
      {legalModal && (
        <LegalModal
          isOpen={legalModal !== null}
          onClose={closeModal}
          type={legalModal as 'terms' | 'privacy' | 'cookies'}
        />
      )}
    </div>
  );
}

export default App;