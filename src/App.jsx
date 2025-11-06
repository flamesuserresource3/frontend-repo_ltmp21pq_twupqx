import React from 'react';
import Hero from './components/Hero';
import Characters from './components/Characters';
import Quotes from './components/Quotes';
import About from './components/About';

function App() {
  return (
    <div id="top" className="min-h-screen w-full bg-[#87CEEB] text-sky-900">
      {/* Header / Nav */}
      <header className="sticky top-0 z-50 w-full bg-white/70 backdrop-blur border-b border-white/50">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <a href="#top" className="text-xl font-black text-[#FFD14F] drop-shadow-[0_2px_0_rgba(0,0,0,0.15)]">Adventure Time</a>
          <nav className="hidden sm:flex items-center gap-4 text-sm font-semibold">
            <a href="#characters" className="hover:underline">Characters</a>
            <a href="#quotes" className="hover:underline">Quotes</a>
            <a href="#about" className="hover:underline">About</a>
          </nav>
        </div>
      </header>

      {/* Sections */}
      <main>
        <Hero />
        <Characters />
        <Quotes />
        <About />
      </main>

      {/* Footer */}
      <footer className="w-full bg-white/80 border-t border-white/60">
        <div className="mx-auto max-w-6xl px-6 py-6 text-sm text-sky-800/80 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>
            Built with love for the Land of Ooo. Colors inspired by Jake, PB, BMO, and the sky.
          </p>
          <div className="flex items-center gap-2">
            <a href="#top" className="rounded-full bg-[#9BE564] px-4 py-1.5 font-semibold text-sky-900 shadow hover:scale-105 transition-transform">Back to top</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
