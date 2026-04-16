import { RevealWrapper } from '../App';

interface Partner {
  name: string;
  logoPath: string;
  displayName: string;
}

export default function Partners() {
  const partners: Partner[] = [
    { name: 'PORTLAND\nCEMENT LTD', logoPath: '/assets/partner_logos/portland.png', displayName: 'PORTLAND CEMENT LTD' },
    { name: 'SHAYONA\nCEMENT', logoPath: '/assets/partner_logos/shayona-cement.png', displayName: 'SHAYONA CEMENT' },
    { name: 'MAC\nSTEEL', logoPath: '/assets/partner_logos/macsteel-logo.png', displayName: 'MAC STEEL' },
    { name: 'SAFINTRA\nROOFING & STEEL', logoPath: '/assets/partner_logos/safintra.png', displayName: 'SAFINTRA ROOFING & STEEL' },
    { name: 'RAIPLY\nMALAWI', logoPath: '/assets/partner_logos/raiply-malawi.jpg', displayName: 'RAIPLY MALAWI' },
    { name: 'RAINBOW\nPAINTS', logoPath: '/assets/partner_logos/rainbow-paint.png', displayName: 'RAINBOW PAINTS' },
    { name: 'FLOWTECH\nPIPES', logoPath: '/assets/partner_logos/flowtech.png', displayName: 'FLOWTECH PIPES' },
    { name: 'CPL CEMENT\nPRODUCTS', logoPath: '/assets/partner_logos/cement-products-limited.png', displayName: 'CPL CEMENT PRODUCTS' },
    { name: 'NATIONAL BANK\nOF MALAWI', logoPath: '/assets/partner_logos/nationalbank.png', displayName: 'NATIONAL BANK OF MALAWI' },
    { name: 'FDH\nBANK', logoPath: '/assets/partner_logos/fdh-bank.png', displayName: 'FDH BANK' },
    { name: 'ECO\nBANK', logoPath: '/assets/partner_logos/eco-bank.png', displayName: 'ECO BANK' },
    { name: 'STANDARD\nBANK', logoPath: '/assets/partner_logos/standard-bank.png', displayName: 'STANDARD BANK' },
    { name: 'NBS\nBANK', logoPath: '/assets/partner_logos/nbs-bank.png', displayName: 'NBS BANK' },
    { name: 'AIRTEL\nMALAWI', logoPath: '/assets/partner_logos/airtel.png', displayName: 'AIRTEL MALAWI' },
    { name: 'TNM\nMPAMBA', logoPath: '/assets/partner_logos/tnm-mpamba.png', displayName: 'TNM MPAMBA' },
    { name: 'TOTAL\nENERGIES', logoPath: '/assets/partner_logos/Total-energies.png', displayName: 'TOTAL ENERGIES' },
  ];

  return (
    <section className="partners" id="partners">
      <div className="partners-inner">
        <RevealWrapper>
          <div className="section-eyebrow">Trusted Ecosystem</div>
        </RevealWrapper>
        <RevealWrapper>
          <h2 className="section-title">Our Partners & Suppliers</h2>
        </RevealWrapper>
        <RevealWrapper>
          <p className="section-sub">
            Working with Malawi's leading manufacturers, banks and financial institutions.
          </p>
        </RevealWrapper>
        <div className="partners-grid">
          {partners.map((partner, i) => (
            <RevealWrapper key={i}>
              <div className="partner-logo">
                <img 
                  src={partner.logoPath} 
                  alt={partner.displayName}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '60px',
                    objectFit: 'contain',
                  }}
                  onError={(e) => {
                    // Fallback to text if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      const span = document.createElement('span');
                      span.style.whiteSpace = 'pre-line';
                      span.textContent = partner.name;
                      parent.appendChild(span);
                    }
                  }}
                />
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}