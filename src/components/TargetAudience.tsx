import { Users, Target, TrendingUp } from "lucide-react";

export const TargetAudience = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
            Dirigido a
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-card rounded-xl p-6 shadow-lg border">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Profesionales de RRHH</h3>
              <p className="text-muted-foreground text-sm">
                Especialistas en gestión humana
              </p>
            </div>
            
            <div className="bg-card rounded-xl p-6 shadow-lg border">
              <Target className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Business Partners</h3>
              <p className="text-muted-foreground text-sm">
                Conectores entre negocio y talento
              </p>
            </div>
            
            <div className="bg-card rounded-xl p-6 shadow-lg border">
              <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Líderes de Talento</h3>
              <p className="text-muted-foreground text-sm">
                Especialistas en desarrollo organizacional
              </p>
            </div>
                        
            <div className="bg-card rounded-xl p-6 shadow-lg border">
              <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Visionarios del Talento</h3>
              <p className="text-muted-foreground text-sm">
                Todos los apasionados por el desarrollo de talento
              </p>
            </div>
          </div>
          
          <div className="bg-primary/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-semibold mb-4 text-primary">
              Para quienes quieren:
            </h3>
            <ul className="text-lg space-y-4 max-w-2xl mx-auto">
              <li className="flex items-center justify-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                Pasar de la teoría a la acción con IA
              </li>
              <li className="flex items-center justify-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                Agregar valor estratégico al negocio
              </li>
              <li className="flex items-center justify-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                Repensar la gestión humana sin perder el toque humano
              </li>
            </ul>
            <p className="mt-6 text-muted-foreground italic">
              No necesitas saber de programación, solo curiosidad y ganas de evolucionar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};