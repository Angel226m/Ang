import { X } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'terms' | 'privacy' | 'cookies';
}

export function LegalModal({ isOpen, onClose, type }: LegalModalProps) {
  if (!isOpen) return null;

  const getContent = () => {
    switch (type) {
      case 'terms':
        return {
          title: 'Términos y Condiciones',
          content: (
            <div className="space-y-6 text-brand-dark/80 text-sm">
              <div>
                <h3 className="font-semibold text-brand-dark mb-2 text-base">1. Aceptación de Términos</h3>
                <p className="leading-relaxed">Al acceder y utilizar nuestro sitio web de STARGIRL (www.stargirl.pe), aceptas estos términos y condiciones en su totalidad. Si no estás de acuerdo con alguna parte de estos términos, no podrás acceder ni utilizar nuestros servicios. Nos reservamos el derecho de modificar estos términos en cualquier momento, siendo tu responsabilidad revisar esta página periódicamente para verificar cambios.</p>
              </div>

              <div>
                <h3 className="font-semibold text-brand-dark mb-2 text-base">2. Servicios Ofrecidos</h3>
                <p className="leading-relaxed">STARGIRL ofrece accesorios kawaii y coquette de alta calidad, incluyendo espejos, vinchas, ligas, llaveros y otros productos. Los servicios incluyen catálogo en línea, procesamiento de pedidos vía WhatsApp y entrega en Cañete y Chincha. Nuestros productos están diseñados para uso personal y no pueden ser reventa sin autorización expresa por escrito.</p>
              </div>

              <div>
                <h3 className="font-semibold text-brand-dark mb-2 text-base">3. Precios y Disponibilidad</h3>
                <p className="leading-relaxed">Los precios mostrados en nuestro sitio están en Soles Peruanos (S/.) y pueden cambiar sin previo aviso. La disponibilidad de productos está sujeta a existencias. Aunque hacemos esfuerzos para mantener información actualizada, no garantizamos la exactitud de precios o disponibilidad. Nos reservamos el derecho de rechazar o cancelar cualquier pedido.</p>
              </div>

              <div>
                <h3 className="font-semibold text-brand-dark mb-2 text-base">4. Proceso de Compra</h3>
                <p className="leading-relaxed">El proceso de compra se realiza vía WhatsApp (+51 926 572 115 o +51 955 444 445). Los pedidos se confirman solo después de la confirmación de pago. Aceptamos transferencias bancarias y billeteras digitales. El envío se realiza exclusivamente a Cañete y Chincha, con tiempos de entrega de 2-5 días hábiles según la ubicación.</p>
              </div>

              <div>
                <h3 className="font-semibold text-brand-dark mb-2 text-base">5. Cancelaciones y Devoluciones</h3>
                <p className="leading-relaxed">Las cancelaciones pueden realizarse dentro de 24 horas posteriores al pedido sin costo adicional. Las devoluciones se aceptan si el producto llega defectuoso o diferente a lo descrito. El cliente debe contactar al equipo dentro de 48 horas de recibido el producto. Los gastos de envío para devoluciones corren por cuenta del cliente.</p>
              </div>

              <div>
                <h3 className="font-semibold text-brand-dark mb-2 text-base">6. Responsabilidad Limitada</h3>
                <p className="leading-relaxed">STARGIRL no se responsabiliza por daños indirectos, incidentales, especiales o consecuentes derivados del uso de nuestros productos o servicios. La responsabilidad máxima de STARGIRL está limitada al monto pagado por el producto. No somos responsables por retrasos en entregas causados por terceros.</p>
              </div>

              <div>
                <h3 className="font-semibold text-brand-dark mb-2 text-base">7. Ley Aplicable</h3>
                <p className="leading-relaxed">Estos términos se rigen por las leyes de la República del Perú. Cualquier disputa se resolverá en los juzgados competentes de Cañete, Perú.</p>
              </div>

              <div className="bg-brand-pink/10 p-4 rounded-lg">
                <p className="text-xs text-brand-dark/70"><strong>Última actualización:</strong> {new Date().toLocaleDateString('es-PE')}</p>
              </div>
            </div>
          ),
        };
      case 'privacy':
        return {
          title: 'Política de Privacidad',
          content: (
            <div className="space-y-6 text-brand-dark/80 text-sm">
              <div>
                <h3 className="font-semibold text-brand-dark mb-2 text-base">1. Información que Recopilamos</h3>
                <p className="leading-relaxed">STARGIRL recopila información personal que nos proporcionas voluntariamente, incluyendo: nombre completo, número de teléfono, dirección de envío, distrito, correo electrónico y cualquier otra información que proporciones al comunicarte con nosotros. También podemos recopilar información sobre tus preferencias de productos e historial de compras.</p>
              </div>

              <div>
                <h3 className="font-semibold text-brand-dark mb-2 text-base">2. Uso de la Información</h3>
                <p className="leading-relaxed">Tu información personal es utilizada para:</p>
                <ul className="list-disc list-inside mt-2 space-y-1 ml-2">
                  <li>Procesar y entregar tu pedido correctamente</li>
                  <li>Comunicarnos contigo sobre el estado de tu compra</li>
                  <li>Resolver problemas o consultas relacionadas con tu orden</li>
                  <li>Mejorar nuestros productos y servicios</li>
                  <li>Enviar actualizaciones sobre nuevos productos (con tu consentimiento)</li>
                  <li>Cumplir con obligaciones legales</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-brand-dark mb-2 text-base">3. Protección de Datos Personales</h3>
                <p className="leading-relaxed">Nos comprometemos a proteger tu información personal contra acceso no autorizado, uso indebido, alteración o destrucción. No compartimos tus datos personales con terceros sin tu consentimiento previo, excepto cuando es absolutamente necesario para procesar tu pedido (como con transportistas confiables).</p>
              </div>

              <div>
                <h3 className="font-semibold text-brand-dark mb-2 text-base">4. Medidas de Seguridad</h3>
                <p className="leading-relaxed">Implementamos medidas de seguridad técnicas, administrativas y físicas para proteger tu información. Sin embargo, no podemos garantizar seguridad absoluta en internet. Es tu responsabilidad mantener confidencial tu información de acceso.</p>
              </div>

              <div>
                <h3 className="font-semibold text-brand-dark mb-2 text-base">5. Derechos del Usuario</h3>
                <p className="leading-relaxed">Tienes derecho a: acceder a tus datos personales, solicitar su corrección, solicitar su eliminación, optar por no recibir comunicaciones de marketing, y revocar tu consentimiento. Para ejercer estos derechos, contáctanos por WhatsApp: +51 926 572 115.</p>
              </div>

              <div>
                <h3 className="font-semibold text-brand-dark mb-2 text-base">6. Cambios a esta Política</h3>
                <p className="leading-relaxed">Podemos actualizar esta política de privacidad en cualquier momento. Los cambios entrarán en vigor inmediatamente después de ser publicados en nuestro sitio. Tu uso continuado del sitio constituye aceptación de los cambios.</p>
              </div>

              <div className="bg-brand-pink/10 p-4 rounded-lg">
                <p className="text-xs text-brand-dark/70"><strong>Última actualización:</strong> {new Date().toLocaleDateString('es-PE')}</p>
              </div>
            </div>
          ),
        };
      case 'cookies':
        return {
          title: 'Política de Cookies',
          content: (
            <div className="space-y-6 text-brand-dark/80 text-sm">
              <div>
                <h3 className="font-semibold text-brand-dark mb-2 text-base">1. ¿Qué son las Cookies?</h3>
                <p className="leading-relaxed">Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo (computadora, teléfono o tablet) cuando visitas nuestro sitio web. Estas herramientas nos permiten mejorar tu experiencia de navegación, recordar tus preferencias y recopilar información sobre cómo utilizas nuestro sitio.</p>
              </div>

              <div>
                <h3 className="font-semibold text-brand-dark mb-2 text-base">2. Tipos de Cookies que Utilizamos</h3>
                <div className="space-y-3 mt-2">
                  <div>
                    <strong className="text-brand-dark">Cookies Esenciales:</strong>
                    <p>Necesarias para el funcionamiento básico del sitio. Permiten funciones como carrito de compras y procesamiento de transacciones.</p>
                  </div>
                  <div>
                    <strong className="text-brand-dark">Cookies de Rendimiento:</strong>
                    <p>Nos ayudan a entender cómo utilizas nuestro sitio, qué páginas visitas más y si experimentas errores.</p>
                  </div>
                  <div>
                    <strong className="text-brand-dark">Cookies de Funcionalidad:</strong>
                    <p>Mejoran tu experiencia personalizada recordando tus elecciones, idioma preferido y región.</p>
                  </div>
                  <div>
                    <strong className="text-brand-dark">Cookies de Marketing:</strong>
                    <p>Utilizadas para mostrar anuncios relevantes basados en tus intereses y actividad de navegación.</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-brand-dark mb-2 text-base">3. Duración de las Cookies</h3>
                <p className="leading-relaxed"><strong>Cookies de Sesión:</strong> Se eliminan automáticamente cuando cierras tu navegador.</p>
                <p className="leading-relaxed mt-2"><strong>Cookies Persistentes:</strong> Se guardan en tu dispositivo hasta que expiran o las eliminas manualmente. Estas pueden durar desde días hasta años.</p>
              </div>

              <div>
                <h3 className="font-semibold text-brand-dark mb-2 text-base">4. Control y Gestión de Cookies</h3>
                <p className="leading-relaxed">Tienes control total sobre las cookies en tu navegador. Puedes:</p>
                <ul className="list-disc list-inside mt-2 space-y-1 ml-2">
                  <li>Aceptar todas las cookies</li>
                  <li>Rechazar todas las cookies</li>
                  <li>Configurar qué tipos específicos de cookies aceptas</li>
                  <li>Ser notificado antes de que se descargue una cookie</li>
                  <li>Eliminar cookies existentes en cualquier momento</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-brand-dark mb-2 text-base">5. Consentimiento</h3>
                <p className="leading-relaxed">Al continuar navegando nuestro sitio web después de ser informado sobre esta política, aceptas el uso de cookies de acuerdo con nuestra política. Si no deseas que utilicemos cookies, puedes deshabilitarlas en la configuración de tu navegador web.</p>
              </div>

              <div>
                <h3 className="font-semibold text-brand-dark mb-2 text-base">6. Contacto</h3>
                <p className="leading-relaxed">Si tienes preguntas o inquietudes sobre nuestro uso de cookies, por favor contáctanos por WhatsApp: +51 926 572 115 o +51 955 444 445</p>
              </div>

              <div className="bg-brand-pink/10 p-4 rounded-lg">
                <p className="text-xs text-brand-dark/70"><strong>Última actualización:</strong> {new Date().toLocaleDateString('es-PE')}</p>
              </div>
            </div>
          ),
        };
    }
  };

  const { title, content } = getContent();

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-3xl w-full my-8 shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-brand-pink-hot to-brand-pink-deep p-4 sm:p-6 flex items-center justify-between rounded-t-2xl">
          <h2 className="font-display font-bold text-xl sm:text-2xl text-white">{title}</h2>
          <button
            onClick={onClose}
            className="text-white hover:bg-white/20 p-2 rounded-full transition-colors flex-shrink-0"
            aria-label="Cerrar"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 max-h-[60vh] overflow-y-auto">
          {content}
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 p-4 sm:p-6 flex justify-end gap-3 bg-gray-50 rounded-b-2xl sticky bottom-0">
          <button
            onClick={onClose}
            className="w-full sm:w-auto bg-brand-pink-hot text-white px-6 py-2 rounded-full font-semibold hover:bg-brand-pink-deep transition-colors"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
}
