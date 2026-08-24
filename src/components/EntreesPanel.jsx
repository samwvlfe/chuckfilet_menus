import MenuPanel from './MenuPanel';
import { money } from '../data/menuData';

export default function EntreesPanel({ onAdd, onNext, nextLabel }) {
  return <MenuPanel title="Entrees" itemCount={5} onNext={onNext} nextLabel={nextLabel}>
    <article className="menu-item"><div className="menu-item-name">Classic Chuck</div><div className="menu-item-price">{money(10.49)}</div><button className="menu-item-action" type="button" onClick={() => onAdd({ name: 'Classic Chuck', price: 10.49 })}>Add</button></article>
    <article className="menu-item"><div className="menu-item-name">American Steakhouse</div><div className="menu-item-price">{money(12.49)}</div><button className="menu-item-action" type="button" onClick={() => onAdd({ name: 'American Steakhouse', price: 12.49 })}>Add</button></article>
    <article className="menu-item"><div className="menu-item-name">Asian Fusion</div><div className="menu-item-price">{money(11.99)}</div><button className="menu-item-action" type="button" onClick={() => onAdd({ name: 'Asian Fusion', price: 11.99 })}>Add</button></article>
    <article className="menu-item"><div className="menu-item-name">South American</div><div className="menu-item-price">{money(11.49)}</div><button className="menu-item-action" type="button" onClick={() => onAdd({ name: 'South American', price: 11.49 })}>Add</button></article>
    <article className="menu-item"><div className="menu-item-name">Chuck Nuggets</div><div className="menu-item-price">{money(8.99)}</div><button className="menu-item-action" type="button" onClick={() => onAdd({ name: 'Chuck Nuggets', price: 8.99 })}>Add</button></article>
  </MenuPanel>;
}
