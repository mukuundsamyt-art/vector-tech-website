import './globals.css';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Vector Tech — Precision Fabrication',
  description: 'CO2 laser cutting, CNC machining, marking, neon signage, and acrylic fabrication — precision delivered.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="grain-overlay">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
