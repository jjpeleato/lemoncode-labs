import { useState, useMemo } from 'react';
import type { House } from '@/lib/types';
import { HouseGrid } from './HouseGrid';

interface HouseSearchProps {
  houses: House[];
}

export function HouseSearch({ houses }: HouseSearchProps) {
  const [query, setQuery] = useState('');

  const filteredHouses = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return houses;

    return houses.filter(
      (house) =>
        house.name.toLowerCase().includes(term) ||
        house.location.toLowerCase().includes(term),
    );
  }, [houses, query]);

  return (
    <div>
      <label htmlFor="house-search" className="sr-only">
        Search by name or location
      </label>
      <input
        id="house-search"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search by name or location..."
        className="mb-8 w-full max-w-md rounded-lg border border-neutral-300 px-4 py-2 text-sm focus:border-neutral-900 focus:outline-none"
      />

      <HouseGrid houses={filteredHouses} />
    </div>
  );
}
