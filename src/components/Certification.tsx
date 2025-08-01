import { Award, Star, CheckCircle } from "lucide-react";

export const Certification = () => {
  const competencies = [
    "Innovación aplicada a HR",
    "Colaboración digital", 
    "Creatividad y diseño con IA",
    "Pensamiento crítico"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
            Certificación
          </h2>
          
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 border border-primary/20 mb-12">
            <Award className="w-20 h-20 text-primary mx-auto mb-6" />
            <h3 className="text-3xl font-bold mb-4 text-primary">
              Avalado por Skilt
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              Obtén una certificación reconocida que valide tus nuevas competencias en IA aplicada a HR
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {competencies.map((competency, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 bg-white/50 rounded-lg p-4"
                >
                  <div className="bg-primary/20 rounded-full p-2">
                    <Star className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-semibold text-foreground">
                    {competency}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-card rounded-xl p-6 shadow-lg border">
            <div className="flex items-center justify-center gap-3 mb-4">
              <CheckCircle className="w-6 h-6 text-green-500" />
              <h4 className="text-xl font-semibold text-card-foreground">
                Evaluación basada en competencias
              </h4>
            </div>
            <p className="text-muted-foreground">
              Tu certificación reflejará el nivel de competencias alcanzadas durante el IAthon, 
              proporcionando un valor real y medible para tu desarrollo profesional.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};