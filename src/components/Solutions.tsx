import { Card } from "@/components/ui/card";
import { CreditCard, Monitor, TrendingUp, Shield, Zap, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";

export const Solutions = () => {
  const { t } = useTranslation();

  const solutions = [
    {
      icon: CreditCard,
      title: t('solutions.terminals.title'),
      description: t('solutions.terminals.description'),
    },
    {
      icon: Monitor,
      title: t('solutions.online.title'),
      description: t('solutions.online.description'),
    },
    {
      icon: TrendingUp,
      title: t('solutions.insights.title'),
      description: t('solutions.insights.description'),
    },
    {
      icon: Shield,
      title: t('solutions.security.title'),
      description: t('solutions.security.description'),
    },
    {
      icon: Zap,
      title: t('solutions.transactions.title'),
      description: t('solutions.transactions.description'),
    },
    {
      icon: Globe,
      title: t('solutions.currency.title'),
      description: t('solutions.currency.description'),
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            {t('solutions.badge')}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t('solutions.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('solutions.subtitle')}
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