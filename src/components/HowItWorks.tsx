import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    image: "https://cdn.sanity.io/images/e2r40yh6/production-i18n/48e528e291d7c6cfa7e5535a3f07703043d95e76-1064x966.png",
    title: "Crea tu Evento",
    description: "Define los detalles de tu evento, cantidad de SPOTs y método de distribución.",
    step: "01",
    color: "primary",
  },
  {
    image: "https://cdn.sanity.io/images/e2r40yh6/production-i18n/47afd92486b4fa3731d8f58a38dabf41b71cb336-1100x1100.png?w=128&h=128&auto=format&dpr=2",
    title: "Configura Permisos",
    description: "Asigna roles (Owner, Admin, Minter) y delega responsabilidades según necesites.",
    step: "02",
    color: "secondary",
  },
  {
    image: "https://cdn.sanity.io/images/e2r40yh6/production-i18n/cdd8e585244fe22db899e5c2e463bde2793355e2-4200x3508.png?rect=0,356,4200,2797&w=506&h=337&auto=format&dpr=2",
    title: "Distribuye",
    description: "Usa QR, links, geolocalización o códigos para distribuir tus SPOTs.",
    step: "03",
    color: "accent",
  },
  {
    image: "https://cdn.sanity.io/images/e2r40yh6/production-i18n/2c074f01f1528942ffc1a6a4cc4c818a54570483-952x762.png?rect=0,1,952,761&w=1224&h=979&auto=format&dpr=2",
    title: "Colecciona",
    description: "Los asistentes reclaman y coleccionan SPOTs verificables en la blockchain.",
    step: "04",
    color: "primary",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-anton uppercase text-foreground">
            ¿CÓMO FUNCIONA?
          </h2>
          <p className="text-xl font-lora italic text-muted-foreground max-w-2xl mx-auto">
            Cuatro pasos simples para crear y distribuir tus SPOTs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connection lines - más prominente */}
          <div className="hidden lg:block absolute top-[120px] left-[10%] right-[10%] h-1 bg-gradient-primary opacity-10" />
          
          {steps.map((step, index) => (
            <Card 
              key={index}
              className="relative border-border/50 hover:shadow-glow transition-all duration-300 hover:-translate-y-2 overflow-hidden group"
            >
              <CardContent className="p-0">
                {/* Step number badge */}
                <div className="absolute top-4 right-4 z-10">
                  <div className={`w-16 h-16 rounded-full bg-${step.color}/10 border-2 border-${step.color}/30 flex items-center justify-center backdrop-blur-sm`}>
                    <span className="text-2xl font-bold text-foreground/40">
                      {step.step}
                    </span>
                  </div>
                </div>
                
                {/* Imagen grande como hero */}
                <div className="relative h-56 bg-gradient-to-br from-background to-muted/30 flex items-center justify-center overflow-hidden">
                  <div className={`absolute inset-0 bg-${step.color}/5 group-hover:bg-${step.color}/10 transition-colors duration-300`} />
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="relative w-40 h-40 object-contain drop-shadow-2xl group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                {/* Content */}
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-lora font-semibold text-foreground text-center">
                    {step.title}
                  </h3>
                  <p className="font-inter text-muted-foreground text-center text-sm leading-relaxed">
                    {step.description}
                  </p>
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