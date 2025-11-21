import { Button } from "@/components/ui/button";
import { QrCode, Link2, MapPin, KeyRound } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
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
        <div className="max-w-4xl mx-auto text-center space-y-8">
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
            <Button variant="outline" size="lg" className="text-lg px-8 font-inter">
              Explorar SPOTs
            </Button>
          </div>

          {/* Quick features */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-12 border-t border-border/50">
            <div className="flex flex-col items-center gap-2 p-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <QrCode className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm font-inter font-medium text-foreground">QR Codes</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-4">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                <Link2 className="w-6 h-6 text-secondary" />
              </div>
              <span className="text-sm font-inter font-medium text-foreground">Links</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-4">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <span className="text-sm font-inter font-medium text-foreground">Geolocalización</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <KeyRound className="w-6 h-6 text-primary" />
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
