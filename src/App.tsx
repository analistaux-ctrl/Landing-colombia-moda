/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

// ============================================================================
// NOTA PARA INTEGRACIÓN CON SHOPIFY LIQUID:
// Cada uno de estos componentes React está diseñado para representar una 
// "Sección" (Section) en Shopify. 
// Las propiedades (props) de los componentes equivalen a los "settings" o 
// "blocks" del schema de Liquid.
// ============================================================================

// Equivalente a una sección "Hero Banner" o "Image Banner"
const HeroBanner = () => (
  <div className="w-full bg-[#c4c4c4] h-[50vh] md:h-[85vh] flex items-center justify-center">
    <div className="text-center text-white tracking-widest flex flex-col items-center">
      <h1 className="text-[28px] md:text-[46px] font-medium uppercase tracking-[0.2em] mb-1">Colombiamoda</h1>
      <p className="text-[12px] md:text-[14px] uppercase tracking-[0.3em] mb-3">La semana de la moda de Colombia®</p>
      <p className="text-[14px] md:text-[16px] font-medium uppercase tracking-[0.2em]">Cocreación</p>
    </div>
  </div>
);

// Equivalente a una sección "Rich Text"
const RichText = ({ title, text }: { title?: string, text: string }) => (
  <div className="w-full py-12 md:py-16 px-4 flex flex-col items-center justify-center text-center">
    {title && <h2 className="text-[18px] md:text-[24px] font-medium mb-4 uppercase tracking-widest">{title}</h2>}
    <p className="max-w-2xl text-[14px] md:text-[16px] leading-relaxed font-normal">
      {text}
    </p>
  </div>
);

// Equivalente a una sección "Slideshow" o "Carousel"
const BannerCarousel = ({ items }: { items: { image: string, title: string, linkText?: string }[] }) => (
  <div className="w-full flex overflow-x-auto snap-x snap-mandatory hide-scrollbar">
    {items.map((item, idx) => (
      <div key={idx} className="relative min-w-full h-[60vh] md:h-[80vh] snap-center group overflow-hidden">
        <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-black/20 flex flex-col justify-end items-start p-8 md:p-12">
          <h3 className="text-white text-[18px] md:text-[24px] font-medium uppercase tracking-widest mb-3">{item.title}</h3>
          {item.linkText && (
            <a href="#" className="text-white text-[12px] md:text-[14px] font-semibold uppercase tracking-widest underline underline-offset-4 p-1 hover:text-gray-200 transition-colors inline-block">
              {item.linkText}
            </a>
          )}
        </div>
      </div>
    ))}
  </div>
);

// Equivalente a una sección "Image Banner" con 2 bloques, o "Multicolumn"
const SplitBanner = ({ items }: { items: { image: string, title: string, linkText?: string }[] }) => (
  <div className="w-full flex flex-col md:flex-row">
    {items.map((item, idx) => (
      <div key={idx} className="relative w-full md:w-1/2 h-[60vh] md:h-[80vh] group overflow-hidden">
        <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-black/10 flex flex-col justify-end p-8 md:p-12">
          <h3 className="text-white text-[18px] md:text-[24px] font-medium uppercase tracking-widest mb-3">{item.title}</h3>
          {item.linkText && (
            <a href="#" className="text-white text-[12px] md:text-[14px] font-semibold uppercase tracking-widest underline underline-offset-4 p-1 hover:text-gray-200 transition-colors inline-block">
              {item.linkText}
            </a>
          )}
        </div>
      </div>
    ))}
  </div>
);

// Equivalente a una sección "Featured Collection" o "Multicolumn" con scroll horizontal en móvil
const ImageGrid = ({ items }: { items: { image: string, title: string }[] }) => (
  <div className="w-full py-4 md:py-8 px-4 md:px-8">
    <div className="flex overflow-x-auto md:grid md:grid-cols-3 gap-4 md:gap-6 snap-x snap-mandatory hide-scrollbar pb-4">
      {items.map((item, idx) => (
        <div key={idx} className="relative min-w-[85vw] md:min-w-0 aspect-[3/4] md:aspect-auto md:h-[70vh] snap-center group overflow-hidden">
          <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex flex-col justify-end p-6 md:p-8 items-center">
            <h3 className="text-white text-[14px] md:text-[16px] font-medium uppercase tracking-widest">{item.title}</h3>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// Equivalente a una sección custom "Image with Text" o "Multicolumn"
const DesignerSection = () => (
  <div className="w-full py-16 md:py-24 px-6 md:px-12 flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-16 max-w-7xl mx-auto">
    <div className="w-full md:w-1/3 flex flex-col items-start text-left">
      <h2 className="text-[24px] md:text-[28px] font-medium mb-6 uppercase tracking-widest">Nuestros Diseñadores</h2>
      <p className="text-[14px] md:text-[16px] mb-8 leading-relaxed font-normal">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
      </p>
      <a href="#" className="text-black text-[12px] md:text-[14px] font-semibold uppercase tracking-widest underline underline-offset-4 p-1 hover:text-gray-600 transition-colors inline-block">
        Ver Más
      </a>
    </div>
    <div className="w-full md:w-2/3 grid grid-cols-2 gap-4 md:gap-8">
      {[1, 2].map((item) => (
        <div key={item} className="flex flex-col gap-4">
          <div className="w-full aspect-[3/4] bg-[#e5e5e5]"></div>
          <p className="text-[12px] md:text-[14px] font-medium uppercase tracking-widest">Lorem Ipsum</p>
        </div>
      ))}
    </div>
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <HeroBanner />
      
      <RichText 
        title="LOREM IPSUM" 
        text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat." 
      />
      
      <BannerCarousel 
        items={[
          {
            image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=1000",
            title: "PINKFILOSOFY X VEJA",
            linkText: "VER MÁS"
          },
          {
            image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=1000",
            title: "SANDRA WEIL",
            linkText: "VER MÁS"
          },
          {
            image: "https://images.unsplash.com/photo-1550614000-4b95d415dc96?auto=format&fit=crop&q=80&w=1000",
            title: "TERCERA MARCA",
            linkText: "VER MÁS"
          }
        ]}
      />
      
      <ImageGrid 
        items={[
          {
            image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&q=80&w=800",
            title: "PLISSE"
          },
          {
            image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&q=80&w=800",
            title: "RELICARIO"
          },
          {
            image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&q=80&w=800",
            title: "MATILDA"
          }
        ]}
      />
      
      <DesignerSection />
      
      <SplitBanner 
        items={[
          {
            image: "https://images.unsplash.com/photo-1550614000-4b95d415dc96?auto=format&fit=crop&q=80&w=1000",
            title: "PAMELA STEVENSON",
            linkText: "VER MÁS"
          },
          {
            image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&q=80&w=1000",
            title: "MARCA A IMPULSAR",
            linkText: "VER MÁS"
          }
        ]}
      />
      
      <RichText 
        text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat." 
      />
      
      <ImageGrid 
        items={[
          {
            image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&q=80&w=800",
            title: "SEA SALT"
          },
          {
            image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&q=80&w=800",
            title: "AMARANTE"
          },
          {
            image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&q=80&w=800",
            title: "CELESTINO"
          }
        ]}
      />
    </div>
  );
}
