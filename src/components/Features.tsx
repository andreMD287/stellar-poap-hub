import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { QrCode, Link2, MapPin, KeyRound, Shield, Zap } from "lucide-react";

const features = [
  {
    icon: QrCode,
    title: "QR Codes Únicos",
    description: "Genera códigos QR únicos para cada asistente. Escanea y reclama tu SPOT al instante.",
    gradient: "from-primary to-primary-glow",
  },
  {
    icon: Link2,
    title: "Links con Expiración",
    description: "Comparte links únicos con validez de hasta 1 semana. Control total sobre la distribución.",
    gradient: "from-secondary to-primary",
  },
  {
    icon: MapPin,
    title: "Geolocalización",
    description: "Reclama SPOTs basados en tu ubicación. Perfecto para eventos presenciales con radio personalizado.",
    gradient: "from-accent to-primary",
  },
  {
    icon: KeyRound,
    title: "Códigos Compartidos",
    description: "Códigos especiales para grupos. Distribuye múltiples SPOTs con un solo código.",
    gradient: "from-primary to-accent",
  },
  {
    icon: Shield,
    title: "Seguro en Stellar",
    description: "Todos los SPOTs son NFTs verificables en la blockchain de Stellar. Inmutables y auténticos.",
    gradient: "from-secondary to-accent",
  },
  {
    icon: Zap,
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-border/50 hover:shadow-card transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl font-lora font-semibold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base font-inter">
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
