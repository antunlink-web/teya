import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Ime mora imati najmanje 2 znaka").max(100, "Ime može imati najviše 100 znakova"),
  email: z.string().trim().email("Unesite valjanu email adresu").max(255, "Email može imati najviše 255 znakova"),
  phone: z.string().trim().min(6, "Unesite valjan telefonski broj").max(20, "Telefonski broj može imati najviše 20 znakova"),
  message: z.string().trim().min(10, "Poruka mora imati najmanje 10 znakova").max(1000, "Poruka može imati najviše 1000 znakova"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    
    try {
      // Validate form data
      const validatedData = contactSchema.parse(formData);
      
      setIsSubmitting(true);
      
      // Web3Forms API endpoint
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "YOUR_WEB3FORMS_ACCESS_KEY", // Replace with your actual Web3Forms access key
          name: validatedData.name,
          email: validatedData.email,
          phone: validatedData.phone,
          message: validatedData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Uspešno poslato!",
          description: "Primili smo vašu poruku i odgovorićemo uskoro.",
        });
        
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        throw new Error("Form submission failed");
      }
      
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
        error.errors.forEach(err => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as keyof ContactFormData] = err.message;
          }
        });
        setErrors(fieldErrors);
        
        toast({
          title: "Greška u formi",
          description: "Molimo provjerite unesene podatke i pokušajte ponovno.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Greška",
          description: "Došlo je do greške prilikom slanja. Molimo pokušajte kasnije.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

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
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="text-sm font-medium text-foreground mb-2 block">
                  Ime i Prezime *
                </label>
                <Input 
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Vaše ime" 
                  className={`h-12 ${errors.name ? 'border-destructive' : ''}`}
                />
                {errors.name && (
                  <p className="text-sm text-destructive mt-1">{errors.name}</p>
                )}
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium text-foreground mb-2 block">
                  Email *
                </label>
                <Input 
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="vas@email.hr" 
                  className={`h-12 ${errors.email ? 'border-destructive' : ''}`}
                />
                {errors.email && (
                  <p className="text-sm text-destructive mt-1">{errors.email}</p>
                )}
              </div>
            </div>
            
            <div>
              <label htmlFor="phone" className="text-sm font-medium text-foreground mb-2 block">
                Telefon *
              </label>
              <Input 
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+385" 
                className={`h-12 ${errors.phone ? 'border-destructive' : ''}`}
              />
              {errors.phone && (
                <p className="text-sm text-destructive mt-1">{errors.phone}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="message" className="text-sm font-medium text-foreground mb-2 block">
                Poruka *
              </label>
              <Textarea 
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Kako vam možemo pomoći?" 
                className={`min-h-[150px] resize-none ${errors.message ? 'border-destructive' : ''}`}
              />
              {errors.message && (
                <p className="text-sm text-destructive mt-1">{errors.message}</p>
              )}
            </div>
            
            <Button 
              type="submit" 
              size="lg"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity text-lg h-14 group disabled:opacity-50"
            >
              {isSubmitting ? "Šalje se..." : "Pošaljite Upit"}
              <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
};
