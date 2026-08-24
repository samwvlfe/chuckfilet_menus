export default function KitchenDisplay({ order }) {
  return (
    <main className="kds-screen">
      <div className="kds-toolbar">
        <div>
          <div className="kds-eyebrow">KITCHEN DISPLAY</div>
          <h1>Active Orders</h1>
        </div>
        <div className="kds-status"><span className="status-dot" /> LIVE <strong>{order.length}</strong></div>
      </div>
      {order.length === 0 ? (
        <div className="kds-empty">No active orders</div>
      ) : (
        <div className="kds-grid">
          <article className="kds-ticket">
            <div className="kds-ticket-header"><strong>ORDER #1047</strong><span>NEW</span></div>
            <div className="kds-ticket-time">Received just now</div>
            <ul className="kds-items">
              {order.map((item, index) => <li key={`${item.name}-${index}`}><span>{index + 1} × {item.name}</span><strong>{item.details?.[0] || 'Standard'}</strong></li>)}
            </ul>
            <button className="kds-ready-button" type="button">MARK READY</button>
          </article>
        </div>
      )}
    </main>
  );
}
