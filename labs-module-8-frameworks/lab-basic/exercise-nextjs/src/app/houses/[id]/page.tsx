import { getHouseById, getHouses } from '@/lib/houses';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const revalidate = 60;

interface HousePageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return getHouses().map((house) => ({ id: house.id }));
}

export async function generateMetadata({ params }: HousePageProps): Promise<Metadata> {
  const { id } = await params;
  const house = getHouseById(id);

  if (!house) {
    return { title: 'House not found' };
  }

  return {
    title: `${house.name} | Rural Houses`,
    description: house.description,
  };
}

export default async function HousePage({ params }: HousePageProps) {
  const { id } = await params;
  const house = getHouseById(id);

  if (!house) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <Link
        href="/houses"
        className="mb-6 inline-block text-sm text-neutral-500 hover:text-neutral-900"
      >
        ← Back to listing
      </Link>

      <div className="overflow-hidden rounded-xl border border-neutral-200">
        <div className="relative aspect-video w-full bg-neutral-100">
          <Image
            src={house.image}
            alt={house.name}
            fill
            priority
            sizes="(min-width: 1024px) 800px, 100vw"
            className="object-cover"
          />
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
