import { motion } from 'motion/react';
import { Download, Mail } from 'lucide-react';
import { ARTIST_DATA } from '../constants';

export default function Press() {
  return (
    <section id="press" className="py-24 bg-[#050505]">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-white/40 font-mono tracking-widest text-sm uppercase mb-4 block">Authority</span>
          <h2 className="text-4xl md:text-6xl font-black uppercase mb-4">Press & <span className="gold-text-gradient">Media</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Assets and resources for media houses, interviewers, and journalists.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div 
            whileHover={{ y: -10 }}
            className="glass-card p-8 rounded-3xl group"
          >
            <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center text-gold mb-6 group-hover:scale-110 transition-transform">
              <Download className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4">EPK 2024</h3>
            <p className="text-gray-400 mb-8">Download the latest electronic press kit including biography, highlights, and stats.</p>
            <button className="text-gold font-mono uppercase tracking-widest text-sm font-bold flex items-center gap-2 hover:translate-x-2 transition-transform">
              DOWNLOAD NOW →
            </button>
          </motion.div>

          <motion.div 
            whileHover={{ y: -10 }}
            className="glass-card p-8 rounded-3xl group"
          >
            <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center text-gold mb-6 group-hover:scale-110 transition-transform">
              <Download className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Media Assets</h3>
            <p className="text-gray-400 mb-8">High-resolution professional photos, logos, and cover art for publication.</p>
            <button className="text-gold font-mono uppercase tracking-widest text-sm font-bold flex items-center gap-2 hover:translate-x-2 transition-transform">
              ACCESS FOLDER →
            </button>
          </motion.div>

          <motion.div 
            whileHover={{ y: -10 }}
            whileInView={{ opacity: 1}}
            className="glass-card p-8 rounded-3xl group"
          >
            <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center text-gold mb-6 group-hover:scale-110 transition-transform">
              <Mail className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Interview Requests</h3>
            <p className="text-gray-400 mb-8">Direct inquiry for media interviews and podcast appearances.</p>
            <a href={`mailto:${ARTIST_DATA.socials.email}`} className="text-gold font-mono uppercase tracking-widest text-sm font-bold flex items-center gap-2 hover:translate-x-2 transition-transform">
              GET IN TOUCH →
            </a>
          </motion.div>
        </div>

        <div className="mt-20 border-t border-white/5 pt-12 flex flex-wrap justify-center gap-12 opacity-30 grayscale hover:grayscale-0 transition-opacity duration-700">
           {/* Placeholder for Media Mentions */}
           <img src="https://upload.wikimedia.org/wikipedia/commons/e/ea/The_New_York_Times_logo.png" alt="NYT" className="h-4 object-contain invert" />
           <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Rolling_Stone_logo.svg/1280px-Rolling_Stone_logo.svg.png" alt="Rolling Stone" className="h-6 object-contain invert" />
           <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/MTV_Logo.svg/1024px-MTV_Logo.svg.png" alt="MTV" className="h-8 object-contain invert" />
           <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Billboard_logo.svg/1280px-Billboard_logo.svg.png" alt="Billboard" className="h-4 object-contain invert" />
        </div>
      </div>
    </section>
  );
}
