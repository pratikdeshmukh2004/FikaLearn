
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Purpose from './components/Purpose';
import ProductShowcase from './components/ProductShowcase';
import FeatureGrid from './components/FeatureGrid';
import Pricing from './components/Pricing';
import MiniGame from './components/MiniGame';
import TrustStats from './components/TrustStats';
import Testimonials from './components/Testimonials';
import SamplePapers from './components/SamplePapers';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import LegalPage from './components/LegalPage';
import AboutPage from './components/AboutPage';
import FeatureDetail from './components/FeatureDetail';
import { motion, AnimatePresence } from 'framer-motion';
import { Smartphone, X, ArrowRight } from 'lucide-react';

export type ViewType = 'home' | 'privacy' | 'refund' | 'terms' | 'about' | 'feature-detail';

function App() {
  const [view, setView] = useState<ViewType>('home');
  const [selectedFeatureId, setSelectedFeatureId] = useState<number | null>(null);
  const [showReturnNotification, setShowReturnNotification] = useState(false);

  const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.flutter_fika_learn&hl=en";

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Check if user has viewed a paper before
    const hasViewed = localStorage.getItem('fikalearn_paper_viewed');
    if (hasViewed === 'true') {
      // Delay showing the notification slightly for better UX
      const timer = setTimeout(() => setShowReturnNotification(true), 2000);
      return () => clearTimeout(timer);
    }
  }, [view, selectedFeatureId]);

  const handleNavigate = (newView: ViewType, featureId?: number) => {
    if (featureId !== undefined) {
      setSelectedFeatureId(featureId);
    }
    setView(newView);
  };

  const handleNotificationCTA = () => {
    window.open(PLAY_STORE_URL, '_blank');
    setShowReturnNotification(false);
  };

  return (
    <div className="min-h-screen bg-white relative selection:bg-[#38A4BE] selection:text-white">
      {/* Noise Texture Overlay */}
      <div 
        className="fixed inset-0 z-[100] pointer-events-none opacity-[0.03] mix-blend-multiply" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` 
        }} 
      />
      
      <Navbar onNavigate={handleNavigate} currentView={view} />
      
      <main className="relative z-10">
        {view === 'home' ? (
          <>
            <SamplePapers />
            <Hero />
            <Purpose />
            <ProductShowcase onLearnMore={(id) => handleNavigate('feature-detail', id)} />
            <FeatureGrid />
            <Pricing />
            <MiniGame />
            <TrustStats />
            <Testimonials />
            <FinalCTA />
          </>
        ) : view === 'about' ? (
          <AboutPage onNavigate={handleNavigate} />
        ) : view === 'feature-detail' && selectedFeatureId !== null ? (
          <FeatureDetail featureId={selectedFeatureId} onNavigate={handleNavigate} />
        ) : (
          <LegalPage type={view as any} onNavigate={handleNavigate} />
        )}
      </main>
      
      <Footer onNavigate={handleNavigate} currentView={view} />

      {/* Post-View Return Notification */}
      <AnimatePresence>
        {showReturnNotification && view === 'home' && (
          <motion.div 
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            className="fixed bottom-6 left-6 right-6 md:left-auto md:right-10 z-[60] md:max-w-md bg-white rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-gray-100 p-6 flex items-center gap-5 overflow-hidden group"
          >
            {/* Soft Glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#38A4BE]/5 rounded-full blur-2xl -mr-10 -mt-10" />
            
            <div className="relative w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-[#121E1F] shrink-0 border border-gray-100 group-hover:bg-[#E8F3F6] transition-colors">
              <Smartphone size={28} strokeWidth={1.5} />
            </div>

            <div className="flex-1 min-w-0 pr-4">
               <h4 className="text-[#121E1F] font-bold text-sm mb-1">More Papers in App</h4>
               <p className="text-gray-500 text-xs font-medium leading-normal">
                  For access to 100+ papers and solutions, visit our mobile app.
               </p>
            </div>

            <div className="flex flex-col gap-2">
               <button 
                  onClick={handleNotificationCTA}
                  className="bg-[#121E1F] text-white p-3 rounded-xl hover:bg-[#245C68] transition-all"
                  aria-label="Download App"
               >
                  <ArrowRight size={20} />
               </button>
               <button 
                  onClick={() => setShowReturnNotification(false)}
                  className="text-gray-400 p-3 rounded-xl hover:bg-gray-50 transition-all"
                  aria-label="Close"
               >
                  <X size={20} />
               </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
