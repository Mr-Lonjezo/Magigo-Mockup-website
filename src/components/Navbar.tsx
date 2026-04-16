import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/logo.svg';

export default function Navbar({ scrolled }: { scrolled: boolean }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    
    // If we're not on the homepage, navigate to home first then scroll
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Already on homepage, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <a href="/" onClick={handleLogoClick} className="nav-logo">
        <div className="nav-logo-mark">
          <img src={logo} alt="Magigo Hardware" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
        </div>
      </a>
      <ul className="nav-links">
        <li><a href="#products" onClick={(e) => { e.preventDefault(); scrollToSection('products'); }}>Products</a></li>
        <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Services</a></li>
        <li><a href="#branches" onClick={(e) => { e.preventDefault(); scrollToSection('branches'); }}>Branches</a></li>
        <li><a href="#partners" onClick={(e) => { e.preventDefault(); scrollToSection('partners'); }}>Partners</a></li>
        <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a></li>
      </ul>
      <Link to="/enquire" className="nav-cta">
        <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
        Enquire Now
      </Link>
      <div className="hamburger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
        <span></span><span></span><span></span>
      </div>
      {mobileMenuOpen && (
        <ul className="nav-links" style={{display:'flex',flexDirection:'column',position:'absolute',top:'72px',left:0,right:0,background:'var(--white)',color:'var(--navy)',padding:'20px 7%',gap:'18px',zIndex:999,borderBottom:'1px solid rgba(27,58,92,0.1)',boxShadow:'var(--shadow)'}}>
          <li><a href="#products" onClick={(e) => { e.preventDefault(); scrollToSection('products'); }}>Products</a></li>
          <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Services</a></li>
          <li><a href="#branches" onClick={(e) => { e.preventDefault(); scrollToSection('branches'); }}>Branches</a></li>
          <li><a href="#partners" onClick={(e) => { e.preventDefault(); scrollToSection('partners'); }}>Partners</a></li>
          <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a></li>
          <li><Link to="/enquire" onClick={() => setMobileMenuOpen(false)} style={{color:'var(--orange)',fontWeight:'700'}}>Enquire Now</Link></li>
        </ul>
      )}
    </nav>
  );
}