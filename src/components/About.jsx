import React from 'react';

const About = () => {
  return (
    <section id="about" className="relative w-full bg-white py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="rounded-3xl border border-sky-100 bg-gradient-to-br from-white to-[#f2fbff] p-8 shadow-[0_10px_30px_rgba(135,206,235,0.25)]">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-sky-900">About & Fan Corner</h2>
          <p className="mt-4 text-sky-900/90 leading-relaxed">
            Adventure Time is a colorful journey through imagination, friendship, and growth. From candy kingdoms to interdimensional adventures, it blends humor with heartfelt storytelling. This fan corner celebrates the characters, their quirks, and the lessons we learned along the way.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl bg-[#9BE564] p-4 text-sky-900 font-semibold shadow" aria-label="Grass Green section">Grass Green vibes</div>
            <div className="rounded-2xl bg-[#FFA6C9] p-4 text-sky-900 font-semibold shadow" aria-label="Candy Pink section">Candy Pink joy</div>
            <div className="rounded-2xl bg-[#FFD14F] p-4 text-sky-900 font-semibold shadow" aria-label="Jake Yellow section">Jake Yellow glow</div>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#characters"
              className="inline-flex items-center justify-center rounded-full bg-[#FFA6C9] px-5 py-2.5 text-sky-900 font-semibold shadow hover:scale-105 transition-transform"
            >
              Back to Characters
            </a>
            <a
              href="#top"
              className="inline-flex items-center justify-center rounded-full bg-[#9BE564] px-5 py-2.5 text-sky-900 font-semibold shadow hover:scale-105 transition-transform"
            >
              Return to Top
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
