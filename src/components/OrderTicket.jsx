import { money } from '../data/menuData';

function OrderItem({ item, index }) {
  return (
    <div className="order-item">
      <div className="item-header">
        <div className="item-number">{index + 1}</div>
        <div className="item-name">{item.name}</div>
        <div className="item-price">{money(item.price)}</div>
      </div>
      {item.details?.length > 0 && (
        <ul className="item-details">
          {item.details.map((detail, detailIndex) => (
            <li className={detailIndex === item.details.length - 1 && detail === 'No Mushrooms' ? 'item-modifier special' : 'item-modifier'} key={detail}>{detail}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

const customer = {
  name: 'Sarah Mitchell',
  initials: 'SM',
  tier: 'Gold',
  points: 2450,
  nextTier: 3000,
  lastVisit: 'Aug 22, 2026',
  previousOrderItems: [
    { name: 'Classic Chuck', price: 10.49 },
    { name: 'Classic Chuck', price: 10.49 },
    { name: 'Regular Fries', price: 3.99 },
    { name: 'Fountain Drink', price: 2.49 },
  ],
};

const previousOrderLabel = '2× Classic Chuck, Regular Fries, Fountain Drink';

function CustomerWidget({ onReorder }) {
  const progress = Math.min(100, Math.round((customer.points / customer.nextTier) * 100));
  return (
    <div className="customer-widget">
      <div className="customer-widget-header">
        <div className="customer-avatar">{customer.initials}</div>
        <div className="customer-widget-id">
          <div className="customer-name">{customer.name}</div>
          <div className={`customer-tier tier-${customer.tier.toLowerCase()}`}>{customer.tier} MEMBER</div>
        </div>
        <div className="customer-points">
          <strong>{customer.points.toLocaleString()}</strong>
          <span>points</span>
        </div>
      </div>
      <div className="customer-progress">
        <div className="customer-progress-bar"><div style={{ width: `${progress}%` }} /></div>
        <span>{customer.nextTier - customer.points} pts to Platinum</span>
      </div>
      <div className="customer-widget-facts">
        <div><span>LAST VISIT</span><strong>{customer.lastVisit}</strong></div>
        <div><span>PREVIOUS ORDER</span><strong>{previousOrderLabel}</strong></div>
      </div>
      <button type="button" className="reorder-button" onClick={onReorder}>↻ REORDER</button>
    </div>
  );
}

export default function OrderTicket({ order, subtotal, tax, total, onDiscard, onReorder, showCustomer }) {
  return (
    <aside className="sidebar">
      {showCustomer && <CustomerWidget onReorder={onReorder} />}
      <div className="order-header"><div className="order-number">ORDER #1047</div><div className="dine-option">Dine In ▼</div></div>
      <div className="order-items">
        {order.length === 0 ? <div className="empty-order">Your order is empty.<br />Add an item to get started.</div> : order.map((item, index) => <OrderItem item={item} index={index} key={`${item.name}-${index}`} />)}
      </div>
      <div className="order-totals">
        <div className="total-row"><span>Subtotal</span><span>{money(subtotal)}</span></div>
        <div className="total-row"><span>Tax</span><span>{money(tax)}</span></div>
        <div className="total-row total"><span>Total</span><span>{money(total)}</span></div>
      </div>
      <div className="bottom-actions"><button className="btn-secondary" type="button" onClick={onDiscard}>DISCARD ORDER</button><button className="btn-secondary" type="button">HOLD ORDER</button></div>
    </aside>
  );
}
