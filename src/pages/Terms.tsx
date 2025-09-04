
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const Terms = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Términos y Condiciones</h1>
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Aceptación de los Términos</h2>
            <p>
              Al acceder y utilizar nuestro sitio web y servicios, usted acepta cumplir y estar sujeto a los siguientes términos y condiciones de uso. Si no está de acuerdo con alguna parte de estos términos, no debe utilizar nuestros servicios.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Descripción del Servicio</h2>
            <p>
              "AI HR Future Forge" (en adelante, "el Servicio") es una iniciativa de Skilt que ofrece programas de formación y eventos, como el "IA-thon", enfocados en la aplicación de la inteligencia artificial en los recursos humanos.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Inscripción y Pago</h2>
            <p>
              Para participar en nuestros programas, es necesario completar el proceso de inscripción y realizar el pago correspondiente a través de los métodos ofrecidos. Las tarifas de inscripción no son reembolsables, excepto como se indica en nuestra política de devoluciones.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Política de Devoluciones</h2>
            <p>
              Se aceptarán solicitudes de devolución hasta 7 días antes de la fecha de inicio del programa o evento. Pasado este plazo, no se realizarán reembolsos.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Propiedad Intelectual</h2>
            <p>
              Todo el contenido proporcionado durante los programas, incluyendo material didáctico, presentaciones y software, es propiedad de Skilt y sus licenciantes. Este material no puede ser copiado, distribuido o utilizado para fines comerciales sin nuestro consentimiento explícito por escrito.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Código de Conducta</h2>
            <p>
              Esperamos que todos los participantes mantengan un ambiente profesional y respetuoso. No se tolerará el acoso, la discriminación o cualquier comportamiento inapropiado. Nos reservamos el derecho de expulsar a cualquier participante que viole este código de conducta sin derecho a reembolso.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Limitación de Responsabilidad</h2>
            <p>
              Skilt no se hace responsable de los resultados o decisiones de negocio tomadas por los participantes basadas en la información o formación recibida. Nuestro servicio se proporciona "tal cual" y no ofrecemos garantías de ningún tipo sobre los resultados específicos.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Modificaciones de los Términos</h2>
            <p>
              Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento. Las modificaciones entrarán en vigor inmediatamente después de su publicación en nuestro sitio web. Es su responsabilidad revisar estos términos periódicamente.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Contacto</h2>
            <p>
              Si tiene alguna pregunta sobre estos Términos y Condiciones, puede contactarnos a través de la información proporcionada en nuestro sitio web.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Terms;
