import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Eye, ChevronLeft, SlidersHorizontal } from "lucide-react";
import { getProductsByCategory, categories, Product } from "@/data/products";
import QuickViewDialog from "@/components/QuickViewDialog";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "name-asc", label: "Name: A to Z" },
];

const CategoryPage = () => {
  const { category } = useParams();
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [sortBy, setSortBy] = useState("featured");

  // Normalize category name
  const categoryName = category 
    ? category.charAt(0).toUpperCase() + category.slice(1).toLowerCase()
    : "";
  
  const products = getProductsByCategory(categoryName);

  // Sort products
  const sortedProducts = [...products].sort((a, b) => {
    switch (sortBy) {
      case "price-asc":
        return a.price - b.price;
      case "price-desc":
        return b.price - a.price;
      case "name-asc":
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  const categoryDescriptions: Record<string, string> = {
    Rings: "Discover our exquisite collection of rings, from stunning engagement pieces to elegant everyday bands. Each ring is crafted with precision and passion.",
    Necklaces: "Explore our curated selection of necklaces, featuring delicate chains, statement pendants, and timeless pearls that elevate any look.",
    Earrings: "From classic studs to elegant drops, our earring collection offers the perfect finishing touch for every occasion and style.",
    Bracelets: "Adorn your wrist with our beautifully crafted bracelets, from delicate chains to bold bangles that make a statement.",
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-20">
        {/* Breadcrumb */}
        <div className="container mx-auto px-6 lg:px-12 mb-8">
          <Link
            to="/"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to Home
          </Link>
        </div>

        {/* Category Header */}
        <section className="container mx-auto px-6 lg:px-12 mb-12">
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-block text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Collection
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-6">
              {categoryName}
            </h1>
            <p className="text-muted-foreground">
              {categoryDescriptions[categoryName] || "Explore our beautiful collection of fine jewelry."}
            </p>
          </div>
        </section>

        {/* Filters & Products */}
        <section className="container mx-auto px-6 lg:px-12">
          {/* Toolbar */}
          <div className="flex items-center justify-between mb-8 pb-6 border-b border-border">
            <p className="text-sm text-muted-foreground">
              {sortedProducts.length} {sortedProducts.length === 1 ? "product" : "products"}
            </p>
            
            <div className="flex items-center gap-4">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48 h-10 bg-background border-border">
                  <SlidersHorizontal className="h-4 w-4 mr-2 text-muted-foreground" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {sortOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Products Grid */}
          {sortedProducts.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
              {sortedProducts.map((product, index) => (
                <Card
                  key={product.id}
                  className="group border-0 bg-card shadow-none hover:shadow-elevated transition-all duration-500 rounded-xl overflow-hidden cursor-pointer animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
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
          ) : (
            <div className="text-center py-20">
              <p className="text-muted-foreground mb-4">No products found in this category.</p>
              <Button variant="luxury-outline" asChild>
                <Link to="/">Browse All Collections</Link>
              </Button>
            </div>
          )}
        </section>

        {/* Other Categories */}
        <section className="container mx-auto px-6 lg:px-12 mt-24">
          <h2 className="font-serif text-2xl font-medium text-foreground mb-8 text-center">
            Explore Other Categories
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.filter(c => c !== categoryName).map((cat) => (
              <Button 
                key={cat} 
                variant="luxury-outline" 
                asChild
                className="px-8"
              >
                <Link to={`/category/${cat.toLowerCase()}`}>{cat}</Link>
              </Button>
            ))}
          </div>
        </section>
      </main>

      <Footer />

      {/* Quick View Dialog */}
      <QuickViewDialog
        product={quickViewProduct}
        open={!!quickViewProduct}
        onOpenChange={(open) => !open && setQuickViewProduct(null)}
      />
    </div>
  );
};

export default CategoryPage;
