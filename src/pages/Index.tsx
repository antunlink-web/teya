import { Hero } from "@/components/Hero";
import { Solutions } from "@/components/Solutions";
import { Benefits } from "@/components/Benefits";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Solutions />
      <Benefits />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
