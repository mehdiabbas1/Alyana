import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Package, Leaf, CheckCircle } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';

const productsData = [
  {
    id: 1,
    name: 'White Platinum Basmati',
    description: 'Exquisite long-grain aromatic rice, aged to perfection for a fluffy texture. The crown jewel of our collection.',
    features: ['Aged Minimum 18 Months', 'Non-GMO', 'Exceptional Aroma'],
    image: 'https://images.unsplash.com/photo-1506784365847-bbad939e9335?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 2,
    name: 'Premium Basmati Rice',
    description: 'Soft, fragrant rice with a subtle nutty flavor. Perfect for a variety of international and traditional dishes.',
    features: ['Aged Minimum 12 Months', 'Delicate Flavor', 'Sustainably Sourced'],
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 3,
    name: 'Golden Sella Basmati',
    description: 'Parboiled basmati rice that remains separate and fluffy after cooking. Known for its golden hue and rich taste.',
    features: ['Extra Long Grain', 'Rich in Nutrients', 'Easy to Cook'],
    image: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=600&q=80',
  },
];

function RiceGrain3D() {
  return (
    <mesh scale={[0.3, 0.8, 0.3]}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="#fffbe6" roughness={0.3} metalness={0.3} />
    </mesh>
  );
}

const Products = () => {
  const { toast } = useToast();
  
  const handleUnimplemented = () => {
    toast({
      title: "🚧 Feature Not Implemented",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
      variant: "default",
      duration: 5000,
    });
  };

  const cardVariants = {
    initial: { opacity: 0, y: 50, scale: 0.9 },
    whileInView: { opacity: 1, y: 0, scale: 1 },
    viewport: { once: true, amount: 0.2 }
  };

  return (
    <section id="products" className="py-20 bg-background text-foreground relative overflow-hidden border-t border-border">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground text-center">Our Premium Rice Selection</h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 text-center">
          Discover our range of premium Basmati rice, including the renowned White Platinum Basmati Rice, known for its aroma, length, and purity.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {productsData.map((product) => (
            <div key={product.id} className="bg-card rounded-2xl shadow-lg border border-border p-6 flex flex-col items-center">
              <img src={product.image} alt={product.name} className="w-32 h-32 object-cover rounded-full mb-4 border-4 border-yellow-300 shadow" />
              <h3 className="text-2xl font-bold mb-2 text-foreground">{product.name}</h3>
              <p className="text-md text-muted-foreground mb-2 text-center">{product.description}</p>
              <ul className="text-muted-foreground text-sm mb-2 list-disc list-inside">
                {product.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
