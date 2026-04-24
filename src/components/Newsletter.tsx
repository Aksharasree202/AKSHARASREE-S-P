import { motion } from 'motion/react';

export default function Newsletter() {
  return (
    <section className="mb-32 px-8 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-primary-container rounded-[2.5rem] p-16 text-center text-white overflow-hidden relative"
      >
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')] opacity-10"></div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-on-primary-container mb-4 block">Newsletter</span>
          <h3 className="text-4xl md:text-6xl font-headline font-bold mb-6 tracking-tighter leading-tight">Join the Ritual</h3>
          <p className="text-on-primary-container mb-10 text-lg font-medium">Receive brewing guides, monthly roaster notes, and exclusive events.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <input 
              className="flex-1 bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/30 backdrop-blur-sm transition-all" 
              placeholder="Your email address" 
              type="email" 
            />
            <button className="bg-white text-primary px-10 py-4 rounded-2xl font-headline font-bold uppercase tracking-widest text-xs hover:bg-surface-container-high transition-colors active:scale-95">
              Subscribe
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
