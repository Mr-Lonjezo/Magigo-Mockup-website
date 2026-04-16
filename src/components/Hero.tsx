import { Link } from 'react-router-dom';

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="home">
      <div className="hero-grid-bg"></div>
      <div className="hero-glow"></div>
      <div className="hero-glow2"></div>
      <div className="hero-content">
        <div className="hero-left">
          <div className="hero-eyebrow">Malawi's Trusted Building Supplier</div>
          <h1 className="hero-title">Everything<br/><span className="accent">You Need</span><br/><span className="ghost">To Build.</span></h1>
          <p className="hero-sub">From cement and steel to electrical and plumbing — your one-stop construction materials partner across Blantyre and Lilongwe.</p>
          <div className="hero-actions">
            <a href="#products" onClick={(e) => { e.preventDefault(); scrollToSection('products'); }} className="btn-primary">Browse Products <svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a>
            <Link to="/enquire" className="btn-secondary">Get a Quote <svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg></Link>
          </div>
          <div className="hero-stats">
            <div><div className="hero-stat-num">3<b>+</b></div><div className="hero-stat-label">Branches Nationwide</div></div>
            <div><div className="hero-stat-num">15<b>+</b></div><div className="hero-stat-label">Partner Institutions</div></div>
            <div><div className="hero-stat-num">2019</div><div className="hero-stat-label">Year Established</div></div>
            <div><div className="hero-stat-num">100<b>%</b></div><div className="hero-stat-label">Malawian Owned</div></div>
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-badge"><div className="hero-badge-num">3</div><div className="hero-badge-text">Branches</div></div>
          <div className="hero-mosaic">
            <div className="mosaic-card"><img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80" alt="Construction"/><div className="mosaic-label">Construction</div></div>
            <div className="mosaic-card"><img src="assets/cement.jpg" alt="Cement"/><div className="mosaic-label">Cement</div></div>
            <div className="mosaic-card"><img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80" alt="Steel"/><div className="mosaic-label">Steel</div></div>
          </div>
        </div>
      </div>
    </section>
  );
}