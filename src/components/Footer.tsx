import { motion } from 'motion/react';
import { Instagram, Twitter, Facebook, Youtube, Music as MusicIcon, MessageCircle, Send } from 'lucide-react';
import { ARTIST_DATA } from '../constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-black gold-text-gradient mb-6 leading-tight">
              {ARTIST_DATA.name}
            </h2>
            <p className="text-gray-500 max-w-sm mb-10 leading-relaxed">
              Redefining global sound from the heart of South Africa. Join the movement and experience the raw fusion of culture and rhythm.
            </p>
            <div className="flex gap-4">
              <a href={ARTIST_DATA.socials.instagram} className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-white/50 hover:text-gold transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href={ARTIST_DATA.socials.twitter} className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-white/50 hover:text-gold transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href={ARTIST_DATA.socials.youtube} className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-white/50 hover:text-gold transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href={ARTIST_DATA.socials.spotify} className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-white/50 hover:text-gold transition-colors">
                <MusicIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-gold font-mono uppercase tracking-[0.2em] text-xs font-bold mb-6">Navigation</h3>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-white transition-colors uppercase tracking-widest">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors uppercase tracking-widest">About</a></li>
              <li><a href="#music" className="hover:text-white transition-colors uppercase tracking-widest">Music</a></li>
              <li><a href="#booking" className="hover:text-white transition-colors uppercase tracking-widest">Booking</a></li>
              <li><a href="#merch" className="hover:text-white transition-colors uppercase tracking-widest">Merch</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-gold font-mono uppercase tracking-[0.2em] text-xs font-bold mb-6">Inquiries</h3>
            <ul className="space-y-4 text-sm text-gray-500">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold" />
                <span>{ARTIST_DATA.socials.email}</span>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="w-4 h-4 text-gold" />
                <span>Management: +27 12 345 6789</span>
              </li>
            </ul>
            <div className="mt-8">
               <button className="flex items-center gap-2 bg-white/5 hover:bg-white/10 px-6 py-3 rounded-xl transition-all text-xs font-bold uppercase tracking-widest">
                 <Send className="w-4 h-4" />
                 Newsletter Signup
               </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[9px] text-white/40 uppercase tracking-widest font-bold">
            &copy; {currentYear} Andre Da Artiste Music Group | ALL RIGHTS RESERVED
          </p>
          <div className="flex gap-8 text-[9px] uppercase tracking-widest font-bold text-white/60">
            <a href={ARTIST_DATA.socials.instagram} className="hover:text-gold transition-colors">Instagram</a>
            <a href={ARTIST_DATA.socials.twitter} className="hover:text-gold transition-colors">X/Twitter</a>
            <a href="#" className="hover:text-gold transition-colors">TikTok</a>
            <a href={ARTIST_DATA.socials.whatsapp} className="hover:text-gold transition-colors font-black text-gold">WhatsApp</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Mail({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
  );
}
