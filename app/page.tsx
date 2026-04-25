'use client';
import { useState } from 'react';

// REORDERED LIST: Bard/AI logo images should be last in this list
const comics = [
  { id: 1, title: "THE SPLASH", src: "/streer.png", chapter: "PAGE 01", description: "The beginning of the Nairobi Campus saga." },
  { id: 2, title: "NAIROBI AT DAWN", src: "/nairobi at dawn.png", chapter: "PAGE 02", description: "The city wakes up to new choices." },
  { id: 3, title: "POLITICAL CHOICES", src: "/one term.png", chapter: "PAGE 03", description: "The weight of the ballot." },
  { id: 4, title: "THE EVALUATION", src: "/job done.png", chapter: "PAGE 04", description: "Looking back at the results." },
  { id: 5, title: "CHARACTER PROFILES", src: "/page 1.png", chapter: "APPENDIX", description: "AI Generated Assets & Logos." }, // This usually has the logo/profiles
];

export default function ComicReader() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white font-sans">
      {/* Comic Web Top Bar */}
      <nav className="p-4 border-b border-green-500/30 sticky top-0 bg-black/90 backdrop-blur-md z-40">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="h-8 w-1 bg-green-500"></div>
            <h1 className="text-2xl font-black italic tracking-tighter uppercase">
              SICK O'CLOCK <span className="text-green-500">STUDIOS</span>
            </h1>
          </div>
          <div className="text-[10px] font-bold bg-green-500 text-black px-2 py-1 rounded italic uppercase">
            Live Reader
          </div>
        </div>
      </nav>

      {/* Comic Reader Feed */}
      <div className="max-w-3xl mx-auto p-4 py-10 space-y-16">
        {comics.map((comic) => (
          <article key={comic.id} className="flex flex-col">
            {/* Small Bold Header like Comic Webs */}
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[10px] font-extrabold text-green-500 uppercase tracking-widest bg-green-500/10 px-2 py-0.5 rounded">
                {comic.chapter}
              </span>
              <h2 className="text-xs font-bold text-gray-400 uppercase tracking-tighter">
                {comic.title}
              </h2>
            </div>

            {/* Large Readable Image */}
            <div 
              className="relative cursor-zoom-in border border-gray-800 rounded shadow-2xl transition-all hover:border-green-500/50"
              onClick={() => setSelectedImage(comic.src)}
            >
              <img 
                src={comic.src} 
                alt={comic.title}
                className="w-full h-auto block rounded"
              />
            </div>
            
            <p className="mt-4 text-sm text-gray-500 italic text-center leading-relaxed">
              {comic.description}
            </p>
          </article>
        ))}
      </div>

      {/* Full-Screen Zoom Overlay */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/98 flex items-center justify-center p-2 cursor-zoom-out"
          onClick={() => setSelectedImage(null)}
        >
          <img 
            src={selectedImage} 
            className="max-h-full max-w-full object-contain animate-in fade-in zoom-in-95 duration-200"
            alt="Expanded View"
          />
          <div className="absolute top-5 right-5 text-gray-500 text-sm font-bold uppercase tracking-widest">
            Click anywhere to close
          </div>
        </div>
      )}

      <footer className="p-20 text-center border-t border-gray-900 bg-black">
        <p className="text-[9px] text-gray-600 tracking-[0.6em] uppercase font-black italic">
          TONIBRAXXX &copy; 2026 | SICK O'CLOCK PRODUCTION
        </p>
      </footer>
    </main>
  );
}