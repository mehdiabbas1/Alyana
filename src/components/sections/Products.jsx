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
    description: 'White Platinum Basmati is an extra-long grain, aged Basmati rice known for its feathery, perfectly separated kernels, mouthwatering popcorn aroma, and tender texture. Sourced from the Himalayan foothills, it is ideal for curries, pilafs, and biryanis.',
    features: [
      'Extra-long, feathery grains',
      'Aged for superior aroma',
      'Naturally gluten-free and non-GMO',
      'Perfect for curries, pilafs, and biryanis'
    ],
    image: 'https://d121ck0xk6rnj0.cloudfront.net/eyJidWNrZXQiOiJyaXZpYW5hLWJ1Y2tldCIsImtleSI6ImltYWdlcy9wcmVtaXVtLWJhc21hdGkucG5nIiwiZWRpdHMiOnsicG5nIjp7InF1YWxpdHkiOjEwMCwicHJvZ3Jlc3NpdmUiOnRydWV9LCJyZXNpemUiOnsid2lkdGgiOjEyMDAsImhlaWdodCI6MTIwMCwiZml0IjoiY292ZXIifX19',
  },
  {
    id: 2,
    name: 'Premium Basmati Rice',
    description: 'Premium Basmati Rice is renowned for its uniquely aromatic, nutty, and subtly sweet flavor. Grown in the Himalayas, it features extra-long grains that remain fluffy and separate after cooking. Non-GMO, gluten-free, and perfect for a variety of international and traditional dishes.',
    features: [
      'Aromatic, nutty, and subtly sweet',
      'Extra-long, fluffy grains',
      'Non-GMO and gluten-free',
      'Ideal for daily meals and special occasions'
    ],
    image: 'https://d121ck0xk6rnj0.cloudfront.net/eyJidWNrZXQiOiJyaXZpYW5hLWJ1Y2tldCIsImtleSI6ImltYWdlcy9wcmVtaXVtLWJhc21hdGkucG5nIiwiZWRpdHMiOnsicG5nIjp7InF1YWxpdHkiOjEwMCwicHJvZ3Jlc3NpdmUiOnRydWV9LCJyZXNpemUiOnsid2lkdGgiOjEyMDAsImhlaWdodCI6MTIwMCwiZml0IjoiY292ZXIifX19',
  },
  {
    id: 3,
    name: 'Golden Sella Basmati',
    description: 'Golden Sella Basmati is parboiled Basmati rice with a golden hue, prized for its firm, fluffy, and non-sticky grains after cooking. It retains more nutrients than white rice and is perfect for biryanis, pulao, and dishes that require rice to stay separate and warm for longer periods.',
    features: [
      'Golden/yellow parboiled grains',
      'Firm, fluffy, and non-sticky texture',
      'Rich in fiber and nutrients',
      'Ideal for biryanis, pulao, and festive dishes'
    ],
    image: '/rice/golden-sella.jpg',
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
