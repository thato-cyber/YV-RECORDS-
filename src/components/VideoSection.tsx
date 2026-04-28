import { motion } from 'motion/react';
import { Play } from 'lucide-react';
import { VIDEOS, ARTIST_DATA } from '../constants';

export default function VideoSection() {
  return (
    <section id="videos" className="py-24 bg-black overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gold font-mono tracking-widest text-sm uppercase mb-4 block"
          >
            Visual Authority
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black uppercase"
          >
            VIDEOS & <span className="gold-text-gradient">PERFORMANCES</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-full">
          {/* Main Featured Video */}
          <motion.div 
            className="lg:col-span-8 group relative rounded-3xl overflow-hidden border border-white/10 aspect-video lg:aspect-auto"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img 
              src={VIDEOS[0].thumbnail} 
              alt={VIDEOS[0].title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all flex flex-col justify-end p-8 md:p-12">
               <div className="flex items-center gap-6 mb-4">
                 <button className="w-20 h-20 rounded-full bg-white flex items-center justify-center text-black hover:scale-110 transition-transform">
                   <Play className="w-10 h-10 fill-current translate-x-1" />
                 </button>
                 <div>
                   <h3 className="text-2xl md:text-3xl font-black uppercase text-white">{VIDEOS[0].title}</h3>
                   <p className="text-gold font-mono text-sm tracking-widest uppercase">Official Global Premiere</p>
                 </div>
               </div>
            </div>
          </motion.div>

          {/* Secondary Videos */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            {[1, 2].map((i) => (
              <motion.div 
                key={i}
                className="group relative rounded-2xl overflow-hidden border border-white/10 aspect-video"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <img 
                  src={`https://images.unsplash.com/photo-1571266028243-e4733b0f0bb1?q=80&w=2070&auto=format&fit=crop&sig=${i}`} 
                  alt="Performance" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-all">
                   <div className="w-12 h-12 rounded-full border-2 border-white/50 flex items-center justify-center text-white">
                     <Play className="w-5 h-5 fill-current translate-x-0.5" />
                   </div>
                </div>
                <div className="absolute bottom-4 left-4">
                   <p className="text-xs font-mono uppercase tracking-[0.2em] font-bold text-white shadow-black drop-shadow-md">Live @ Johannesburg Fest</p>
                </div>
              </motion.div>
            ))}
            
            <a 
              href={ARTIST_DATA.socials.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 py-6 rounded-2xl border border-white/5 font-black uppercase tracking-widest text-sm transition-all"
            >
              WATCH MORE ON YOUTUBE
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
