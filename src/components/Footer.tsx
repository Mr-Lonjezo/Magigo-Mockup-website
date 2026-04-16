import logo from '../assets/logo.svg';

export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <div style={{display:'flex',alignItems:'center',gap:'14px'}}>
            <div className="nav-logo-mark">
              <img src={logo} alt="Magigo Hardware" style={{ width: '44px', height: '44px', objectFit: 'contain' }} />
            </div>
            <div className="nav-logo-text" style={{color:'white'}}>Magigo Hardware<small>Let's Build</small></div>
          </div>
          <p>Wholesale and retail of building, plumbing, electrical and hardware materials. Serving Malawi since 2019.</p>
          <div className="footer-contact">
            <div className="footer-contact-row"><svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg><span>Green Corner Trading Center, Blantyre, Malawi</span></div>
            <div className="footer-contact-row"><svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg><span>+265 881 626 484 · +265 888 626 484</span></div>
            <div className="footer-contact-row"><svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg><span>mtc@magigomw.com</span></div>
            <div className="footer-contact-row"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg><span>www.magigomw.com</span></div>
          </div>
        </div>
        <div className="footer-col"><h5>Products</h5><ul>{['Cement & Lime','Steel Reinforcement','PVC Pipes & Fittings','Electrical Wires','Nails & Wire','Tile Adhesive','DPC & DPM','Termite Treatment'].map((p,i)=><li key={i}><a href="#">{p}</a></li>)}</ul></div>
        <div className="footer-col"><h5>Services</h5><ul>{['Online Ordering','Delivery Service','Agency Banking','Free Consultancy','Wholesale'].map((s,i)=><li key={i}><a href="#">{s}</a></li>)}</ul></div>
        <div className="footer-col"><h5>Company</h5><ul>{['About Magigo','Our Branches','Our Partners','Magigo Systems','Seah Farms','Contact Us'].map((c,i)=><li key={i}><a href="#">{c}</a></li>)}</ul></div>
      </div>
      <hr className="footer-divider"/>
      <div className="footer-bottom"><p>&copy; 2025 Magigo Hardware — A division of Magigo Trading Inc. Limited. All rights reserved.</p><p><strong>Proudly Malawian · Let's Build Together</strong></p></div>
    </footer>
  );
}