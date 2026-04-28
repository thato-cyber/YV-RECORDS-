import { motion } from 'motion/react';
import { Send } from 'lucide-react';

export default function Newsletter() {
  return (
    <section className="py-24 bg-black relative">
       <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto glass-card rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-gold via-white to-gold" />
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-gold font-mono tracking-widest text-sm uppercase mb-6 block">Join the movement</span>
              <h2 className="text-4xl md:text-6xl font-black uppercase mb-8 leading-tight">
                Get <span className="gold-text-gradient">VIP ACCESS</span>
              </h2>
              <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
                Be the first to hear new music, get early bird performance tickets, and exclusive merch drops. No spam, just pure art.
              </p>

              <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Your official email" 
                  className="flex-1 bg-white/5 border border-white/10 rounded-full px-8 py-4 focus:outline-none focus:border-gold transition-all text-center sm:text-left"
                />
                <button className="bg-white text-black px-8 py-4 rounded-full font-black uppercase tracking-widest hover:bg-gold hover:text-black transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 relative group overflow-hidden">
                  <div className="absolute inset-0 bg-gold/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  <span className="relative z-10 flex items-center gap-2">JOIN VIP <Send className="w-4 h-4" /></span>
                </button>
              </form>
              
              <p className="mt-8 text-[10px] font-mono text-gray-600 uppercase tracking-widest">
                Join 50,000+ members of the global fan community
              </p>
            </motion.div>
          </div>
       </div>

       {/* Background Accents */}
       <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-gold/5 blur-[120px] rounded-full pointer-events-none" />
       <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-purple-600/5 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
}
