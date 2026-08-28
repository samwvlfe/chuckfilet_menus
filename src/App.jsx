import { useEffect, useState } from 'react';
import { money } from './data/menuData';
import OrderTicket from './components/OrderTicket';
import EntreesPanel from './components/EntreesPanel';
import CombosPanel from './components/CombosPanel';
import SidesPanel from './components/SidesPanel';
import DrinksPanel from './components/DrinksPanel';
import ShakesPanel from './components/ShakesPanel';
import WingsPanel from './components/WingsPanel';
import SaucesPanel from './components/SaucesPanel';
import OtherPanel from './components/OtherPanel';
import MealsPanel from './components/MealsPanel';
import CustomizePanel from './components/CustomizePanel';

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
  ['meals', 'MEALS'],
  ['customize', 'CUSTOMIZE'],
  ['drinks', 'DRINKS'],
  ['sauces', 'SAUCES'],
];

function Header({ isDark, onToggleTheme }) {
  return (
    <header className="header">
      <div className="brand"><div className="logo">CHUCK-FILET</div><div className="logo-subtitle">MARINATED BURGERS</div></div>
      <button
        type="button"
        className="theme-toggle"
        onClick={onToggleTheme}
        aria-pressed={isDark}
        aria-label="Toggle dark mode"
      >
        {isDark ? '☀️ LIGHT' : '🌙 DARK'}
      </button>
      <div className="staff-info">
        <div className="staff-avatar">MJ</div>
        <div className="staff-details"><div className="staff-name">Mike Johnson</div><div className="staff-role">Manager</div></div>
        <div className="time-display"><div className="time">2:15 PM</div><div className="date">May 25, 2025</div></div>
      </div>
    </header>
  );
}

function App() {
  const [activeCategory, setActiveCategory] = useState('meals');
  const [order, setOrder] = useState([]);
  const [currentMeal, setCurrentMeal] = useState(null);
  const [isDark, setIsDark] = useState(() => localStorage.getItem('theme') === 'dark');
  const [customerNumber, setCustomerNumber] = useState('');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const subtotal = order.reduce((sum, item) => sum + item.price, 0);
  const tax = subtotal * 0.07;
  const total = subtotal + tax;
  const ActivePanel = activeCategory === 'meals' ? MealsPanel : activeCategory === 'customize' ? CustomizePanel : panelComponents[activeCategory];
  const selectMeal = (meal) => {
    setOrder((currentOrder) => [...currentOrder, meal]);
    setCurrentMeal(meal);
    setActiveCategory('customize');
  };
  const updateCurrentMeal = (name, price) => {
    setCurrentMeal((meal) => {
      const updatedMeal = { ...meal, price: meal.price + price, details: [...meal.details, name] };
      setOrder((currentOrder) => currentOrder.map((item, index) => index === currentOrder.length - 1 ? updatedMeal : item));
      return updatedMeal;
    });
  };
  const addCustomization = (name, price) => updateCurrentMeal(name, price);
  const addDrink = (item) => updateCurrentMeal(item.name, item.price);
  const addSauce = (item) => {
    updateCurrentMeal(item.name, item.price);
  };
  const finishSauces = () => {
    setCurrentMeal(null);
    setActiveCategory('meals');
  };
  const discardOrder = () => {
    setOrder([]);
    setCurrentMeal(null);
    setActiveCategory('meals');
  };
  const payOrder = () => {
    if (order.length === 0) return;
    setOrder([]);
    setCurrentMeal(null);
    setActiveCategory('meals');
  };
  const reorder = () => {
    setOrder([
      { name: 'Classic Chuck Combo', price: 14.49, details: ['Regular fries', 'Ranch'] },
      { name: 'Classic Chuck', price: 10.49, details: ['No onions'] },
      { name: 'Fountain Drink', price: 2.49, details: [] },
    ]);
    setCurrentMeal(null);
    setActiveCategory('meals');
  };
  const nextStep = activeCategory === 'customize' ? 'drinks' : activeCategory === 'drinks' ? 'sauces' : null;
  const canVisitStep = (key) => categoryTabs.findIndex(([tab]) => tab === key) <= categoryTabs.findIndex(([tab]) => tab === activeCategory);

  return (
    <div className="container">
      <Header isDark={isDark} onToggleTheme={() => setIsDark((current) => !current)} />
      <div className="content">
        <CustomerSidebar customerNumber={customerNumber} onCustomerNumberChange={setCustomerNumber} order={order} subtotal={subtotal} tax={tax} total={total} onDiscard={discardOrder} onReorder={reorder} />
        <main className="main">
        <div className="menu-tabs" role="tablist" aria-label="Menu categories">
          {categoryTabs.map(([key, label], index) => (
            <button className={`menu-tab ${activeCategory === key ? 'active' : ''}`} type="button" role="tab" aria-selected={activeCategory === key} disabled={!canVisitStep(key)} key={key} onClick={() => setActiveCategory(key)}>{index + 1}. {label}</button>
          ))}
        </div>
        <ActivePanel onSelect={selectMeal} meal={currentMeal} onAdd={activeCategory === 'customize' ? addCustomization : activeCategory === 'drinks' ? addDrink : addSauce} onNext={() => setActiveCategory(nextStep)} onFinish={finishSauces} nextLabel={nextStep?.toUpperCase()} />
        <div className="bottom-actions"><button className="btn-secondary" type="button" onClick={discardOrder}>DISCARD ORDER</button><button className="btn-secondary" type="button">HOLD ORDER</button><button className="btn-primary" type="button" onClick={payOrder} disabled={order.length === 0}>PAY {money(total)}</button></div>
        </main>
      </div>
    </div>
  );
}

function CustomerSidebar({ customerNumber, onCustomerNumberChange, order, subtotal, tax, total, onDiscard, onReorder }) {
  const [lookupSubmitted, setLookupSubmitted] = useState(false);
  const hasCustomer = lookupSubmitted && customerNumber.replace(/\D/g, '').length === 10;
  const submitLookup = (event) => {
    if (event.key === 'Enter' && customerNumber.replace(/\D/g, '').length === 10) setLookupSubmitted(true);
  };
  return <aside className="customer-sidebar">
    {!lookupSubmitted && <section className="lookup-panel"><h2>Find customer</h2><p>Search by phone number or name</p><input type="tel" inputMode="numeric" value={customerNumber} onKeyDown={submitLookup} onChange={(event) => onCustomerNumberChange(event.target.value)} placeholder="Enter phone number" /><span className="lookup-or">OR</span><button type="button" className="lookup-button">Search by name</button></section>}
    {hasCustomer && <CustomerProfile onReorder={onReorder} />}
    <OrderTicket order={order} subtotal={subtotal} tax={tax} total={total} onDiscard={onDiscard} onReorder={onReorder} showCustomer={false} />
  </aside>;
}

function CustomerProfile({ onReorder }) {
  return <section className="customer-profile">
    <div className="profile-heading"><div className="profile-avatar">SM</div><div><h2>Sarah Mitchell</h2><span>LOYALTY MEMBER</span></div></div>
    <div className="profile-stats"><div><span>STATUS</span><strong>Gold</strong></div><div><span>POINTS</span><strong>2,450</strong></div><div><span>VISITS</span><strong>18</strong></div></div>
    <div className="profile-detail"><span>PREFERENCES</span><strong>No onions, extra pickles</strong></div>
    <div className="profile-detail"><span>FAVORITE ITEM</span><strong>Classic Chuck Combo</strong></div>
    <button type="button" className="reorder-button" onClick={onReorder}>↻ Reorder last</button>
  </section>;
}

export default App;
