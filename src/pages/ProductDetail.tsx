import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Minus, Plus, ShoppingBag, Heart, ChevronLeft, Truck, Shield, RefreshCw } from "lucide-react";
import { getProductById, getRelatedProducts, Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { toast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ProductDetail = () => {
  const { id } = useParams();
  const product = getProductById(Number(id));
  const relatedProducts = getRelatedProducts(Number(id));
  
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const { addItem } = useCart();

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-3xl mb-4">Product Not Found</h1>
          <Link to="/" className="text-primary hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize && product.sizes.length > 0) {
      toast({
        title: "Please select a size",
        description: "Choose a size before adding to cart.",
        variant: "destructive",
      });
      return;
    }

    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      priceFormatted: product.priceFormatted,
      image: product.image,
      category: product.category,
      size: selectedSize || undefined,
    }, quantity);

    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
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
            Back to Collection
          </Link>
        </div>

        {/* Product Section */}
        <section className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Image Gallery */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden bg-card">
                <AspectRatio ratio={4 / 5}>
                  <img
                    src={product.images[selectedImage]}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </AspectRatio>
                {product.badge && (
                  <Badge className="absolute top-4 left-4 bg-foreground text-background text-[10px] tracking-wider uppercase font-medium px-3 py-1 rounded-full">
                    {product.badge}
                  </Badge>
                )}
              </div>

              {/* Thumbnails */}
              <div className="flex gap-3">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                      selectedImage === index ? "border-primary" : "border-transparent"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="lg:py-8">
              <div className="space-y-6">
                <div>
                  <span className="text-xs text-muted-foreground tracking-wide uppercase">
                    {product.category}
                  </span>
                  <h1 className="font-serif text-3xl lg:text-4xl font-medium text-foreground mt-2">
                    {product.name}
                  </h1>
                  <p className="text-2xl font-medium text-foreground mt-4">
                    {product.priceFormatted}
                  </p>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {product.description}
                </p>

                <Separator />

                {/* Size Selection */}
                {product.sizes.length > 0 && (
                  <div>
                    <label className="text-sm font-medium text-foreground mb-3 block">
                      Size
                    </label>
                    <Select value={selectedSize} onValueChange={setSelectedSize}>
                      <SelectTrigger className="w-full h-12 bg-background border-border">
                        <SelectValue placeholder="Select size" />
                      </SelectTrigger>
                      <SelectContent>
                        {product.sizes.map((size) => (
                          <SelectItem key={size} value={size}>
                            {size}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}

                {/* Quantity */}
                <div>
                  <label className="text-sm font-medium text-foreground mb-3 block">
                    Quantity
                  </label>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="h-12 w-12 rounded-md border border-border flex items-center justify-center hover:bg-muted transition-colors"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="w-12 text-center text-lg font-medium">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="h-12 w-12 rounded-md border border-border flex items-center justify-center hover:bg-muted transition-colors"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-4">
                  <Button
                    variant="hero"
                    size="xl"
                    className="flex-1"
                    onClick={handleAddToCart}
                  >
                    <ShoppingBag className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-14 w-14 shrink-0"
                  >
                    <Heart className="h-5 w-5" />
                  </Button>
                </div>

                {/* Features */}
                <div className="grid grid-cols-3 gap-4 pt-4">
                  <div className="text-center p-4 rounded-lg bg-card">
                    <Truck className="h-5 w-5 mx-auto mb-2 text-primary" />
                    <p className="text-xs text-muted-foreground">Free Shipping</p>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-card">
                    <Shield className="h-5 w-5 mx-auto mb-2 text-primary" />
                    <p className="text-xs text-muted-foreground">2 Year Warranty</p>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-card">
                    <RefreshCw className="h-5 w-5 mx-auto mb-2 text-primary" />
                    <p className="text-xs text-muted-foreground">Easy Returns</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Details Tabs */}
          <div className="mt-20">
            <Tabs defaultValue="details" className="w-full">
              <TabsList className="w-full justify-start border-b border-border rounded-none bg-transparent h-auto p-0 mb-8">
                <TabsTrigger
                  value="details"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-3 font-medium"
                >
                  Details
                </TabsTrigger>
                <TabsTrigger
                  value="materials"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-3 font-medium"
                >
                  Materials
                </TabsTrigger>
                <TabsTrigger
                  value="care"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-3 font-medium"
                >
                  Care
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="details" className="mt-0">
                <ul className="space-y-3 max-w-xl">
                  {product.details.map((detail, index) => (
                    <li key={index} className="flex items-start gap-3 text-muted-foreground">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </TabsContent>
              
              <TabsContent value="materials" className="mt-0">
                <p className="text-muted-foreground max-w-xl">{product.materials}</p>
              </TabsContent>
              
              <TabsContent value="care" className="mt-0">
                <p className="text-muted-foreground max-w-xl">{product.care}</p>
              </TabsContent>
            </Tabs>
          </div>

          {/* Related Products */}
          <div className="mt-24">
            <h2 className="font-serif text-3xl font-medium text-foreground mb-10">
              You May Also Like
            </h2>
            
            <Carousel opts={{ align: "start" }} className="w-full">
              <CarouselContent className="-ml-4">
                {relatedProducts.map((relatedProduct) => (
                  <CarouselItem key={relatedProduct.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <Link to={`/product/${relatedProduct.id}`}>
                      <Card className="border-0 bg-card shadow-none hover:shadow-elevated transition-all duration-500 rounded-xl overflow-hidden cursor-pointer group">
                        <CardContent className="p-0">
                          <div className="hover-zoom relative">
                            <AspectRatio ratio={4 / 5}>
                              <img
                                src={relatedProduct.image}
                                alt={relatedProduct.name}
                                className="w-full h-full object-cover"
                              />
                            </AspectRatio>
                          </div>
                          <div className="p-5 space-y-2">
                            <span className="text-xs text-muted-foreground tracking-wide uppercase">
                              {relatedProduct.category}
                            </span>
                            <h3 className="font-serif text-lg font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                              {relatedProduct.name}
                            </h3>
                            <p className="text-foreground font-medium">
                              {relatedProduct.priceFormatted}
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex -left-4" />
              <CarouselNext className="hidden md:flex -right-4" />
            </Carousel>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
