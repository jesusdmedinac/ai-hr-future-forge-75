import { Button } from "@/components/ui/button";
import { Check, Users, Building, User } from "lucide-react";

export const Pricing = () => {
  const plans = [
    {
      name: "Individual",
      price: "$199",
      icon: User,
      description: "Perfecto para profesionales independientes",
      features: [
        "Acceso completo al IAthon",
        "Te asignamos un equipo",
        "Mentoría personalizada",
        "Certificación Skilt",
        "Acceso a plataforma",
        "Material del curso"
      ],
      popular: false
    },
    {
      name: "Equipo",
      price: "$650",
      icon: Users,
      description: "Hasta 5 personas por grupo",
      features: [
        "Todos los beneficios individuales",
        "Forman su propio equipo",
        "Sesiones grupales adicionales",
        "Mentorías especializadas",
        "Networking entre equipos",
        "Certificación grupal"
      ],
      popular: true
    },
    {
      name: "Corporativo",
      price: "$1,500",
      icon: Building,
      description: "Para empresas (10 personas)",
      features: [
        "Todos los beneficios anteriores",
        "Retos personalizados",
        "Mentoría ejecutiva",
        "Reporte de resultados",
        "Seguimiento post-evento",
        "Certificaciones corporativas"
      ],
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-foreground">
            Planes y Precios
          </h2>
          <p className="text-xl text-center mb-16 text-muted-foreground">
            Elige la opción que mejor se adapte a tu necesidad
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div 
                key={index}
                className={`relative bg-card rounded-2xl p-8 shadow-lg border ${
                  plan.popular ? 'border-primary ring-2 ring-primary/20' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                      Más Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <plan.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2 text-card-foreground">
                    {plan.name}
                  </h3>
                  <div className="text-4xl font-bold text-primary mb-2">
                    {plan.price}
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {plan.description}
                  </p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground text-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-primary hover:bg-primary/90' 
                      : 'bg-secondary hover:bg-secondary/80'
                  }`}
                  size="lg"
                >
                  Quiero participar ahora
                </Button>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-4">
              💰 <strong>Early Bird:</strong> 20% de descuento hasta el 1 de septiembre
            </p>
            <p className="text-muted-foreground">
              👥 <strong>Bonus referidos:</strong> Invita a un amigo y ambos reciben 15% de descuento
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};