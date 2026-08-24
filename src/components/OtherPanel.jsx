import MenuPanel from './MenuPanel';
import { money } from '../data/menuData';

export default function OtherPanel({ onAdd, onNext, nextLabel }) {
  return <MenuPanel title="Other" itemCount={4} onNext={onNext} nextLabel={nextLabel}>
    <article className="menu-item"><div className="menu-item-name">Extra Patty</div><div className="menu-item-price">{money(3.99)}</div><button className="menu-item-action" type="button" onClick={() => onAdd({ name: 'Extra Patty', price: 3.99 })}>Add</button></article>
    <article className="menu-item"><div className="menu-item-name">Brioche Bun</div><div className="menu-item-price">{money(1.49)}</div><button className="menu-item-action" type="button" onClick={() => onAdd({ name: 'Brioche Bun', price: 1.49 })}>Add</button></article>
    <article className="menu-item"><div className="menu-item-name">Pickles</div><div className="menu-item-price">{money(0.79)}</div><button className="menu-item-action" type="button" onClick={() => onAdd({ name: 'Pickles', price: 0.79 })}>Add</button></article>
    <article className="menu-item"><div className="menu-item-name">Kids Toy</div><div className="menu-item-price">{money(1.99)}</div><button className="menu-item-action" type="button" onClick={() => onAdd({ name: 'Kids Toy', price: 1.99 })}>Add</button></article>
  </MenuPanel>;
}
