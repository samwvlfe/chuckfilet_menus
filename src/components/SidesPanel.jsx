import MenuPanel from './MenuPanel';
import { money } from '../data/menuData';

export default function SidesPanel({ onAdd, onNext, nextLabel }) {
  return <MenuPanel title="Sides" itemCount={5} onNext={onNext} nextLabel={nextLabel}>
    <article className="menu-item"><div className="menu-item-name">Regular Fries</div><div className="menu-item-price">{money(3.99)}</div><button className="menu-item-action" type="button" onClick={() => onAdd({ name: 'Regular Fries', price: 3.99 })}>Add</button></article>
    <article className="menu-item"><div className="menu-item-name">Loaded Fries</div><div className="menu-item-price">{money(5.49)}</div><button className="menu-item-action" type="button" onClick={() => onAdd({ name: 'Loaded Fries', price: 5.49 })}>Add</button></article>
    <article className="menu-item"><div className="menu-item-name">Sweet Potato Fries</div><div className="menu-item-price">{money(4.49)}</div><button className="menu-item-action" type="button" onClick={() => onAdd({ name: 'Sweet Potato Fries', price: 4.49 })}>Add</button></article>
    <article className="menu-item"><div className="menu-item-name">Mac &amp; Cheese</div><div className="menu-item-price">{money(4.99)}</div><button className="menu-item-action" type="button" onClick={() => onAdd({ name: 'Mac & Cheese', price: 4.99 })}>Add</button></article>
    <article className="menu-item"><div className="menu-item-name">Side Salad</div><div className="menu-item-price">{money(3.49)}</div><button className="menu-item-action" type="button" onClick={() => onAdd({ name: 'Side Salad', price: 3.49 })}>Add</button></article>
  </MenuPanel>;
}
