import { Card } from "@/components/ui/card";
import { CreditCard, Smartphone, TrendingUp, Shield, Zap, Globe } from "lucide-react";

const solutions = [
  {
    icon: CreditCard,
    title: "Platni Terminali",
    description: "Moderna POS rješenja za bezgotovinska plaćanja. Prihvatite kartice, mobilna plaćanja i više.",
  },
  {
    icon: Smartphone,
    title: "Mobilna Plaćanja",
    description: "Prihvaćajte plaćanja bilo gdje s Teya Tap aplikacijom na vašem mobilnom uređaju.",
  },
  {
    icon: TrendingUp,
    title: "Poslovni Uvidi",
    description: "Detaljne analize i izvještaji za bolje razumijevanje vašeg poslovanja.",
  },
  {
    icon: Shield,
    title: "Sigurnost",
    description: "Najviša razina zaštite podataka i transakcija prema PCI DSS standardima.",
  },
  {
    icon: Zap,
    title: "Brze Transakcije",
    description: "Instant potvrde i brzo procesiranje plaćanja za optimalno korisničko iskustvo.",
  },
  {
    icon: Globe,
    title: "Viševalutna Podrška",
    description: "Prihvaćajte plaćanja u različitim valutama i proširite svoj doseg.",
  },
];

export const Solutions = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            Naša Rješenja
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Sve Što Vam Treba za Uspjeh
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Cjelovita Teya platforma dizajnirana za rast vašeg poslovanja
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <Card 
              key={index} 
              className="p-8 border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group cursor-pointer bg-gradient-to-br from-card to-muted/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <solution.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">
                {solution.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {solution.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
