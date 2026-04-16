import { RevealWrapper } from '../App';

export default function Services() {
  const services = [
    {title:'Online Ordering', desc:'Place your order by phone or online. We prepare it ready for pickup or delivery.', icon:<><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></>},
    {title:'Delivery Service', desc:'We deliver bulk orders to your site anywhere in Blantyre and Lilongwe.', icon:<><rect x="1" y="3" width="15" height="13" rx="1"/><path d="M16 8h4l3 4v4h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></>},
    {title:'Agency Banking', desc:'NB FastServe, FDH, NBS Banki, EcoBank Xpress, Standard Bank Unayo — bank as you shop.', icon:<><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></>},
    {title:'Free Consultancy', desc:'Expert advice on material quantities, specifications and cost estimation for your project.', icon:<><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></>}
  ];

  return (
    <section className="services" id="services">
      <div className="container">
        <RevealWrapper><div className="section-eyebrow" style={{color:'var(--orange-light)'}}>Our Services</div></RevealWrapper>
        <RevealWrapper><h2 className="section-title" style={{color:'white'}}>More Than Just a Shop</h2></RevealWrapper>
        <RevealWrapper><p className="section-sub" style={{color:'rgba(255,255,255,0.5)'}}>We go beyond selling — we are your complete construction partner.</p></RevealWrapper>
        <div className="services-grid">
          {services.map((s, i) => (
            <RevealWrapper key={i}>
              <div className="service-item">
                <div className="service-icon"><svg viewBox="0 0 24 24">{s.icon}</svg></div>
                <h4>{s.title}</h4><p>{s.desc}</p>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}