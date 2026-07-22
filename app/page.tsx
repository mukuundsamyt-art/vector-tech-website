'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Cpu, Scan, Lightbulb, Package } from 'lucide-react';
import CNCRouterScroll from '@/components/CNCRouterScroll';

const services = [
  {
    slug: 'co2-laser-cutting',
    icon: Zap,
    tag: 'Acrylic · MDF · Leather · Glass',
    title: 'CO2 Laser Cutting',
    description:
      'Precision laser cutting and engraving on acrylic, MDF, leather, glass, and crystal with exceptional edge quality and ultra-fine detail.',
  },
  {
    slug: 'cnc-machining',
    icon: Cpu,
    tag: 'Wood · WPC · ACP · Acrylic',
    title: 'CNC Machining',
    description:
      'Computer-controlled cutting, carving, and profiling on wood, WPC, ACP, and acrylic for exact, repeatable results at any volume.',
  },
  {
    slug: 'co2-marking',
    icon: Scan,
    tag: 'Bottles · SS · Acrylic · PVC',
    title: 'CO2 Marking',
    description:
      'Permanent branding and machine labeling on bottles, acrylic, stainless steel, and PVC products — sharp, durable, and precise.',
  },
  {
    slug: 'neon-signages',
    icon: Lightbulb,
    tag: 'Custom · Indoor · Outdoor',
    title: 'Neon Signages',
    description:
      'Custom neon sign fabrication for businesses, events, and interiors — vibrant, durable, and crafted fully to order.',
  },
  {
    slug: 'trading-fabrication',
    icon: Package,
    tag: 'Sheets · Sign Boards · Stands',
    title: 'Trading and Fabrication',
    description:
      'Acrylic sheet supply, sign boards, acrylic boxes, visual merchandise, and custom acrylic stands for every display need.',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

export default function HomePage() {
  return (
    <main className="min-h-screen" style={{ background: '#0A0A0B' }}>
      {/* ── HERO ── */}
      <CNCRouterScroll />

      {/* ── SERVICES ── */}
      <section
        id="services"
        className="relative py-24 lg:py-36 px-6 lg:px-10"
        style={{
          background: '#0A0A0B',
          backgroundImage: 'url(/images/image.png)',
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'luminosity',
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'rgba(10,10,11,0.91)' }} />
        {/* Radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 70% 40% at 50% 0%, rgba(255,107,26,0.06) 0%, transparent 60%)',
          }}
        />

        <div className="relative max-w-7xl mx-auto">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-16 max-w-2xl"
          >
            <span className="tag-label mb-4 inline-block">WHAT WE DO</span>
            <h2
              className="text-3xl sm:text-5xl font-bold text-[#F2F2F0] leading-tight mb-4"
              style={{ letterSpacing: '-0.02em' }}
            >
              Precision at Every
              <br />
              <span
                style={{
                  background: 'linear-gradient(90deg, #FF6B1A, #FF8C3D)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Scale & Material
              </span>
            </h2>
            <p className="text-base text-[#9A9AA0] leading-relaxed">
              Five focused service lines. One standard — exact.
            </p>
          </motion.div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <motion.div
                  key={svc.slug}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-60px' }}
                  variants={cardVariants}
                >
                  <Link href={`/services/${svc.slug}`} className="block h-full">
                    <div className="glass-card h-full p-7 flex flex-col gap-4 cursor-pointer group">
                      <div className="flex items-start justify-between">
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                          style={{
                            background: 'rgba(255,107,26,0.08)',
                            border: '1px solid rgba(255,107,26,0.2)',
                          }}
                        >
                          <Icon size={18} className="text-[#FF8C3D]" strokeWidth={1.6} />
                        </div>
                        <ArrowRight
                          size={15}
                          className="text-[#9A9AA0] group-hover:text-[#FF8C3D] transition-colors mt-1"
                          strokeWidth={1.8}
                        />
                      </div>
                      <div>
                        <span className="tag-label mb-3 inline-block" style={{ fontSize: '0.62rem' }}>
                          {svc.tag}
                        </span>
                        <h3
                          className="text-lg font-semibold text-[#F2F2F0] mb-2 leading-tight"
                          style={{ letterSpacing: '-0.01em' }}
                        >
                          {svc.title}
                        </h3>
                        <p className="text-sm text-[#9A9AA0] leading-relaxed">{svc.description}</p>
                      </div>
                      <div className="mt-auto pt-2">
                        <span className="text-xs font-medium text-[#FF8C3D] group-hover:text-[#FF9F5A] transition-colors tracking-wide">
                          Explore service →
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section
        id="about"
        className="relative py-24 lg:py-36 px-6 lg:px-10"
        style={{
          background: '#0A0A0B',
          backgroundImage: 'url(/images/image.png)',
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'luminosity',
        }}
      >
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'rgba(10,10,11,0.93)' }} />
        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="tag-label mb-5 inline-block">ABOUT VECTOR TECH</span>
              <h2
                className="text-3xl sm:text-5xl font-bold text-[#F2F2F0] leading-tight mb-6"
                style={{ letterSpacing: '-0.02em' }}
              >
                Built on Precision.
                <br />
                <span
                  style={{
                    background: 'linear-gradient(90deg, #FF6B1A, #FF8C3D)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Driven by Detail.
                </span>
              </h2>
              <p className="text-base text-[#9A9AA0] leading-relaxed mb-4">
                Vector Tech is an industrial fabrication studio specialising in CO2 laser systems, CNC routing, and custom signage. We serve businesses that can't afford imprecision — from retail displays to industrial machine labels.
              </p>
              <p className="text-base text-[#9A9AA0] leading-relaxed">
                Our machines run tight tolerances. Our team checks every piece before it ships. That's the standard.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { value: '5+', label: 'Service Lines' },
                { value: '500+', label: 'Projects Completed' },
                { value: '24h', label: 'Quote Turnaround' },
                { value: '99%', label: 'Repeat Clients' },
              ].map((stat) => (
                <div key={stat.label} className="glass-card p-6 text-center">
                  <p
                    className="text-3xl font-bold mb-1"
                    style={{
                      background: 'linear-gradient(90deg, #FF6B1A, #FF8C3D)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-xs text-[#9A9AA0] tracking-wide">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section
        id="contact"
        className="relative py-24 lg:py-32 px-6 lg:px-10"
        style={{
          background: '#0A0A0B',
          backgroundImage: 'url(/images/image.png)',
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'luminosity',
        }}
      >
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'rgba(10,10,11,0.93)' }} />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(255,107,26,0.07) 0%, transparent 60%)',
          }}
        />
        <div className="relative max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="tag-label mb-5 inline-block">GET IN TOUCH</span>
            <h2
              className="text-3xl sm:text-5xl font-bold text-[#F2F2F0] leading-tight mb-4"
              style={{ letterSpacing: '-0.02em' }}
            >
              Ready to Build
              <br />
              <span
                style={{
                  background: 'linear-gradient(90deg, #FF6B1A, #FF8C3D)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Something Precise?
              </span>
            </h2>
            <p className="text-base text-[#9A9AA0] leading-relaxed mb-10 max-w-xl mx-auto">
              Share your requirements and our team will provide a detailed quote within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:info@vectortech.in"
                className="btn-primary"
              >
                Email Us
              </a>
              <a
                href="https://wa.me/919876543210?text=Hi%20VectorTech%2C%20I%27m%20interested%20in%20your%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
