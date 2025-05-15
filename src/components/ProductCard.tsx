import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/config/api";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow">
      <div className="h-48 overflow-hidden">
        <img 
          src={product.thumbnail} 
          alt={product.title}
          className="w-full h-full object-cover"
        />
      </div>
      
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">{product.title}</CardTitle>
          <Badge variant="outline" className="bg-primary/10 text-primary">
            {product.category}
          </Badge>
        </div>
        <CardDescription className="line-clamp-2">
          {product.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="pb-2 flex-grow">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span className="font-medium">{product.brand}</span>
          <span>•</span>
          <span>In stock: {product.stock}</span>
        </div>
      </CardContent>
      
      <CardFooter className="flex justify-between items-center pt-2">
        <div className="flex flex-col">
          <span className="text-lg font-bold">${product.price.toFixed(2)}</span>
          {product.discountPercentage > 0 && (
            <span className="text-xs text-green-600">-{product.discountPercentage}% off</span>
          )}
        </div>
        <div className="flex items-center gap-1 text-amber-500">
          <span className="text-sm font-medium">★ {product.rating.toFixed(1)}</span>
        </div>
      </CardFooter>
    </Card>
  );
}

export default ProductCard;