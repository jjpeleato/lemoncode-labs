import { createFileRoute } from '@tanstack/react-router';
import { getHouses } from '@/lib/houses';
import { HouseGrid } from '@/components/HouseGrid';

export const Route = createFileRoute('/houses')({
  loader: () => getHouses(),
  component: HousesPage,
});

function HousesPage() {
  const houses = Route.useLoaderData();

  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="mb-8 text-3xl font-bold text-neutral-900">
        Rural houses for your next getaway
      </h1>
      <HouseGrid houses={houses} />
    </main>
  );
}
