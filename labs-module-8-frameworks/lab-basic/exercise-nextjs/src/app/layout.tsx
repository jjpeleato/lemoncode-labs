import './globals.css';
import { CartButton } from '@/components/CartButton';
import { CartDrawer } from '@/components/CartDrawer';
import { CartProvider } from '@/context/CartProvider';
import { Geist, Geist_Mono } from 'next/font/google';
import Link from 'next/link';
import type { Metadata } from 'next';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Rural Houses',
  description: 'Browse and discover rural houses available for vacation rental.',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <CartProvider>
          <header className="border-b border-neutral-200">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
              <Link href="/houses" className="text-lg font-bold text-neutral-900">
                Rural Houses
              </Link>
              <CartButton />
            </div>
          </header>

          <CartDrawer />

          {children}
        </CartProvider>
      </body>
    </html>
  );
}
