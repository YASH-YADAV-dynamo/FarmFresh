'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import { Product } from '@/types';
import { useToast } from '@/components/ui/use-toast';

export function FeaturedProducts() {
  const { toast } = useToast();
  const [products, setProducts] = useState<Product[]>([
    {
      id: '1',
      name: 'Fresh Organic Tomatoes',
      description: 'Locally grown organic tomatoes',
      price: 3.99,
      stock: 50,
      unit: 'lb',
      image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea',
      farmerId: '1',
      farmer: {
        name: 'Green Valley Farm',
        location: 'Springfield, IL'
      },
      category: 'vegetables',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id: '2',
      name: 'Local Honey',
      description: 'Pure, raw honey from local bees',
      price: 8.99,
      stock: 30,
      unit: 'jar',
      image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38',
      farmerId: '2',
      farmer: {
        name: 'Sunny Meadows Apiary',
        location: 'Riverside, CA'
      },
      category: 'honey',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id: '3',
      name: 'Seasonal Berry Mix',
      description: 'Fresh mixed berries',
      price: 6.99,
      stock: 40,
      unit: 'basket',
      image: 'https://images.unsplash.com/photo-1596591606975-97ee5cef3a1e',
      farmerId: '3',
      farmer: {
        name: 'Berry Good Farm',
        location: 'Portland, OR'
      },
      category: 'fruits',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
  ]);

  const handleAddToCart = (product: Product) => {
    toast({
      title: "Added to Cart",
      description: `${product.name} has been added to your cart.`
    });
  };

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden">
              <CardHeader className="p-0">
                <div className="relative h-48">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="mb-2">{product.name}</CardTitle>
                <p className="text-sm text-muted-foreground mb-2">
                  by {product.farmer.name} • {product.farmer.location}
                </p>
                <p className="text-sm text-muted-foreground mb-4">{product.description}</p>
                <p className="text-lg font-bold">${product.price.toFixed(2)}/{product.unit}</p>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full" 
                  onClick={() => handleAddToCart(product)}
                  disabled={product.stock === 0}
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  {product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}