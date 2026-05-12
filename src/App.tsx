import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { HowToBuySection } from './components/HowToBuySection';
import { ProductsSection } from './components/ProductsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ProductsSection />
      <HowToBuySection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;