import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-[linear-gradient(180deg,#87CEEB_0%,#bfe9ff_100%)]">
      {/* Spline 3D scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/atN3lqky4IzF-KEP/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay for readability (does not block interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#87CEEB]/30 to-[#87CEEB]"></div>

      {/* Clouds */}
      <div className="pointer-events-none absolute inset-0">
        <div className="cloud" style={{ top: '10%', left: '5%' }} />
        <div className="cloud" style={{ top: '25%', left: '70%' }} />
        <div className="cloud" style={{ top: '50%', left: '20%' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 py-24 text-center">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-[#FFD14F] drop-shadow-[0_4px_0_rgba(0,0,0,0.15)] tracking-tight">
          Adventure Time
        </h1>
        <p className="mt-4 max-w-2xl text-lg sm:text-xl text-sky-900/90">
          Grab your friends! Explore the Land of Ooo with Finn, Jake, and the gang.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#characters"
            className="inline-flex items-center justify-center rounded-full bg-[#FFA6C9] px-6 py-3 text-sky-900 font-semibold shadow-lg shadow-[#FFA6C9]/40 hover:scale-105 transition-transform"
          >
            Meet the Crew
          </a>
          <a
            href="#quotes"
            className="inline-flex items-center justify-center rounded-full bg-[#9BE564] px-6 py-3 text-sky-900 font-semibold shadow-lg shadow-[#9BE564]/40 hover:scale-105 transition-transform"
          >
            Iconic Quotes
          </a>
        </div>
      </div>

      {/* Inline styles for clouds animation */}
      <style>{`
        .cloud {
          position: absolute;
          width: 180px;
          height: 60px;
          background: white;
          border-radius: 50px;
          box-shadow:
            30px 10px 0 0 white,
            60px 15px 0 0 white,
            90px 8px 0 0 white;
          opacity: 0.7;
          animation: float 18s linear infinite;
        }
        @keyframes float {
          0% { transform: translateX(-10px); }
          50% { transform: translateX(20px); }
          100% { transform: translateX(-10px); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
