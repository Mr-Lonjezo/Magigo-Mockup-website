export default function Ticker() {
  const items = ['Cement & Lime', 'Steel Reinforcement Y8–Y16', 'PVC Pipes & Fittings', 'Electrical Wires & Fittings', 'Tile Adhesive', 'Brick Force Wire', 'DPC & DPM Membrane', 'Termite Treatment', 'Wall Putty', 'Wire Nails & Roofing Nails', 'Online Ordering', 'Same-Day Delivery'];
  const doubled = [...items, ...items];
  return (
    <div className="ticker">
      <div className="ticker-inner">
        {doubled.map((item, i) => <div key={i} className="ticker-item">{item}</div>)}
      </div>
    </div>
  );
}