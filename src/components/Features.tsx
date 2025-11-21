import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    image: "https://cdn.sanity.io/images/e2r40yh6/production-i18n/1e1d26a6ea7bd878932cb753bbd028e455fe0331-1100x1100.png?w=128&h=128&auto=format&dpr=2",
    title: "QR Codes Únicos",
    description: "Genera códigos QR únicos para cada asistente. Escanea y reclama tu SPOT al instante.",
    gradient: "from-primary to-primary-glow",
  },
  {
    image: "https://cdn.sanity.io/images/e2r40yh6/production-i18n/44270b1791ec9a9513467e238259dd3a516ddbea-1024x768.png?rect=128,0,768,768&w=128&h=128&auto=format&dpr=2",
    title: "Links con Expiración",
    description: "Comparte links únicos con validez de hasta 1 semana. Control total sobre la distribución.",
    gradient: "from-secondary to-primary",
  },
  {
    image: "https://cdn.sanity.io/images/e2r40yh6/production-i18n/e5a00920096bc12d35733eff6c1028f4586a8172-1100x1100.png?w=128&h=128&auto=format&dpr=2",
    title: "Geolocalización",
    description: "Reclama SPOTs basados en tu ubicación. Perfecto para eventos presenciales con radio personalizado.",
    gradient: "from-accent to-primary",
  },
  {
    image: "https://cdn.sanity.io/images/e2r40yh6/production-i18n/7ae549397e9ce97874bd203b0e9b7913694ce113-1024x768.png?rect=128,0,768,768&w=128&h=128&auto=format&dpr=2",
    title: "Códigos Compartidos",
    description: "Códigos especiales para grupos. Distribuye múltiples SPOTs con un solo código.",
    gradient: "from-primary to-accent",
  },
  {
    image: "https://cdn.sanity.io/images/e2r40yh6/production-i18n/9bed752a12d4ffe6c6118c93f8ca36ad60a573d3-1072x1072.png?rect=0,108,1072,857&w=1224&h=979&auto=format&dpr=2",
    title: "Seguro en Stellar",
    description: "Todos los SPOTs son NFTs verificables en la blockchain de Stellar. Inmutables y auténticos.",
    gradient: "from-secondary to-accent",
  },
  {
    image: "https://cdn.sanity.io/images/e2r40yh6/production-i18n/944da59928e203fd98cb577e48a462bd28f27946-1100x1100.png?w=128&h=128&auto=format&dpr=2",
    title: "Rápido y Económico",
    description: "Aprovecha la velocidad y bajos costos de Stellar. Crea eventos sin preocuparte por tarifas altas.",
    gradient: "from-accent to-secondary",
  },
];

const Features = () => {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-anton uppercase text-foreground">
            DISTRIBUCIÓN FLEXIBLE
          </h2>
          <p className="text-xl font-lora italic text-muted-foreground max-w-2xl mx-auto">
            Múltiples métodos de distribución para adaptarse a cualquier tipo de evento
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-border/50 hover:shadow-card transition-all duration-300 hover:-translate-y-2 overflow-hidden group"
            >
              <CardHeader className="space-y-6 pb-4">
                {/* Imagen grande como hero de la card */}
                <div className="relative -mx-6 -mt-6 mb-4 h-48 bg-gradient-to-br from-background to-muted/50 flex items-center justify-center overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="relative w-32 h-32 object-contain drop-shadow-2xl group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                <CardTitle className="text-xl font-lora font-semibold text-center">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="pt-0">
                <CardDescription className="text-base font-inter text-center">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;