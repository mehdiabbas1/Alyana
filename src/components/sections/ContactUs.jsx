import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const ContactUs = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        setFormData({ name: '', email: '', subject: '', message: '' });
        toast({ title: 'Message sent!', description: 'We will get back to you soon.' });
      } else {
        toast({ title: 'Error', description: 'Failed to send message.' });
      }
    } catch (err) {
      toast({ title: 'Error', description: 'Failed to send message.' });
    }
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 bg-background text-foreground border-t border-border">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground text-center">Get in Touch With Us</h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 text-center">
          Have questions or ready to place an order? Our team is here to assist you. Reach out through the form below or contact us directly.
        </p>
        <div className="flex flex-col md:flex-row gap-10 items-start">
          <div className="w-full md:w-1/2 bg-card rounded-2xl p-8 shadow border border-border mb-8 md:mb-0">
            <div className="flex items-center mb-4">
              <MapPin size={24} className="text-yellow-500 mr-2" />
              <span className="text-foreground">Industrial Area, Mandideep, Raisen, Bhopal, Madhya Pradesh, India</span>
            </div>
            <div className="flex items-center mb-4">
              <Phone size={24} className="text-muted-foreground mr-2" />
              <span className="text-foreground">+91-09827098179, 7480-231165</span>
            </div>
            <div className="flex items-center mb-4">
              <Mail size={24} className="text-muted-foreground mr-2" />
              <span className="text-foreground">alaynaindustries@gmail.com</span>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="w-full md:w-1/2 space-y-6 bg-card p-8 rounded-2xl shadow border border-border">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">Full Name</label>
              <Input 
                type="text" 
                name="name" 
                id="name" 
                value={formData.name}
                onChange={handleChange}
                required 
                className="bg-background placeholder:text-muted-foreground/50"
                placeholder="e.g. Abdullah Al-Futtaim" 
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">Email Address</label>
              <Input 
                type="email" 
                name="email" 
                id="email" 
                value={formData.email}
                onChange={handleChange}
                required 
                className="bg-background placeholder:text-muted-foreground/50"
                placeholder="e.g. abdullah@example.com" 
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-1">Subject</label>
              <Input 
                type="text" 
                name="subject" 
                id="subject" 
                value={formData.subject}
                onChange={handleChange}
                required 
                className="bg-background placeholder:text-muted-foreground/50"
                placeholder="e.g. Inquiry about White Platinum Basmati Rice" 
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">Message</label>
              <Textarea 
                name="message" 
                id="message" 
                rows={5} 
                value={formData.message}
                onChange={handleChange}
                required 
                className="bg-background placeholder:text-muted-foreground/50"
                placeholder="Your detailed message or inquiry..." 
              />
            </div>
            <div>
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-yellow-400 to-green-400 text-white hover:opacity-90 transition-opacity duration-300 py-3 text-lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message <Send size={20} className="ml-2" />
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
