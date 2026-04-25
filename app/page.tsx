import Image from 'next/image';

const comics = [
  { id: 1, title: "Sick O'Clock: The Splash", src: "/streer.jpg", span: "row-span-2" },
  { id: 2, title: "Character Profiles", src: "/page 1.jpg", span: "col-span-2" },
  { id: 3, title: "Nairobi at Dawn", src: "/nairobi at dawn.jpg", span: "row-span-1" },
  { id: 4, title: "One Term: Political Choices", src: "/one term.jpg", span: "col-span-2" },
  { id: 5, title: "One Term: The Evaluation", src: "/job done.jpg", span: "col-span-2" },
];

export default function ComicGallery() {
  return (
    <main className="min-h-screen bg-black text-white p-4 md:p-8">
      {/* Header */}
      <header className="max-w-6xl mx-auto mb-12 border-l-4 border-green-500 pl-6">
        <h1 className="text-5xl font-black tracking-tighter uppercase italic">
          Sick O'Clock <span className="text-green-500">Studios</span>
        </h1>
        <p className="text-gray-400 mt-2 max-w-md italic">
          A Nairobi Campus Story. Choices don't end at the ballot.
        </p>
      </header>

      {/* Comic Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {comics.map((comic) => (
          <div 
            key={comic.id} 
            className={`relative group overflow-hidden rounded-lg border border-gray-800 transition-all duration-500 hover:border-green-500 ${comic.span}`}
          >
            <img
              src={comic.src}
              alt={comic.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70" />
            <div className="absolute bottom-0 left-0 p-6">
              <h3 className="text-xl font-bold uppercase tracking-widest text-white">{comic.title}</h3>
              <p className="text-xs text-green-500 font-bold mt-1">SICK O'CLOCK EXCLUSIVE</p>
            </div>
          </div>
        ))}
      </div>

      <footer className="mt-20 text-center text-gray-500 text-xs uppercase tracking-widest">
        Created by Tonibraxxx &copy; 2026 | Built with Next.js & Vercel
      </footer>
    </main>
  );
}