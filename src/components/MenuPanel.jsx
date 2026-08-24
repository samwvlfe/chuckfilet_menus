export default function MenuPanel({ title, itemCount, nextLabel, onNext, children }) {
  return (
    <>
      <div className="menu-heading">
        <div><h1>{title}</h1></div>
        <span className="menu-count">{itemCount} items</span>
      </div>
      <div className="menu-grid" role="tabpanel">
        {children}
        <article className="menu-item next-menu-item">
          <div className="menu-item-name">Continue</div>
          <div className="menu-item-price">{nextLabel ? `Next: ${nextLabel}` : 'Ready'}</div>
          <button className="menu-item-action" type="button" onClick={onNext} disabled={!nextLabel}>{nextLabel ? 'Continue' : 'Complete'}</button>
        </article>
      </div>
    </>
  );
}
