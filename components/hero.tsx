import { Button } from '@/components/ui/button';
import { Leaf, ShoppingBasket } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1464226184884-fa280b87c399"
          alt="Fresh vegetables background"
          fill
          className="object-cover brightness-50"
          priority
          sizes="100vw"
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6">
            Fresh from Local Farmers to Your Table
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Connect directly with local farmers and enjoy fresh, seasonal produce delivered to your doorstep.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <Link href="/marketplace">
                <ShoppingBasket className="mr-2 h-5 w-5" />
                Shop Now
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10" asChild>
              <Link href="/farmers/register">
                <Leaf className="mr-2 h-5 w-5" />
                Join as Farmer
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}