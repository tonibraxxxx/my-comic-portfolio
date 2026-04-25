'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const comics = [
  { id: 1, title: "THE SPLASH", src: "/splash.png", chapter: "PAGE 01" },
  { id: 2, title: "NAIROBI AT DAWN", src: "/dawn.png", chapter: "PAGE 02" },
  { id: 3, title: "ONE TERM: CHOICES", src: "/choices.png", chapter: "PAGE 03" },
  { id: 4, title: "ONE TERM: EVALUATION", src: "/evaluation.png", chapter: "PAGE 04" },
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
      {/* Navbar */}
      <nav className="p-4 border-b border-green-500/20 sticky top-0 bg-black/95 backdrop-blur-md z-40">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-black italic uppercase tracking-tighter">
            SICK O'CLOCK <span className="text-green-500">STUDIOS</span>
          </h1>
          <span className="text-[9px] font-bold border border-green-500 px-2 py-1 rounded tracking-[0.2em]">FULL FRAME</span>
        </div>
      </nav>

      {/* Comic Feed - Removed extra padding for maximum width on mobile */}
      <div className="max-w-4xl mx-auto py-4 space-y-8">
        {comics.map((comic, index) => (
          <article key={comic.id} className="flex flex-col">
            {/* Header info */}
            <div className="flex items-center gap-2 mb-3 px-4">
              <span className="text-[10px] font-black bg-green-500 text-black px-2 py-0.5 italic">{comic.chapter}</span>
              <h2 className="text-[11px] font-bold text-gray-500 uppercase tracking-widest">{comic.title}</h2>
            </div>

            {/* FULL IMAGE - No cutting, No Aspect Ratio */}
            <div 
              className="relative w-full cursor-zoom-in bg-neutral-900 overflow-hidden"
              onClick={() => setSelectedImage(comic.src)}
            >
              <img 
                src={comic.src} 
                alt={comic.title}
                className="w-full h-auto block object-contain" // object-contain ensures the whole image shows
                loading={index < 1 ? "eager" : "lazy"} 
              />
            </div>
          </article>
        ))}
      </div>

      {/* Reader Modal (Lightbox) */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/98 flex flex-col items-center overflow-y-auto cursor-zoom-out"
          onClick={() => setSelectedImage(null)}
        >
          {/* In Modal, we let the image be its full original size so you can scroll to read it */}
          <div className="min-h-screen w-full flex items-start justify-center p-0">
            <img 
              src={selectedImage} 
              className="w-full h-auto max-w-none md:max-w-4xl shadow-2xl" 
              alt="Zoomed" 
            />
          </div>
          <button className="fixed bottom-6 right-6 bg-green-600 text-white w-12 h-12 rounded-full font-black shadow-lg flex items-center justify-center text-xl">
            ✕
          </button>
        </div>
      )}

      <footer className="p-20 text-center border-t border-gray-900 mt-10">
        <p className="text-[9px] text-gray-800 tracking-[1em] uppercase font-black italic">
          TONIBRAXXX &copy; 2026
        </p>
      </footer>
    </main>
  );
}