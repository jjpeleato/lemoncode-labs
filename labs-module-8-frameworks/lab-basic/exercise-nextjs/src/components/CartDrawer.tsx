'use client';

import { getHouses } from '@/lib/houses';
import { useCart } from '@/hooks/useCart';
import { useEffect, useMemo } from 'react';

export function CartDrawer() {
  const { cart, toggle, isOpen, close } = useCart();

  const reservedHouses = useMemo(() => {
    const houses = getHouses();
    return houses.filter((house) => cart.contains(house.id));
  }, [cart]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, close]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <button
        type="button"
        aria-label="Close cart"
        className="cursor-pointer absolute inset-0 bg-black/40"
        onClick={close}
      />

      <div className="relative flex h-full w-full max-w-sm flex-col bg-white p-6 shadow-xl">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-neutral-900">Cart ({cart.size})</h2>
          <button
            type="button"
            onClick={close}
            aria-label="Close cart"
            className="cursor-pointer rounded-full p-1 text-neutral-500 hover:bg-neutral-100"
          >
            ✕
          </button>
        </div>

        {cart.isEmpty ? (
          <p className="text-sm text-neutral-500">No houses selected yet.</p>
        ) : (
          <ul className="flex flex-col gap-3 overflow-y-auto">
            {reservedHouses.map((house) => (
              <li
                key={house.id}
                className="flex items-center gap-3 rounded-lg border border-neutral-200 p-3"
              >
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-neutral-900">{house.name}</p>
                  <p className="text-xs text-neutral-500">{house.location}</p>
                  <p className="text-xs font-medium text-neutral-700">
                    {house.pricePerNight} € / night
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => toggle(house.id)}
                  aria-label={`Remove ${house.name} from cart`}
                  className="cursor-pointer shrink-0 text-xs text-neutral-500 hover:text-neutral-900"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
