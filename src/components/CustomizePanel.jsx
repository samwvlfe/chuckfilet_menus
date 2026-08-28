import MenuPanel from './MenuPanel';
import { money } from '../data/menuData';

const options = [
  ['Add bacon', 1.5], ['Add cheese', 0.79], ['No onions', 0], ['No mushrooms', 0],
  ['Regular fries', 3.99], ['Loaded fries', 5.49], ['Sweet potato fries', 4.49], ['Side salad', 3.49],
];

export default function CustomizePanel({ meal, onAdd, onNext }) {
  return (
    <MenuPanel title={`Customize ${meal?.name || 'your meal'}`} itemCount={options.length} hideContinue>
      {options.map(([name, price]) => (
        <article className="menu-item" key={name}>
          <div className="menu-item-name">{name}</div>
          <div className="menu-item-price">{price ? `+${money(price)}` : 'Included'}</div>
          <button className="menu-item-action" type="button" onClick={() => onAdd(name, price)} aria-label={`Add ${name}`} />
        </article>
      ))}
      <article className="menu-item next-menu-item"><div className="menu-item-name">Next</div><div className="menu-item-price">Choose a drink</div><button className="menu-item-action" type="button" onClick={onNext}>Next</button></article>
    </MenuPanel>
  );
}