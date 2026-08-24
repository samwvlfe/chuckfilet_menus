import MenuPanel from './MenuPanel';
import { money } from '../data/menuData';

export default function WingsPanel({ onAdd, onNext, nextLabel }) {
  return <MenuPanel title="Wings" itemCount={4} onNext={onNext} nextLabel={nextLabel}>
    <article className="menu-item"><div className="menu-item-name">Bang Bang Asian Wings (6pc)</div><div className="menu-item-price">{money(7.49)}</div><button className="menu-item-action" type="button" onClick={() => onAdd({ name: 'Bang Bang Asian Wings (6pc)', price: 7.49 })}>Add</button></article>
    <article className="menu-item"><div className="menu-item-name">Buffalo Wings (6pc)</div><div className="menu-item-price">{money(7.49)}</div><button className="menu-item-action" type="button" onClick={() => onAdd({ name: 'Buffalo Wings (6pc)', price: 7.49 })}>Add</button></article>
    <article className="menu-item"><div className="menu-item-name">BBQ Wings (6pc)</div><div className="menu-item-price">{money(7.49)}</div><button className="menu-item-action" type="button" onClick={() => onAdd({ name: 'BBQ Wings (6pc)', price: 7.49 })}>Add</button></article>
    <article className="menu-item"><div className="menu-item-name">Wings (12pc)</div><div className="menu-item-price">{money(13.49)}</div><button className="menu-item-action" type="button" onClick={() => onAdd({ name: 'Wings (12pc)', price: 13.49 })}>Add</button></article>
  </MenuPanel>;
}
