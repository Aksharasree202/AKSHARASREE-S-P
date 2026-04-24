import { motion } from 'motion/react';
import { Mail, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 max-w-7xl mx-auto px-8 border-t border-primary/5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-headline font-bold text-primary tracking-tighter mb-12">Visit the Haven</h2>
          <div className="space-y-10">
            <div className="flex items-start gap-6 group">
              <div className="w-12 h-12 rounded-2xl bg-surface-container flex items-center justify-center text-primary shrink-0 transition-transform group-hover:scale-110">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h6 className="font-bold text-primary mb-1 uppercase text-xs tracking-widest">Our Studio</h6>
                <p className="text-on-surface-variant font-medium">Nordic Square 42, Coffee District<br />Stockholm, Sweden</p>
              </div>
            </div>
            <div className="flex items-start gap-6 group">
              <div className="w-12 h-12 rounded-2xl bg-surface-container flex items-center justify-center text-primary shrink-0 transition-transform group-hover:scale-110">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h6 className="font-bold text-primary mb-1 uppercase text-xs tracking-widest">Opening Hours</h6>
                <p className="text-on-surface-variant font-medium">Mon – Fri: 07:00 — 19:00<br />Sat – Sun: 09:00 — 18:00</p>
              </div>
            </div>
            <div className="flex items-start gap-6 group">
              <div className="w-12 h-12 rounded-2xl bg-surface-container flex items-center justify-center text-primary shrink-0 transition-transform group-hover:scale-110">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h6 className="font-bold text-primary mb-1 uppercase text-xs tracking-widest">Inquiries</h6>
                <p className="text-on-surface-variant font-medium">hello@brewhaven.co<br />+46 123 456 789</p>
              </div>
            </div>
          </div>
          
          <form className="mt-16 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-[10px] font-bold uppercase tracking-widest text-outline">Name</label>
                <input className="w-full bg-surface-container border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary focus:bg-white transition-all font-medium" type="text" placeholder="Erik Jensen" />
              </div>
              <div className="space-y-2">
                <label className="block text-[10px] font-bold uppercase tracking-widest text-outline">Email</label>
                <input className="w-full bg-surface-container border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary focus:bg-white transition-all font-medium" type="email" placeholder="erik@studio.se" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="block text-[10px] font-bold uppercase tracking-widest text-outline">Message</label>
              <textarea className="w-full bg-surface-container border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary focus:bg-white transition-all font-medium" rows={4} placeholder="How can we help you reach coffee nirvana?"></textarea>
            </div>
            <button className="bg-primary text-white w-full py-5 rounded-2xl font-headline font-bold uppercase tracking-[0.2em] text-xs hover:bg-primary-container transition-all active:scale-[0.98] shadow-lg shadow-primary/20">
              Send Message
            </button>
          </form>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="h-full min-h-[500px] rounded-3xl overflow-hidden shadow-2xl grayscale contrast-125 border-4 border-surface-container"
        >
          <img 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZU7isy1nw9pcFdHxv546P8HNSHLH1m4gQckgU0KFjUBf6l8EbQWrtZgfEUz0BxyhfYNS6hLMQZPeoKZjlvZZv86WVyZK743IAGjiR2kk_DHqEQPo_5pQsJHGSLKkVCuZEb0xOXo-aZIq4Y6bgz9HVkrdf9uqX4i2aZKGVleJReZ0-tjKt_NdL1RDyCn__1HZyVOMlp7ywUo1pNCwB5cbqPF5dW6a4DwUoy6o7pK_VcL0QS9T8-PBTRRu0JWJEzyPdpkaWYgWsTqA" 
            alt="Map of Stockholm"
          />
        </motion.div>
      </div>
    </section>
  );
}
