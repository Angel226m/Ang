export function CookiesSection() {
  return (
    <section id="cookies" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-display font-bold text-4xl text-brand-dark mb-8">Política de Cookies</h1>

        <div className="space-y-6 text-brand-dark/80 font-body">
          <div>
            <h2 className="text-2xl font-semibold text-brand-dark mb-3">1. ¿Qué son las Cookies?</h2>
            <p>Las cookies son archivos pequeños que se almacenan en tu dispositivo cuando visitas nuestro sitio. Nos ayudan a mejorar tu experiencia de navegación y a recordar tus preferencias.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-brand-dark mb-3">2. Tipos de Cookies que Utilizamos</h2>
            <ul className="list-disc list-inside mt-2 space-y-2 ml-4">
              <li><span className="font-semibold">Cookies Esenciales:</span> Necesarias para el funcionamiento básico del sitio</li>
              <li><span className="font-semibold">Cookies de Rendimiento:</span> Nos ayudan a entender cómo usas nuestro sitio</li>
              <li><span className="font-semibold">Cookies de Funcionalidad:</span> Mejoran tu experiencia personalizada</li>
              <li><span className="font-semibold">Cookies de Marketing:</span> Utilizadas para mostrar anuncios relevantes</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-brand-dark mb-3">3. Duración de las Cookies</h2>
            <p>Las cookies pueden ser de sesión (se eliminan cuando cierras el navegador) o persistentes (se guardan en tu dispositivo hasta que expiran o las eliminas).</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-brand-dark mb-3">4. Control de Cookies</h2>
            <p>Puedes controlar las cookies a través de la configuración de tu navegador. Puedes:</p>
            <ul className="list-disc list-inside mt-2 space-y-2 ml-4">
              <li>Aceptar todas las cookies</li>
              <li>Rechazar todas las cookies</li>
              <li>Configurar qué tipos de cookies aceptas</li>
              <li>Eliminar cookies en cualquier momento</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-brand-dark mb-3">5. Consentimiento</h2>
            <p>Al continuar navegando nuestro sitio, aceptas el uso de cookies. Si no deseas que utilicemos cookies, puedes deshabilitarlas en la configuración de tu navegador.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-brand-dark mb-3">6. Contacto</h2>
            <p>Si tienes preguntas sobre nuestro uso de cookies, contáctanos por WhatsApp: +51 926 572 115 o +51 955 444 445</p>
          </div>

          <p className="text-sm text-brand-dark/60 mt-8">Última actualización: {new Date().getFullYear()}</p>
        </div>
      </div>
    </section>
  );
}
