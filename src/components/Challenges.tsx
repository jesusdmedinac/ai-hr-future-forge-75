import { Search, UserPlus, MessageCircle, BarChart, GraduationCap, CheckCircle } from "lucide-react";

export const Challenges = ({ id }: { id: string }) => {
  const challenges = [
    {
      icon: Search,
      title: "Selección con IA",
      description: "Screening inteligente y scoring predictivo"
    },
    {
      icon: UserPlus,
      title: "Onboarding digital",
      description: "Diseño de experiencias automatizadas"
    },
    {
      icon: MessageCircle,
      title: "Comunicación interna",
      description: "Campañas creativas con IA generativa"
    },
    {
      icon: BarChart,
      title: "Clima organizacional",
      description: "Análisis de datos y propuestas de mejora"
    },
    {
      icon: GraduationCap,
      title: "Formación & reskilling",
      description: "Rutas personalizadas con IA"
    }
  ];

  return (
    <section id={id} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-foreground">
            Retos propuestos del IAthon
          </h2>
          <p className="text-xl text-center mb-16 text-muted-foreground max-w-3xl mx-auto">
            Desafíos reales de HR con relevancia inmediata para tu trabajo diario
          </p>
          
          <div className="flex flex-wrap justify-center items-stretch gap-8">
            {challenges.map((challenge, index) => (
              <div 
                key={index}
                className="bg-card rounded-xl p-6 shadow-lg border hover:shadow-xl transition-all hover:scale-105 w-full md:w-[45%] lg:w-[30%]"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 rounded-lg p-3 flex-shrink-0">
                    <challenge.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <h3 className="font-semibold text-lg text-card-foreground">
                        {challenge.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground">
                      {challenge.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};