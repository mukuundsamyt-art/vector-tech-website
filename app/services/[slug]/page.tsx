'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, MessageCircle } from 'lucide-react';
import { notFound } from 'next/navigation';
import { services } from '@/lib/services-data';

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services[params.slug];
  if (!service) notFound();

  return (
    <main
      className="min-h-screen pt-24"
      style={{
        background: '#0A0A0B',
        backgroundImage: 'url(/images/image copy.png)',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark overlay */}
      <div className="fixed inset-0 pointer-events-none z-0" style={{ background: 'rgba(8,8,10,0.84)' }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-10 py-12">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45 }}
        >
          <Link
            href="/#services"
            className="inline-flex items-center gap-2 text-sm text-[#9A9AA0] hover:text-[#F2F2F0] transition-colors mb-10 group"
          >
            <ArrowLeft size={15} className="group-hover:-translate-x-1 transition-transform" />
            Back to services
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14"
        >
          <span className="tag-label mb-4 inline-block">{service.tag}</span>
          <h1
            className="text-4xl sm:text-6xl font-bold text-[#F2F2F0] leading-tight mb-5"
            style={{ letterSpacing: '-0.02em' }}
          >
            {service.title}
          </h1>
          <p className="text-base sm:text-lg text-[#9A9AA0] leading-relaxed max-w-3xl">
            {service.intro}
          </p>
        </motion.div>

        {/* Materials & Capabilities */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.12 }}
          className="mb-14"
        >
          <h2 className="text-xs font-semibold tracking-[0.12em] uppercase text-[#9A9AA0] mb-8">
            Materials & Capabilities
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {service.materials.map((mat, i) => (
              <motion.div
                key={mat.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="glass-card p-6"
              >
                <div className="mb-4">
                  <h3 className="text-base font-semibold text-[#F2F2F0]">{mat.name}</h3>
                  {mat.specs && (
                    <p className="text-xs text-[#9A9AA0] mt-0.5">{mat.specs}</p>
                  )}
                </div>
                <ul className="space-y-2">
                  {mat.capabilities.map((cap) => (
                    <li key={cap} className="flex items-center gap-2.5 text-sm text-[#9A9AA0]">
                      <Check size={12} className="text-[#FF8C3D] flex-shrink-0" />
                      {cap}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="glass-card p-8 sm:p-10 text-center"
        >
          <span className="tag-label mb-4 inline-block">GET STARTED</span>
          <h3
            className="text-2xl sm:text-3xl font-bold text-[#F2F2F0] mb-3"
            style={{ letterSpacing: '-0.02em' }}
          >
            Interested in this service?
          </h3>
          <p className="text-sm sm:text-base text-[#9A9AA0] mb-8 max-w-xl mx-auto">
            Share your requirements and our team will provide a detailed quote within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/#contact" className="btn-primary">
              Get a Quote
            </a>
            <a
              href="https://wa.me/919876543210?text=Hi%20VectorTech%2C%20I%27m%20interested%20in%20your%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center gap-2"
            >
              <MessageCircle size={15} />
              Chat on WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
