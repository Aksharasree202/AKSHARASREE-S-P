import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative h-[85vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          className="w-full h-full object-cover brightness-[0.85]" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzmKXvueUIvQZHYJ1ttj9P02TeJf8XgR9bPbnGmikfRTdYhFez8DrKMIkEuiYV8q28sy7U_yx5Dvotvde-hIPghgIGVOo7axpA13hYE6U_bbrgJnVR4dyFAibgnbSvjFrxnkiweVatd-jPgIjS0sNrQE_NEzO7OQgfyLbrhpHFOCh-Uo8kGhE69iJRGqxxTvpZOhnzBEFHFjxHh98px_g-SEJhCZSeMs7TTCFfg6UZ_91QealWciN2mG34pn4_Bx_Z8r0N_50rv7E" 
          alt="Scandinavian cafe interior"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-background/30 to-transparent"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <span className="inline-block px-4 py-1.5 mb-6 bg-primary-container text-on-primary-container text-[10px] font-bold tracking-[0.3em] uppercase rounded-full">
            Est. 2024
          </span>
          <h1 className="text-6xl md:text-8xl font-headline font-extrabold text-primary tracking-tighter leading-[0.9] mb-8">
            Start Your Day with <br />
            <span className="text-primary-container italic font-light">Perfect Coffee</span>
          </h1>
          <p className="text-lg text-secondary mb-12 max-w-md leading-relaxed font-medium">
            Experience the quiet ritual of Scandinavian craft. Freshly brewed happiness in every cup, roasted with cinematic precision.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-primary text-white px-10 py-5 rounded-xl font-headline font-bold text-sm tracking-widest uppercase hover:opacity-90 transition-all scale-100 active:scale-95 shadow-xl shadow-primary/20">
              Order Now
            </button>
            <button className="bg-surface-container-high text-primary px-10 py-5 rounded-xl font-headline font-bold text-sm tracking-widest uppercase hover:bg-surface-container-highest transition-all scale-100 active:scale-95">
              Visit Us
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
