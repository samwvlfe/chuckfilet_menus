const stations = [
  { key: 'burgers', label: 'BURGERS', color: 'red' },
  { key: 'fries', label: 'FRIES', color: 'yellow' },
  { key: 'wings', label: 'WINGS / NUGGETS', color: 'orange' },
  { key: 'dogs', label: 'CHUCK DOGS', color: 'purple' },
  { key: 'drinks', label: 'DRINKS', color: 'blue' },
  { key: 'expedite', label: 'EXPEDITE', color: 'green' },
];

function getStation(item) {
  const name = item.name.toLowerCase();
  if (name.includes('wing') || name.includes('nugget')) return 'wings';
  if (name.includes('fry') || name.includes('mac') || name.includes('salad')) return 'fries';
  if (name.includes('drink') || name.includes('tea') || name.includes('lemonade') || name.includes('water') || name.includes('shake')) return 'drinks';
  if (name.includes('combo') || name.includes('sauce') || name.includes('bun') || name.includes('patty') || name.includes('pickle')) return 'expedite';
  return 'burgers';
}

function aggregateItems(order, stationKey) {
  const items = order.filter((item) => getStation(item) === stationKey);
  return Object.values(items.reduce((groups, item) => {
    groups[item.name] = groups[item.name] || { ...item, quantity: 0 };
    groups[item.name].quantity += 1;
    return groups;
  }, {}));
}

export default function KitchenDisplay({ order }) {
  const stationItems = stations.reduce((groups, station) => ({ ...groups, [station.key]: aggregateItems(order, station.key) }), {});

  return (
    <main className="kds-screen">
      <div className="kds-toolbar">
        <div>
          <div className="kds-eyebrow">KITCHEN DISPLAY</div>
          <h1>Kitchen Queue</h1>
        </div>
        <div className="kds-status"><span className="status-dot" /> LIVE <strong>{order.length} items</strong></div>
      </div>
      <div className="kds-stations">
        {stations.map((station) => (
          <section className={`kds-station ${station.color}`} key={station.key}>
            <div className="kds-station-header"><strong>{station.label}</strong><span>{stationItems[station.key].reduce((sum, item) => sum + item.quantity, 0)}</span></div>
            <div className="kds-station-body">
              {stationItems[station.key].map((item) => (
                <article className="kds-ticket" key={item.name}>
                  <div className="kds-ticket-header"><strong>ORDER #1047</strong><span>NEW</span></div>
                  <div className="kds-ticket-item"><strong>{item.quantity} ×</strong> {item.name}</div>
                  <div className="kds-ticket-detail">{item.details?.[0] || 'Standard'}</div>
                </article>
              ))}
              {stationItems[station.key].length === 0 && <div className="kds-station-empty">Clear</div>}
            </div>
          </section>
        ))}
      </div>
      <div className="kds-footer"><span>LEGEND</span><span><i className="legend-dot new" /> New</span><span><i className="legend-dot ready" /> Ready</span><span className="kds-footer-spacer" /> <strong>ORDER #1047</strong> in progress</div>
    </main>
  );
}
