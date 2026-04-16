import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import WhyChooseUs from './components/WhyChooseUs';
import Products from './components/Products';
import Services from './components/Services';
import Branches from './components/Branches';
import Partners from './components/Partners';
import CTA from './components/CTA';
import Footer from './components/Footer';
import WhatsAppFAB from './components/WhatsAppFAB';
import ContactForm from './pages/ContactForm';

export const RevealWrapper = ({ children }: { children: React.ReactNode }) => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  return <div ref={ref} className={`reveal ${inView ? 'visible' : ''}`}>{children}</div>;
};

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Home Page Component
function HomePage() {
  return (
    <main>
      <Hero />
      <Ticker />
      <WhyChooseUs />
      <Products />
      <Services />
      <Branches />
      <Partners />
      <CTA />
    </main>
  );
}

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <ScrollToTop />
      <Navbar scrolled={scrolled} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/enquire" element={<ContactForm />} />
        <Route path="/enquire/:productName" element={<ContactForm />} />
      </Routes>
      <Footer />
      <WhatsAppFAB />
    </>
  );
}

export default App;