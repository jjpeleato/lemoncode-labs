'use client';

import { useCart } from '@/hooks/useCart';

interface ReserveButtonProps {
  houseId: string;
  houseName: string;
  variant?: 'icon' | 'full';
}

export function ReserveButton({ houseId, houseName, variant = 'icon' }: ReserveButtonProps) {
  const { cart, toggle } = useCart();
  const isReserved = cart.contains(houseId);
  const ariaLabel = isReserved ? `Remove ${houseName} from cart` : `Add ${houseName} to cart`;

  if (variant === 'full') {
    return (
      <button
        type="button"
        onClick={() => toggle(houseId)}
        aria-pressed={isReserved}
        aria-label={ariaLabel}
        className={`cursor-pointer w-full rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${
          isReserved
            ? 'bg-neutral-100 text-neutral-900 hover:bg-neutral-200'
            : 'bg-neutral-900 text-white hover:opacity-90'
        }`}
      >
        {isReserved ? 'Reserved' : 'Reserve'}
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={() => toggle(houseId)}
      aria-pressed={isReserved}
      aria-label={ariaLabel}
      className={`cursor-pointer flex h-9 w-9 items-center justify-center rounded-full shadow-sm transition-colors ${
        isReserved ? 'bg-neutral-900 text-white' : 'bg-white/90 text-neutral-700 hover:bg-white'
      }`}
    >
      {isReserved ? (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
          <path d="M12 5v14M5 12h14" strokeLinecap="round" />
        </svg>
      )}
    </button>
  );
}
