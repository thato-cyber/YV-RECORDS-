/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Music from './components/Music';
import VideoSection from './components/VideoSection';
import Booking from './components/Booking';
import Press from './components/Press';
import SocialProof from './components/SocialProof';
import Merch from './components/Merch';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-gold selection:text-black scroll-smooth">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Music />
        <VideoSection />
        <Booking />
        <Press />
        <SocialProof />
        <Merch />
        <Newsletter />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
}
