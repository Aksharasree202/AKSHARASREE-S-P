import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import { REVIEWS } from '../constants';

export default function Reviews() {
  return (
    <section id="reviews" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-24">
          <span className="text-sm font-bold tracking-[0.3em] uppercase text-outline mb-4 block">Testimonials</span>
          <h3 className="text-4xl md:text-7xl font-headline font-bold text-primary tracking-tighter">Whispers from the Haven</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {REVIEWS.map((review, index) => (
            <motion.div 
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`bg-surface-container p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 ${index === 1 ? 'md:-translate-y-6' : ''}`}
            >
              <div className="flex gap-1 text-primary mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'fill-primary' : ''}`} />
                ))}
              </div>
              <blockquote className="text-on-surface text-xl leading-relaxed mb-8 font-medium italic">
                {review.content}
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border-2 border-primary/10 overflow-hidden shadow-inner">
                  <img className="w-full h-full object-cover" src={review.image} alt={review.name} />
                </div>
                <div>
                  <h5 className="font-headline font-bold text-primary tracking-tight">{review.name}</h5>
                  <p className="text-[10px] text-outline uppercase tracking-[0.2em] font-bold">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
