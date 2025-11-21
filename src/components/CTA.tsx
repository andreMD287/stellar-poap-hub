import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const CTA = () => {
  const navigate = useNavigate();
  
  // REEMPLAZA ESTA RUTA CON LA RUTA DE TU DASHBOARD
  const handleNavigateToDashboard = () => {
    navigate('/dashboard'); // <- CAMBIA '/dashboard' por tu ruta real
  };

  return (
    <section className="py-20 px-4 bg-gradient-hero relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-12 p-12 rounded-3xl border border-border/50 bg-card/50 backdrop-blur-sm shadow-card">
          
          {/* Hero image grande */}
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-2xl" />
            <img 
              src="https://cdn.sanity.io/images/e2r40yh6/production-i18n/73a4f68fb171659700829be1257572ce5b723a2e-1100x1100.png?w=128&h=128&auto=format&dpr=2"
              alt="Fast"
              className="relative w-40 h-40 mx-auto object-contain drop-shadow-2xl animate-pulse"
            />
          </div>
          
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-anton uppercase text-foreground">
              COMIENZA AHORA
            </h2>
            <p className="text-xl font-lora italic text-muted-foreground max-w-2xl mx-auto">
              Crea tu primer evento SPOT en Stellar y revoluciona la forma de certificar asistencia
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button variant="hero" size="lg" className="text-lg px-10 font-inter">
              Crear mi Primer Evento
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-10 font-inter"
              onClick={handleNavigateToDashboard}
            >
              Ver Documentación
            </Button>
          </div>
          
          {/* Features con imágenes más grandes y espaciadas */}
          <div className="flex flex-wrap justify-center gap-10 pt-12 border-t border-border/30">
            <div className="flex flex-col items-center gap-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300" />
                <img 
                  src="https://cdn.sanity.io/images/e2r40yh6/production-i18n/9bed752a12d4ffe6c6118c93f8ca36ad60a573d3-1072x1072.png?rect=0,108,1072,857&w=1224&h=979&auto=format&dpr=2"
                  alt="Stellar"
                  className="relative w-16 h-16 object-contain drop-shadow-lg group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-sm font-inter font-medium text-muted-foreground">
                Blockchain Stellar
              </span>
            </div>
            
            <div className="flex flex-col items-center gap-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-secondary/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300" />
                <img 
                  src="https://cdn.sanity.io/images/e2r40yh6/production-i18n/01da904def898c1912e09c357a0b4a565eb7f5b1-1100x1100.png?w=128&h=128&auto=format&dpr=2"
                  alt="Low cost"
                  className="relative w-16 h-16 object-contain drop-shadow-lg group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-sm font-inter font-medium text-muted-foreground">
                Costos bajos
              </span>
            </div>
            
            <div className="flex flex-col items-center gap-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-accent/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300" />
                <img 
                  src="https://cdn.sanity.io/images/e2r40yh6/production-i18n/47afd92486b4fa3731d8f58a38dabf41b71cb336-1100x1100.png?w=128&h=128&auto=format&dpr=2"
                  alt="Scalability"
                  className="relative w-16 h-16 object-contain drop-shadow-lg group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-sm font-inter font-medium text-muted-foreground">
                Factory Pattern
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;