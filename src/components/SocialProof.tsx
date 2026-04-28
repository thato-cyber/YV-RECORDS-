import { motion } from 'motion/react';
import { Star, MessageSquare } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

export default function SocialProof() {
  return (
    <section className="py-24 bg-black overflow-hidden relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
           <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold font-mono tracking-widest text-sm uppercase mb-4 block">Proven Records</span>
            <h2 className="text-4xl md:text-6xl font-black uppercase mb-8">What the <span className="gold-text-gradient">World says</span></h2>
            <p className="text-gray-400 text-lg mb-10">From industry veterans to the most loyal fans across the continent, the message remains the same: Andre is the future of African sound.</p>
            
            <div className="flex gap-4">
              <div className="p-6 glass-card rounded-2xl flex-1">
                <Star className="w-8 h-8 text-gold mb-4" />
                <p className="text-3xl font-black">98%</p>
                <p className="text-xs font-mono uppercase tracking-widest text-gray-500">Positive Feedback</p>
              </div>
              <div className="p-6 glass-card rounded-2xl flex-1">
                <MessageSquare className="w-8 h-8 text-gold mb-4" />
                <p className="text-3xl font-black">50K+</p>
                <p className="text-xs font-mono uppercase tracking-widest text-gray-500">Fan Reactions</p>
              </div>
            </div>
          </motion.div>

          <div className="space-y-6">
            {TESTIMONIALS.map((t, index) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="glass-card p-8 rounded-3xl relative"
              >
                <div className="absolute top-8 right-8 opacity-10 text-gold">
                  <Star className="w-12 h-12 fill-current" />
                </div>
                <p className="text-xl text-gray-300 italic mb-6">"{t.text}"</p>
                <div className="flex items-center gap-4">
                   <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-gold font-black">
                     {t.name[0]}
                   </div>
                   <div>
                     <p className="font-bold text-white">{t.name}</p>
                     <p className="text-xs text-gold font-mono uppercase tracking-[0.2em]">{t.role}</p>
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Animated Elements */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-gold/5 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
}
