'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TOTAL_FRAMES = 240;

// ── PLACEHOLDER ──────────────────────────────────────────────────────────────
// Place your 240 JPEG frames in:  public/frames/
// Named as:  frame_001.jpg, frame_002.jpg, ... frame_240.jpg
// (zero-padded to 3 digits)
// If your naming differs (e.g. 0001.jpg), update getFramePath below.
function getFramePath(index: number): string {
  const n = String(index + 1).padStart(3, '0');
  return `/frames/frame_${n}.jpg`;
}
// ─────────────────────────────────────────────────────────────────────────────

const PRIORITY_BATCH = 20;

/** Clamp-interpolate a value through a range */
function interp(progress: number, inputs: number[], outputs: number[]): number {
  const p = Math.max(inputs[0], Math.min(inputs[inputs.length - 1], progress));
  for (let i = 0; i < inputs.length - 1; i++) {
    if (p <= inputs[i + 1]) {
      const t = (p - inputs[i]) / (inputs[i + 1] - inputs[i]);
      return outputs[i] + t * (outputs[i + 1] - outputs[i]);
    }
  }
  return outputs[outputs.length - 1];
}

export default function CNCRouterScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const framesRef = useRef<(HTMLImageElement | null)[]>(Array(TOTAL_FRAMES).fill(null));
  const currentFrameRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const isMountedRef = useRef(true);

  const [priorityReady, setPriorityReady] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  // ── Manual scroll tracker — most reliable across environments ──────────────
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onScroll = () => {
      const rect = container.getBoundingClientRect();
      const containerH = container.offsetHeight;
      const viewportH = window.innerHeight;
      const scrolled = -rect.top;
      const total = containerH - viewportH;
      const p = total > 0 ? Math.max(0, Math.min(1, scrolled / total)) : 0;
      setScrollProgress(p);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // sync on mount
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // ── Drive frame from scroll progress ──────────────────────────────────────
  const drawFrame = useCallback((index: number) => {
    const canvas = canvasRef.current;
    const img = framesRef.current[index];
    if (!canvas || !img || !img.complete) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const cw = canvas.width;
    const ch = canvas.height;
    const iw = img.naturalWidth || img.width;
    const ih = img.naturalHeight || img.height;
    if (!iw || !ih) return;

    const scale = Math.min(cw / iw, ch / ih);
    const dw = iw * scale;
    const dh = ih * scale;
    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, (cw - dw) / 2, (ch - dh) / 2, dw, dh);
  }, []);

  useEffect(() => {
    const idx = Math.round(scrollProgress * (TOTAL_FRAMES - 1));
    if (idx === currentFrameRef.current) return;
    currentFrameRef.current = idx;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => drawFrame(idx));
  }, [scrollProgress, drawFrame]);

  // ── Canvas resize ──────────────────────────────────────────────────────────
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ro = new ResizeObserver(() => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      const ctx = canvas.getContext('2d');
      if (ctx) ctx.scale(dpr, dpr);
      drawFrame(currentFrameRef.current);
    });

    ro.observe(canvas);
    return () => ro.disconnect();
  }, [drawFrame]);

  // ── Preload frames ─────────────────────────────────────────────────────────
  useEffect(() => {
    isMountedRef.current = true;
    let loaded = 0;

    const loadImage = (index: number): Promise<void> =>
      new Promise((resolve) => {
        if (framesRef.current[index]) { resolve(); return; }
        const img = new Image();
        img.onload = () => {
          framesRef.current[index] = img;
          loaded++;
          if (isMountedRef.current) setLoadProgress(Math.round((loaded / TOTAL_FRAMES) * 100));
          if (index === 0) drawFrame(0);
          if (loaded >= PRIORITY_BATCH && isMountedRef.current) setPriorityReady(true);
          if (loaded >= TOTAL_FRAMES && isMountedRef.current) setPriorityReady(true);
          resolve();
        };
        img.onerror = () => resolve();
        img.src = getFramePath(index);
      });

    const run = async () => {
      await Promise.all(Array.from({ length: PRIORITY_BATCH }, (_, i) => loadImage(i)));
      if (isMountedRef.current) setPriorityReady(true);
      for (let i = PRIORITY_BATCH; i < TOTAL_FRAMES; i++) {
        if (!isMountedRef.current) break;
        await loadImage(i);
        if (i % 20 === 0) await new Promise(r => setTimeout(r, 4));
      }
    };

    run();
    return () => { isMountedRef.current = false; };
  }, [drawFrame]);

  // ── Text overlay opacities — computed from scroll progress ─────────────────
  // Block 1 (INTRO): visible 0→0, fades OUT by 12%
  const b1op = interp(scrollProgress, [0, 0.06, 0.12], [1, 1, 0]);

  // Block 2 (LASER): fades IN 20→28%, holds, fades OUT 38→45%
  const b2op = interp(scrollProgress, [0.20, 0.28, 0.38, 0.45], [0, 1, 1, 0]);
  const b2y  = interp(scrollProgress, [0.20, 0.28], [18, 0]);

  // Block 3 (CNC): fades IN 52→60%, holds, fades OUT 70→77%
  const b3op = interp(scrollProgress, [0.52, 0.60, 0.70, 0.77], [0, 1, 1, 0]);
  const b3y  = interp(scrollProgress, [0.52, 0.60], [18, 0]);

  // Block 4 (CTA): fades IN 84→91%, stays to 100%
  const b4op = interp(scrollProgress, [0.84, 0.91, 1], [0, 1, 1]);
  const b4y  = interp(scrollProgress, [0.84, 0.91], [18, 0]);

  return (
    <div ref={containerRef} style={{ height: '400vh' }}>
      <div className="sticky top-0 w-full h-screen overflow-hidden" style={{ background: '#050508' }}>

        {/* Loading overlay */}
        <AnimatePresence>
          {!priorityReady && (
            <motion.div
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 z-30 flex flex-col items-center justify-center"
              style={{ background: '#050508' }}
            >
              <div className="flex flex-col items-center gap-6">
                <div className="flex items-center gap-1.5">
                  <span className="text-sm font-bold tracking-[0.18em] uppercase text-[#F2F2F0]">VECTOR</span>
                  <span
                    className="text-sm font-bold tracking-[0.18em] uppercase ml-1"
                    style={{
                      background: 'linear-gradient(90deg, #FF6B1A, #FF8C3D)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    TECH
                  </span>
                </div>
                <div className="w-48 h-px relative overflow-hidden" style={{ background: 'rgba(255,255,255,0.08)' }}>
                  <motion.div
                    className="absolute inset-y-0 left-0"
                    style={{ background: 'linear-gradient(90deg, #FF6B1A, #FF8C3D)' }}
                    animate={{ width: `${loadProgress}%` }}
                    transition={{ duration: 0.2 }}
                  />
                </div>
                <p className="text-xs text-[#9A9AA0] tracking-widest">LOADING</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Canvas */}
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ display: 'block' }} />

        {/* Vignette */}
        <div
          className="absolute inset-0 pointer-events-none z-10"
          style={{ background: 'radial-gradient(ellipse 85% 85% at 50% 50%, transparent 50%, rgba(5,5,8,0.55) 100%)' }}
        />

        {/* ── Block 1: Intro — fades OUT on first scroll, no motion ── */}
        <div
          className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6 pointer-events-none"
          style={{ opacity: b1op }}
        >
          <span className="tag-label mb-6">PRECISION FABRICATION</span>
          <h1
            className="text-4xl sm:text-6xl lg:text-7xl font-bold text-[#F2F2F0] leading-[1.08] mb-4"
            style={{ letterSpacing: '-0.02em' }}
          >
            Vector Tech.
            <br />
            <span style={{ background: 'linear-gradient(90deg, #FF6B1A, #FF8C3D)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Precision,
            </span>{' '}
            Delivered.
          </h1>
          <p className="text-base sm:text-lg text-[#9A9AA0] max-w-md mt-2">
            Industrial-grade fabrication for every material, every scale.
          </p>
          <div className="mt-3 w-16 h-px" style={{ background: 'linear-gradient(90deg, transparent, #FF6B1A, transparent)' }} />
        </div>

        {/* ── Block 2: Laser Cutting — left aligned ── */}
        <div
          className="absolute inset-0 z-20 flex flex-col items-start justify-center px-8 sm:px-16 lg:px-24 pointer-events-none"
          style={{ opacity: b2op, transform: `translateY(${b2y}px)` }}
        >
          <span className="tag-label mb-4">CO2 LASER SYSTEMS</span>
          <h2
            className="text-3xl sm:text-5xl lg:text-6xl font-bold text-[#F2F2F0] leading-[1.1]"
            style={{ letterSpacing: '-0.02em' }}
          >
            Laser Cutting.
            <br />
            <span style={{ color: '#9A9AA0', fontWeight: 400 }}>Micron Precision.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#9A9AA0] max-w-sm">
            From 1mm acrylic to 15mm panels — clean edges, zero post-processing.
          </p>
        </div>

        {/* ── Block 3: CNC Machining — right aligned ── */}
        <div
          className="absolute inset-0 z-20 flex flex-col items-end justify-center px-8 sm:px-16 lg:px-24 text-right pointer-events-none"
          style={{ opacity: b3op, transform: `translateY(${b3y}px)` }}
        >
          <span className="tag-label mb-4">CNC ROUTER</span>
          <h2
            className="text-3xl sm:text-5xl lg:text-6xl font-bold text-[#F2F2F0] leading-[1.1]"
            style={{ letterSpacing: '-0.02em' }}
          >
            CNC Machining.
            <br />
            <span style={{ color: '#9A9AA0', fontWeight: 400 }}>Built to Spec.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#9A9AA0] max-w-sm">
            Computer-controlled toolpaths. Repeatable results at any volume.
          </p>
        </div>

        {/* ── Block 4: CTA — centered ── */}
        <div
          className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6"
          style={{ opacity: b4op, transform: `translateY(${b4y}px)`, pointerEvents: b4op > 0.5 ? 'auto' : 'none' }}
        >
          <span className="tag-label mb-5">END-TO-END FABRICATION</span>
          <h2
            className="text-3xl sm:text-5xl lg:text-6xl font-bold text-[#F2F2F0] leading-[1.1] mb-4"
            style={{ letterSpacing: '-0.02em' }}
          >
            Every Material.
            <br />Every Dimension.
          </h2>
          <p className="text-sm sm:text-base text-[#9A9AA0] max-w-lg mb-8">
            CO2 laser cutting, CNC machining, marking, neon signages, and acrylic fabrication — all under one roof.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a href="#services" className="btn-primary">Explore Services</a>
            <a href="#contact" className="btn-secondary">Get a Quote</a>
          </div>
        </div>

      </div>
    </div>
  );
}
