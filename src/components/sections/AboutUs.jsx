import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Globe } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';

function RiceGrain3D() {
  return (
    <mesh scale={[0.5, 1.2, 0.5]}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="#fffbe6" roughness={0.3} metalness={0.3} />
    </mesh>
  );
}

const AboutUs = () => {
  const stats = [
    { icon: <Award size={36} className="text-yellow-500" />, value: "Since 2015", label: "Registered & Trusted" },
    { icon: <Users size={36} className="text-green-600" />, value: "500+", label: "Satisfied Clients" },
    { icon: <Globe size={36} className="text-green-700" />, value: "10+", label: "Countries Exported To" },
  ];

  const fadeInAnimation = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.7, ease: "easeOut" }
  };

  return (
    <section className="py-20 bg-background rounded-2xl shadow-2xl max-w-5xl mx-auto my-16 relative overflow-hidden border border-border">
      <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-2/3 flex flex-col justify-center items-start p-8">
          <h2 className="text-4xl font-bold mb-6 text-foreground">About Alayna Industries</h2>
          <p className="text-lg mb-4 text-foreground">
            <strong>Alayna Industries</strong> is a leading distributor and supplier of premium rice, specializing in <strong>White Platinum Basmati Rice</strong>. Established in 2015 and based in the Industrial Area of Mandideep, Raisen, Bhopal, Madhya Pradesh, India, we have built a reputation for quality and reliability.
          </p>
          <ul className="mb-4 text-foreground">
            <li><strong>Nature of Business:</strong> Distribution and supply of rice</li>
            <li><strong>Product Focus:</strong> Basmati rice, especially White Platinum Basmati Rice</li>
            <li><strong>Location:</strong> Industrial Area, Mandideep, Raisen, Bhopal, MP, India</li>
            <li><strong>Registered:</strong> Since 2015</li>
            <li><strong>Contact Person:</strong> Mr. Nitin Agrawal</li>
            <li><strong>Contact:</strong> +91-09827098179, 7480-231165, alaynaindustries@gmail.com</li>
            <li><strong>Customer Base:</strong> Pan-India presence, serving a large consumer base</li>
          </ul>
          <p className="text-md text-muted-foreground">We are committed to delivering the finest grains with excellence, ensuring satisfaction for every customer.</p>
        </div>
        <div className="w-full md:w-1/3 flex flex-col items-center gap-8">
          <div className="grid grid-cols-1 gap-6">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex items-center gap-4 bg-card rounded-xl p-4 shadow border border-border">
                {stat.icon}
                <div>
                  <div className="text-xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-muted-foreground text-sm">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
