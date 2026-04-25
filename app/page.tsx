'use client';
import { useState, useEffect } from 'react';

const comics = [
  { id: 1, title: "THE SPLASH", src: "/splash.png", chapter: "P.01" },
  { id: 2, title: "NAIROBI AT DAWN", src: "/dawn.png", chapter: "P.02" },
  { id: 3, title: "ONE TERM: CHOICES", src: "/choices.png", chapter: "P.03" },
  { id: 4, title: "ONE TERM: EVALUATION", src: "/evaluation.png", chapter: "P.04" },
  { id: 5, title: "CHARACTER PROFILES", src: "/profiles.png", chapter: "APPENDIX" },
];

export default function ComicReader() {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (selectedImage) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
  }, [selectedImage]);

  return (
    <main className="min-h-screen bg-black text-white font-sans selection:bg-green-500">
      {/* Sleek Minimal Navbar */}
      <nav className="p-4 border-b border-white/5 sticky top-0 bg-black/95 backdrop-blur-md z-40">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-black italic uppercase tracking-tighter">
            SICK O'CLOCK <span className="text-green-500">STUDIOS</span>
          </h1>
        </div>
      </nav>

      {/* Main Feed */}
      <div className="max-w-4xl mx-auto py-6 space-y-16">
        {comics.map((comic, index) => (
          <article key={comic.id} className="flex flex-col">
            
            {/* Smallest Conspicuous Heading - Fully Outside */}
            <div className="px-4 mb-2 flex items-baseline gap-2 opacity-60">
              <span className="text-[7px] font-black text-green-500 tracking-[0.3em]">
                {comic.chapter}
              </span>
              <h2 className="text-[7px] font-extrabold text-gray-500 uppercase tracking-[0.4em]">
                {comic.title}
              </h2>
            </div>

            {/* RAW Image Container - No cropping allowed */}
            <div 
              className="relative w-full cursor-zoom-in bg-neutral-900 shadow-2xl overflow-visible"
              onClick={() => setSelectedImage(comic.src)}
            >
              <img 
                src={comic.src} 
                alt={comic.title}
                className="w-full h-auto block object-cover" 
                loading={index < 1 ? "eager" : "lazy"} 
                style={{ maxHeight: 'none', minHeight: 'auto' }}
              />
            </div>
          </article>
        ))}
      </div>

      {/* Zoom / Reader Overlay */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/98 flex flex-col items-center overflow-y-auto cursor-zoom-out"
          onClick={() => setSelectedImage(null)}
        >
          <div className="min-h-screen w-full flex items-start justify-center">
            <img 
              src={selectedImage} 
              className="w-full h-auto max-w-none md:max-w-5xl" 
              alt="Reading view" 
              style={{ maxHeight: 'none' }}
            />
          </div>
          {/* Close Indicator */}
          <div className="fixed bottom-8 bg-green-500 text-black font-black text-[9px] px-6 py-2 rounded-full tracking-widest shadow-lg uppercase">
            Tap anywhere to close
          </div>
        </div>
      )}

      <footer className="p-20 text-center opacity-20">
        <p className="text-[8px] tracking-[1.5em] uppercase font-black">
          TONIBRAXXX &copy; 2026
        </p>
      </footer>
    </main>
  );
}