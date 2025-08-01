import { ExternalLink, Linkedin } from "lucide-react";
import guidoImage from "@/assets/mentor-guido.jpg";
import danielaImage from "@/assets/mentor-daniela.jpg";

export const Mentors = () => {
  const mentors = [
    {
      name: "Guido Risso",
      role: "AI Strategist & Speaker",
      image: guidoImage,
      linkedin: "https://www.linkedin.com/in/guidorisso/"
    },
    {
      name: "Daniela Endara",
      role: "HR Tech & Cultura Digital DEI",
      image: danielaImage,
      linkedin: "https://www.linkedin.com/in/danielaendara/"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-foreground">
            Mentores y Facilitadores
          </h2>
          <p className="text-xl text-center mb-16 text-muted-foreground">
            Contarás con expertos en IA y RRHH para guiarte en tu transformación
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {mentors.map((mentor, index) => (
              <div 
                key={index}
                className="bg-card rounded-xl p-8 shadow-lg border text-center hover:shadow-xl transition-shadow"
              >
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary/20">
                  <img 
                    src={mentor.image} 
                    alt={mentor.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-bold text-2xl mb-2 text-card-foreground">
                  {mentor.name}
                </h3>
                <p className="text-primary font-semibold mb-4">
                  {mentor.role}
                </p>
                <a 
                  href={mentor.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  Ver perfil LinkedIn
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
          
          <div className="bg-card rounded-xl p-6 shadow-lg border text-center">
            <h3 className="font-semibold text-xl mb-4 text-card-foreground">
              Mentores Skilt
            </h3>
            <p className="text-muted-foreground">
              Especialistas en innovación y emprendimiento tecnológico HR
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};