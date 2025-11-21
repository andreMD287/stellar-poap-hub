import { Card, CardContent } from "@/components/ui/card";
import { Users, Settings, Share2, Award } from "lucide-react";

const steps = [
  {
    icon: Users,
    title: "Crea tu Evento",
    description: "Define los detalles de tu evento, cantidad de POAPs y método de distribución.",
    step: "01",
  },
  {
    icon: Settings,
    title: "Configura Permisos",
    description: "Asigna roles (Owner, Admin, Minter) y delega responsabilidades según necesites.",
    step: "02",
  },
  {
    icon: Share2,
    title: "Distribuye",
    description: "Usa QR, links, geolocalización o códigos para distribuir tus POAPs.",
    step: "03",
  },
  {
    icon: Award,
    title: "Colecciona",
    description: "Los asistentes reclaman y coleccionan POAPs verificables en la blockchain.",
    step: "04",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            ¿Cómo Funciona?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Cuatro pasos simples para crear y distribuir tus POAPs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connection lines - hidden on mobile */}
          <div className="hidden lg:block absolute top-1/4 left-0 right-0 h-0.5 bg-gradient-primary opacity-20" />
          
          {steps.map((step, index) => (
            <Card 
              key={index}
              className="relative border-border/50 hover:shadow-glow transition-all duration-300"
            >
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center">
                    <step.icon className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-5xl font-bold text-muted-foreground/20">
                    {step.step}
                  </span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
