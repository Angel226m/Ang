import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Sparkle } from './decorative/Sparkle';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Productos', href: '#productos' },
    { label: '¿Cómo comprar?', href: '#como-comprar' },
    { label: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-brand-pink/80 border-b border-brand-pink-deep/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-2 relative group">
            <div className="relative">
              <Sparkle className="absolute -top-2 -left-1 w-4 h-4" delay={0} />
              <Sparkle className="absolute -bottom-1 -right-1 w-3 h-3" delay={500} />
              <img src="/imgenes/logo.jpeg" alt="STARGIRL" className="h-12 w-auto rounded-lg shadow-md" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-2xl text-brand-dark tracking-wide">
                STARGIRL
              </span>
              <span className="font-script text-sm text-brand-pink-deep -mt-1">Brilla a tu manera</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-body text-sm text-brand-dark hover:text-brand-pink-deep transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#productos"
              className="bg-brand-pink-hot text-white px-6 py-2 rounded-full font-body font-semibold text-sm hover:bg-brand-pink-deep hover:scale-105 active:scale-95 transition-all duration-200"
            >
              ¡Pedir ahora! 💕
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-brand-dark"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden absolute top-16 left-0 right-0 bg-brand-cream shadow-lg transition-all duration-300 ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block font-body text-brand-dark py-2 hover:text-brand-pink-deep transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#productos"
            className="block bg-brand-pink-hot text-white px-6 py-3 rounded-full font-body font-semibold text-center hover:bg-brand-pink-deep transition-colors"
            onClick={() => setIsOpen(false)}
          >
            ¡Pedir ahora! 💕
          </a>
        </div>
      </div>
    </nav>
  );
}