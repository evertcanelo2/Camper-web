import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Términos y Condiciones | Camper',
  description: 'Términos y condiciones de uso y compra en Camper Venezuela.',
};

export default function TerminosPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl md:text-4xl font-banana text-brand-gold mb-4">Términos y Condiciones de Uso</h1>
        <p className="text-sm font-light text-brand-mocha/70">Última actualización: {new Date().toLocaleDateString('es-VE')}</p>
      </div>

      <section className="space-y-4">
        <h2 className="text-xl font-medium text-brand-denim">1. Aceptación de los Términos</h2>
        <p className="text-sm font-light text-brand-mocha/80 leading-relaxed">
          Al acceder y utilizar el sitio web de Camper (en adelante, &quot;la Web&quot;), al realizar una compra o al suscribirte a nuestro boletín de correo electrónico, aceptas y te comprometes a cumplir con estos Términos y Condiciones de Uso. Si no estás de acuerdo con alguna parte de estos términos, por favor, no utilices nuestra Web.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium text-brand-denim">2. Información de la Empresa</h2>
        <p className="text-sm font-light text-brand-mocha/80 leading-relaxed">
          <strong>Razón Social:</strong> [NOMBRE DE LA EMPRESA]<br />
          <strong>RIF:</strong> [J-XXXXXXXX-X]<br />
          <strong>Dirección Fiscal:</strong> [DIRECCIÓN DE LA EMPRESA, CIUDAD, VENEZUELA]<br />
          <strong>Contacto:</strong> [CORREO/TELÉFONO DE CONTACTO]
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium text-brand-denim">3. Condiciones de Compra</h2>
        
        <h3 className="text-lg font-medium text-brand-denim/80 mt-4">3.1. Requisitos de Edad</h3>
        <p className="text-sm font-light text-brand-mocha/80 leading-relaxed">
          Al realizar una compra en la Web o al suscribirte a nuestra lista de correo, confirmas que eres mayor de edad de acuerdo con la legislación vigente venezolana.
        </p>

        <h3 className="text-lg font-medium text-brand-denim/80 mt-4">3.2. Precios y Moneda</h3>
        <p className="text-sm font-light text-brand-mocha/80 leading-relaxed">
          Los precios de nuestros productos se encuentran en nuestra página web y pueden cambiar sin previo aviso. Los precios están expresados en [MONEDA PRINCIPAL, e.g., Dólares de los Estados Unidos de América (USD)]. Para pagos en Bolívares (Bs), se utilizará la tasa de cambio oficial publicada por el Banco Central de Venezuela (BCV) el día de la transacción.
        </p>

        <h3 className="text-lg font-medium text-brand-denim/80 mt-4">3.3. Disponibilidad del Producto</h3>
        <p className="text-sm font-light text-brand-mocha/80 leading-relaxed">
          La disponibilidad de los productos mostrados en la Web está sujeta a existencias. Hacemos nuestro mejor esfuerzo para mantener nuestro inventario actualizado, pero no podemos garantizar la disponibilidad de un artículo específico en todo momento.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium text-brand-denim">4. Métodos de Pago</h2>
        <p className="text-sm font-light text-brand-mocha/80 leading-relaxed">
          Aceptamos los siguientes métodos de pago para compras realizadas a través de nuestra Web o canales de atención:
        </p>
        <ul className="list-disc pl-5 text-sm font-light text-brand-mocha/80 leading-relaxed space-y-2">
          <li>[Zelle]</li>
          <li>[Pago Móvil]</li>
          <li>[Transferencias Bancarias Nacionales]</li>
          <li>[Efectivo (Solo en tiendas físicas/Pickup)]</li>
          <li>[Binance Pay / USDT]</li>
        </ul>
        <p className="text-sm font-light text-brand-mocha/80 leading-relaxed">
          El procesamiento de pagos está sujeto a verificación. Tu orden será despachada una vez se confirme la recepción efectiva de los fondos.
        </p>
      </section>

      <section id="envios" className="space-y-4">
        <h2 className="text-xl font-medium text-brand-denim">5. Políticas de Envío</h2>
        
        <h3 className="text-lg font-medium text-brand-denim/80 mt-4">5.1. Envíos Nacionales (Venezuela)</h3>
        <p className="text-sm font-light text-brand-mocha/80 leading-relaxed">
          <strong>Envíos en Barquisimeto:</strong> Las compras realizadas y confirmadas serán despachadas entre 1 día a 2 días hábiles.<br />
          <strong>Envíos Nacionales:</strong> Los envíos al resto del país se realizan a través de servicios de encomiendas ([MRW, Zoom, Tealca, etc.]). El tiempo de entrega se encuentra entre 4 a 5 días hábiles, sujeto a la operatividad de la empresa de transporte.
        </p>

        <h3 className="text-lg font-medium text-brand-denim/80 mt-4">5.2. Responsabilidad del Envío</h3>
        <p className="text-sm font-light text-brand-mocha/80 leading-relaxed">
          Camper no se hace responsable por retrasos, pérdidas o daños de los paquetes una vez que han sido entregados a la empresa de transporte. Sin embargo, facilitaremos toda la información y apoyo necesario para que el cliente pueda realizar los reclamos correspondientes.
        </p>
      </section>

      <section id="devoluciones" className="space-y-4">
        <h2 className="text-xl font-medium text-brand-denim">6. Política de Devoluciones y Reembolsos</h2>
        
        <h3 className="text-lg font-medium text-brand-denim/80 mt-4">6.1. Condiciones para Devolución</h3>
        <p className="text-sm font-light text-brand-mocha/80 leading-relaxed">
          Aceptamos devoluciones bajo las siguientes condiciones:
        </p>
        <ul className="list-disc pl-5 text-sm font-light text-brand-mocha/80 leading-relaxed space-y-2">
          <li>El producto presenta defectos de fábrica.</li>
          <li>No es el producto que solicitaste.</li>
          <li>Simplemente no te gustó o la talla no es la correcta.</li>
        </ul>
        <p className="text-sm font-light text-brand-mocha/80 leading-relaxed">
          Para que la devolución sea válida, el producto <strong>no debe haber sido usado</strong>, debe estar en su empaque original y conservar todas sus etiquetas. En caso contrario, la devolución no será procesada.<br />
          El producto tiene que estar dentro de los [30 días] de comprado; pasados los [30 días] no se procesa el cambio/devolución.
        </p>

        <h3 className="text-lg font-medium text-brand-denim/80 mt-4">6.2. Excepciones de Devolución</h3>
        <p className="text-sm font-light text-brand-mocha/80 leading-relaxed">
          No se aceptan devoluciones para los siguientes productos:
        </p>
        <ul className="list-disc pl-5 text-sm font-light text-brand-mocha/80 leading-relaxed space-y-2">
          <li>Samples (muestras).</li>
          <li>Productos en descuento, liquidación o promoción.</li>
        </ul>

        <h3 className="text-lg font-medium text-brand-denim/80 mt-4">6.3. Reembolsos, Cambios y Créditos</h3>
        <ul className="list-disc pl-5 text-sm font-light text-brand-mocha/80 leading-relaxed space-y-2">
          <li>No se realizan reembolsos en dinero (salvo excepciones establecidas por la ley).</li>
          <li>Se aceptan cambios de productos por otro artículo de igual o mayor valor (pagando la diferencia), bajo las mismas condiciones de devolución.</li>
          <li>Se emite crédito a la cuenta (gift card o cupón) para futuras compras.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium text-brand-denim">7. Suscripción al Correo Electrónico</h2>
        <p className="text-sm font-light text-brand-mocha/80 leading-relaxed">
          Al suscribirte a nuestro correo electrónico, aceptas recibir comunicaciones sobre ofertas, nuevos productos y noticias de Camper. Puedes darte de baja en cualquier momento a través del enlace que encontrarás en la parte inferior de cada correo.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium text-brand-denim">8. Propiedad Intelectual</h2>
        <p className="text-sm font-light text-brand-mocha/80 leading-relaxed">
          Todo el contenido de la Web, incluyendo textos, imágenes, logotipos, diseños y software, es propiedad exclusiva de Camper (o sus licenciantes) y está protegido por las leyes de propiedad intelectual. El uso no autorizado de dicho material está estrictamente prohibido.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium text-brand-denim">9. Limitación de Responsabilidad</h2>
        <p className="text-sm font-light text-brand-mocha/80 leading-relaxed">
          Camper no se hace responsable por daños directos, indirectos, incidentales o consecuentes que resulten del uso o la imposibilidad de usar esta Web, o de los productos adquiridos a través de ella, salvo la responsabilidad por garantía de productos defectuosos que exige la ley.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium text-brand-denim">10. Jurisdicción y Ley Aplicable</h2>
        <p className="text-sm font-light text-brand-mocha/80 leading-relaxed">
          Estos Términos y Condiciones se rigen e interpretan de acuerdo con las leyes de la República Bolivariana de Venezuela. Cualquier disputa legal que surja en relación con estos términos o el uso de la Web será sometida a la jurisdicción de los tribunales competentes en [CIUDAD, ESTADO, VENEZUELA].
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium text-brand-denim">11. Modificaciones de los Términos</h2>
        <p className="text-sm font-light text-brand-mocha/80 leading-relaxed">
          Nos reservamos el derecho de modificar estos Términos y Condiciones en cualquier momento. Los cambios entrarán en vigor tan pronto como se publiquen en la Web. Es tu responsabilidad revisar periódicamente estos términos para estar al tanto de las actualizaciones.
        </p>
      </section>
    </div>
  );
}
