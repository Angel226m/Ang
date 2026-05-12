export function PrivacySection() {
  return (
    <section id="privacidad" className="py-16 bg-brand-cream">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-display font-bold text-4xl text-brand-dark mb-8">Política de Privacidad</h1>

        <div className="space-y-6 text-brand-dark/80 font-body">
          <div>
            <h2 className="text-2xl font-semibold text-brand-dark mb-3">1. Información que Recopilamos</h2>
            <p>Recopilamos información personal que nos proporcionas voluntariamente, incluyendo nombre, número de teléfono, dirección y correo electrónico. Esta información es utilizada únicamente para procesar tus pedidos y comunicarnos contigo.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-brand-dark mb-3">2. Uso de la Información</h2>
            <p>Utilizamos tu información personal para:</p>
            <ul className="list-disc list-inside mt-2 space-y-2 ml-4">
              <li>Procesar y entregar tu pedido</li>
              <li>Comunicarnos contigo sobre tu compra</li>
              <li>Mejorar nuestros servicios</li>
              <li>Enviar actualizaciones sobre nuevos productos (con tu consentimiento)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-brand-dark mb-3">3. Protección de Datos</h2>
            <p>Nos comprometemos a proteger tu información personal. No compartimos tus datos con terceros sin tu consentimiento, excepto cuando es necesario para procesar tu pedido (ej: transportista).</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-brand-dark mb-3">4. Seguridad</h2>
            <p>Implementamos medidas de seguridad para proteger tus datos personales contra acceso no autorizado, alteración, divulgación o destrucción.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-brand-dark mb-3">5. Derechos del Usuario</h2>
            <p>Tienes derecho a acceder, rectificar o eliminar tus datos personales. Para ejercer estos derechos, contáctanos por WhatsApp.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-brand-dark mb-3">6. Cambios a esta Política</h2>
            <p>Podemos actualizar esta política de privacidad en cualquier momento. Los cambios entrarán en vigor una vez publicados en nuestro sitio.</p>
          </div>

          <p className="text-sm text-brand-dark/60 mt-8">Última actualización: {new Date().getFullYear()}</p>
        </div>
      </div>
    </section>
  );
}
