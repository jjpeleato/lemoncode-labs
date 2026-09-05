import { Image } from '@unpic/react';
import { Link } from '@tanstack/react-router';
import type { House } from '@/lib/types';

interface HouseCardProps {
  house: House;
}

export function HouseCard({ house }: HouseCardProps) {
  return (
    <Link
      to="/houses/$id"
      params={{ id: house.id }}
      className="group flex flex-col overflow-hidden rounded-xl border border-neutral-200 transition-shadow hover:shadow-lg"
    >
      <div className="w-full overflow-hidden bg-neutral-100">
        <Image
          src={house.image}
          alt={house.name}
          layout="constrained"
          width={800}
          height={600}
          className="transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <h3 className="text-lg font-semibold text-neutral-900">{house.name}</h3>
        <p className="text-sm text-neutral-500">{house.location}</p>
        <p className="line-clamp-2 text-sm text-neutral-600">{house.summary}</p>

        <div className="mt-auto flex items-center justify-between pt-2">
          <span className="text-sm text-neutral-500">
            {house.rooms} rooms · {house.bathrooms} baths
          </span>
          <span className="text-base font-semibold text-neutral-900">
            {house.pricePerNight} € <span className="font-normal text-neutral-500">/night</span>
          </span>
        </div>
      </div>
    </Link>
  );
}
