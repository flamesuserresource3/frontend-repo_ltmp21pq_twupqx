import React from 'react';

const quotes = [
  {
    quote: "Sucking at something is the first step to being sorta good at something.",
    author: 'Jake the Dog',
  },
  {
    quote: "What time is it? Adventure Time!",
    author: 'Finn & Jake',
  },
  {
    quote: "People make mistakes. It's all a part of growing up.",
    author: 'Finn the Human',
  },
  {
    quote: "Homies help homies. Always.",
    author: 'Finn the Human',
  },
  {
    quote: "Responsibility demands sacrifice.",
    author: 'Princess Bubblegum',
  },
];

const Quotes = () => {
  return (
    <section id="quotes" className="bg-[#EAFEFF] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-sky-900">Episodes & Quotes</h2>
            <p className="mt-2 text-sky-800/80">Iconic lines that make Ooo unforgettable.</p>
          </div>
          <a
            href="#about"
            className="inline-flex items-center justify-center rounded-full bg-[#FFA6C9] px-4 py-2 text-sky-900 font-semibold shadow-md shadow-[#FFA6C9]/40 hover:scale-105 transition-transform"
          >
            Fan Corner
          </a>
        </div>

        {/* Horizontal scroll list */}
        <div className="mt-10 overflow-x-auto">
          <div className="flex min-w-full gap-6 pr-6">
            {quotes.map((q, idx) => (
              <figure
                key={idx}
                className="relative shrink-0 w-[280px] sm:w-[320px] rounded-3xl border border-sky-100 bg-white p-6 shadow-[0_10px_30px_rgba(135,206,235,0.25)]"
              >
                <span className="absolute -top-3 -left-3 inline-flex items-center justify-center rounded-full bg-[#FFD14F] px-3 py-1 text-xs font-bold text-sky-900 shadow">Quote</span>
                <blockquote className="text-sky-900">“{q.quote}”</blockquote>
                <figcaption className="mt-4 text-sm font-semibold text-sky-800">— {q.author}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quotes;
