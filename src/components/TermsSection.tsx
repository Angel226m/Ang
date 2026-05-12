export function TermsSection() {
  return (
    <section id="terminos" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-display font-bold text-4xl text-brand-dark mb-8">Términos y Condiciones</h1>

        <div className="space-y-6 text-brand-dark/80 font-body">
          <div>
            <h2 className="text-2xl font-semibold text-brand-dark mb-3">1. Aceptación de Términos</h2>
            <p>Al acceder y utilizar nuestro sitio web de STARGIRL, aceptas estos términos y condiciones en su totalidad. Si no estás de acuerdo con alguna parte, no podrás acceder al servicio.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-brand-dark mb-3">2. Uso de la Plataforma</h2>
            <p>Los productos y servicios ofrecidos en STARGIRL son solo para uso personal. No puedes revender, distribuir o comercializar nuestros productos sin autorización previa.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-brand-dark mb-3">3. Precios y Disponibilidad</h2>
            <p>Los precios están sujetos a cambio sin previo aviso. La disponibilidad de productos se confirma después de recibir tu pedido. Nos reservamos el derecho de rechazar cualquier pedido.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-brand-dark mb-3">4. Proceso de Compra</h2>
            <p>Las órdenes se confirman únicamente después del pago. El envío se realiza a Cañete y Chincha. Los tiempos de entrega son aproximados y pueden variar según la ubicación.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-brand-dark mb-3">5. Cancelaciones y Devoluciones</h2>
            <p>Las cancelaciones deben realizarse dentro de 24 horas de realizado el pedido. Las devoluciones son aceptadas si el producto llega defectuoso. Contacta a nuestro equipo para más información.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-brand-dark mb-3">6. Limitación de Responsabilidad</h2>
            <p>STARGIRL no se responsabiliza por daños indirectos, incidentales o consecuentes derivados del uso de nuestros productos o servicios.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-brand-dark mb-3">7. Contacto</h2>
            <p>Para consultas sobre estos términos, contáctanos por WhatsApp: +51 926 572 115 o +51 955 444 445</p>
          </div>

          <p className="text-sm text-brand-dark/60 mt-8">Última actualización: {new Date().getFullYear()}</p>
        </div>
      </div>
    </section>
  );
}
