import { Hero } from '@/components/hero';
import { FeaturedProducts } from '@/components/featured-products';
import { HowItWorks } from '@/components/how-it-works';
import { Navbar } from '@/components/navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        <Hero />
        <FeaturedProducts />
        <HowItWorks />
      </main>
    </>
  );
}