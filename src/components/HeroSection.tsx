import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-jewelry.jpg";
import heroWatch from "@/assets/hero-watch.jpg";
import heroPearls from "@/assets/hero-pearls.jpg";

const heroSlides = [
  {
    image: heroImage,
    tagline: "New Collection 2025",
    title: "Timeless",
    titleAccent: "Elegance",
    description: "Discover our curated collection of handcrafted jewelry. Each piece tells a story of artistry, passion, and enduring beauty.",
  },
  {
    image: heroWatch,
    tagline: "Luxury Timepieces",
    title: "Classic",
    titleAccent: "Precision",
    description: "Exquisite watches that blend heritage craftsmanship with contemporary design. A statement of refined taste.",
  },
  {
    image: heroPearls,
    tagline: "Pearl Collection",
    title: "Natural",
    titleAccent: "Beauty",
    description: "Lustrous pearls sourced from the finest waters, transformed into stunning pieces that radiate sophistication.",
  },
];

export const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const slide = heroSlides[currentSlide];

  return (
    <section className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8 lg:pr-8">
            <div className="space-y-6">
              <span 
                key={`tagline-${currentSlide}`}
                className="inline-block text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground animate-fade-in"
              >
                {slide.tagline}
              </span>
              <h1 
                key={`title-${currentSlide}`}
                className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.1] tracking-tight text-foreground animate-fade-in"
              >
                {slide.title}
                <br />
                <span className="text-gold-gradient">{slide.titleAccent}</span>
              </h1>
              <p 
                key={`desc-${currentSlide}`}
                className="text-lg text-muted-foreground max-w-md leading-relaxed animate-fade-in"
              >
                {slide.description}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
              <Button variant="hero" size="lg">
                Explore Collection
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="hero-outline" size="lg">
                Our Story
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-12 pt-8 border-t border-border">
              <div>
                <p className="font-serif text-3xl font-medium text-foreground">15+</p>
                <p className="text-sm text-muted-foreground mt-1">Years of Craft</p>
              </div>
              <div>
                <p className="font-serif text-3xl font-medium text-foreground">500+</p>
                <p className="text-sm text-muted-foreground mt-1">Unique Designs</p>
              </div>
              <div>
                <p className="font-serif text-3xl font-medium text-foreground">50k+</p>
                <p className="text-sm text-muted-foreground mt-1">Happy Clients</p>
              </div>
            </div>
          </div>

          {/* Right Image Carousel */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl shadow-elevated relative">
              {heroSlides.map((s, index) => (
                <img
                  key={index}
                  src={s.image}
                  alt={`${s.title} ${s.titleAccent}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                    index === currentSlide ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border border-primary/30 rounded-2xl -z-10" />
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/10 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
