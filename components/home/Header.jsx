'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <header className="bg-[#F8F8FEE0] sticky top-0 z-[100] border-b border-transparent">
      {/* Container with exact padding and max-width as requested */}
      <div className="max-w-[1200px] mx-auto flex justify-between items-center py-[20px] px-[20px] md:py-[40px] md:px-[48px]">
        
        {/* Logo - Force dimensions on desktop, standard on mobile */}
        <Link href="/" className="flex items-center gap-2 text-[#1a1a1a] no-underline md:h-[33px] md:w-[198px]">
          <div className="w-[33px] h-[33px] bg-[#0066FF] flex items-center justify-center rounded-lg flex-shrink-0">
            <div className="grid grid-cols-2 gap-[2px]">
              <div className="w-1.5 h-1.5 bg-white rounded-[1px]" />
              <div className="w-1.5 h-1.5 bg-white rounded-[1px]" />
              <div className="w-1.5 h-1.5 bg-white rounded-[1px]" />
              <div className="w-1.5 h-1.5 bg-white rounded-[1px]" />
            </div>
          </div>
          <span className="text-[22px] tracking-tight leading-none pt-1">
            <strong>Holerite</strong> digital
          </span>
        </Link>

        {/* Desktop Nav Links - Hidden on mobile */}
        <nav className="hidden lg:flex items-center gap-[20px] py-[10px] h-[38px] w-[452px] justify-between">
          {['Home', 'Como Funciona', 'Benefícios', 'Preços', 'FAQ'].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="text-[#1a1a1a] font-medium hover:text-[#0066FF] transition-colors duration-300 no-underline text-[16px] whitespace-nowrap scroll-smooth"
            >
              {item}
            </Link>
          ))}
          <div className="relative group cursor-pointer flex items-center gap-1 text-[#1a1a1a] font-medium hover:text-[#0066FF] transition-colors duration-300 whitespace-nowrap">
             Páginas 
             <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
             </svg>
          </div>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden sm:flex items-center gap-[10px]">
          <Link
            href="#contato"
            className="h-[44px] px-6 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 bg-[#0066FF] text-white hover:bg-[#0052CC] hover:-translate-y-0.5 no-underline text-[15px] whitespace-nowrap"
          >
            Fale Conosco
            <svg width="9" height="9" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-0.5">
               <path d="M1 9L9 1M9 1H2.5M9 1V7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          <Link
            href="#demo"
            className="h-[44px] px-6 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 bg-white text-[#0066FF] border border-[#0066FF] hover:bg-[#f0f7ff] no-underline text-[15px] whitespace-nowrap"
          >
            Agendar Demo
            <svg width="9" height="9" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-0.5">
               <path d="M1 9L9 1M9 1H2.5M9 1V7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="lg:hidden p-2 text-[#1a1a1a]" onClick={toggleMenu}>
          {mobileMenuOpen ? (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>
          )}
        </button>

      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-[100%] left-0 w-full bg-white border-t border-gray-100 shadow-xl py-5 px-5 flex flex-col gap-4">
           {['Home', 'Como Funciona', 'Benefícios', 'Preços', 'FAQ'].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="text-[#1a1a1a] font-medium py-2 border-b border-gray-50 text-[18px]"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
          <div className="flex flex-col gap-3 mt-2">
             <Link
              href="#contato"
              className="h-[48px] px-6 rounded-full font-semibold flex items-center justify-center gap-2 bg-[#0066FF] text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              Fale Conosco
            </Link>
            <Link
              href="#demo"
              className="h-[48px] px-6 rounded-full font-semibold flex items-center justify-center gap-2 bg-white text-[#0066FF] border border-[#0066FF]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Agendar Demo
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
