import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Minus, Plus, ShoppingBag, Heart, X } from "lucide-react";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { toast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

interface QuickViewDialogProps {
  product: Product | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const QuickViewDialog = ({ product, open, onOpenChange }: QuickViewDialogProps) => {
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();

  if (!product) return null;

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

    setSelectedSize("");
    setQuantity(1);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl p-0 overflow-hidden bg-background">
        <button
          onClick={() => onOpenChange(false)}
          className="absolute right-4 top-4 z-10 h-8 w-8 rounded-full bg-background/80 backdrop-blur flex items-center justify-center hover:bg-background transition-colors"
        >
          <X className="h-4 w-4" />
        </button>
        
        <div className="grid md:grid-cols-2 gap-0">
          {/* Image */}
          <div className="relative bg-card">
            <AspectRatio ratio={4 / 5}>
              <img
                src={product.image}
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

          {/* Details */}
          <div className="p-8 lg:p-10 flex flex-col">
            <DialogHeader className="text-left space-y-2 mb-6">
              <span className="text-xs text-muted-foreground tracking-wide uppercase">
                {product.category}
              </span>
              <DialogTitle className="font-serif text-2xl lg:text-3xl font-medium text-foreground">
                {product.name}
              </DialogTitle>
              <p className="text-2xl font-medium text-foreground">
                {product.priceFormatted}
              </p>
            </DialogHeader>

            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Size Selection */}
            {product.sizes.length > 0 && (
              <div className="mb-6">
                <label className="text-sm font-medium text-foreground mb-2 block">
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
            <div className="mb-6">
              <label className="text-sm font-medium text-foreground mb-2 block">
                Quantity
              </label>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="h-10 w-10 rounded-md border border-border flex items-center justify-center hover:bg-muted transition-colors"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="h-10 w-10 rounded-md border border-border flex items-center justify-center hover:bg-muted transition-colors"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3 mt-auto">
              <Button
                variant="luxury"
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

            {/* View Full Details */}
            <Link
              to={`/product/${product.id}`}
              onClick={() => onOpenChange(false)}
              className="mt-4 text-sm text-center underline-animation text-muted-foreground hover:text-foreground transition-colors"
            >
              View full details →
            </Link>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default QuickViewDialog;
