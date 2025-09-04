import { CheckCircle, Star, Users, Award, Network } from "lucide-react";

export const Benefits = () => {
  const benefits = [
    {
      icon: Star,
      title: "IA aplicada a HR",
      description: "Aprenderás IA aplicada a HR de forma práctica"
    },
    {
      icon: CheckCircle,
      title: "Soluciones reales",
      description: "Generarás soluciones que podrás implementar en tu empresa"
    },
    {
      icon: Users,
      title: "Liderazgo digital",
      description: "Te posicionarás como un líder digital en HR"
    },
    {
      icon: Award,
      title: "Certificación",
      description: "Obtendrás certificación con competencias digitales para tu perfil"
    },
    {
      icon: Network,
      title: "Networking",
      description: "Tendrás acceso a networking con profesionales que comparten tu visión"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-foreground">
            Beneficios para ti
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-card rounded-xl p-6 shadow-lg border hover:shadow-xl transition-shadow"
              >
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-xl mb-3 text-card-foreground">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 border border-primary/20">
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-4 text-primary">
                Beneficios para tu área de HR
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">Innovación</div>
                  <p className="text-muted-foreground">Transforma procesos tradicionales</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">Valor</div>
                  <p className="text-muted-foreground">Genera impacto en el negocio</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">Upskilling</div>
                  <p className="text-muted-foreground">Desarrolla competencias digitales</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};