import { motion } from 'motion/react';
import { Play, Calendar, Video, Verified } from 'lucide-react';
import { ARTIST_DATA } from '../constants';

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center pt-16">
      {/* Background Image / Video Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1598387181032-a3103a2db5b3?q=80&w=2076&auto=format&fit=crop" 
          alt="Andre Da Artiste Cinematic Background"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 cinematic-gradient" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center gap-2 mb-4"
        >
          <Verified className="w-5 h-5 text-gold" />
          <span className="text-gold tracking-[0.3em] text-sm font-mono uppercase">Verified Global Artist</span>
        </motion.div>

        <motion.h1 
          className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 gold-text-gradient leading-tight"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {ARTIST_DATA.name}
        </motion.h1>

        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 1, delay: 0.5 }}
        >
          <h2 className="text-2xl md:text-4xl font-display font-medium text-white mb-4">
            {ARTIST_DATA.tagline}
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 font-sans md:text-lg mb-10">
            {ARTIST_DATA.subheadline}
          </p>
        </motion.div>

        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <a 
            href="#music" 
            className="btn-premium bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:bg-gold hover:text-black"
          >
            Stream Latest Single
          </a>
          <a 
            href="#booking" 
            className="btn-premium border border-white/20 text-white hover:bg-white hover:text-black"
          >
            Watch Video
          </a>
        </motion.div>

        {/* Animated Glow Accent */}
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-red-600/10 blur-[120px] rounded-full animate-glow pointer-events-none" />
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
        <div className="w-1 h-12 rounded-full bg-white/20" />
      </div>
    </section>
  );
}
