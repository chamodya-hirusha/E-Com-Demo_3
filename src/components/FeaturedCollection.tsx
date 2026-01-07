import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Eye } from "lucide-react";
import { getFeaturedProducts, Product } from "@/data/products";
import QuickViewDialog from "@/components/QuickViewDialog";
import { Link } from "react-router-dom";

export const FeaturedCollection = () => {
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const products = getFeaturedProducts(4);

  return (
    <section id="collections" className="py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <span className="inline-block text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Curated Selection
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-6">
            Featured Collection
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Explore our handpicked selection of exquisite pieces, crafted with the finest materials and unparalleled attention to detail.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <Card
              key={product.id}
              className="group border-0 bg-card shadow-none hover:shadow-elevated transition-all duration-500 rounded-xl overflow-hidden cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                {/* Image Container */}
                <div className="hover-zoom relative">
                  <Link to={`/product/${product.id}`}>
                    <AspectRatio ratio={4 / 5}>
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </AspectRatio>
                  </Link>
                  
                  {/* Badge */}
                  {product.badge && (
                    <Badge 
                      className="absolute top-4 left-4 bg-foreground text-background text-[10px] tracking-wider uppercase font-medium px-3 py-1 rounded-full"
                    >
                      {product.badge}
                    </Badge>
                  )}

                  {/* Quick View Button */}
                  <button
                    onClick={() => setQuickViewProduct(product)}
                    className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 bg-background/90 backdrop-blur-sm text-foreground text-xs font-medium tracking-wide uppercase px-4 py-2.5 rounded-full flex items-center gap-2 hover:bg-background shadow-soft"
                  >
                    <Eye className="h-3.5 w-3.5" />
                    Quick View
                  </button>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-300 pointer-events-none" />
                </div>

                {/* Product Info */}
                <Link to={`/product/${product.id}`} className="block p-5 space-y-2">
                  <span className="text-xs text-muted-foreground tracking-wide uppercase">
                    {product.category}
                  </span>
                  <h3 className="font-serif text-lg font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="text-foreground font-medium">
                    {product.priceFormatted}
                  </p>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Category Links */}
        <div className="flex flex-wrap justify-center gap-4 mt-16">
          <Link
            to="/category/rings"
            className="underline-animation inline-flex items-center gap-2 text-sm font-medium tracking-wide text-foreground hover:text-primary transition-colors duration-300"
          >
            Shop Rings →
          </Link>
          <Link
            to="/category/necklaces"
            className="underline-animation inline-flex items-center gap-2 text-sm font-medium tracking-wide text-foreground hover:text-primary transition-colors duration-300"
          >
            Shop Necklaces →
          </Link>
          <Link
            to="/category/earrings"
            className="underline-animation inline-flex items-center gap-2 text-sm font-medium tracking-wide text-foreground hover:text-primary transition-colors duration-300"
          >
            Shop Earrings →
          </Link>
          <Link
            to="/category/bracelets"
            className="underline-animation inline-flex items-center gap-2 text-sm font-medium tracking-wide text-foreground hover:text-primary transition-colors duration-300"
          >
            Shop Bracelets →
          </Link>
        </div>
      </div>

      {/* Quick View Dialog */}
      <QuickViewDialog
        product={quickViewProduct}
        open={!!quickViewProduct}
        onOpenChange={(open) => !open && setQuickViewProduct(null)}
      />
    </section>
  );
};

export default FeaturedCollection;
