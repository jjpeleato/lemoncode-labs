'use client';

import { useCart } from '@/hooks/useCart';

export function CartButton() {
  const { cart } = useCart();

  return (
    <button
      type="button"
      aria-label={`Cart, ${cart.size} ${cart.size === 1 ? 'house' : 'houses'} selected`}
      className="relative rounded-full p-2 text-neutral-700 transition-colors hover:bg-neutral-100"
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <path
          d="M6 6h15l-1.5 9h-12z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M6 6 4.5 3H2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="9" cy="20" r="1" />
        <circle cx="18" cy="20" r="1" />
      </svg>

      {!cart.isEmpty && (
        <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-neutral-900 text-xs font-medium text-white">
          {cart.size}
        </span>
      )}
    </button>
  );
}
