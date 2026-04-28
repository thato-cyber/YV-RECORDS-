import { motion } from 'motion/react';
import { ShoppingBag } from 'lucide-react';

export default function Merch() {
  return (
    <section id="merch" className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold font-mono tracking-widest text-sm uppercase mb-4 block">Wear the Movement</span>
            <h2 className="text-4xl md:text-6xl font-black uppercase">Official <span className="gold-text-gradient">Merch</span></h2>
          </motion.div>
          
          <div className="hidden md:block">
            <span className="text-gray-600 font-mono text-sm tracking-widest uppercase italic">Spring / Summer 2024</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
             <motion.div 
              key={item}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-6 bg-[#111] border border-white/5">
                <img 
                  src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=2070&auto=format&fit=crop" 
                  alt="Merch Placeholder"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-100"
                />
                <div className="absolute top-4 left-4 bg-gold text-black text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                  COMING SOON
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                   <button className="flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105">
                     <ShoppingBag className="w-5 h-5" />
                     NOTIFY ME
                   </button>
                </div>
              </div>
              <h3 className="text-lg font-bold font-display uppercase tracking-wider mb-1">Heavyweight Streetwear Hoodie</h3>
              <p className="text-gold font-mono">DROPPING SOON</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
