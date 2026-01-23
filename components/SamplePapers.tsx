
import React, { useState } from 'react';
import { ExternalLink, FileText, X, Smartphone } from 'lucide-react';
import { SamplePaper } from '../types';
import { motion, AnimatePresence } from 'framer-motion';

const samples: SamplePaper[] = [
  { title: "Sample Question Paper Set 01", subject: "Science" },
  { title: "Sample Question Paper Set 02", subject: "Science" },
  { title: "Sample Question Paper Set 03", subject: "Science" },
  { title: "Sample Question Paper Set 04", subject: "Science" },
  { title: "Sample Question Paper Set 05", subject: "Science" },
  { title: "Sample Question Paper Set 06", subject: "Science" },
];

const SamplePapers: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.flutter_fika_learn&hl=en";
  
  // Specific links provided for the first two papers
  const VIEW_LINKS = [
    "https://drive.google.com/file/d/1awwK2XPMrjrA378bZXdAAGdG2awX9vRC/view?usp=sharing",
    "https://drive.google.com/file/d/1ksoVsNkF3JLZU1n3XqxBp2NZodg5ZVMe/view?usp=drive_link"
  ];

  const handleView = (index: number) => {
    if (index < 2) {
      // Set local storage flag so App.tsx can show the return notification
      localStorage.setItem('fikalearn_paper_viewed', 'true');
      // Direct redirect to provided Google Drive links
      window.open(VIEW_LINKS[index], '_blank');
    } else {
      // Other papers: Show locked modal
      setShowModal(true);
    }
  };

  const handlePlayStoreRedirect = () => {
    window.open(PLAY_STORE_URL, '_blank');
    setShowModal(false);
  };

  return (
    <section id="samples" className="pt-32 pb-24 md:pt-48 md:pb-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
           <motion.div 
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-100 text-xs font-bold text-[#38A4BE] uppercase tracking-widest mb-6"
           >
             Free Resources
           </motion.div>
           <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-4xl md:text-5xl font-semibold text-[#121E1F] mb-6 tracking-tight"
           >
             Try Sample Question Paper
           </motion.h2>
           <motion.p 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="text-xl text-gray-500 max-w-2xl mx-auto font-medium"
           >
             Get a taste of the Fikalearn experience. High-quality questions, structured for your success.
           </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {samples.map((sample, index) => (
            <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group relative bg-white rounded-[2.5rem] border border-gray-100 p-8 flex flex-col items-center text-center transition-all duration-500 hover:border-[#38A4BE]/30 hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.08)] hover:-translate-y-2 cursor-pointer"
                onClick={() => handleView(index)}
            >
              <div className="w-20 h-24 bg-gray-50 border border-gray-100 rounded-2xl mb-8 flex items-center justify-center relative shadow-sm group-hover:scale-105 transition-transform duration-500">
                 <FileText className={`${index < 2 ? 'text-[#38A4BE]' : 'text-gray-300'} transition-colors`} size={40} strokeWidth={1.5} />
                 {index >= 2 && (
                    <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px] rounded-2xl flex items-center justify-center">
                       <Smartphone size={24} className="text-gray-400" />
                    </div>
                 )}
                 <div className={`absolute -right-3 -top-3 w-10 h-10 ${index < 2 ? 'bg-[#121E1F]' : 'bg-gray-200'} rounded-full text-white text-[10px] flex items-center justify-center font-bold shadow-lg border-2 border-white`}>
                    {index < 2 ? 'PDF' : 'APP'}
                 </div>
              </div>
              <h3 className="text-xs font-bold text-[#38A4BE] uppercase tracking-widest mb-3">{sample.subject}</h3>
              <h4 className="text-xl font-semibold text-[#121E1F] mb-10 tracking-tight leading-tight px-4">{sample.title}</h4>
              
              <button 
                className={`w-full flex items-center justify-center gap-2 text-sm font-bold py-4 rounded-2xl transition-all duration-300 ${index < 2 ? 'bg-[#121E1F] text-white hover:bg-[#245C68]' : 'bg-gray-50 text-gray-400 group-hover:bg-gray-100 group-hover:text-[#121E1F]'}`}
              >
                {index < 2 ? <ExternalLink size={18} /> : <Smartphone size={18} />}
                {index < 2 ? 'View Paper' : 'Get in App'}
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Locked Papers Modal */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-md bg-white rounded-[3rem] p-10 text-center shadow-2xl border border-white/20 overflow-hidden"
            >
              {/* Decorative Glow */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#38A4BE]/10 rounded-full blur-3xl pointer-events-none" />
              
              <button 
                onClick={() => setShowModal(false)}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-50 text-gray-400 transition-colors"
              >
                <X size={20} />
              </button>

              <div className="w-20 h-20 bg-[#E8F3F6] rounded-[2rem] flex items-center justify-center text-[#38A4BE] mx-auto mb-8">
                <Smartphone size={40} strokeWidth={1.5} />
              </div>

              <h3 className="text-3xl font-bold text-[#121E1F] mb-4 tracking-tight">Unlock More Papers</h3>
              <p className="text-lg text-gray-500 mb-10 leading-relaxed font-medium">
                For access to our complete library of question papers, detailed solutions, and AI help, download the Fikalearn app.
              </p>

              <div className="flex flex-col gap-4">
                <button 
                  onClick={handlePlayStoreRedirect}
                  className="bg-[#121E1F] text-white py-5 rounded-2xl text-lg font-bold hover:bg-[#245C68] transition-all transform active:scale-95 shadow-xl shadow-black/10"
                >
                  Download Now
                </button>
                <button 
                  onClick={() => setShowModal(false)}
                  className="text-gray-400 font-semibold py-2 hover:text-gray-600 transition-colors text-sm"
                >
                  Maybe Later
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default SamplePapers;
