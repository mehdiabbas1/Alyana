import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center text-center bg-background bg-[url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center">
      <div className="absolute inset-0 bg-background/80" />
      <div className="relative z-10 p-6 md:p-12 max-w-2xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-foreground drop-shadow-lg">
          Alayna Industries
        </h1>
        <p className="text-xl md:text-2xl text-foreground mb-10 max-w-2xl mx-auto drop-shadow">
          Premium Basmati Rice Manufacturers & Exporters
        </p>
        <Button 
          size="lg" 
          className="bg-gradient-to-r from-yellow-400 to-green-400 text-white hover:opacity-90 transition-opacity duration-300 transform hover:scale-105 px-8 py-6 text-lg font-semibold shadow-2xl border-2 border-yellow-400"
          onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Explore Our Rice
        </Button>
      </div>
    </section>
  );
};

export default Hero;
