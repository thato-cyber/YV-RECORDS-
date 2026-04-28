import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Music, Calendar, Info, ShoppingBag, Globe } from 'lucide-react';
import { ARTIST_DATA } from '../constants';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', icon: Info },
    { name: 'Music', href: '#music', icon: Music },
    { name: 'Booking', href: '#booking', icon: Calendar },
    { name: 'Merch', href: '#merch', icon: ShoppingBag },
    { name: 'Press', href: '#press', icon: Globe },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-black/60 backdrop-blur-xl py-4 border-b border-white/5' : 'bg-transparent py-8'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a href="#" className="text-2xl font-black tracking-tighter">
            <span className="text-gold">ANDRE</span> <span className="text-white">DA ARTISTE</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-white/70 hover:text-gold transition-colors font-mono uppercase tracking-[0.2em] text-[10px] font-bold"
              >
                {link.name}
              </a>
            ))}
            <div className="flex gap-4 ml-6">
              <a 
                href="#booking" 
                className="border border-gold text-gold px-6 py-2 text-[10px] uppercase font-black tracking-[0.2em] hover:bg-gold hover:text-black transition-all"
              >
                Book Andre
              </a>
            </div>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="w-8 h-8" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="fixed inset-0 z-[100] bg-black"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            <div className="p-8 flex flex-col h-full">
              <div className="flex justify-between items-center mb-16">
                <span className="text-xl font-black text-gold">MENU</span>
                <button 
                  className="text-white bg-white/10 p-2 rounded-full"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <X className="w-8 h-8" />
                </button>
              </div>

              <div className="flex flex-col gap-8">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-6 text-4xl font-black uppercase text-white hover:text-gold transition-colors"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.1 }}
                  >
                    <link.icon className="w-8 h-8 text-gold" />
                    {link.name}
                  </motion.a>
                ))}
              </div>

              <div className="mt-auto pt-12 border-t border-white/10">
                <a 
                  href="#booking" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full bg-gold text-black text-center py-6 rounded-2xl font-black text-xl uppercase mb-8"
                >
                  BOOK ANDRE NOW
                </a>
                <div className="flex justify-center gap-8 text-white/40">
                  <Globe className="w-6 h-6 hover:text-gold cursor-pointer" />
                  <Music className="w-6 h-6 hover:text-gold cursor-pointer" />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
