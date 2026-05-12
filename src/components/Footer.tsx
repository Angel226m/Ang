import { Sparkle } from './decorative/Sparkle';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-brand-dark to-brand-dark/95 text-white">
      {/* Main Footer */}
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Logo & Brand */}
            <div className="flex flex-col items-center md:items-start">
              <div className="mb-2">
                <img src="/imgenes/logo.jpeg" alt="STARGIRL" className="h-12 w-auto rounded-lg shadow-lg" />
              </div>
              <p className="font-script text-brand-pink text-sm">Brilla a tu manera</p>
              <p className="font-body text-xs text-white/60">Accesorios kawaii</p>
            </div>

            {/* Links Rápidos */}
            <div>
              <h4 className="font-body font-semibold mb-2 text-xs text-brand-pink uppercase">Links</h4>
              <ul className="space-y-1">
                <li>
                  <a href="#inicio" className="font-body text-xs text-white/70 hover:text-brand-pink-hot transition-colors">
                    ✦ Inicio
                  </a>
                </li>
                <li>
                  <a href="#productos" className="font-body text-xs text-white/70 hover:text-brand-pink-hot transition-colors">
                    ✦ Productos
                  </a>
                </li>
                <li>
                  <a href="#como-comprar" className="font-body text-xs text-white/70 hover:text-brand-pink-hot transition-colors">
                    ✦ Cómo comprar
                  </a>
                </li>
              </ul>
            </div>

            {/* Categorías */}
            <div>
              <h4 className="font-body font-semibold mb-2 text-xs text-brand-pink uppercase">Categorías</h4>
              <ul className="space-y-1">
                <li>
                  <a href="#productos" className="font-body text-xs text-white/70 hover:text-brand-pink-hot transition-colors">
                    🎀 Cabello
                  </a>
                </li>
                <li>
                  <a href="#productos" className="font-body text-xs text-white/70 hover:text-brand-pink-hot transition-colors">
                    💄 Belleza
                  </a>
                </li>
                <li>
                  <a href="#productos" className="font-body text-xs text-white/70 hover:text-brand-pink-hot transition-colors">
                    🪞 Espejos
                  </a>
                </li>
                <li>
                  <a href="#productos" className="font-body text-xs text-white/70 hover:text-brand-pink-hot transition-colors">
                    🔑 Llaveros
                  </a>
                </li>
              </ul>
            </div>

            {/* Redes Sociales */}
            <div>
              <h4 className="font-body font-semibold mb-2 text-xs text-brand-pink uppercase">Síguenos</h4>
              <div className="flex gap-2 mb-2">
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/stargirlshop.era?igsh=am0xcHB5cjFpdjY0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-brand-pink-hot to-brand-pink-deep hover:scale-110 transition-all duration-200 shadow-pink"
                  aria-label="Instagram"
                  title="Instagram"
                >
                  <svg className="w-4 h-4 text-white fill-white" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.069 1.646.069 4.85 0 3.204-.012 3.584-.07 4.85-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.646-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z"/>
                  </svg>
                </a>

                {/* TikTok */}
                <a
                  href="https://vm.tiktok.com/ZS9FqhtNW3h6W-wwFKG/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-dark border-2 border-white hover:bg-white hover:text-brand-dark hover:scale-110 transition-all duration-200"
                  aria-label="TikTok"
                  title="TikTok"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.1 1.82 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-.05-.09z"/>
                  </svg>
                </a>
              </div>
              <p className="font-body text-xs text-white/60">Ofertas y novedades 💕</p>
            </div>
          </div>
        </div>
      </div>

      {/* Legal Links */}
      <div className="border-t border-white/10 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 text-center">
            <a href="#productos" className="font-body text-xs text-white/60 hover:text-brand-pink-hot transition-colors">
              Términos y Condiciones
            </a>
            <span className="hidden md:inline text-white/20 text-xs">•</span>
            <a href="#productos" className="font-body text-xs text-white/60 hover:text-brand-pink-hot transition-colors">
              Política de Privacidad
            </a>
            <span className="hidden md:inline text-white/20 text-xs">•</span>
            <a href="#productos" className="font-body text-xs text-white/60 hover:text-brand-pink-hot transition-colors">
              Política de Cookies
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-2 text-center">
            <p className="font-body text-xs text-white/50">
              © {currentYear} Stargirl. Hecho con 💕
            </p>
            <div className="flex items-center justify-center gap-1">
              <Sparkle className="w-2 h-2" />
              <Sparkle className="w-1 h-1" delay={200} />
              <Sparkle className="w-2 h-2" delay={400} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}