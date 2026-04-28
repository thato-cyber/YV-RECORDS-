import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, Music, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { ARTIST_DATA } from '../constants';

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end gap-4 pointer-events-none">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.8 }}
            className="pointer-events-auto"
          >
            {/* Stream Now Pulse CTA */}
            <a 
              href="#music"
              className="flex items-center gap-3 bg-white text-black px-6 py-3 rounded-full font-black text-xs uppercase tracking-widest shadow-2xl hover:scale-105 transition-transform mb-2 relative"
            >
              <div className="absolute inset-0 bg-white/20 rounded-full animate-ping" />
              <Music className="w-4 h-4" />
              Stream New EP
            </a>

            {/* WhatsApp Booking Floating Button */}
            <div className="relative group flex items-end justify-end">
              <AnimatePresence>
                {showTooltip && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute bottom-full right-0 mb-4 bg-white text-black p-4 rounded-2xl w-48 shadow-xl"
                  >
                    <p className="text-[10px] font-mono font-bold uppercase tracking-widest leading-relaxed">
                      "Book Andre for your next global event. WhatsApp Direct."
                    </p>
                    <div className="absolute top-full right-6 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-white" />
                  </motion.div>
                )}
              </AnimatePresence>

              <button 
                onClick={() => setShowTooltip(!showTooltip)}
                className="w-16 h-16 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-2xl hover:scale-110 active:scale-95 transition-transform relative"
              >
                {showTooltip ? <X className="w-8 h-8" /> : <MessageCircle className="w-8 h-8 fill-current" />}
                {!showTooltip && (
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-600 border-2 border-black rounded-full flex items-center justify-center text-[10px] font-bold">1</div>
                )}
              </button>
            </div>
            
            {showTooltip && (
               <motion.a
                href={ARTIST_DATA.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-2 block w-64 bg-black border border-white/10 p-4 rounded-2xl shadow-2xl text-center group"
               >
                 <p className="text-white font-bold mb-2">Andre Da Artiste</p>
                 <p className="text-xs text-gray-500 mb-4">Official Management</p>
                 <span className="bg-[#25D366] text-white px-4 py-2 rounded-lg font-bold text-xs uppercase group-hover:bg-[#20ba59] transition-colors">Start Chat</span>
               </motion.a>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
