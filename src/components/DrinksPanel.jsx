import MenuPanel from './MenuPanel';
import { money } from '../data/menuData';

export default function DrinksPanel({ onAdd, onNext, nextLabel }) {
  return <MenuPanel title="Drinks" itemCount={4} onNext={onNext} nextLabel={nextLabel}>
    <article className="menu-item"><div className="menu-item-name">Fountain Drink</div><div className="menu-item-price">{money(2.49)}</div><button className="menu-item-action" type="button" onClick={() => onAdd({ name: 'Fountain Drink', price: 2.49 })}>Add</button></article>
    <article className="menu-item"><div className="menu-item-name">Sweet Tea</div><div className="menu-item-price">{money(2.49)}</div><button className="menu-item-action" type="button" onClick={() => onAdd({ name: 'Sweet Tea', price: 2.49 })}>Add</button></article>
    <article className="menu-item"><div className="menu-item-name">Fresh Lemonade</div><div className="menu-item-price">{money(3.49)}</div><button className="menu-item-action" type="button" onClick={() => onAdd({ name: 'Fresh Lemonade', price: 3.49 })}>Add</button></article>
    <article className="menu-item"><div className="menu-item-name">Bottled Water</div><div className="menu-item-price">{money(1.99)}</div><button className="menu-item-action" type="button" onClick={() => onAdd({ name: 'Bottled Water', price: 1.99 })}>Add</button></article>
  </MenuPanel>;
}
