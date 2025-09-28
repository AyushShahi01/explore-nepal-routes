import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mountain, MapPin } from "lucide-react";
import everestImage from "@/assets/nepal-everest.jpg";
import annapurnaImage from "@/assets/nepal-annapurna.jpg";
import kathmanduImage from "@/assets/nepal-kathmandu.jpg";
import pokharaImage from "@/assets/nepal-pokhara.jpg";

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const images = [
    { src: everestImage, alt: "Mount Everest, Nepal" },
    { src: annapurnaImage, alt: "Annapurna Range, Nepal" },
    { src: kathmanduImage, alt: "Kathmandu Valley, Nepal" },
    { src: pokharaImage, alt: "Pokhara Lake, Nepal" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % images.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images Carousel */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${image.src})` }}
        />
      ))}
      
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="space-y-8">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Mountain className="h-8 w-8 text-white" />
            <MapPin className="h-6 w-6 text-white/80" />
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white animate-fade-in">
            Discover the
            <span className="block text-white/90">Magic of Nepal</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-xl md:text-2xl text-white/90 leading-relaxed animate-fade-in">
            Experience breathtaking Himalayan adventures, rich cultural heritage, and unforgettable journeys with Mahalaxmi Tours and Travel
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8 animate-fade-in">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 hover-scale">
              Explore Tour Packages
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3 bg-white/10 backdrop-blur border-white/30 text-white hover:bg-white/20">
              Plan Custom Trip
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 text-center">
            <div className="p-6 rounded-lg bg-white/10 backdrop-blur border border-white/20 hover-scale">
              <div className="text-2xl font-bold text-white">500+</div>
              <div className="text-sm text-white/80">Happy Travelers</div>
            </div>
            <div className="p-6 rounded-lg bg-white/10 backdrop-blur border border-white/20 hover-scale">
              <div className="text-2xl font-bold text-white">50+</div>
              <div className="text-sm text-white/80">Tour Destinations</div>
            </div>
            <div className="p-6 rounded-lg bg-white/10 backdrop-blur border border-white/20 hover-scale">
              <div className="text-2xl font-bold text-white">15+</div>
              <div className="text-sm text-white/80">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Image indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex 
                ? 'bg-white' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;