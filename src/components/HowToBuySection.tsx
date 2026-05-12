import { Check, MessageCircle, MapPin, CreditCard, Package } from 'lucide-react';
import { Sparkle } from './decorative/Sparkle';

const steps = [
  {
    number: 1,
    icon: <Sparkle className="w-6 h-6" />,
    title: "Elige tu producto favorito",
    description: "Explora nuestro catálogo y encuentra el accesorio perfecto para ti ✨",
  },
  {
    number: 2,
    icon: <MessageCircle className="w-6 h-6" />,
    title: "Escríbenos por WhatsApp",
    description: "Envíanos captura o nombre del producto (926572115 | 955444445)",
  },
  {
    number: 3,
    icon: <Check className="w-6 h-6" />,
    title: "Indica cantidad y color",
    description: "Confirma los detalles de tu pedido y disponibilidad",
  },
  {
    number: 4,
    icon: <MapPin className="w-6 h-6" />,
    title: "Envíanos tu dirección",
    description: "Dinos tu distrito (Cañete - Chincha) para calcular el delivery",
  },
  {
    number: 5,
    icon: <CreditCard className="w-6 h-6" />,
    title: "Realiza el pago",
    description: "Transferencia bancaria o billeteras digitales",
  },
  {
    number: 6,
    icon: <Package className="w-6 h-6" />,
    title: "¡Listo! Preparamos tu pedido",
    description: "Te avisaremos cuando esté en camino 📦💕",
  },
];

export function HowToBuySection() {
  return (
    <section
      id="como-comprar"
      className="py-20 bg-white relative"
    >
      {/* Top scalloped border */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 20C120 5 240 5 360 10C480 15 600 15 720 10C840 5 960 5 1080 10C1200 15 1320 15 1440 10V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0V20Z" fill="#FFB6C8" />
        </svg>
      </div>

      {/* Bottom scalloped border */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 0C120 15 240 15 360 10C480 5 600 5 720 10C840 15 960 15 1080 10C1200 5 1320 5 1440 10V20H1380C1320 20 1200 20 1080 20C960 20 840 20 720 20C600 20 480 20 360 20C240 20 120 20 60 20H0V0Z" fill="#FFB6C8" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl text-brand-dark mb-3">
            ¿Cómo comprar?
          </h2>
          <p className="font-script text-2xl text-brand-pink-deep">
            Sigue estos simples pasos 💕
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group bg-brand-cream rounded-2xl p-6 border-2 border-transparent hover:border-brand-pink-deep/30 hover:shadow-pink transition-all duration-300 hover:-translate-y-1"
            >
              {/* Number circle */}
              <div className="w-12 h-12 bg-brand-pink-hot text-white rounded-full flex items-center justify-center font-body font-bold text-xl mb-4 group-hover:scale-110 transition-transform">
                {step.number}
              </div>

              {/* Icon */}
              <div className="text-brand-pink-deep mb-3">
                {step.icon}
              </div>

              {/* Content */}
              <h3 className="font-body font-semibold text-lg text-brand-dark mb-2">
                {step.title}
              </h3>
              <p className="font-body text-sm text-brand-dark/70">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://wa.me/51926572115?text=Hola%20Stargirl!%20Vi%20su%20catálogo%20y%20quiero%20hacer%20un%20pedido"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-500 text-white px-8 py-4 rounded-full font-body font-semibold text-lg hover:bg-green-600 hover:scale-105 active:scale-95 transition-all duration-200"
          >
            <MessageCircle className="w-6 h-6" />
            ¡Escríbenos por WhatsApp!
          </a>
        </div>
      </div>
    </section>
  );
}