import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';

import biryaniImg from '@/assets/slider/biryani.jpg';
import bbqImg from '@/assets/slider/bbq.jpg';
import daalChawalImg from '@/assets/slider/daal-chawal.jpg';
import eggSandwichImg from '@/assets/slider/egg-sandwich.jpg';
import chickenKarahiImg from '@/assets/slider/chicken-karahi.jpg';
import pulaoImg from '@/assets/slider/pulao.jpg';
import sabziImg from '@/assets/slider/sabzi.jpg';
import nihariImg from '@/assets/slider/nihari.jpg';
import naanRotiImg from '@/assets/slider/naan-roti.jpg';
import haleemImg from '@/assets/slider/haleem.jpg';
import chapliKebabImg from '@/assets/slider/chapli-kebab.jpg';
import chickenTikkaImg from '@/assets/slider/chicken-tikka.jpg';
import parathaImg from '@/assets/slider/paratha.jpg';
import drinksImg from '@/assets/slider/drinks.jpg';
import dessertsImg from '@/assets/slider/desserts.jpg';

const slides = [
  { src: biryaniImg, label: 'Biryani' },
  { src: bbqImg, label: 'BBQ Platter' },
  { src: daalChawalImg, label: 'Daal Chawal' },
  { src: eggSandwichImg, label: 'Egg Sandwich' },
  { src: chickenKarahiImg, label: 'Chicken Karahi' },
  { src: pulaoImg, label: 'Pulao' },
  { src: sabziImg, label: 'Sabzi' },
  { src: nihariImg, label: 'Nihari' },
  { src: naanRotiImg, label: 'Naan & Roti' },
  { src: haleemImg, label: 'Haleem' },
  { src: chapliKebabImg, label: 'Chapli Kebab' },
  { src: chickenTikkaImg, label: 'Chicken Tikka' },
  { src: parathaImg, label: 'Paratha' },
  { src: drinksImg, label: 'Chai & Lassi' },
  { src: dessertsImg, label: 'Desserts' },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent(i => (i + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent(i => (i - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    slides.forEach(slide => {
      const image = new Image();
      image.src = slide.src;
    });
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 3000);
    return () => clearInterval(timer);
  }, [next]);

  const scrollTo = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Slider Background */}
      <AnimatePresence mode="sync" initial={false}>
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.03 }}
          transition={{ duration: 0.9, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          <img
            src={slides[current].src}
            alt={slides[current].label}
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
            loading="eager"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-deep-brown/70 via-deep-brown/50 to-deep-brown/80" />
        </motion.div>
      </AnimatePresence>

      {/* Arrows */}
      <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center text-cream hover:bg-background/40 transition-colors">
        <ChevronLeft size={24} />
      </button>
      <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center text-cream hover:bg-background/40 transition-colors">
        <ChevronRight size={24} />
      </button>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <p className="text-rose-gold font-sans text-sm sm:text-base tracking-[0.3em] uppercase mb-4">
            Corporate Catering Islamabad
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-cream leading-tight mb-6"
        >
          Islamabad&apos;s Trusted Corporate Catering Service - <span className="gradient-text">SU Food</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
          className="text-cream/80 text-base sm:text-lg max-w-2xl mx-auto mb-10 font-sans"
        >
          Islamabad&apos;s top offices and call centers trust SU Food for fresh, hygienic, and delicious meals. BBQ, Biryani, Tikka, Pulao, and Daal Chawal in one place.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button onClick={() => scrollTo('#contact')} className="bg-primary hover:bg-secondary text-primary-foreground px-8 py-3.5 rounded-full font-medium text-sm tracking-wide transition-all hover:shadow-lg">
            Corporate Quote
          </button>
          <button onClick={() => scrollTo('#services')} className="border-2 border-rose-gold text-rose-gold hover:bg-rose-gold hover:text-deep-brown px-8 py-3.5 rounded-full font-medium text-sm tracking-wide transition-all">
            Our Services
          </button>
        </motion.div>
      </div>

      {/* Slide label */}
      <motion.div
        key={`label-${current}`}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10 bg-background/20 backdrop-blur-md px-4 py-1.5 rounded-full"
      >
        <p className="text-cream text-xs font-medium tracking-wider">{slides[current].label}</p>
      </motion.div>

      {/* Dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex gap-1.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${i === current ? 'bg-primary w-6' : 'bg-cream/40 hover:bg-cream/60'}`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollTo('#about')}
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-2 left-1/2 -translate-x-1/2 text-cream/60 hover:text-cream transition-colors z-10"
      >
        <ChevronDown size={32} />
      </motion.button>
    </section>
  );
}
