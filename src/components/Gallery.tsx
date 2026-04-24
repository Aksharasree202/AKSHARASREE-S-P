import { motion } from 'motion/react';
import { GALLERY_ITEMS } from '../constants';

export default function Gallery() {
  return (
    <section className="py-24 overflow-hidden bg-surface">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4 h-[600px]">
        {GALLERY_ITEMS.map((item, index) => (
          <motion.div 
            key={item.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`rounded-2xl overflow-hidden shadow-lg ${index % 2 === 1 ? 'translate-y-8' : ''}`}
          >
            <img 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000 grayscale active:grayscale-0 hover:grayscale-0" 
              src={item.image} 
              alt={item.alt}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
