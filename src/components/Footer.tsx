import { Separator } from "@/components/ui/separator";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
              PrimeLink d.o.o.
            </h3>
            <p className="text-muted-foreground mb-4 max-w-md">
              Ekskluzivni partner za Teya plaćanja u Hrvatskoj. Pomažemo poduzećima da ostvare svoj puni potencijal kroz moderna platna rješenja.
            </p>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} PrimeLink d.o.o. Sva prava pridržana.</p>
          <p>Izgrađeno s ❤️ u Hrvatskoj</p>
        </div>
      </div>
    </footer>
  );
};
