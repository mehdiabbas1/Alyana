import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sprout, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';

function RiceGrain3D() {
  return (
    <mesh scale={[0.3, 0.8, 0.3]}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="#fffbe6" roughness={0.3} metalness={0.3} />
    </mesh>
  );
}

const Footer = () => {
  const { toast } = useToast();

  const handleSocialClick = (socialMedia) => {
    toast({
      title: `Navigating to ${socialMedia}`,
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
      variant: "default",
      duration: 3000,
    });
  };

  const quickLinks = [
    { name: 'Our Story', path: '#about' },
    { name: 'Rice Varieties', path: '#products' },
    { name: 'Quality Standards', path: '#quality' },
    { name: 'Export Markets', path: '#export' },
    { name: 'Contact Us', path: '#contact' },
  ];

  const socialIcons = [
    { icon: <Facebook size={24} />, name: 'Facebook', action: () => handleSocialClick('Facebook') },
    { icon: <Instagram size={24} />, name: 'Instagram', action: () => handleSocialClick('Instagram') },
    { icon: <Twitter size={24} />, name: 'Twitter', action: () => handleSocialClick('Twitter') },
    { icon: <Linkedin size={24} />, name: 'LinkedIn', action: () => handleSocialClick('LinkedIn') },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: newsletterEmail }),
      });
      const data = await res.json();
      if (data.success) {
        setNewsletterEmail('');
        toast({ title: 'Subscribed!', description: 'You are now subscribed to our newsletter.' });
      } else {
        toast({ title: 'Error', description: 'Subscription failed.' });
      }
    } catch (err) {
      toast({ title: 'Error', description: 'Subscription failed.' });
    }
  };

  return (
    <motion.footer className="bg-gradient-to-t from-[#10131A] via-[#181B23] to-[#23263A] text-foreground py-12 relative overflow-hidden border-t border-primary/30">
      <img src="https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=1200&q=80" alt="Rice field at sunset with harvest" className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none" />
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <a href="#home" className="flex items-center space-x-2 mb-4 text-primary hover:text-secondary transition-colors">
              <span className="text-xl font-bold gradient-text">Alayna Industries</span>
            </a>
            <p className="text-sm text-gray-400 mb-4">
              Supplying premium Basmati rice from Bhopal, India, with a commitment to quality and excellence.
            </p>
          </div>
          {/* Quick Links */}
          <div>
            <p className="text-lg font-semibold text-primary mb-4">Quick Links</p>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.path} 
                    onClick={(e) => { e.preventDefault(); scrollToSection(link.path); }}
                    className="text-sm text-gray-400 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Contact Info */}
          <div>
            <p className="text-lg font-semibold text-primary mb-4">Contact Us</p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Industrial Area, Mandideep, Raisen, Bhopal, MP, India</li>
              <li>Email: sales@alaynaindustries.com</li>
              <li>Phone: +91 (123) 456-7890</li>
            </ul>
          </div>
          {/* Newsletter (Placeholder) */}
          <div>
            <p className="text-lg font-semibold text-primary mb-4">Stay Updated</p>
            <p className="text-sm text-gray-400 mb-3">Subscribe to our newsletter for the latest updates and offers.</p>
            <form onSubmit={handleNewsletterSubmit}>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full px-3 py-2 text-sm rounded-l-md bg-input border-border focus:ring-primary focus:border-primary"
                />
                <button type="submit" className="px-4 py-2 bg-primary text-primary-foreground rounded-r-md hover:bg-secondary transition-colors text-sm">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="border-t border-primary/30 pt-8 text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Alayna Industries. All Rights Reserved.
          </p>
          <p className="text-xs text-gray-600 mt-1">
            Crafted with <span className="text-red-500">&hearts;</span> by Mehdi Abbas Zaidi
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
