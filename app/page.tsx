'use client';
import { useState, useEffect } from 'react';

const comics = [
  { id: 1, title: "THE SPLASH", src: "/splash.png", chapter: "PAGE 01" },
  { id: 2, title: "NAIROBI AT DAWN", src: "/dawn.png", chapter: "PAGE 02" },
  { id: 3, title: "ONE TERM: CHOICES", src: "/choices.png", chapter: "PAGE 03" },
  { id: 4, title: "ONE TERM: EVALUATION", src: "/evaluation.png", chapter: "PAGE 04" },
  { id: 5, title: "CHARACTER PROFILES", src: "/profiles.png", chapter: "APPENDIX" },
];

export default function ComicReader() {
  const [selectedImage, setSelectedImage] = useState(null);

  // This prevents scrolling when a comic page is zoomed in
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedImage]);

  return (
    <main className="min-h-screen bg-black text-white font-sans selection:bg-green-500 overflow-x-hidden">
      {/* Header - Scaled for Mobile */}
      <nav className="p-4 border-b border-green-500/20 sticky top-0 bg-black/95 backdrop-blur-md z-40">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <h1 className="text-lg md:text-xl font-black italic uppercase tracking-tighter">
            SICK O'CLOCK <span className="text-green-500">STUDIOS</span>
          </h1>
          <span className="text-[8px] font-bold border border-green-500 px-2 py-1 rounded tracking-widest">MOBILE READER</span>
        </div>
      </nav>

      {/* Comic Feed */}
      <div className="max-w-2xl mx-auto px-2 py-6 space-y-12">
        {comics.map((comic) => (
          <article key={comic.id} className="flex flex-col">
            {/* Header moved to TOP but made small so it doesn't block */}
            <div className="flex items-center gap-2 mb-2 px-1">
              <span className="text-[9px] font-black bg-green-500 text-black px-1.5 py-0.5 italic">
                {comic.chapter}
              </span>
              <h2 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                {comic.title}
              </h2>
            </div>

            {/* Clickable Image */}
            <div 
              className="active:scale-[0.98] transition-transform cursor-pointer rounded overflow-hidden border border-gray-900 shadow-2xl"
              onClick={() => setSelectedImage(comic.src)}
            >
              <img 
                src={comic.src} 
                alt={comic.title}
                className="w-full h-auto block"
              />
            </div>
            
            <p className="text-[8px] text-gray-700 mt-3 text-center uppercase tracking-[0.2em]">
              Tap image to zoom and read
            </p>
          </article>
        ))}
      </div>

      {/* FULL SCREEN ZOOM MODAL - Mobile Optimized */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center p-0 md:p-4 cursor-zoom-out touch-none"
          onClick={() => setSelectedImage(null)}
        >
          {/* Use a wrapper for smooth mobile scrolling of the large image */}
          <div className="w-full h-full overflow-auto flex items-center justify-center p-2">
            <img 
              src={selectedImage} 
              className="max-w-none w-full md:max-w-full md:max-h-full object-contain shadow-2xl animate-in zoom-in-95 duration-200"
              alt="Zoomed view"
            />
          </div>
          
          {/* Mobile Close Button */}
          <button className="absolute bottom-10 bg-green-600 text-white px-8 py-3 rounded-full font-black text-xs tracking-widest shadow-lg active:bg-green-700">
            CLOSE READER
          </button>
        </div>
      )}

      <footer className="p-12 text-center border-t border-gray-900 mt-10 bg-neutral-950">
        <p className="text-[8px] text-gray-700 tracking-[0.5em] uppercase font-black">
          TONIBRAXXX &copy; 2026
        </p>
      </footer>
    </main>
  );
}