import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 px-4 bg-gradient-hero">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center space-y-8 p-12 rounded-3xl border border-border/50 bg-card/50 backdrop-blur-sm shadow-card">
          <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-primary flex items-center justify-center shadow-glow">
            <Rocket className="w-10 h-10 text-white" />
          </div>
          
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Comienza Ahora
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Crea tu primer evento POAP en Stellar y revoluciona la forma de certificar asistencia
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button variant="hero" size="lg" className="text-lg px-10">
              Crear mi Primer Evento
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-10">
              Ver Documentación
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 pt-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span>Blockchain Stellar</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-secondary" />
              <span>Costos bajos</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <span>Factory Pattern</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
