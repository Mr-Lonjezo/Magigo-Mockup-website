import { Link } from 'react-router-dom';

export default function CTA() {
  return (
    <section className="cta-section" id="contact">
      <h2>Ready to Start Building?</h2>
      <p>Contact us for pricing, stock availability or to discuss your project requirements with our team.</p>
      <div className="cta-btns">
        <a href="tel:+265881626484" className="btn-white">
          <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          Call +265 881 626 484
        </a>
        <Link to="/enquire" className="btn-ghost-white">
          <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          Enquire Online
        </Link>
      </div>
    </section>
  );
}