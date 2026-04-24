import { motion } from 'motion/react';
import { Menu, ShoppingBag } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-background/80 backdrop-blur-md sticky top-0 z-50 border-b border-primary/5">
      <div className="flex justify-between items-center w-full px-8 py-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-surface-container rounded-full transition-colors">
            <Menu className="w-6 h-6 text-primary" />
          </button>
        </div>
        
        <div className="text-2xl font-extrabold tracking-tighter text-primary uppercase font-headline">
          BREW HAVEN
        </div>
        
        <div className="hidden md:flex items-center gap-8 font-headline font-bold tracking-tight">
          <a className="text-primary border-b-2 border-primary pb-1 transition-all" href="#menu">The Menu</a>
          <a className="text-primary/60 hover:text-primary transition-colors" href="#rituals">The Ritual</a>
          <a className="text-primary/60 hover:text-primary transition-colors" href="#beans">Our Beans</a>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-surface-container rounded-full transition-colors relative">
            <ShoppingBag className="w-6 h-6 text-primary" />
            <span className="absolute top-0 right-0 text-[10px] bg-primary text-white rounded-full w-4 h-4 flex items-center justify-center font-bold">0</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
