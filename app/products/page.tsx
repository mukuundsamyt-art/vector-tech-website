'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { categoryCards } from '@/lib/products-data';

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

export default function ProductsPage() {
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
      <div className="fixed inset-0 pointer-events-none z-0" style={{ background: 'rgba(8,8,10,0.84)' }} />
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{ background: 'radial-gradient(ellipse 70% 40% at 50% 0%, rgba(255,107,26,0.06) 0%, transparent 60%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="mb-16"
        >
          <span className="tag-label mb-4 inline-block">OUR CATALOGUE</span>
          <h1
            className="text-4xl sm:text-6xl font-bold text-[#F2F2F0] leading-tight mb-4"
            style={{ letterSpacing: '-0.02em' }}
          >
            Products We
            <br />
            <span
              style={{
                background: 'linear-gradient(90deg, #FF6B1A, #FF8C3D)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Fabricate
            </span>
          </h1>
          <p className="text-base text-[#9A9AA0] max-w-xl leading-relaxed">
            Browse by category — every product made in-house to your exact specification.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categoryCards.map((cat, i) => (
            <motion.div
              key={cat.slug}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={cardVariants}
            >
              <Link href={`/products/${cat.slug}`} className="block h-full">
                <div className="glass-card h-full p-7 flex flex-col gap-4 cursor-pointer group">
                  <h3
                    className="text-lg font-semibold text-[#F2F2F0] leading-tight"
                    style={{ letterSpacing: '-0.01em' }}
                  >
                    {cat.title}
                  </h3>
                  <p className="text-sm text-[#9A9AA0] leading-relaxed flex-1">{cat.description}</p>
                  <div className="flex items-center gap-1.5 text-xs font-medium text-[#FF8C3D] group-hover:text-[#FF9F5A] transition-colors">
                    View products
                    <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
