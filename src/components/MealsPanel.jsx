import MenuPanel from './MenuPanel';
import { money } from '../data/menuData';

const meals = [
  ['Classic Chuck', 10.49, 'ENTREE'],
  ['American Steakhouse', 12.49, 'ENTREE'],
  ['Asian Fusion', 11.99, 'ENTREE'],
  ['South American', 11.49, 'ENTREE'],
  ['Chuck Nuggets', 8.99, 'ENTREE'],
  ['Classic Chuck Combo', 14.49, 'COMBO'],
  ['American Steakhouse Combo', 16.49, 'COMBO'],
  ['Asian Fusion Combo', 15.99, 'COMBO'],
  ['South American Combo', 15.49, 'COMBO'],
  ['Nuggets Combo', 12.99, 'COMBO'],
];

export default function MealsPanel({ onSelect }) {
  return (
    <MenuPanel title="Choose a meal" itemCount={meals.length} hideContinue>
      {meals.map(([name, price, type]) => (
        <article className={`menu-item ${type === 'COMBO' ? 'combo-action' : ''}`} key={name}>
          <span className="item-type">{type}</span>
          <div className="menu-item-name">{name}</div>
          <div className="menu-item-price">{money(price)}</div>
          <button className="menu-item-action" type="button" onClick={() => onSelect({ name, price, details: [] })} aria-label={`Choose ${name}`} />
        </article>
      ))}
    </MenuPanel>
  );
}