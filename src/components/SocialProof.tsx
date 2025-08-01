import { CheckCircle, Quote } from "lucide-react";

export const SocialProof = () => {
  const achievements = [
    "Hackathon USFQ",
    "Bootcamp UTPL", 
    "Speed Dating HR Tech LATAM"
  ];

  const testimonials = [
    {
      text: "Una experiencia transformadora que cambió mi perspectiva sobre el futuro de HR",
      author: "Participante Hackathon USFQ",
      role: "HR Manager"
    },
    {
      text: "Aprendí más en 4 semanas que en años de capacitaciones tradicionales",
      author: "Participante Bootcamp UTPL",
      role: "Talent Acquisition Specialist"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-foreground">
            Hemos transformado equipos en:
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="bg-card rounded-xl p-8 shadow-lg border text-center hover:shadow-xl transition-shadow"
              >
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="font-semibold text-xl text-card-foreground">
                  {achievement}
                </h3>
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-primary/5 rounded-xl p-6 border border-primary/20"
              >
                <Quote className="w-8 h-8 text-primary mb-4" />
                <p className="text-lg mb-4 text-foreground italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <div className="font-semibold text-primary">
                    {testimonial.author}
                  </div>
                  <div className="text-muted-foreground text-sm">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold mb-8 text-foreground">
              Empresas y universidades que confían en Skilt
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60">
              {/* Placeholder for company logos */}
              <div className="bg-muted rounded-lg h-16 flex items-center justify-center">
                <span className="text-muted-foreground font-semibold">USFQ</span>
              </div>
              <div className="bg-muted rounded-lg h-16 flex items-center justify-center">
                <span className="text-muted-foreground font-semibold">UTPL</span>
              </div>
              <div className="bg-muted rounded-lg h-16 flex items-center justify-center">
                <span className="text-muted-foreground font-semibold">HR Tech LATAM</span>
              </div>
              <div className="bg-muted rounded-lg h-16 flex items-center justify-center">
                <span className="text-muted-foreground font-semibold">Skilt</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};