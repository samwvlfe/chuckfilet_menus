import MenuPanel from './MenuPanel';
import { money } from '../data/menuData';

export default function ShakesPanel({ onAdd, onNext, nextLabel }) {
  return <MenuPanel title="Shakes" itemCount={4} onNext={onNext} nextLabel={nextLabel}>
    <article className="menu-item"><div className="menu-item-name">Vanilla Shake</div><div className="menu-item-price">{money(4.49)}</div><button className="menu-item-action" type="button" onClick={() => onAdd({ name: 'Vanilla Shake', price: 4.49 })}>Add</button></article>
    <article className="menu-item"><div className="menu-item-name">Chocolate Shake</div><div className="menu-item-price">{money(4.49)}</div><button className="menu-item-action" type="button" onClick={() => onAdd({ name: 'Chocolate Shake', price: 4.49 })}>Add</button></article>
    <article className="menu-item"><div className="menu-item-name">Strawberry Shake</div><div className="menu-item-price">{money(4.49)}</div><button className="menu-item-action" type="button" onClick={() => onAdd({ name: 'Strawberry Shake', price: 4.49 })}>Add</button></article>
    <article className="menu-item"><div className="menu-item-name">Cookies &amp; Cream Shake</div><div className="menu-item-price">{money(4.99)}</div><button className="menu-item-action" type="button" onClick={() => onAdd({ name: 'Cookies & Cream Shake', price: 4.99 })}>Add</button></article>
  </MenuPanel>;
}
