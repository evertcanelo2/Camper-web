import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Cookies | Camper',
  description: 'Política de cookies para Camper Venezuela.',
};

export default function CookiesPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl md:text-4xl font-banana text-brand-gold mb-4">Política de Cookies</h1>
        <p className="text-sm font-light text-brand-mocha/70">Última actualización: {new Date().toLocaleDateString('es-VE')}</p>
      </div>

      <section className="space-y-4">
        <p className="text-sm font-light text-brand-mocha/80 leading-relaxed">
          En <strong>Camper</strong>, utilizamos cookies y tecnologías similares para mejorar la experiencia de navegación, personalizar el contenido y analizar nuestro tráfico. Esta política explica qué son las cookies, cómo las utilizamos y cómo puedes gestionarlas.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium text-brand-denim">1. ¿Qué son las cookies?</h2>
        <p className="text-sm font-light text-brand-mocha/80 leading-relaxed">
          Las cookies son pequeños archivos de texto que los sitios web que visitas colocan en tu ordenador, teléfono móvil u otro dispositivo. Se utilizan ampliamente para hacer que los sitios web funcionen, o funcionen de manera más eficiente, así como para proporcionar información a los propietarios del sitio.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium text-brand-denim">2. Tipos de cookies que utilizamos</h2>
        <ul className="list-disc pl-5 text-sm font-light text-brand-mocha/80 leading-relaxed space-y-2">
          <li><strong>Cookies estrictamente necesarias:</strong> Son aquellas esenciales para el funcionamiento de nuestra Web, como permitirte acceder a áreas seguras o agregar artículos a tu carrito de compras. No requieren de tu consentimiento para ser utilizadas.</li>
          <li><strong>Cookies de rendimiento y análisis:</strong> (Ej: Google Analytics) Nos permiten reconocer y contar el número de visitantes y ver cómo se mueven por nuestra Web. Esto nos ayuda a mejorar la forma en que funciona, asegurando que los usuarios encuentren lo que buscan fácilmente.</li>
          <li><strong>Cookies de funcionalidad:</strong> Se utilizan para reconocerte cuando regresas a nuestra Web. Esto nos permite personalizar nuestro contenido para ti y recordar tus preferencias (por ejemplo, tu idioma o región).</li>
          <li><strong>Cookies de publicidad/marketing:</strong> (Ej: Meta Pixel) Estas cookies registran tu visita, las páginas que has visitado y los enlaces que has seguido. Utilizaremos esta información para hacer que nuestra Web y la publicidad mostrada en ella sean más relevantes para tus intereses.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium text-brand-denim">3. Servicios de Terceros</h2>
        <p className="text-sm font-light text-brand-mocha/80 leading-relaxed">
          Ten en cuenta que los terceros (incluidas, por ejemplo, redes publicitarias y proveedores de servicios externos como servicios de análisis de tráfico web) también pueden utilizar cookies, sobre las cuales no tenemos control. Es probable que estas cookies sean cookies analíticas/de rendimiento o cookies de segmentación.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium text-brand-denim">4. Cómo gestionar o bloquear las cookies</h2>
        <p className="text-sm font-light text-brand-mocha/80 leading-relaxed">
          Puedes bloquear las cookies activando la configuración de tu navegador que te permite rechazar la instalación de todas o algunas cookies. Sin embargo, si utilizas la configuración de tu navegador para bloquear todas las cookies (incluidas las cookies esenciales), es posible que no puedas acceder a toda o parte de nuestra Web (como el carrito de compras y proceso de pago).
        </p>
        <p className="text-sm font-light text-brand-mocha/80 leading-relaxed">
          Para más información sobre cómo gestionar y eliminar cookies en los diferentes navegadores, puedes consultar los sitios oficiales de soporte de Google Chrome, Mozilla Firefox, Apple Safari o Microsoft Edge.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium text-brand-denim">5. Contacto</h2>
        <p className="text-sm font-light text-brand-mocha/80 leading-relaxed">
          Si tienes alguna pregunta sobre nuestra Política de Cookies, por favor contáctanos al correo electrónico <strong>[CORREO DE SOPORTE]</strong>.
        </p>
      </section>
    </div>
  );
}
