import { useState } from 'react';

interface PillFilterProps {
  categories: readonly string[];
}

export function PillFilter({ categories }: PillFilterProps) {
  const [active, setActive] = useState(categories[0]);

  return (
    <div className="pill-row">
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          className={`pill${active === category ? ' active' : ''}`}
          onClick={() => setActive(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
