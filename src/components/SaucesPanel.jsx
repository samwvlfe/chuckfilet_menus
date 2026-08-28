import MenuPanel from './MenuPanel';
import { money } from '../data/menuData';

export default function SaucesPanel({ onAdd, onFinish }) {
  return <MenuPanel title="Sauces" itemCount={5} hideContinue>
    <article className="menu-item"><div className="menu-item-name">Steakhouse Sauce</div><div className="menu-item-price">{money(0.79)}</div><button className="menu-item-action" type="button" onClick={() => onAdd({ name: 'Steakhouse Sauce', price: 0.79 })}>Add</button></article>
    <article className="menu-item"><div className="menu-item-name">Bang Bang Sauce</div><div className="menu-item-price">{money(0.79)}</div><button className="menu-item-action" type="button" onClick={() => onAdd({ name: 'Bang Bang Sauce', price: 0.79 })}>Add</button></article>
    <article className="menu-item"><div className="menu-item-name">Ranch</div><div className="menu-item-price">{money(0.79)}</div><button className="menu-item-action" type="button" onClick={() => onAdd({ name: 'Ranch', price: 0.79 })}>Add</button></article>
    <article className="menu-item"><div className="menu-item-name">Honey Mustard</div><div className="menu-item-price">{money(0.79)}</div><button className="menu-item-action" type="button" onClick={() => onAdd({ name: 'Honey Mustard', price: 0.79 })}>Add</button></article>
    <article className="menu-item"><div className="menu-item-name">BBQ Sauce</div><div className="menu-item-price">{money(0.79)}</div><button className="menu-item-action" type="button" onClick={() => onAdd({ name: 'BBQ Sauce', price: 0.79 })}>Add</button></article>
    <article className="menu-item next-menu-item"><div className="menu-item-name">Finish</div><div className="menu-item-price">Start next meal</div><button className="menu-item-action" type="button" onClick={onFinish}>Finish</button></article>
  </MenuPanel>;
}
