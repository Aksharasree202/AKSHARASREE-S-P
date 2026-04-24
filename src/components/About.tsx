import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="rituals" className="py-32 px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
            <img 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQA4fSuRyCK1jaRWw21oa0Xg_2IQ7czuzsrRE4ksruNuk5yUG0zV9M5qqlthpb86tGjWIpIfZiDQPBktU4_TwM6eHS-BBgdCcAgDeU_6bx24f_EjKPaux8P29A4_-wp9jfq2ZZ9aK9euA5xrudRXVUfibtxZzzcgx3M0Y18CniOGbnbu6ZQzqP19OaIFsqRIC87HiDHRWti7t6wmY27cSxKzbdIUt2BFGpakEDug7q9SSR-GSQieMtlE0Xvf0n-qARpptaeCKOstE" 
              alt="Coffee beans"
            />
          </div>
          <div className="absolute -bottom-12 -right-12 w-64 h-64 rounded-2xl overflow-hidden shadow-2xl border-[12px] border-background hidden lg:block">
            <img 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDo9lZioyViHoQY2bUX8YA15tl2GCfQyNyli_jIrwdH9sbt4Ne2o2Idg_mGmr9nmk6ep_XC2Ku1ZLkkLEJgFkVq5FXZlvQVSrRFzsGn_D6R09Iw0QRB3vxPAr2tuDWjv5MxZmI2lS4dkmdGPbTZDtljHfSgLaqxWBiaYj-OWDW18VIoRPXIsqotEYF47TjpFx2OvjYmy38xeTHW0RtFMnRYZDYhzFdZg4XlVCNg6ojFf3EvxjvIKJcv3xbXDaPZqFXH1nR0BEJI5Ac" 
              alt="Barista pouring latte art"
            />
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center"
        >
          <span className="text-sm font-bold tracking-[0.3em] uppercase text-outline mb-6">Our Legacy</span>
          <h3 className="text-4xl md:text-6xl font-headline font-bold text-primary mb-8 tracking-tighter leading-tight">
            The Story of Quality Beans and Passion
          </h3>
          <div className="space-y-6">
            <p className="text-on-surface-variant text-lg leading-relaxed">
              Brew Haven isn't just a coffee shop; it's a sanctuary for the senses. Inspired by the minimalist elegance of Stockholm and the cozy warmth of hygge, we source only ethically grown beans from small-batch farms.
            </p>
            <p className="text-on-surface-variant text-lg leading-relaxed italic border-l-2 border-primary-container pl-6">
              "Coffee is the silence between thoughts. We make sure that silence is beautiful."
            </p>
          </div>
          <div className="flex gap-12 mt-12">
            <div>
              <div className="text-4xl font-headline font-bold text-primary">12+</div>
              <div className="text-xs uppercase tracking-widest font-bold text-outline">Unique Blends</div>
            </div>
            <div>
              <div className="text-4xl font-headline font-bold text-primary">100%</div>
              <div className="text-xs uppercase tracking-widest font-bold text-outline">Organic Sourcing</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
