import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";

export const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);
    setEmail("");
    
    toast({
      title: "Welcome to AURUM",
      description: "Thank you for subscribing to our newsletter.",
    });
  };

  return (
    <section className="py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-2xl mx-auto text-center">
          <span className="inline-block text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Stay Connected
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-6">
            Join Our World of Elegance
          </h2>
          <p className="text-muted-foreground mb-10 max-w-md mx-auto">
            Subscribe to receive exclusive offers, early access to new collections, and curated style inspiration.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 px-5 bg-background border-border focus:border-primary text-foreground placeholder:text-muted-foreground"
              required
            />
            <Button
              type="submit"
              variant="luxury"
              size="lg"
              className="h-12 px-8"
              disabled={isLoading}
            >
              {isLoading ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>

          <p className="text-xs text-muted-foreground mt-6">
            By subscribing, you agree to our Privacy Policy and consent to receive updates.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
