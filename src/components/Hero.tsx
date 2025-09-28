import { Button } from "@/components/ui/button";
import { ArrowRight, Mountain, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-30"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Mountain className="h-8 w-8 text-primary" />
            <MapPin className="h-6 w-6 text-secondary" />
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground">
            Discover the
            <span className="block text-primary">Magic of Nepal</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-xl md:text-2xl text-muted-foreground leading-relaxed">
            Experience breathtaking Himalayan adventures, rich cultural heritage, and unforgettable journeys with Mahalaxmi Tours and Travel
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3">
              Explore Tour Packages
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3">
              Plan Custom Trip
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 text-center">
            <div className="p-6 rounded-lg bg-background/50 backdrop-blur border">
              <div className="text-2xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Happy Travelers</div>
            </div>
            <div className="p-6 rounded-lg bg-background/50 backdrop-blur border">
              <div className="text-2xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground">Tour Destinations</div>
            </div>
            <div className="p-6 rounded-lg bg-background/50 backdrop-blur border">
              <div className="text-2xl font-bold text-primary">15+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;