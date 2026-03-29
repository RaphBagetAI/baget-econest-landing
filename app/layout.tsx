import './globals.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'EcoNest – Sustainable Home Goods',
  description: 'EcoNest curates eco-friendly home essentials crafted from sustainable materials. Join our early-access waitlist.',
  icons: {
    icon: '/logo.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
