'use client';

import { useCart } from '@/hooks/useCart';
import { useEffect } from 'react';

export function CartDrawer() {
  const { cart, toggle, isOpen, close } = useCart();

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
        className="absolute inset-0 bg-black/40"
        onClick={close}
      />

      <div className="relative flex h-full w-full max-w-sm flex-col bg-white p-6 shadow-xl">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-neutral-900">
            Cart ({cart.size})
          </h2>
          <button
            type="button"
            onClick={close}
            aria-label="Close cart"
            className="rounded-full p-1 text-neutral-500 hover:bg-neutral-100"
          >
            ✕
          </button>
        </div>

        {cart.isEmpty ? (
          <p className="text-sm text-neutral-500">No houses selected yet.</p>
        ) : (
          <ul className="flex flex-col gap-2 overflow-y-auto">
            {cart.getIds().map((id) => (
              <li
                key={id}
                className="flex items-center justify-between rounded-lg border border-neutral-200 px-3 py-2"
              >
                <span className="text-sm text-neutral-700">House #{id}</span>
                <button
                  type="button"
                  onClick={() => toggle(id)}
                  className="text-xs text-neutral-500 hover:text-neutral-900"
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
