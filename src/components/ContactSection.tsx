import { MessageCircle, MapPin, Clock, Phone } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-4xl text-brand-dark mb-3">
            ¡Contáctanos!
          </h2>
          <p className="font-script text-2xl text-brand-pink-deep">
            Estamos para ti 💕
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left column - Social */}
          <div className="space-y-8">
            <div>
              <h3 className="font-body font-semibold text-xl text-brand-dark mb-4">
                Síguenos en redes
              </h3>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com/stargirlshop.era"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full hover:scale-105 active:scale-95 transition-all duration-200"
                >
                  <span className="text-lg">📸</span>
                  <span className="font-body font-semibold">@stargirlshop.era</span>
                </a>
              </div>
            </div>

            <div className="bg-brand-cream rounded-2xl p-6">
              <div className="flex items-center gap-3 text-brand-dark mb-2">
                <MapPin className="w-5 h-5 text-brand-pink-hot" />
                <span className="font-body font-semibold">Zona de entrega</span>
              </div>
              <p className="font-body text-brand-dark/70 ml-8">
                Servicio en Cañete y Chincha 📍
              </p>
            </div>

            <div className="bg-brand-cream rounded-2xl p-6">
              <div className="flex items-center gap-3 text-brand-dark mb-2">
                <Clock className="w-5 h-5 text-brand-pink-hot" />
                <span className="font-body font-semibold">Horario de atención</span>
              </div>
              <p className="font-body text-brand-dark/70 ml-8">
                Pedidos de lunes a domingo • Respuesta rápida ⚡
              </p>
            </div>
          </div>

          {/* Right column - WhatsApp */}
          <div className="flex flex-col items-center justify-center">
            <div className="bg-green-500 text-white rounded-3xl p-8 text-center w-full max-w-md hover:shadow-lg transition-shadow">
              <MessageCircle className="w-16 h-16 mx-auto mb-4" />
              <h3 className="font-body font-bold text-2xl mb-4">
                ¡Escríbenos por WhatsApp!
              </h3>
              <a
                href="https://wa.me/51926572115?text=Hola%20Stargirl!%20Vi%20su%20catálogo%20y%20quiero%20hacer%20un%20pedido"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-green-500 px-8 py-3 rounded-full font-body font-semibold text-lg hover:scale-105 active:scale-95 transition-all duration-200"
              >
                Chatear ahora 💬
              </a>
            </div>

            {/* Phone numbers */}
            <div className="mt-6 text-center">
              <p className="font-body text-sm text-brand-dark/60 mb-2">
                O llámanos:
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="tel:+51926572115"
                  className="flex items-center gap-2 text-brand-dark hover:text-brand-pink-hot transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span className="font-body font-medium">926 572 115</span>
                </a>
                <a
                  href="tel:+51955444445"
                  className="flex items-center gap-2 text-brand-dark hover:text-brand-pink-hot transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span className="font-body font-medium">955 444 445</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}