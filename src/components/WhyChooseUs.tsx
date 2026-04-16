import { RevealWrapper } from '../App';

export default function WhyChooseUs() {
  const cards = [
    {title:'Certified Quality Products', desc:'High-grade cement, steel and materials from verified, nationally recognised brands only.', icon:<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>},
    {title:'Fast Delivery Service', desc:'We deliver bulk materials to your construction site anywhere in Blantyre and Lilongwe.', icon:<><rect x="1" y="3" width="15" height="13" rx="1"/><path d="M16 8h4l3 4v4h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></>},
    {title:'Flexible Payment Methods', desc:'Airtel Money, Mpamba, NBS, FDH, NB FastServe, EcoBank, Standard Bank — all accepted.', icon:<><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></>},
    {title:'Expert Consultancy', desc:'Free professional advice on materials, quantities and costs for your project.', icon:<><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></>}
  ];

  return (
    <section className="why" id="about">
      <div className="container">
        <div className="why-grid">
          <div>
            <RevealWrapper><div className="section-eyebrow">Why Choose Us</div></RevealWrapper>
            <RevealWrapper><h2 className="section-title">Built on Trust,<br/>Driven by Quality.</h2></RevealWrapper>
            <RevealWrapper><p className="section-sub" style={{marginBottom:'32px'}}>Since 2019, Magigo Hardware has been supplying Malawi's builders, contractors and homeowners with premium construction materials — on time and at fair prices.</p></RevealWrapper>
            <div className="why-cards">
              {cards.map((card, i) => (
                <RevealWrapper key={i}>
                  <div className="why-card">
                    <div className="why-icon"><svg viewBox="0 0 24 24">{card.icon}</svg></div>
                    <div className="why-card-text"><h4>{card.title}</h4><p>{card.desc}</p></div>
                  </div>
                </RevealWrapper>
              ))}
            </div>
          </div>
          <RevealWrapper>
            <div className="why-visual">
              <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80" alt="Construction"/>
              <div className="why-visual-overlay"></div>
              <div className="why-visual-content">
                <div className="why-stat-cards">
                  <div className="why-stat-card"><div className="num">3<b>+</b></div><div className="lbl">Active Branches</div></div>
                  <div className="why-stat-card"><div className="num">5<b>+</b></div><div className="lbl">Years of Service</div></div>
                  <div className="why-stat-card" style={{gridColumn:'1/-1'}}><div className="num" style={{fontSize:'18px'}}>Blantyre & Lilongwe</div><div className="lbl">Serving all of Malawi</div></div>
                </div>
              </div>
            </div>
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
}