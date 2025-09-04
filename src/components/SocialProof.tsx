import { CheckCircle, Quote } from "lucide-react";
import usfqImage from "@/assets/usfq.png";
import utplImage from "@/assets/utpl.png";
import bancoGuayaquilImage from "@/assets/banco-guayaquil.png";
import bancoLojaImage from "@/assets/banco-loja.png";

export const SocialProof = () => {
  const achievements = [
    {
      name: "Universidad San Francisco de Quito",
      image: usfqImage
    },
    {
      name: "Universidad Técnica Particular de Loja",
      image: utplImage
    },
    {
      name: "Banco Guayaquil",
      image: bancoGuayaquilImage
    },
    {
      name: "Banco de Loja",
      image: bancoLojaImage
    },
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
                className="object-cover aspect-square bg-card rounded-xl p-4 shadow-lg border text-center hover:shadow-xl transition-shadow"
              >
                <img 
                  src={achievement.image} 
                  alt={achievement.name}
                  className="w-full h-full object-cover aspect-square"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-xl text-card-foreground">
                    {achievement.name}
                  </h3>
                </div>
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
        </div>
      </div>
    </section>
  );
};