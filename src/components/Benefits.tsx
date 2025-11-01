import { Check } from "lucide-react";

const benefits = [
  "Bez ugovorne obveze!",
  "Bez mjesečne naknade!",
  "Najniža provizija po transakciji",
  "Napojnice",
  "Ubrzajte proces kupnje",
  "Novac sjeda na Vaš račun idući radni dan",
  "Pay by link - slanje poveznica za plaćanje",
  "Analitika u stvarnom vremenu",
  "Lokalna podrška",
];

export const Benefits = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 via-secondary/5 to-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
              Zašto Odabrati Nas
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Dizajnirano za biznis
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Više prodaje, manje gnjavaže.
            </p>
            
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-4 group"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-foreground text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary via-primary-glow to-secondary p-1">
              <div className="w-full h-full rounded-3xl bg-background flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl md:text-8xl font-bold bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent mb-4">
                    100%
                  </div>
                  <div className="text-2xl md:text-3xl font-semibold text-foreground mb-2">
                    Posvećenost
                  </div>
                  <div className="text-muted-foreground text-lg">
                    Vašem Uspjehu
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary rounded-2xl opacity-20 blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary rounded-2xl opacity-20 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};
