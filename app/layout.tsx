import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Verde – Carbon Persona | Measure Your Environmental Impact',
  description: 'Measure your footprint. Understand your habits. Change your future. Verde turns your lifestyle data into a Carbon Persona for Melbourne residents.',
  keywords: 'carbon footprint, sustainability, Melbourne, environmental impact, carbon tracking',
  openGraph: {
    title: 'Verde – Carbon Persona',
    description: 'Measure your footprint. Understand your habits. Change your future.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}