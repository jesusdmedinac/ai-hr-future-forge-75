import { ExternalLink, Linkedin } from "lucide-react";
import guidoRissoImage from "@/assets/mentor-guido-risso.jpeg";
import christianRiveraImage from "@/assets/mentor-christina-rivera.jpeg";
import danielaEndaraImage from "@/assets/mentor-daniela-endara.jpeg";
import mariaFernandaGarciaImage from "@/assets/mentor-maria-fernanda-garcia.jpeg";
import martinRomeroImage from "@/assets/mentor-martin-romero.jpeg";

export const Mentors = () => {
  const mentors = [
    {
      name: "Christian Rivera",
      role: "Cofundador & CEO de Kudert | Skilt ✪ Emprendedor HR tech",
      image: christianRiveraImage,
      linkedin: "https://www.linkedin.com/in/christorivera/"
    },
    {
      name: "Guido Risso",
      role: "People, Tech & the Future 🚀 | HR Tech | Co-founder @HRissan | HR Manager | Building the next work.",
      image: guidoRissoImage,
      linkedin: "https://www.linkedin.com/in/guidorisso/"
    },
    {
      name: "Daniela Endara Montenegro",
      role: "Consultora en Equidad e Inclusión en las Organizaciones",
      image: danielaEndaraImage,
      linkedin: "https://www.linkedin.com/in/danielaendara/"
    },
    {
      name: "María Fernanda García",
      role: "Unleashing Team Potential Through Innovation 💡 | Owner @LearnyTeams | Agile & Innovation Consultant | Official EduScrum Trainer for Ecuador | Design Sprint Certificated",
      image: mariaFernandaGarciaImage,
      linkedin: "https://www.linkedin.com/in/mafer-garcia/"
    },
    {
      name: "Martin Romero",
      role: "CX Analyst at IGNIS Media Agency | Sales and Marketing",
      image: martinRomeroImage,
      linkedin: "https://www.linkedin.com/in/martin-romero-b2214973/"
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