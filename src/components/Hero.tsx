import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary-glow to-secondary">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-8 animate-fade-in">
            <CheckCircle2 className="w-5 h-5 text-white" />
            <span className="text-white font-medium">Ekskluzivni Teya Partner</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in-up">
            Transformirajte Svoje Poslovanje
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Vodimo vas kroz digitalnu transformaciju s Teya plaćanjima. Moderna rješenja za moderne poduzetnike.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300 group text-lg px-8"
            >
              Započnite Danas
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-primary transition-all duration-300 text-lg px-8"
            >
              Saznajte Više
            </Button>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-white animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <div className="backdrop-blur-sm bg-white/10 rounded-2xl p-6 border border-white/20">
              <div className="text-4xl font-bold mb-2">99.9%</div>
              <div className="text-white/80">Pouzdanost Sustava</div>
            </div>
            <div className="backdrop-blur-sm bg-white/10 rounded-2xl p-6 border border-white/20">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-white/80">Podrška Korisnicima</div>
            </div>
            <div className="backdrop-blur-sm bg-white/10 rounded-2xl p-6 border border-white/20">
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-white/80">Zadovoljnih Klijenata</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
