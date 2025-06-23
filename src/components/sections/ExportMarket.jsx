import React from 'react';
import { Globe2 } from 'lucide-react';

const exportCountries = [
  { name: 'Saudi Arabia', flag: '🇸🇦' },
  { name: 'UAE', flag: '🇦🇪' },
  { name: 'Qatar', flag: '🇶🇦' },
  { name: 'Kuwait', flag: '🇰🇼' },
  { name: 'Bahrain', flag: '🇧🇭' },
  { name: 'Oman', flag: '🇴🇲' },
  { name: 'India', flag: '🇮🇳' },
  { name: 'Europe', flag: '🇪🇺' },
];

const ExportMarket = () => {
  return (
    <section id="export" className="py-20 bg-background text-foreground border-t border-border">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground text-center">Global Presence & Export Markets</h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 text-center">
          Alayna Industries is a trusted partner for rice importation in the Gulf countries and beyond, known for reliability, consistent quality, and timely delivery.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {exportCountries.map((country, idx) => (
            <div key={country.name} className="flex flex-col items-center bg-card rounded-xl p-6 shadow border border-border">
              <span className="text-4xl mb-2">{country.flag}</span>
              <span className="text-lg font-semibold text-foreground">{country.name}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-8">
          <div className="flex flex-col items-center">
            <Globe2 size={48} className="text-yellow-500 mb-2" />
            <div className="text-2xl font-bold text-foreground">10+</div>
            <div className="text-muted-foreground">Countries Exported To</div>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-foreground">500+</span>
            <div className="text-muted-foreground">Satisfied Clients</div>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-foreground">Since 2015</span>
            <div className="text-muted-foreground">Trusted Exporter</div>
          </div>
        </div>
        <div className="text-center mt-12 md:mt-16">
          <h3 className="text-2xl md:text-3xl font-semibold mb-3 text-foreground">Efficient Logistics & Supply Chain</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our robust logistics network ensures that your rice consignments reach you fresh and on schedule, maintaining optimal quality from our mills to your destination. We handle all export documentation and procedures for a seamless experience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ExportMarket;
