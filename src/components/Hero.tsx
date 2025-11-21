import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  
  // REEMPLAZA ESTA RUTA CON LA RUTA DE TU DASHBOARD
  const handleNavigateToDashboard = () => {
    navigate('/dashboard'); // <- CAMBIA '/dashboard' por tu ruta real
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-anton uppercase text-foreground">
              SPOTS EN{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                STELLAR
              </span>
            </h1>
            <p className="text-xl md:text-2xl font-lora italic text-muted-foreground max-w-2xl mx-auto">
              Crea, distribuye y colecciona tokens de asistencia verificables en blockchain
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" className="text-lg px-8 font-inter">
              Crear Evento
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 font-inter"
              onClick={handleNavigateToDashboard}
            >
              Explorar SPOTs
            </Button>
          </div>
          
          {/* Quick features - Rediseñado con imágenes grandes */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border/50">
            <div className="flex flex-col items-center gap-4 group">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                <img 
                  src="https://cdn.sanity.io/images/e2r40yh6/production-i18n/1e1d26a6ea7bd878932cb753bbd028e455fe0331-1100x1100.png?w=128&h=128&auto=format&dpr=2" 
                  alt="Mobile"
                  className="relative w-24 h-24 object-contain drop-shadow-lg group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-sm font-inter font-medium text-foreground">QR Codes</span>
            </div>
            
            <div className="flex flex-col items-center gap-4 group">
              <div className="relative">
                <div className="absolute inset-0 bg-secondary/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                <img 
                  src="https://cdn.sanity.io/images/e2r40yh6/production-i18n/44270b1791ec9a9513467e238259dd3a516ddbea-1024x768.png?rect=128,0,768,768&w=128&h=128&auto=format&dpr=2" 
                  alt="Global"
                  className="relative w-24 h-24 object-contain drop-shadow-lg group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-sm font-inter font-medium text-foreground">Links</span>
            </div>
            
            <div className="flex flex-col items-center gap-4 group">
              <div className="relative">
                <div className="absolute inset-0 bg-accent/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                <img 
                  src="https://cdn.sanity.io/images/e2r40yh6/production-i18n/e5a00920096bc12d35733eff6c1028f4586a8172-1100x1100.png?w=128&h=128&auto=format&dpr=2" 
                  alt="Market"
                  className="relative w-24 h-24 object-contain drop-shadow-lg group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-sm font-inter font-medium text-foreground">Geolocalización</span>
            </div>
            
            <div className="flex flex-col items-center gap-4 group">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                <img 
                  src="https://cdn.sanity.io/images/e2r40yh6/production-i18n/9bed752a12d4ffe6c6118c93f8ca36ad60a573d3-1072x1072.png?rect=0,108,1072,857&w=1224&h=979&auto=format&dpr=2" 
                  alt="Stellar"
                  className="relative w-24 h-24 object-contain drop-shadow-lg group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-sm font-inter font-medium text-foreground">Códigos</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;