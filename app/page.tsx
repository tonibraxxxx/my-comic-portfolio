'use client';
import { useState, useEffect } from 'react';

// ARRANGE IN ORDER: Start with small "shapes/previews" then lead to full pages
const comics = [
  { id: 1, title: "S.P.L.A.S.H", src: "/splash.png", chapter: "INTRO", type: "preview" },
  { id: 2, title: "DAWN", src: "/dawn.png", chapter: "SCENE 1", type: "preview" },
  { id: 3, title: "CHOICES", src: "/choices.png", chapter: "SCENE 2", type: "full" },
  { id: 4, title: "EVALUATION", src: "/evaluation.png", chapter: "SCENE 3", type: "full" },
  { id: 5, title: "APPENDIX", src: "/profiles.png", chapter: "DATA", type: "blank" }, // Blank/AI logo goes last
];

export default function SanAndreasReader() {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (selectedImage) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
  }, [selectedImage]);

  return (
    <main className="min-h-screen bg-[#0d0d0d] text-[#ffdd00] font-mono selection:bg-pink-500">
      
      {/* SAN ANDREAS THEMED HEADER - Small & Sleek */}
      <nav className="p-4 border-b-2 border-pink-600 bg-black/80 sticky top-0 z-40 flex justify-between items-center backdrop-blur-sm">
        <h1 className="text-sm font-black italic tracking-widest text-pink-500 uppercase">
          SICK O'CLOCK <span className="text-blue-400">STUDIOS</span>
        </h1>
        <div className="text-[10px] bg-pink-600 text-white px-2 py-0.5 rounded font-bold shadow-[2px_2px_0px_#2563eb]">
          MALIBU_VER_2.6
        </div>
      </nav>

      <div className="max-w-5xl mx-auto p-4 py-10">
        
        {/* TOP SECTION: Small Shapes (Grid) */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4 mb-16">
          {comics.filter(c => c.type === 'preview').map((comic) => (
            <div key={comic.id} className="group cursor-pointer" onClick={() => setSelectedImage(comic.src)}>
              <p className="text-[8px] mb-1 font-bold text-blue-400">// {comic.chapter}</p>
              <div className="relative border-2 border-pink-600/30 group-hover:border-pink-500 transition-all overflow-hidden rounded">
                 <img src={comic.src} className="w-full aspect-video object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                 <div className="absolute bottom-0 left-0 bg-pink-600 text-white text-[8px] font-black px-2 uppercase">{comic.title}</div>
              </div>
            </div>
          ))}
        </div>

        {/* MIDDLE SECTION: Full Readable Pages */}
        <div className="space-y-12 mb-20">
          {comics.filter(c => c.type === 'full').map((comic) => (
            <div key={comic.id} className="flex flex-col items-center">
              <div className="w-full border-l-2 border-blue-500 pl-4 mb-4">
                 <span className="text-[8px] block text-pink-500 font-black tracking-widest">{comic.chapter}</span>
                 <h2 className="text-[10px] font-bold text-white uppercase">{comic.title}</h2>
              </div>
              <div className="relative w-full cursor-zoom-in group" onClick={() => setSelectedImage(comic.src)}>
                <img src={comic.src} className="w-full h-auto border border-white/5 rounded-sm shadow-[10px_10px_0px_rgba(219,39,119,0.1)]" />
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM SECTION: The Blank Image (Last) */}
        <div className="opacity-40 hover:opacity-100 transition-opacity">
          {comics.filter(c => c.type === 'blank').map((comic) => (
            <div key={comic.id} className="max-w-xs mx-auto border-t border-dashed border-gray-800 pt-10 text-center">
              <p className="text-[8px] text-gray-500 mb-4 tracking-widest uppercase">End of Data Transmission</p>
              <img src={comic.src} className="w-full h-auto rounded grayscale brightness-50" onClick={() => setSelectedImage(comic.src)} />
            </div>
          ))}
        </div>
      </div>

      {/* MALIBU BEACH STICKER / FOOTER */}
      <footer className="relative py-20 overflow-hidden bg-gradient-to-t from-blue-900/20 to-transparent flex flex-col items-center border-t border-pink-500/10">
        {/* The Sticker Look */}
        <div className="bg-white p-2 rotate-2 shadow-xl border-2 border-black transform hover:-rotate-1 transition-transform cursor-default">
           <div className="bg-blue-400 p-4 flex flex-col items-center">
              <span className="text-white font-black text-2xl leading-none tracking-tighter">MALIBU BEACH</span>
              <span className="text-white/80 font-bold text-[8px] uppercase tracking-[0.4em]">San Andreas Official</span>
           </div>
        </div>
        <p className="mt-10 text-[8px] text-gray-600 font-bold tracking-[1em] uppercase">
          TONIBRAXXX &times; SICK O'CLOCK
        </p>
      </footer>

      {/* MODAL */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/98 flex flex-col items-center overflow-y-auto cursor-zoom-out" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} className="w-full h-auto max-w-4xl" />
        </div>
      )}
    </main>
  );
}