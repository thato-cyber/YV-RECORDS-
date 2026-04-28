import { motion } from 'motion/react';
import { ARTIST_DATA } from '../constants';

export default function About() {
  return (
    <section id="about" className="py-24 bg-black overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070&auto=format&fit=crop" 
                alt="Andre Da Artiste performing"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Gold Elements */}
            <div className="absolute -top-6 -left-6 w-32 h-32 border-t-2 border-l-2 border-gold opacity-50 z-0" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-2 border-r-2 border-gold opacity-50 z-0" />
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gold/10 blur-[100px] rounded-full -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold font-mono tracking-widest text-sm uppercase mb-4 block">Our Story</span>
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
              FROM SOUTH AFRICA <br/>
              <span className="gold-text-gradient">TO THE WORLD.</span>
            </h2>
            
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed font-sans">
              <p>{ARTIST_DATA.bio.story}</p>
              <p>{ARTIST_DATA.bio.vision}</p>
            </div>

            <div className="mt-12 flex flex-wrap gap-4">
              {ARTIST_DATA.genres.map((genre) => (
                <span 
                  key={genre} 
                  className="px-6 py-2 rounded-full glass-card text-sm font-bold uppercase tracking-wider text-gold"
                >
                  {genre}
                </span>
              ))}
            </div>
            
            <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8 border-t border-white/10 pt-12">
              <div>
                <p className="text-4xl font-black gold-text-gradient">1M+</p>
                <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">Streams</p>
              </div>
              <div>
                <p className="text-4xl font-black gold-text-gradient">50+</p>
                <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">Countries</p>
              </div>
              <div>
                <p className="text-4xl font-black gold-text-gradient">500K+</p>
                <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">Followers</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
