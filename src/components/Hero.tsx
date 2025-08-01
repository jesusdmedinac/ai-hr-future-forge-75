import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-iathon.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-primary/80">
      <div className="absolute inset-0 bg-black/20"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>
      
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            IAthon HR
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            People + AI: Modo Futuro
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            "Desafío colaborativo para evolucionar la gestión humana con IA generativa"
          </p>
          <p className="text-lg mb-12 max-w-3xl mx-auto text-gray-200">
            Convierte la IA en tu copiloto, no en tu competencia. Aprende haciendo, crea soluciones reales y transforma tu rol en HR.
          </p>
          
          <Button 
            size="lg" 
            className="text-xl px-8 py-6 bg-white text-primary hover:bg-gray-100 font-semibold shadow-2xl"
          >
            ¡Inscríbete ahora!
          </Button>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="font-semibold text-blue-200">Modalidad</div>
              <div className="text-white">100% online</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="font-semibold text-blue-200">Duración</div>
              <div className="text-white">4 semanas</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="font-semibold text-blue-200">Inicio</div>
              <div className="text-white">15 de septiembre</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="font-semibold text-blue-200">Participación</div>
              <div className="text-white">En equipos</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};