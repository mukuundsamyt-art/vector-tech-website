import Link from 'next/link';
import { MessageCircle, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer
      className="relative mt-0"
      style={{ background: 'linear-gradient(180deg, #0A0A0B 0%, #0D0D0F 100%)' }}
    >
      {/* Orange top strand */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent 0%, #FF6B1A 30%, #FF8C3D 60%, transparent 100%)' }}
      />

      {/* Background image overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: 'url(/images/image.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-1 mb-4">
              <span className="text-[15px] font-bold tracking-[0.18em] uppercase text-[#F2F2F0]">VECTOR</span>
              <span
                className="text-[15px] font-bold tracking-[0.18em] uppercase ml-1.5"
                style={{
                  background: 'linear-gradient(90deg, #FF6B1A, #FF8C3D)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                TECH
              </span>
              <span className="ml-1 w-1 h-1 rounded-full bg-gradient-to-br from-[#FF6B1A] to-[#FF8C3D]" />
            </div>
            <p className="text-sm text-[#9A9AA0] leading-relaxed mb-5 max-w-xs">
              Precision fabrication studio — CO2 laser cutting, CNC machining, and custom signage solutions built to exact specification.
            </p>
            <a
              href="https://wa.me/919876543210?text=Hi%20VectorTech%2C%20I%27m%20interested%20in%20your%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#FF8C3D] hover:text-[#FF9F5A] transition-colors"
            >
              <MessageCircle size={15} />
              Chat on WhatsApp
            </a>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.12em] uppercase text-[#F2F2F0] mb-5">Navigation</h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', href: '/' },
                { label: 'Services', href: '/#services' },
                { label: 'Products', href: '/products' },
                { label: 'About', href: '/#about' },
                { label: 'Contact', href: '/#contact' },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-[#9A9AA0] hover:text-[#F2F2F0] transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services links */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.12em] uppercase text-[#F2F2F0] mb-5">Services</h4>
            <ul className="space-y-3">
              {[
                { label: 'CO2 Laser Cutting', href: '/services/co2-laser-cutting' },
                { label: 'CNC Machining', href: '/services/cnc-machining' },
                { label: 'CO2 Marking', href: '/services/co2-marking' },
                { label: 'Neon Signages', href: '/services/neon-signages' },
                { label: 'Trading & Fabrication', href: '/services/trading-fabrication' },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-[#9A9AA0] hover:text-[#F2F2F0] transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.12em] uppercase text-[#F2F2F0] mb-5">Contact</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm text-[#9A9AA0]">
                <Mail size={14} className="mt-0.5 flex-shrink-0 text-[#FF8C3D]" />
                <span>info@vectortech.in</span>
              </li>
              <li className="flex gap-3 text-sm text-[#9A9AA0]">
                <MessageCircle size={14} className="mt-0.5 flex-shrink-0 text-[#FF8C3D]" />
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F2F2F0] transition-colors"
                >
                  +91 98765 43210
                </a>
              </li>
              <li className="flex gap-3 text-sm text-[#9A9AA0]">
                <MapPin size={14} className="mt-0.5 flex-shrink-0 text-[#FF8C3D]" />
                <span>India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: '1px solid rgba(180,180,190,0.08)' }}
        >
          <p className="text-xs text-[#9A9AA0]">
            © {new Date().getFullYear()} Vector Tech. All rights reserved.
          </p>
          <p className="text-xs text-[#9A9AA0]">
            Precision Fabrication · Made in India
          </p>
        </div>
      </div>
    </footer>
  );
}
