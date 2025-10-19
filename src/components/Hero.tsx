import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-waterfront.jpg";

const Hero = () => {
  const scrollToMenu = () => {
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-fade-in"
        style={{ 
          backgroundImage: `url(${heroImage})`,
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards' }}>
          Welcome to <span className="text-gradient-gold">Nayomi's Waterfront</span>
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in-up font-light" style={{ animationDelay: '0.4s', opacity: 0, animationFillMode: 'forwards' }}>
          Where taste meets tranquility — enjoy the finest Sri Lankan flavors by the water
        </p>
        <Button 
          onClick={scrollToMenu}
          size="lg"
          className="gradient-gold text-primary font-semibold hover:shadow-gold transition-smooth animate-zoom-in text-lg px-8 py-6"
          style={{ animationDelay: '0.6s', opacity: 0, animationFillMode: 'forwards' }}
        >
          View Menu
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white/70" />
      </div>
    </section>
  );
};

export default Hero;