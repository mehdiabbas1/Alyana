import React from 'react';
import { ShieldCheck, Microscope, Sprout as Seedling, Award } from 'lucide-react';

const qualityPoints = [
  {
    icon: <Seedling size={32} className="text-green-600" />,
    title: 'Superior Seed Selection',
    description: 'We start with the highest quality, non-GMO seeds, ensuring a robust and healthy crop from the very beginning.',
  },
  {
    icon: <Microscope size={32} className="text-yellow-500" />,
    title: 'Advanced Milling Technology',
    description: 'Our state-of-the-art milling facilities preserve the nutritional value and natural aroma of each grain.',
  },
  {
    icon: <ShieldCheck size={32} className="text-green-700" />,
    title: 'Stringent Quality Checks',
    description: 'Multiple checkpoints throughout the process, from farm to packaging, guarantee consistency and purity.',
  },
  {
    icon: <Award size={32} className="text-yellow-500" />,
    title: 'International Certifications',
    description: 'Adherence to global food safety standards, including ISO, HACCP, and organic certifications where applicable.',
  },
];

const QualityAssurance = () => {
  return (
    <section id="quality" className="py-20 bg-background text-foreground border-t border-border">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground text-center">
          Commitment to <span className="text-yellow-500">Uncompromising Quality</span>
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 text-center">
          Quality is not just a standard at Alayna Industries; it's our promise. We meticulously control every step to deliver rice that exceeds expectations.
        </p>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-8">
            {qualityPoints.map((point, index) => (
              <div key={index} className="flex items-start space-x-4 bg-card rounded-xl p-6 shadow border border-border">
                <div className="flex-shrink-0 mt-1">{point.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-1">{point.title}</h3>
                  <p className="text-muted-foreground">{point.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center">
            <img  
              alt="Quality control expert inspecting rice grains in a modern facility" 
              className="rounded-xl shadow-2xl w-full h-auto object-cover aspect-[4/3] border-4 border-yellow-300"
              src="https://images.unsplash.com/photo-1673158189969-b56098377a9c" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualityAssurance;
