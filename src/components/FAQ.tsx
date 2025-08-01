import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQ = () => {
  const faqs = [
    {
      question: "¿Necesito experiencia previa en IA?",
      answer: "No, todo lo aprenderás en el IAthon. Está diseñado para profesionales de HR sin conocimientos técnicos previos."
    },
    {
      question: "¿Puedo participar desde cualquier país?",
      answer: "Sí, es 100% online y puedes participar desde cualquier parte del mundo con conexión a internet."
    },
    {
      question: "¿Qué pasa si no tengo equipo?",
      answer: "No te preocupes, nosotros te asignamos un equipo con otros profesionales que comparten tus intereses."
    },
    {
      question: "¿Recibiré certificación?",
      answer: "Sí, recibirás una certificación avalada por Skilt con el nivel de competencias alcanzadas durante el IAthon."
    },
    {
      question: "¿Se puede pagar en cuotas?",
      answer: "Sí, ofrecemos opciones de pago flexibles. Contáctanos para conocer las modalidades disponibles."
    },
    {
      question: "¿Qué incluye el programa?",
      answer: "Incluye acceso a la plataforma Skilt, materiales del curso, mentorías personalizadas, trabajo en equipo y certificación final."
    },
    {
      question: "¿Cuánto tiempo debo dedicar por semana?",
      answer: "Recomendamos dedicar entre 8-10 horas por semana para aprovechar al máximo la experiencia."
    },
    {
      question: "¿Hay descuentos disponibles?",
      answer: "Sí, ofrecemos 20% de descuento Early Bird hasta el 1 de septiembre y 15% por referidos."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-foreground">
            Preguntas Frecuentes
          </h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card rounded-lg border px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-card-foreground hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};