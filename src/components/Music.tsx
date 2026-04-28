import { motion } from 'motion/react';
import { ExternalLink, Music as MusicIcon, Youtube } from 'lucide-react';
import { RELEASES, ARTIST_DATA } from '../constants';

export default function Music() {
  return (
    <section id="music" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold font-mono tracking-widest text-sm uppercase mb-4 block">New Sound</span>
            <h2 className="text-4xl md:text-6xl font-black uppercase">Latest <span className="gold-text-gradient">Releases</span></h2>
          </motion.div>
          
          <motion.a 
            href={ARTIST_DATA.socials.spotify}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 glass-card hover:bg-white/10 px-6 py-3 rounded-full font-bold transition-all text-sm tracking-widest"
            whileHover={{ scale: 1.05 }}
          >
            LISTEN ON EVERYWHERE <ExternalLink className="w-4 h-4" />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          {RELEASES.map((release, index) => (
            <motion.div
              key={release.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bento-card"
            >
              <div className="relative aspect-square overflow-hidden mb-6 border border-white/5">
                <img 
                  src={release.imageUrl} 
                  alt={release.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <a href="#" className="w-12 h-12 bg-gold/10 flex items-center justify-center border border-gold/20 text-gold hover:bg-gold hover:text-black transition-all">
                    <MusicIcon className="w-6 h-6" />
                  </a>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-white/40 text-[10px] font-mono uppercase tracking-[0.2em] mb-1 block">{release.type} • Out Now</span>
                  <h3 className="text-xl font-bold tracking-tight text-gold group-hover:text-white transition-colors">{release.title}</h3>
                </div>
                <span className="text-white/20 font-mono text-sm">{release.year}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured Spotify Player */}
        <div className="mt-24 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
          >
            <iframe 
              src="https://open.spotify.com/embed/playlist/37i9dQZF1DX4p679u7v7Z7?utm_source=generator&theme=0" 
              width="100%" 
              height="380" 
              frameBorder="0" 
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
              loading="lazy"
              title="Spotify Embed"
            ></iframe>
          </motion.div>
        </div>
      </div>
      
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 blur-[150px] rounded-full pointer-events-none" />
    </section>
  );
}
