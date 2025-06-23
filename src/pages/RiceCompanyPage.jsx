import React from 'react';
import Hero from '@/components/sections/Hero';
import AboutUs from '@/components/sections/AboutUs';
import Products from '@/components/sections/Products';
import ExportMarket from '@/components/sections/ExportMarket';
import QualityAssurance from '@/components/sections/QualityAssurance';
import ContactUs from '@/components/sections/ContactUs';
import { motion } from 'framer-motion';

const RiceCompanyPage = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <AboutUs />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Products />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <QualityAssurance />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <ExportMarket />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <ContactUs />
      </motion.div>
    </div>
  );
};

export default RiceCompanyPage;