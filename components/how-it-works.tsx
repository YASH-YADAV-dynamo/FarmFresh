import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Leaf, ShoppingBasket, Truck } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      icon: <ShoppingBasket className="h-12 w-12 text-primary" />,
      title: 'Browse & Select',
      description: 'Explore fresh produce from local farmers and add items to your cart.'
    },
    {
      icon: <Truck className="h-12 w-12 text-primary" />,
      title: 'Quick Delivery',
      description: 'Get your fresh produce delivered directly to your doorstep.'
    },
    {
      icon: <Leaf className="h-12 w-12 text-primary" />,
      title: 'Support Local',
      description: 'Help local farmers thrive while enjoying the freshest produce.'
    }
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  {step.icon}
                </div>
                <CardTitle>{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}