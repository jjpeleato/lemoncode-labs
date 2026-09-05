import { getHouses } from '@/lib/houses';
import { HouseSearch } from '@/components/HouseSearch';

export const revalidate = 60;

export default function HousesPage() {
  const houses = getHouses();

  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="mb-8 text-3xl font-bold text-neutral-900">Rural Houses</h1>
      <HouseSearch houses={houses} />
    </main>
  )
}
