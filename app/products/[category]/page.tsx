'use client';

import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { ArrowLeft, MessageCircle } from 'lucide-react';
import { notFound } from 'next/navigation';
import { useRef } from 'react';
import { productCategories } from '@/lib/products-data';

function ProductSection({ product, index }: { product: any; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 48 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
      className="mb-20"
    >
      {/* Product header */}
      <div className="mb-6">
        <p className="text-xs text-[#FF8C3D] tracking-[0.12em] uppercase font-semibold mb-2">
          Product {String(index + 1).padStart(2, '0')}
        </p>
        <h3
          className="text-2xl sm:text-3xl font-bold text-[#F2F2F0] mb-2"
          style={{ letterSpacing: '-0.02em' }}
        >
          {product.name}
        </h3>
        <p className="text-sm text-[#9A9AA0] max-w-2xl">{product.description}</p>
      </div>

      {/* Item cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {product.items.map((item: any, i: number) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="glass-card p-5"
          >
            <h4 className="text-sm font-semibold text-[#F2F2F0] mb-2">{item.title}</h4>
            <p className="text-xs text-[#9A9AA0] leading-relaxed">{item.detail}</p>
          </motion.div>
        ))}
      </div>

      {/* Divider */}
      {index < 2 && (
        <div
          className="mt-16"
          style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(180,180,190,0.15) 30%, rgba(180,180,190,0.15) 70%, transparent)' }}
        />
      )}
    </motion.div>
  );
}

export default function ProductCategoryPage({ params }: { params: { category: string } }) {
  const cat = productCategories[params.category];
  if (!cat) notFound();

  return (
    <main
      className="min-h-screen pt-24"
      style={{
        background: '#0A0A0B',
        backgroundImage: "url('/images/image copy.png')",
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="fixed inset-0 pointer-events-none z-0" style={{ background: 'rgba(8,8,10,0.84)' }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-10 py-12">
        {/* Back */}
        <motion.div initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm text-[#9A9AA0] hover:text-[#F2F2F0] transition-colors mb-10 group"
          >
            <ArrowLeft size={15} className="group-hover:-translate-x-1 transition-transform" />
            Back to products
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <span className="tag-label mb-4 inline-block">{cat.tag}</span>
          <h1
            className="text-4xl sm:text-6xl font-bold text-[#F2F2F0] leading-tight mb-5"
            style={{ letterSpacing: '-0.02em' }}
          >
            {cat.title}
          </h1>
          <p className="text-base sm:text-lg text-[#9A9AA0] leading-relaxed max-w-3xl">{cat.intro}</p>
        </motion.div>

        {/* Products */}
        {cat.products.map((product, i) => (
          <ProductSection key={product.name} product={product} index={i} />
        ))}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="glass-card p-8 sm:p-10 text-center mt-4"
        >
          <span className="tag-label mb-4 inline-block">READY TO ORDER</span>
          <h3
            className="text-2xl sm:text-3xl font-bold text-[#F2F2F0] mb-3"
            style={{ letterSpacing: '-0.02em' }}
          >
            Interested in these products?
          </h3>
          <p className="text-sm sm:text-base text-[#9A9AA0] mb-8 max-w-xl mx-auto">
            Share your requirements and our team will provide a detailed quote within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/#contact" className="btn-primary">
              Get a Quote
            </a>
            <a
              href="https://wa.me/919876543210?text=Hi%20VectorTech%2C%20I%27m%20interested%20in%20your%20products"
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
