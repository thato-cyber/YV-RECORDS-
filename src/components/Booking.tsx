import { motion } from 'motion/react';
import { PlayCircle, Send, MessageCircle } from 'lucide-react';
import { ARTIST_DATA } from '../constants';

export default function Booking() {
  return (
    <section id="booking" className="py-24 bg-bg-dark relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto overflow-hidden bg-white/5 border border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <motion.div
              className="bg-gold p-12 md:p-16 flex flex-col justify-between"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div>
                <h2 className="text-black text-5xl font-black uppercase leading-tight mb-4">
                  Global<br/>Bookings
                </h2>
                <p className="text-black/70 text-lg font-medium leading-relaxed max-w-sm">
                  Available for festivals, brand collaborations, and exclusive performances worldwide.
                </p>
              </div>
              
              <div className="mt-12 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-black/80">Now Booking Q4 2024</span>
                </div>
                <a 
                  href={ARTIST_DATA.socials.whatsapp} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full py-4 bg-black text-white font-black text-center text-xs uppercase tracking-widest hover:scale-[1.02] transition-transform"
                >
                  WhatsApp Quick Inquire
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-12 md:p-16 bg-card-dark"
            >
              <span className="text-gold font-mono tracking-widest text-[10px] uppercase mb-8 block">Formal Inquiry</span>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono uppercase tracking-widest text-white/40">Full Name</label>
                    <input type="text" className="w-full bg-black/40 border-none px-4 py-4 text-sm outline-none text-white focus:ring-1 focus:ring-gold" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono uppercase tracking-widest text-white/40">Email Address</label>
                    <input type="email" className="w-full bg-black/40 border-none px-4 py-4 text-sm outline-none text-white focus:ring-1 focus:ring-gold" placeholder="johndoe@email.com" />
                  </div>
                </div>
                
                <div className="space-y-6 pt-6">
                  <button className="w-full bg-white text-black font-black py-5 text-xs uppercase tracking-widest hover:bg-gold transition-colors">
                    Send Inquiry
                  </button>
                  <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest text-center">Avg Response: &lt; 24 Hours</p>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
