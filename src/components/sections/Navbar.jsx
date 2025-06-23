import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sprout, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const { toast } = useToast();

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '#about' },
    { name: 'Our Rice', path: '#products' },
    { name: 'Quality', path: '#quality' },
    { name: 'Export', path: '#export' },
    { name: 'Contact', path: '#contact' },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };
  
  const handleUnimplemented = () => {
    toast({
      title: "🚧 Feature Not Implemented",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
      variant: "default",
      duration: 5000,
    });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg shadow-lg border-b border-primary/30"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#home" className="flex items-center space-x-2 text-primary hover:text-secondary transition-colors">
            <span className="text-2xl font-bold gradient-text tracking-widest">Alayna Industries</span>
          </a>
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.path);
                }}
                className="text-foreground hover:text-primary transition-colors font-medium text-lg border-b-2 border-transparent hover:border-primary px-2 py-1"
              >
                {item.name}
              </a>
            ))}
            <Button onClick={handleUnimplemented} variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold">
              Order Now
            </Button>
            <Button 
              onClick={toggleTheme} 
              variant="ghost" 
              size="sm"
              className="p-2 text-foreground hover:text-primary transition-colors"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </Button>
          </div>
          <div className="md:hidden flex items-center space-x-2">
            <Button 
              onClick={toggleTheme} 
              variant="ghost" 
              size="sm"
              className="p-2 text-primary"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </Button>
            <Button variant="ghost" onClick={() => setIsOpen(!isOpen)} className="text-primary">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </Button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-background/95 backdrop-blur-md absolute w-full shadow-xl border-b border-primary/30"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.path}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.path);
                  }}
                  className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-muted transition-colors border-b-2 border-transparent hover:border-primary"
                >
                  {item.name}
                </a>
              ))}
              <Button onClick={handleUnimplemented} variant="outline" className="w-full mt-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold">
                Order Now
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
