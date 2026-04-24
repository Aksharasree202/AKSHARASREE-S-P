import { Globe, Share2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-surface-container-low text-primary py-24 px-8 border-t border-primary/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-center md:text-left">
            <div className="text-2xl font-black text-primary font-headline mb-3 tracking-tighter uppercase">BREW HAVEN</div>
            <div className="text-[10px] tracking-[0.1em] font-bold text-outline uppercase max-w-xs">
              © 2024 BREW HAVEN. SCANDINAVIAN CRAFT, CINEMATIC COFFEE. CRAFTED FOR THE QUIET RITUAL.
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-10 font-headline font-bold text-xs tracking-widest uppercase">
            <a className="text-primary/50 hover:text-primary transition-all underline underline-offset-8 decoration-primary/20 hover:decoration-primary" href="#">Sourcing</a>
            <a className="text-primary/50 hover:text-primary transition-all underline underline-offset-8 decoration-primary/20 hover:decoration-primary" href="#">Privacy</a>
            <a className="text-primary/50 hover:text-primary transition-all underline underline-offset-8 decoration-primary/20 hover:decoration-primary" href="#">Press</a>
            <a className="text-primary/50 hover:text-primary transition-all underline underline-offset-8 decoration-primary/20 hover:decoration-primary" href="#">Terms</a>
          </div>
          
          <div className="flex gap-4">
            <a className="w-12 h-12 rounded-full border border-primary/10 flex items-center justify-center text-primary/60 hover:text-primary hover:border-primary transition-all" href="#">
              <Globe className="w-5 h-5" />
            </a>
            <a className="w-12 h-12 rounded-full border border-primary/10 flex items-center justify-center text-primary/60 hover:text-primary hover:border-primary transition-all" href="#">
              <Share2 className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
