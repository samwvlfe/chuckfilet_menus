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

export default function OrderTicket({ order, subtotal, tax, total, onDiscard }) {
  return (
    <aside className="sidebar">
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
