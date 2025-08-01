import { CheckCircle } from "lucide-react";

export const WhatIsIAthon = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
            ¿Qué es el IAthon HR?
          </h2>
          <p className="text-xl mb-12 text-muted-foreground max-w-3xl mx-auto">
            El IAthon HR no es un curso, es una experiencia vivencial que te lleva a resolver retos reales de Recursos Humanos usando IA generativa. No se trata de escuchar sobre innovación, se trata de vivirla.
          </p>
          
          <div className="bg-card rounded-2xl p-8 shadow-lg border">
            <h3 className="text-2xl font-semibold mb-8 text-card-foreground">
              Por qué es diferente:
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-semibold text-lg mb-2">Modelo 70/20/10</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>70% práctica resolviendo un reto real</li>
                  <li>20% mentoría para guiarte</li>
                  <li>10% capacitación express</li>
                </ul>
              </div>
              
              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-semibold text-lg mb-2">Plataforma Skilt</h4>
                <p className="text-sm text-muted-foreground">
                  Tu espacio para retos, feedback y certificación
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-semibold text-lg mb-2">Gamificación</h4>
                <p className="text-sm text-muted-foreground">
                  Aprende colaborando y compitiendo
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};