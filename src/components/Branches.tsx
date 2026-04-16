import { RevealWrapper } from '../App';

export default function Branches() {
  const branches = [
    {tag:'Main Branch · Est. 2019', name:'Green Corner', loc:'Green Corner Trading Center, Blantyre', mgr:'Martha Ngulube', phone:'+265 881 626 484', num:'01'},
    {tag:'Branch · Est. 2021', name:'Chileka', loc:'Chileka, Blantyre', mgr:'Gerald Felix', phone:'+265 888 626 484', num:'02'},
    {tag:'Branch · Est. 2023', name:'Airwing — Lilongwe', loc:'Area 58, Airwing Fourways, Lilongwe', mgr:'Yamikani Kazembe', phone:'+265 888 626 484', num:'03'}
  ];

  return (
    <section className="branches" id="branches">
      <div className="container">
        <RevealWrapper><div className="section-eyebrow">Our Locations</div></RevealWrapper>
        <RevealWrapper><h2 className="section-title">Find Us Near You</h2></RevealWrapper>
        <RevealWrapper><p className="section-sub">Three strategically located branches serving all of Malawi.</p></RevealWrapper>
        <div className="branches-grid">
          {branches.map((b, i) => (
            <RevealWrapper key={i}>
              <div className="branch-card">
                <div className="branch-tag">{b.tag}</div><h3>{b.name}</h3>
                <div className="branch-loc"><svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>{b.loc}</div>
                <div className="branch-detail"><strong>Opening Hours</strong><br/>Mon – Fri: 7:30am – 5:00pm<br/>Saturday: 7:30am – 1:00pm<br/><br/><strong>Shop Manager:</strong> {b.mgr}<br/><strong>Phone:</strong> {b.phone}</div>
                <div className="branch-num">{b.num}</div>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}