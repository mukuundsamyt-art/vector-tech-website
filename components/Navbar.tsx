'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/#services' },
  { label: 'Products', href: '/products' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? 'rgba(10, 10, 11, 0.82)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(24px) saturate(1.4)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(24px) saturate(1.4)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(180,180,190,0.08)' : 'none',
      }}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-16 lg:h-[72px]">
        {/* Wordmark */}
        <Link href="/" className="flex items-center gap-0.5 select-none group">
          <span
            className="text-[15px] font-bold tracking-[0.18em] uppercase text-[#F2F2F0] group-hover:text-white transition-colors"
            style={{ letterSpacing: '0.18em' }}
          >
            VECTOR
          </span>
          <span
            className="text-[15px] font-bold tracking-[0.18em] uppercase ml-1.5"
            style={{
              background: 'linear-gradient(90deg, #FF6B1A, #FF8C3D)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              letterSpacing: '0.18em',
            }}
          >
            TECH
          </span>
          <span
            className="ml-1 w-1 h-1 rounded-full flex-shrink-0"
            style={{ background: 'linear-gradient(135deg, #FF6B1A, #FF8C3D)', marginBottom: '1px' }}
          />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium text-[#9A9AA0] hover:text-[#F2F2F0] transition-colors duration-200 group"
              >
                {link.label}
                <span
                  className="absolute bottom-1.5 left-4 right-4 h-px origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                  style={{ background: 'linear-gradient(90deg, #FF6B1A, #FF8C3D)' }}
                />
              </Link>
            </li>
          ))}
        </ul>

        {/* Get Quote CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/#contact"
            className="btn-primary text-sm"
            style={{ padding: '0.55rem 1.25rem' }}
          >
            Get Quote
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-[#9A9AA0] hover:text-[#F2F2F0] transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className="lg:hidden overflow-hidden transition-all duration-400"
        style={{
          maxHeight: mobileOpen ? '320px' : '0',
          background: 'rgba(10, 10, 11, 0.95)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          borderBottom: mobileOpen ? '1px solid rgba(180,180,190,0.1)' : 'none',
        }}
      >
        <ul className="px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block py-3 text-sm font-medium text-[#9A9AA0] hover:text-[#F2F2F0] border-b border-[rgba(180,180,190,0.08)] transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="pt-3">
            <Link href="/#contact" className="btn-primary w-full justify-center text-sm" onClick={() => setMobileOpen(false)}>
              Get Quote
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
