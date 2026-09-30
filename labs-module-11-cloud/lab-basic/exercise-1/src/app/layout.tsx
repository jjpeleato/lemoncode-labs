import type { Metadata } from 'next';
import { Bricolage_Grotesque, Newsreader } from 'next/font/google';
import './globals.css';

const bricolage = Bricolage_Grotesque({
  variable: '--font-bricolage',
  subsets: ['latin'],
});

const newsreader = Newsreader({
  variable: '--font-newsreader',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'LemonCode Labs',
  description: 'Every lab completed during the LemonCode Front-End Master.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${bricolage.variable} ${newsreader.variable} h-full antialiased`}>
      <body className="min-h-full bg-leaf-paper font-body text-ink">{children}</body>
    </html>
  );
}
