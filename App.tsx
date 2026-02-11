
import React from 'react';
import GameCard from './components/GameCard';
import AIGameMaster from './components/AIGameMaster';
import { GAMES, BRUTAL_CLASSES } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-black selection:text-[#A3E335] flex flex-col relative overflow-x-hidden bg-[#F4F2ED]">
      {/* --- PAPER TEXTURE & DECORATIVE BACKGROUND --- */}
      
      {/* Grain/Noise Overlay for Paper Feel */}
      <div className="fixed inset-0 pointer-events-none -z-40 opacity-[0.03]" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

      {/* Background Dot Grid */}
      <div className="fixed inset-0 pointer-events-none -z-30 opacity-[0.2]" 
           style={{ backgroundImage: 'radial-gradient(circle, #000 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }}></div>

      {/* Large Decorative Text (Background layer) */}
      <div className="fixed -top-10 -left-10 text-[15vw] font-black text-black opacity-[0.03] select-none pointer-events-none -z-20 leading-none uppercase italic">
        PLAY<br/>FREE<br/>WIN
      </div>

      {/* Floating Shapes */}
      <div className="fixed top-[12%] left-[18%] w-8 h-8 opacity-20 -z-10 hidden lg:block animate-[spin_10s_linear_infinite]">
        <div className="absolute top-1/2 left-0 w-full h-2 bg-black -translate-y-1/2 rounded-full"></div>
        <div className="absolute top-0 left-1/2 w-2 h-full -translate-x-1/2 rounded-full bg-black"></div>
      </div>
      <div className="fixed bottom-[20%] right-[25%] w-10 h-10 opacity-15 -z-10 animate-[spin_15s_linear_infinite_reverse]">
        <div className="absolute top-1/2 left-0 w-full h-2.5 bg-black -translate-y-1/2 rounded-full"></div>
        <div className="absolute top-0 left-1/2 w-2.5 h-full -translate-x-1/2 rounded-full bg-black"></div>
      </div>

      {/* Header Section */}
      <header className="max-w-7xl mx-auto px-4 py-12 md:py-20 text-center relative z-10 w-full">
        <div className={`
          inline-block 
          ${BRUTAL_CLASSES.border} 
          ${BRUTAL_CLASSES.shadow} 
          bg-[#A3E635] 
          p-6 md:p-10 
          rotate-[-1deg] md:rotate-[-2deg] 
          hover:rotate-0 
          transition-all duration-500
          cursor-default
          mb-8 md:mb-10
          max-w-full
        `}>
          <h1 className="text-4xl xs:text-5xl sm:text-7xl md:text-8xl font-black uppercase tracking-[-0.07em] leading-[1] md:leading-[0.85] text-black">
            Arcade <br className="hidden xs:block" /> Station
          </h1>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 md:gap-5 mt-2">
          <div className="bg-black text-white px-5 py-2 md:px-7 md:py-3 text-lg md:text-3xl font-black italic uppercase tracking-tighter shadow-[4px_4px_0px_0px_#FFD600] md:shadow-[6px_6px_0px_0px_#FFD600] -rotate-1">
            CHOOSE
          </div>
          <div className="text-lg md:text-3xl font-black italic uppercase tracking-tighter text-black border-b-[4px] md:border-b-[7px] border-black px-1 md:px-4 rotate-1">
            YOUR CHALLENGE!
          </div>
        </div>
      </header>

      {/* Main Content Grid */}
      <main className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mb-28 md:mb-32 w-full z-10">
        {GAMES.map(game => (
          <GameCard key={game.id} game={game} />
        ))}
      </main>

      {/* Unified Footer - No white background, seamless with body */}
      <footer className="mt-auto py-12 px-4 border-t-[5px] md:border-t-[7px] border-black text-center bg-[#F4F2ED] z-20 relative">
        {/* Diamond Accent on the border line */}
        <div className="absolute top-[-25px] left-1/2 -translate-x-1/2 w-12 h-12 bg-[#FFD600] border-[4px] border-black rotate-45 z-10 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"></div>
        
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <div className="font-bold uppercase text-[9px] md:text-[11px] tracking-[0.25em] md:tracking-[0.4em] text-black opacity-70">
            Created & Designed by <span className="font-black text-black opacity-100">JPJP92</span>
          </div>
        </div>
      </footer>

      <AIGameMaster />
    </div>
  );
};

export default App;
