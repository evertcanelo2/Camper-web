import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Privacidad | Camper',
  description: 'Política de privacidad y manejo de datos de Camper.',
};

export default function PrivacidadPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl md:text-4xl font-banana text-brand-gold mb-4">Política de Privacidad</h1>
        <p className="text-sm font-light text-brand-mocha/70">Última actualización: {new Date().toLocaleDateString('es-VE')}</p>
      </div>

      <section className="space-y-4">
        <p className="text-sm font-light text-brand-mocha/80 leading-relaxed">
          La privacidad de nuestros usuarios es de suma importancia. En <strong>Camper</strong> (operado por [NOMBRE LEGAL DE LA EMPRESA]), nos comprometemos a proteger y respetar tu privacidad, conforme a lo establecido en la Constitución de la República Bolivariana de Venezuela (Artículos 28 y 60) y demás normativas aplicables.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium text-brand-denim">1. Información que recopilamos</h2>
        <p className="text-sm font-light text-brand-mocha/80 leading-relaxed">
          Podemos recopilar y procesar los siguientes datos sobre ti:
        </p>
        <ul className="list-disc pl-5 text-sm font-light text-brand-mocha/80 leading-relaxed space-y-2">
          <li><strong>Datos de identidad:</strong> Nombre, apellido, número de documento de identidad (Cédula/RIF para facturación).</li>
          <li><strong>Datos de contacto:</strong> Dirección de correo electrónico, dirección de envío/facturación, número de teléfono.</li>
          <li><strong>Datos de transacciones:</strong> Detalles sobre pagos hacia y desde ti (nota: no almacenamos datos sensibles de tarjetas o claves, ver sección 3).</li>
          <li><strong>Datos técnicos:</strong> Dirección IP, tipo de navegador, configuración de zona horaria y ubicación, sistema operativo.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium text-brand-denim">2. Cómo usamos tu información</h2>
        <p className="text-sm font-light text-brand-mocha/80 leading-relaxed">
          Utilizamos tu información personal de las siguientes maneras:
        </p>
        <ul className="list-disc pl-5 text-sm font-light text-brand-mocha/80 leading-relaxed space-y-2">
          <li>Para procesar y entregar tus pedidos, incluyendo la gestión de pagos, facturación y cobros.</li>
          <li>Para comunicarnos contigo sobre tu pedido, responder a consultas o brindar soporte al cliente.</li>
          <li>Para enviarte información sobre nuevos productos, ofertas o noticias de Camper (solo si te has suscrito a nuestro boletín).</li>
          <li>Para mejorar nuestro sitio web, productos/servicios, marketing y experiencia del cliente.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium text-brand-denim">3. Datos de Pago y Seguridad</h2>
        <p className="text-sm font-light text-brand-mocha/80 leading-relaxed">
          Camper <strong>no aloja ni almacena</strong> ningún tipo de información sensible de pago, como datos completos de tarjetas de crédito o credenciales de acceso a cuentas bancarias. 
          Al momento de la compra, en caso de usar tarjetas o pasarelas electrónicas, los datos de pago son procesados de forma segura a través de una pasarela de pago externa y certificada. 
          Dicha información se maneja exclusivamente entre tú y el procesador de pagos, garantizando así la máxima seguridad. En el caso de transferencias o Pago Móvil, solo requerimos el número de referencia y banco origen para conciliar el pago.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium text-brand-denim">4. Divulgación de tus datos</h2>
        <p className="text-sm font-light text-brand-mocha/80 leading-relaxed">
          No vendemos, comercializamos ni alquilamos tu información personal a terceros. Podemos compartir información estrictamente necesaria con proveedores de servicios de confianza (como empresas de paquetería para entregar tu pedido) o cuando sea requerido por ley mediante orden judicial o solicitud de autoridades competentes venezolanas.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium text-brand-denim">5. Retención de Datos</h2>
        <p className="text-sm font-light text-brand-mocha/80 leading-relaxed">
          Solo conservaremos tus datos personales durante el tiempo que sea razonablemente necesario para cumplir con los fines para los que los recopilamos, lo que incluye satisfacer cualquier requisito legal, contable o de informes (ej. registros de facturación según requerimientos del SENIAT).
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium text-brand-denim">6. Tus Derechos</h2>
        <p className="text-sm font-light text-brand-mocha/80 leading-relaxed">
          Tienes derecho a acceder, actualizar, rectificar o solicitar la eliminación de tu información personal en nuestras bases de datos. Para ejercer estos derechos, por favor contáctanos al correo electrónico <strong>[CORREO DE SOPORTE]</strong>. Si estás suscrito a nuestro boletín, puedes darte de baja en cualquier momento usando el enlace correspondiente al final del correo.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium text-brand-denim">7. Cambios a esta política</h2>
        <p className="text-sm font-light text-brand-mocha/80 leading-relaxed">
          Nos reservamos el derecho de actualizar esta política de privacidad ocasionalmente para reflejar, por ejemplo, cambios en nuestras prácticas o por otros motivos operativos, legales o reglamentarios. Los cambios entrarán en vigencia inmediatamente tras su publicación en la Web.
        </p>
      </section>
    </div>
  );
}
