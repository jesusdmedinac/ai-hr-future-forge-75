import { Calendar, Users2, MessageSquare, Presentation } from "lucide-react";

export const HowItWorks = () => {
  const weeks = [
    {
      week: 1,
      icon: Calendar,
      title: "Kick-off + formación express",
      description: "Inicio del desafío y capacitación en IA para HR"
    },
    {
      week: 2,
      icon: Users2,
      title: "Asignación de retos + equipos",
      description: "Formación de equipos y definición de retos específicos"
    },
    {
      week: 3,
      icon: MessageSquare,
      title: "Mentorías + desarrollo",
      description: "Trabajo en equipo con acompañamiento de mentores"
    },
    {
      week: 4,
      icon: Presentation,
      title: "Pitch final",
      description: "Presentación de soluciones ante jurado especializado"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-foreground">
            Cómo funciona el IAthon
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {weeks.map((week, index) => (
              <div key={index} className="relative">
                <div className="bg-card rounded-xl p-6 shadow-lg border text-center h-full">
                  <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {week.week}
                  </div>
                  <week.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-3 text-card-foreground">
                    {week.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {week.description}
                  </p>
                </div>
                {index < weeks.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-primary/30"></div>
                )}
              </div>
            ))}
          </div>
          
          <div className="bg-card rounded-2xl p-8 shadow-lg border">
            <h3 className="text-2xl font-semibold mb-6 text-center text-card-foreground">
              Modalidad y Participación
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center">
                <h4 className="font-semibold text-lg mb-4 text-primary">Modalidad</h4>
                <p className="text-muted-foreground">100% online</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-lg mb-4 text-primary">Participación</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li>Individual (nosotros te asignamos un equipo)</li>
                  <li>En equipo (máx. 4 personas por grupo)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};