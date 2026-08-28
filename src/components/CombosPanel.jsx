import MenuPanel from './MenuPanel';
import { money } from '../data/menuData';

export default function CombosPanel({ onAdd, onNext, nextLabel }) {
  return <MenuPanel title="Combos" itemCount={4} onNext={onNext} nextLabel={nextLabel}>
    <article className="menu-item"><div className="menu-item-name">Classic Chuck Combo</div><div className="menu-item-price">{money(14.49)}</div><button className="menu-item-action" type="button" onClick={() => onAdd({ name: 'Classic Chuck Combo', price: 14.49 })}>Add</button></article>
    <article className="menu-item"><div className="menu-item-name">American Steakhouse Combo</div><div className="menu-item-price">{money(16.49)}</div><button className="menu-item-action" type="button" onClick={() => onAdd({ name: 'American Steakhouse Combo', price: 16.49 })}>Add</button></article>
    <article className="menu-item"><div className="menu-item-name">Asian Fusion Combo</div><div className="menu-item-price">{money(15.99)}</div><button className="menu-item-action" type="button" onClick={() => onAdd({ name: 'Asian Fusion Combo', price: 15.99 })}>Add</button></article>
    <article className="menu-item"><div className="menu-item-name">Southwest Combo</div><div className="menu-item-price">{money(15.99)}</div><button className="menu-item-action" type="button" onClick={() => onAdd({ name: 'Asian Fusion Combo', price: 15.99 })}>Add</button></article>
    <article className="menu-item"><div className="menu-item-name">Nuggets Combo</div><div className="menu-item-price">{money(12.99)}</div><button className="menu-item-action" type="button" onClick={() => onAdd({ name: 'Nuggets Combo', price: 12.99 })}>Add</button></article>
  </MenuPanel>;
}
