import { Sparkle } from './decorative/Sparkle';
import { HeartDeco } from './decorative/HeartDeco';
import { FlowerDeco } from './decorative/FlowerDeco';

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-brand-pink via-pink-200 to-brand-cream overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20">
        <FlowerDeco className="absolute top-20 left-10" color="#FFB6C8" />
        <FlowerDeco className="absolute top-40 right-20" color="#F472B6" />
        <FlowerDeco className="absolute bottom-32 left-1/4" color="#FFB6C8" />
        <FlowerDeco className="absolute bottom-20 right-1/3" color="#DDA0DD" />
        <FlowerDeco className="absolute top-1/2 left-10" color="#FFB6C8" />
      </div>

      {/* Floating decorations */}
      <HeartDeco className="absolute top-20 left-[15%]" delay={0} />
      <HeartDeco className="absolute top-32 right-[20%]" delay={300} />
      <HeartDeco className="absolute bottom-40 left-[25%]" delay={600} />
      <HeartDeco className="absolute bottom-32 right-[15%]" delay={900} />

      <Sparkle className="absolute top-28 left-[30%]" delay={0} />
      <Sparkle className="absolute top-40 right-[25%]" delay={200} />
      <Sparkle className="absolute bottom-48 left-[20%]" delay={400} />
      <Sparkle className="absolute bottom-40 right-[30%]" delay={600} />

      {/* Main content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Rotating badge */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm px-6 py-2 rounded-full border-2 border-brand-pink-deep/30">
            <span className="animate-sparkle inline-block">✦</span>
            <span className="font-body text-sm text-brand-dark">
              Pequeños detalles · Grandes sonrisas ·
            </span>
            <span className="animate-sparkle inline-block" style={{ animationDelay: '500ms' }}>✦</span>
          </div>
        </div>

        {/* Main title */}
        <h1 className="font-display font-extrabold text-5xl sm:text-6xl lg:text-7xl text-brand-dark mb-4 tracking-wide">
          <span className="text-shimmer-gold">✦ STARGIRL ✦</span>
        </h1>

        {/* Tagline */}
        <p className="font-script text-3xl sm:text-4xl lg:text-5xl text-brand-pink-deep mb-6">
          Brilla a tu manera
        </p>

        {/* Description */}
        <p className="font-body text-lg sm:text-xl text-brand-dark/70 mb-8 max-w-2xl mx-auto">
          Accesorios que resaltan tu brillo único 💕
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#productos"
            className="bg-brand-pink-hot text-white px-8 py-4 rounded-full font-body font-semibold text-lg hover:bg-brand-pink-deep hover:scale-105 active:scale-95 transition-all duration-200 shadow-pink"
          >
            Ver Catálogo
          </a>
          <a
            href="#como-comprar"
            className="text-brand-dark font-body font-medium hover:text-brand-pink-deep transition-colors flex items-center gap-2"
          >
            ¿Cómo comprar?
            <span className="text-lg">→</span>
          </a>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#FFF5F8" />
        </svg>
      </div>
    </section>
  );
}