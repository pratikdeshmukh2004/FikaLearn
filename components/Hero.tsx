
import React from 'react';
import { Play, CheckCircle2, Flame, Trophy } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 2000], [0, 400]);
  
  const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.flutter_fika_learn&hl=en";

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCTA = () => {
    window.open(PLAY_STORE_URL, '_blank');
  };

  return (
    <section id="hero" className="relative py-24 md:py-32 overflow-hidden bg-white">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-50/30 via-white to-white pointer-events-none -z-10" />
      
      <motion.div 
        style={{ y: yParallax }}
        className="absolute top-[10%] right-[5%] w-[500px] h-[500px] bg-[#38A4BE]/10 rounded-full blur-[120px] -z-10" 
      />

      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto z-10 mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 border border-cyan-100 text-[#245C68] text-sm font-semibold mb-8 tracking-wide">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#38A4BE] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#38A4BE]"></span>
            </span>
            New Session 2025-26 Live
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter text-[#121E1F] leading-[1.05] mb-8">
            Smarter Practice.<br />
            <span className="text-[#38A4BE]">Confident</span> Scores.
          </h1>
          <p className="text-lg md:text-xl text-gray-500 font-normal mb-10 max-w-xl mx-auto leading-relaxed">
            The minimal, distraction-free platform trusted by toppers for CBSE exam preparation.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={handleCTA}
              className="bg-[#121E1F] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#245C68] transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-black/10"
            >
              Start Practicing Free
            </button>
            <button 
              onClick={() => scrollToSection('features')}
              className="flex items-center gap-3 text-[#121E1F] px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-50 transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-sm group-hover:border-[#38A4BE] group-hover:text-[#38A4BE] transition-colors">
                <Play size={14} fill="currentColor" className="ml-1" />
              </div>
              <span>Watch Demo</span>
            </button>
          </div>
        </motion.div>

        {/* Floating Phone Composition */}
        <div className="relative w-full max-w-[320px] md:max-w-[360px] mx-auto perspective-1000">
          
          {/* Floating Badge: Streak */}
          <motion.div
             initial={{ opacity: 0, x: -50 }}
             animate={{ opacity: 1, x: 0, y: [0, -10, 0] }}
             transition={{ 
               opacity: { duration: 0.8, delay: 0.5 },
               x: { duration: 0.8, delay: 0.5, type: "spring" },
               y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0 }
             }}
             className="absolute -left-4 md:-left-24 top-32 z-30 hidden md:flex items-center gap-3 bg-white/90 backdrop-blur-md p-4 pr-6 rounded-2xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] border border-white/50"
          >
             <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
               <Flame size={20} fill="currentColor" />
             </div>
             <div className="text-left">
               <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">Streak</div>
               <div className="text-lg font-bold text-[#121E1F]">12 Days</div>
             </div>
          </motion.div>

          {/* Floating Badge: Score */}
          <motion.div
             initial={{ opacity: 0, x: 50 }}
             animate={{ opacity: 1, x: 0, y: [0, 10, 0] }}
             transition={{ 
               opacity: { duration: 0.8, delay: 0.7 },
               x: { duration: 0.8, delay: 0.7, type: "spring" },
               y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }
             }}
             className="absolute -right-4 md:-right-24 top-16 z-30 hidden md:flex items-center gap-3 bg-white/90 backdrop-blur-md p-4 pr-6 rounded-2xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] border border-white/50"
          >
             <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
               <CheckCircle2 size={20} />
             </div>
             <div className="text-left">
               <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">Accuracy</div>
               <div className="text-lg font-bold text-[#121E1F]">98%</div>
             </div>
          </motion.div>

           {/* Floating Badge: Trophy */}
           <motion.div
             initial={{ opacity: 0, scale: 0.8 }}
             animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
             transition={{ 
               opacity: { duration: 0.8, delay: 0.9 },
               scale: { duration: 0.8, delay: 0.9, type: "spring" },
               y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
             }}
             className="absolute -right-8 bottom-32 z-30 hidden md:flex items-center gap-3 bg-white/90 backdrop-blur-md p-3 rounded-2xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] border border-white/50"
          >
             <div className="w-12 h-12 rounded-xl bg-yellow-100 flex items-center justify-center text-yellow-600">
               <Trophy size={24} fill="currentColor" />
             </div>
          </motion.div>


          {/* Phone Device */}
          <motion.div
             animate={{ y: [-15, 15, -15] }}
             transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
             className="relative z-20"
          >
            <div className="relative aspect-[9/19] bg-[#121E1F] rounded-[3rem] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.4)] border-[10px] border-[#121E1F] ring-1 ring-white/10 overflow-hidden">
               {/* Dynamic Island */}
               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[35%] h-6 bg-black rounded-b-2xl z-30 flex justify-center items-center">
                  <div className="w-12 h-3 bg-black rounded-full flex gap-2 justify-center items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#1a1a1a]"></div>
                  </div>
               </div>
               
               {/* Screen Image */}
               <div className="w-full h-full bg-white relative">
                 <img 
                   src="https://github.com/Vishwanath-Kannan/video01/blob/main/Dashboard%20Main.png?raw=true" 
                   alt="App Interface" 
                   className="w-full h-full object-cover"
                 />
                 
                 {/* Interactive Touch Overlay Effect (simulating active usage) */}
                 <motion.div 
                   className="absolute top-[40%] left-[60%] w-8 h-8 bg-white/30 rounded-full z-40"
                   animate={{ scale: [1, 1.5, 1], opacity: [0, 0.5, 0] }}
                   transition={{ duration: 2, repeat: Infinity }}
                 />
               </div>

               {/* Glass Reflection */}
               <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent pointer-events-none z-40 rounded-[2.5rem]"></div>
            </div>
          </motion.div>

          {/* Floor Shadow */}
          <motion.div
            animate={{ scale: [0.9, 1.1, 0.9], opacity: [0.2, 0.1, 0.2] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-[80%] h-8 bg-black/20 blur-2xl rounded-full z-0"
          />

        </div>
      </div>
    </section>
  );
};

export default Hero;
