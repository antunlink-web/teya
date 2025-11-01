import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export const Contact = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            Kontaktirajte Nas
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Započnite Svoju Digitalnu Transformaciju
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Naš tim je spreman odgovoriti na sva vaša pitanja i pomoći vam odabrati najbolje rješenje
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="p-8 border-2 hover:border-primary/50 transition-all duration-300 text-center group cursor-pointer">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Telefon</h3>
            <a href="tel:+385XXXXXXXX" className="text-primary hover:underline text-lg">
              +385 XX XXX XXXX
            </a>
          </Card>
          
          <Card className="p-8 border-2 hover:border-primary/50 transition-all duration-300 text-center group cursor-pointer">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Email</h3>
            <a href="mailto:info@example.hr" className="text-primary hover:underline text-lg">
              info@example.hr
            </a>
          </Card>
          
          <Card className="p-8 border-2 hover:border-primary/50 transition-all duration-300 text-center group cursor-pointer">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Adresa</h3>
            <p className="text-muted-foreground text-lg">Zagreb, Hrvatska</p>
          </Card>
        </div>
        
        <Card className="max-w-3xl mx-auto mt-12 p-8 md:p-12 border-2">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Ime i Prezime</label>
                <Input placeholder="Vaše ime" className="h-12" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
                <Input type="email" placeholder="vas@email.hr" className="h-12" />
              </div>
            </div>
            
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Telefon</label>
              <Input placeholder="+385" className="h-12" />
            </div>
            
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Poruka</label>
              <Textarea 
                placeholder="Kako vam možemo pomoći?" 
                className="min-h-[150px] resize-none"
              />
            </div>
            
            <Button 
              type="submit" 
              size="lg" 
              className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity text-lg h-14 group"
            >
              Pošaljite Upit
              <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
};
