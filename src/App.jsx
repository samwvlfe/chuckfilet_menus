import { useState } from 'react';
import { money } from './data/menuData';
import KitchenDisplay from './components/KitchenDisplay';
import OrderTicket from './components/OrderTicket';
import EntreesPanel from './components/EntreesPanel';
import CombosPanel from './components/CombosPanel';
import SidesPanel from './components/SidesPanel';
import DrinksPanel from './components/DrinksPanel';
import ShakesPanel from './components/ShakesPanel';
import WingsPanel from './components/WingsPanel';
import SaucesPanel from './components/SaucesPanel';
import OtherPanel from './components/OtherPanel';

const panelComponents = {
  entrees: EntreesPanel,
  combos: CombosPanel,
  sides: SidesPanel,
  drinks: DrinksPanel,
  shakes: ShakesPanel,
  wings: WingsPanel,
  sauces: SaucesPanel,
  other: OtherPanel,
};

const categoryTabs = [
  ['entrees', 'ENTREES'],
  ['combos', 'COMBOS'],
  ['sides', 'SIDES'],
  ['drinks', 'DRINKS'],
  ['shakes', 'SHAKES'],
  ['wings', 'WINGS'],
  ['sauces', 'SAUCES'],
  ['other', 'OTHER'],
];

function Header({ activeScreen, onScreenChange }) {
  return (
    <header className="header">
      <div className="brand"><div className="logo">CHUCK-FILET</div><div className="logo-subtitle">MARINATED BURGERS</div></div>
      <label className="register-info"><span className="register-label">SCREEN</span><select className="register-dropdown" value={activeScreen} onChange={(event) => onScreenChange(event.target.value)} aria-label="Select screen"><option value="register">REGISTER 1</option><option value="kds">KITCHEN DISPLAY</option></select></label>
      <div className="staff-info">
        <div className="staff-avatar">MJ</div>
        <div className="staff-details"><div className="staff-name">Mike Johnson</div><div className="staff-role">Manager</div></div>
        <div className="time-display"><div className="time">2:15 PM</div><div className="date">May 25, 2025</div></div>
      </div>
    </header>
  );
}

function App() {
  const [activeScreen, setActiveScreen] = useState('register');
  const [activeCategory, setActiveCategory] = useState('entrees');
  const [order, setOrder] = useState([]);
  const [kdsOrder, setKdsOrder] = useState([]);
  const subtotal = order.reduce((sum, item) => sum + item.price, 0);
  const tax = subtotal * 0.07;
  const total = subtotal + tax;
  const ActivePanel = panelComponents[activeCategory];
  const activeCategoryIndex = categoryTabs.findIndex(([key]) => key === activeCategory);
  const nextCategory = categoryTabs[activeCategoryIndex + 1];

  const addToOrder = (item) => {
    setOrder((currentOrder) => [...currentOrder, item]);
    if (nextCategory) setActiveCategory(nextCategory[0]);
  };
  const goToNextPanel = () => {
    if (nextCategory) setActiveCategory(nextCategory[0]);
  };
  const discardOrder = () => {
    setOrder([]);
    setActiveCategory('entrees');
  };
  const payOrder = () => {
    if (order.length === 0) return;
    setKdsOrder(order);
    setOrder([]);
    setActiveScreen('kds');
  };

  return (
    <div className="container">
      <Header activeScreen={activeScreen} onScreenChange={setActiveScreen} />
      <div className="content">
        {activeScreen === 'kds' ? <KitchenDisplay order={kdsOrder} /> : <>
          <OrderTicket order={order} subtotal={subtotal} tax={tax} total={total} onDiscard={discardOrder} />
          <main className="main">
          <div className="menu-tabs" role="tablist" aria-label="Menu categories">
            {categoryTabs.map(([key, label]) => (
              <button className={`menu-tab ${activeCategory === key ? 'active' : ''}`} type="button" role="tab" aria-selected={activeCategory === key} key={key} onClick={() => setActiveCategory(key)}>{label}</button>
            ))}
          </div>
          <ActivePanel onAdd={addToOrder} onNext={goToNextPanel} nextLabel={nextCategory?.[1]} />
          <div className="bottom-actions"><button className="btn-secondary" type="button" onClick={discardOrder}>DISCARD ORDER</button><button className="btn-secondary" type="button">HOLD ORDER</button><button className="btn-primary" type="button" onClick={payOrder} disabled={order.length === 0}>PAY {money(total)}</button></div>
          </main>
        </>}
      </div>
    </div>
  );
}

export default App;
