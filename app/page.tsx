'use client';
import { useState } from 'react';

const comics = [
  { id: 1, title: "THE SPLASH", src: "/streer.png", chapter: "PAGE 01" },
  { id: 2, title: "NAIROBI AT DAWN", src: "/nairobi at dawn.png", chapter: "PAGE 02" },
  { id: 3, title: "POLITICAL CHOICES", src: "/one term.png", chapter: "PAGE 03" },
  { id: 4, title: "THE EVALUATION", src: "/job done.png", chapter: "PAGE 04" },
  { id: 5, title: "CHARACTER PROFILES", src: "/page 1.png", chapter: "APPENDIX" },
];

export default function ComicReader() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <main className="min-h-screen bg-black text-white font-sans">
      {/* Fixed Navigation */}
      <nav className="p-4 border-b border-green-500/30 sticky top-0 bg-black/90 backdrop-blur-md z-40">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-black italic uppercase tracking-tighter">
            SICK O'CLOCK <span className="text-green-500">STUDIOS</span>
          </h1>
          <span className="text-[9px] font-bold border border-green-500 px-2 py-1 rounded">READER MODE</span>
        </div>
      </nav>

      {/* Comic Feed */}
      <div className="max-w-2xl mx-auto p-4 py-8 space-y-12">
        {comics.map((comic) => (
          <article key={comic.id} className="group">
            {/* Small Bold Header */}
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[10px] font-black text-green-500 bg-green-500/10 px-2 py-0.5 rounded">
                {comic.chapter}
              </span>
              <h2 className="text-[11px] font-bold text-gray-500 uppercase tracking-tighter">
                {comic.title}
              </h2>
            </div>

            {/* Clickable Image Container */}
            <div 
              className="cursor-pointer overflow-hidden rounded border border-gray-900 hover:border-green-500/50 transition-all duration-300 shadow-xl"
              onClick={() => setSelectedImage(comic.src)}
            >
              <img 
                src={comic.src} 
                alt={comic.title}
                className="w-full h-auto transform transition-transform duration-500 group-hover:scale-[1.01]"
                onError={(e) => {
                  // This helps find the missing image - checks if it should be .jpg instead
                  const target = e.target;
                  if (target.src.includes('.png')) {
                    target.src = target.src.replace('.png', '.jpg');
                  }
                }}
              />
            </div>
            <p className="text-center text-[10px] text-gray-600 mt-4 italic uppercase tracking-widest">Click image to expand</p>
          </article>
        ))}
      </div>

      {/* FULL SCREEN MODAL - This opens when you click an image */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/98 flex flex-col items-center justify-center p-4 md:p-10 animate-in fade-in duration-200 cursor-zoom-out"
          onClick={() => setSelectedImage(null)}
        >
          <img 
            src={selectedImage} 
            className="max-h-full max-w-full object-contain shadow-2xl rounded shadow-green-500/10"
            alt="Reading view"
          />
          <button className="absolute top-5 right-5 bg-white/10 hover:bg-white/20 text-white rounded-full w-10 h-10 flex items-center justify-center backdrop-blur-md">
            ✕
          </button>
        </div>
      )}

      <footer className="p-16 text-center border-t border-gray-900 mt-10">
        <p className="text-[10px] text-gray-700 tracking-[0.5em] uppercase font-black italic">
          TONIBRAXXX &copy; 2026
        </p>
      </footer>
    </main>
  );
}