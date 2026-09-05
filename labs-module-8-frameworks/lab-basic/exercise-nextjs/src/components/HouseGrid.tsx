import { HouseCard } from './HouseCard';
import type { House } from '@/lib/types';

interface HouseGridProps {
  houses: House[]
}

export function HouseGrid({ houses }: HouseGridProps) {
  if (houses.length === 0) {
    return (
      <p className="w-full py-16 text-center text-neutral-500">
        No houses match your search.
      </p>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {houses.map((house) => (
        <HouseCard key={house.id} house={house} />
      ))}
    </div>
  )
}
