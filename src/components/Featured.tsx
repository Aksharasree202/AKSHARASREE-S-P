import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Featured() {
  return (
    <section id="beans" className="py-32 px-8 max-w-7xl mx-auto overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div className="max-w-xl">
          <span className="text-sm font-bold tracking-[0.3em] uppercase text-outline mb-4 block">The Roastery</span>
          <h3 className="text-5xl md:text-7xl font-headline font-bold text-primary tracking-tighter">Best-Sellers to Take Home</h3>
        </div>
        <button className="group flex items-center gap-3 text-primary font-bold uppercase tracking-widest text-[10px]">
          View Entire Shop
          <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
        </button>
      </div>
      
      <div className="grid grid-cols-12 gap-8">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="col-span-12 md:col-span-7"
        >
          <div className="group relative aspect-[16/9] rounded-3xl overflow-hidden bg-primary p-12 flex flex-col justify-end text-white">
            <img 
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1WLSp18G0M3jHafubqF0sC5MqWr5VKEXj_tvCmsxvAcsYbpT21NI2FgnN2LaCnCJGn6W3oXIFm0bgyDa_Id-4zNrIrwfyyfFDITZpjDqRXuFt4cD_zxOoqFjea_mdII0axqtM2hUCP0sfZwAtudkTJVRHdSrUmIp_aRCoDmVy_20NEwG1OW_tcwxMnoZJKyB7XhS-Wnn2van3oC4j5zXCrh5MnEAou17-swbpRwGMrST89wtdXvpfP2VWFfMS_dNUD6f8HAB0C-A" 
              alt="Midnight Blend"
            />
            <div className="relative z-10">
              <h4 className="text-4xl font-headline font-bold mb-4 tracking-tight">The Midnight Blend</h4>
              <p className="max-w-xs text-white/80 mb-8 font-medium">Our signature dark roast with notes of cocoa and black cherry.</p>
              <button className="bg-white text-primary px-8 py-4 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-surface-container-high transition-colors">
                Shop Now
              </button>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="col-span-12 md:col-span-5"
        >
          <div className="group relative h-full rounded-3xl overflow-hidden bg-secondary-container p-12 flex flex-col justify-end">
            <img 
              className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-1000" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgSr8_yfFvGFGCh69iq0Tgew2piJw1diSwdBRVkcNp99sGvfzYCXOPkt8YxwH50bMqTEionFyinQvR9VwOzC8ZECltI9nz1w0_-yphMvpsM6UFcH00rQ48m5RGFn5k2i14q9SmuP_DTxNBK_j_y6GvS11FsreoxvVNAbBwmV00K0QZdF7sw4rhI8XJXIMG9vhYxXo5snUfso8qdLlBNWzfm_hEgwCXNeIu6S0Y_Qmu4GFBmWKYqdxmyv1uyAYDsA0tpIqMQBskZoQ" 
              alt="Ethos Single Origin"
            />
            <div className="relative z-10">
              <h4 className="text-4xl font-headline font-bold text-primary mb-4 tracking-tight">Ethos Origin</h4>
              <p className="text-primary/70 mb-8 font-medium">Ethically sourced from Ethiopian highlands, citrus notes.</p>
              <button className="bg-primary text-white px-8 py-4 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:opacity-90 transition-opacity">
                Shop Now
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
