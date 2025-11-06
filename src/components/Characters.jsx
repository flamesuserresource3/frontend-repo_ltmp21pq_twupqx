import React from 'react';

const characters = [
  { name: 'Finn', color: '#87CEEB', img: 'https://raw.githubusercontent.com/encharm/Font-Awesome-SVG-PNG/master/black/png/256/user.png' },
  { name: 'Jake', color: '#FFD14F', img: 'https://raw.githubusercontent.com/encharm/Font-Awesome-SVG-PNG/master/black/png/256/user.png' },
  { name: 'Princess Bubblegum', color: '#FFA6C9', img: 'https://raw.githubusercontent.com/encharm/Font-Awesome-SVG-PNG/master/black/png/256/user.png' },
  { name: 'BMO', color: '#9BE564', img: 'https://raw.githubusercontent.com/encharm/Font-Awesome-SVG-PNG/master/black/png/256/user.png' },
  { name: 'Marceline', color: '#f48fb1', img: 'https://raw.githubusercontent.com/encharm/Font-Awesome-SVG-PNG/master/black/png/256/user.png' },
];

const Characters = () => {
  return (
    <section id="characters" className="relative w-full bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-sky-900">Characters</h2>
        <p className="mt-2 text-sky-800/80">A few of our favorites from the Land of Ooo.</p>
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {characters.map((c) => (
            <div key={c.name} className="group flex flex-col items-center">
              <div
                className="relative h-28 w-28 sm:h-32 sm:w-32 rounded-full ring-8 ring-white shadow-xl overflow-hidden"
                style={{ backgroundColor: c.color }}
                aria-label={c.name}
              >
                <img
                  src={c.img}
                  alt={c.name}
                  className="absolute inset-0 h-full w-full object-contain p-4 scale-100 group-hover:scale-110 transition-transform"
                />
              </div>
              <span className="mt-3 text-sm font-semibold text-sky-900 text-center">{c.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Characters;
