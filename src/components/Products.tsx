import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RevealWrapper } from '../App';

export default function Products() {
  const navigate = useNavigate();
  const [activeCat, setActiveCat] = useState('all');
  const products = [
  {
    cat: 'structural',
    img: "assets/cement.jpg",
    title: 'Cement & Lime',
    desc: '42.5R, 42.5N, 32.5N, MC 24.5, MC 22.5 & MC 5. Hydrated and un-hydrated lime for all masonry work.'
  },
  {
    cat: 'structural',
    img: 'assets/image_1.png',
    title: 'Steel Reinforcement',
    desc: 'Y8, Y10, Y12 & Y16 high-tensile steel bars for slabs, columns, beams and foundations.'
  },
  {
    cat: 'structural',
    img: 'assets/image_3.png',
    title: 'Nails & Brick Force Wire',
    desc: 'Wire, roofing, ceiling & steel nails. Brick force wire 4.5" & 9". Galvanized binding wire.'
  },
  {
    cat: 'plumbing',
    img: 'assets/image_4.png',
    title: 'PVC Pipes & Fittings',
    desc: 'Full range of pressure and drainage PVC pipes, elbows, tees, reducers and jointing accessories.'
  },
  {
    cat: 'plumbing',
    img: 'assets/image_5.png',
    title: 'DPC & DPM Membrane',
    desc: 'Damp proof course 4.5" & 9". DPM 250 Micron membrane for foundations and floor slabs.'
  },
  {
    cat: 'electrical',
    img: 'assets/image_6.png',
    title: 'Electrical Wires & Fittings',
    desc: 'Single and multi-core cables, conduit pipes, junction boxes and all electrical accessories.'
  },
  {
    cat: 'finishing',
    img: 'assets/image_7.png',
    title: 'Tile Adhesive & Wall Putty',
    desc: 'Premium tile adhesive, wall putty and finishing compounds for interior and exterior surfaces.'
  },
  {
    cat: 'finishing',
    img: 'assets/image_8.png',
    title: 'Termite Treatment',
    desc: 'Soil and timber treatment products to protect your structure from termite damage long-term.'
  },
  {
    cat: 'structural',
    img: 'assets/image_9.png',
    title: 'General Hardware & Accessories',
    desc: 'Wire mesh, angle bars, anchor bolts, binding wire and a comprehensive range of building accessories.'
  }
];
  const filtered = activeCat === 'all' ? products : products.filter(p => p.cat === activeCat);
  const categories = ['all', 'structural', 'plumbing', 'electrical', 'finishing'];

  const handleEnquire = (productTitle: string) => {
    navigate(`/enquire/${encodeURIComponent(productTitle)}`);
  };

  return (
    <section className="products" id="products">
      <div className="container">
        <div className="products-header">
          <div>
            <RevealWrapper><div className="section-eyebrow">Our Products</div></RevealWrapper>
            <RevealWrapper><h2 className="section-title">What We Stock</h2></RevealWrapper>
          </div>
          <RevealWrapper>
            <button onClick={() => navigate('/enquire')} className="btn-primary">
              Request Full Stock List 
              <svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </button>
          </RevealWrapper>
        </div>
        <div className="products-tabs">
          {categories.map(cat => (
            <button key={cat} className={`tab-btn ${activeCat === cat ? 'active' : ''}`} onClick={() => setActiveCat(cat)}>
              {cat === 'all' ? 'All Products' : cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
        <div className="products-grid">
          {filtered.map((p, i) => (
            <RevealWrapper key={i}>
              <div className="product-card" data-cat={p.cat}>
                <div className="product-img"><img src={p.img} alt={p.title} loading="lazy"/><div className="product-img-overlay"></div><span className="product-cat-tag">{p.cat}</span></div>
                <div className="product-body">
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <div className="product-footer">
                    <span className="product-availability">In Stock</span>
                    <span 
                      className="product-link" 
                      onClick={() => handleEnquire(p.title)}
                      style={{ cursor: 'pointer' }}
                    >
                      Enquire 
                      <svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                    </span>
                  </div>
                </div>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}