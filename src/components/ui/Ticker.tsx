import { TICKER_ITEMS } from '../../data/content';

export function Ticker() {
  const sequence = TICKER_ITEMS.flatMap((item) => [item, '·'] as const);
  const items = [...sequence, ...sequence];

  return (
    <div className="ticker">
      <div className="ticker-track">
        {items.map((item, index) => (
          <span key={`${item}-${index}`} className="ticker-item">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
