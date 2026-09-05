import { createFileRoute, notFound, Link } from '@tanstack/react-router';
import { getHouseById } from '@/lib/houses';

export const Route = createFileRoute('/houses_/$id')({
  loader: ({ params }) => {
    const house = getHouseById(params.id);

    if (!house) {
      throw notFound();
    }

    return house;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.name} | Rural Houses` },
          { name: 'description', content: loaderData.description },
        ]
      : [],
  }),
  notFoundComponent: HouseNotFound,
  component: HousePage,
});

function HousePage() {
  const house = Route.useLoaderData();

  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <Link
        to="/houses"
        className="mb-6 inline-block text-sm text-neutral-500 hover:text-neutral-900"
      >
        ← Back to listing
      </Link>

      <div className="overflow-hidden rounded-xl border border-neutral-200">
        <div className="aspect-[16/9] w-full bg-neutral-100">
          <img src={house.image} alt={house.name} className="h-full w-full object-cover" />
        </div>

        <div className="flex flex-col gap-4 p-6">
          <div>
            <h1 className="text-2xl font-bold text-neutral-900">{house.name}</h1>
            <p className="text-sm text-neutral-500">{house.location}</p>
          </div>

          <p className="text-neutral-700">{house.description}</p>

          <div className="flex items-center gap-6 border-t border-neutral-200 pt-4 text-sm text-neutral-600">
            <span>{house.rooms} rooms</span>
            <span>{house.bathrooms} bathrooms</span>
          </div>

          <div className="text-xl font-semibold text-neutral-900">
            {house.pricePerNight} € <span className="text-base font-normal text-neutral-500">/ night</span>
          </div>
        </div>
      </div>
    </main>
  );
}

function HouseNotFound() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12 text-center">
      <p className="mb-4 text-neutral-500">This house could not be found.</p>
      <Link to="/houses" className="text-sm text-neutral-900 underline">
        ← Back to listing
      </Link>
    </main>
  );
}
