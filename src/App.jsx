
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Toaster } from '@/components/ui/toaster';
import RiceCompanyPage from '@/pages/RiceCompanyPage';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Helmet>
          <title>Alayna Industries - Premium Basmati Rice Suppliers</title>
          <meta name="description" content="Alayna Industries, based in Bhopal, India, is a leading distributor and supplier of premium Basmati rice, including White Platinum Basmati, to the Gulf countries." />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700&family=Montserrat:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        </Helmet>
        <div className="min-h-screen bg-background text-foreground flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<RiceCompanyPage />} />
            </Routes>
          </main>
          <Footer />
          <Toaster />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
