import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Services from "@/components/Services";
import Hours from "@/components/Hours";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Menu />
      <Services />
      <Hours />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;