import { motion } from 'motion/react';
import { MENU_ITEMS } from '../constants';

export default function Menu() {
  return (
    <section id="menu" className="bg-surface-container-low py-32">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-20">
          <span className="text-sm font-bold tracking-[0.3em] uppercase text-outline mb-4 block">Curated Selections</span>
          <h3 className="text-4xl md:text-7xl font-headline font-bold text-primary tracking-tighter">The Daily Ritual</h3>
        </div>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          <button className="px-8 py-3 bg-primary text-white rounded-full text-[10px] font-bold tracking-widest uppercase">All</button>
          <button className="px-8 py-3 bg-white text-primary rounded-full text-[10px] font-bold tracking-widest uppercase hover:bg-surface-container-high transition-colors">Espresso</button>
          <button className="px-8 py-3 bg-white text-primary rounded-full text-[10px] font-bold tracking-widest uppercase hover:bg-surface-container-high transition-colors">Cold Coffee</button>
          <button className="px-8 py-3 bg-white text-primary rounded-full text-[10px] font-bold tracking-widest uppercase hover:bg-surface-container-high transition-colors">Snacks</button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MENU_ITEMS.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group"
            >
              <div className="aspect-square rounded-xl overflow-hidden mb-6 relative">
                <img 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  src={item.image} 
                  alt={item.name}
                />
              </div>
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-xl font-headline font-bold text-primary group-hover:text-primary-container transition-colors tracking-tight">
                  {item.name}
                </h4>
                <span className="text-primary font-bold">{item.price}</span>
              </div>
              <p className="text-sm text-on-surface-variant leading-relaxed font-medium">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
