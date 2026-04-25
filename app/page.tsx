import Image from 'next/image';

const comics = [
  { id: 1, title: "The Splash", src: "/streer.png", span: "row-span-2" },
  { id: 2, title: "Character Profiles", src: "/page 1.png", span: "col-span-2" },
  { id: 3, title: "Nairobi at Dawn", src: "/nairobi at dawn.png", span: "row-span-1" },
  { id: 4, title: "One Term: Choices", src: "/one term.png", span: "col-span-2" },
  { id: 5, title: "One Term: Job Done", src: "/job done.png", span: "col-span-2" },
];

export default function ComicGallery() {
  return (
    <main className="min-h-screen bg-black text-white p-4 md:p-8 font-sans">
      {/* Header Section */}
      <header className="max-w-6xl mx-auto mb-12 border-l-4 border-green-500 pl-6">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic leading-none">
          SICK O'CLOCK <span className="text-green-500">STUDIOS</span>
        </h1>
        <p className="text-gray-400 mt-4 max-w-md italic text-lg uppercase tracking-widest">
          Nairobi Campus Stories. 
          <span className="block text-sm font-normal normal-case text-gray-500 mt-1">
            Choices don't end at the ballot.
          </span>
        </p>
      </header>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {comics.map((comic) => (
          <div 
            key={comic.id} 
            className={`relative group overflow-hidden rounded-lg border border-gray-800 bg-gray-900 transition-all duration-500 hover:border-green-500 shadow-2xl ${comic.span}`}
          >
            {/* The Image */}
            <img
              src={comic.src}
              alt={comic.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 min-h-[300px]"
            />
            
            {/* Dark Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
            
            {/* Text Overlay */}
            <div className="absolute bottom-0 left-0 p-6">
              <p className="text-[10px] text-green-500 font-black tracking-[0.2em] mb-1">
                SICK O'CLOCK EXCLUSIVE
              </p>
              <h3 className="text-2xl font-bold uppercase tracking-tight text-white italic">
                {comic.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Section */}
      <footer className="mt-20 py-10 border-t border-gray-900 text-center">
        <p className="text-gray-600 text-[10px] uppercase tracking-[0.4em]">
          Created by Tonibraxxx &copy; 2026
        </p>
        <div className="flex justify-center gap-4 mt-4 opacity-50">
          <span className="h-1 w-1 bg-green-500 rounded-full"></span>
          <span className="h-1 w-1 bg-green-500 rounded-full"></span>
          <span className="h-1 w-1 bg-green-500 rounded-full"></span>
        </div>
      </footer>
    </main>
  );
}