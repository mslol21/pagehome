'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [pagesMenuOpen, setPagesMenuOpen] = useState(false);

  return (
    <header className="bg-white sticky top-0 z-[100] border-b border-gray-100/50 w-full">
      {/* 1. max-w-[1400px]: limite do container.
          2. relative: necessário para o Nav centralizar de forma absoluta.
          3. flex justify-between: empurra o Logo para a esquerda e os Buttons para a direita.
      */}
      <div className="mx-auto max-w-[1400px] w-full flex items-center justify-between px-[48px] py-[40px] gap-[60px]">
        
        {/* Lado Esquerdo: Logo */}
        <div className="flex-shrink-0 z-10">
          <Link href="/" className="flex items-center">
            <img 
              src="/logo.png" 
              alt="Holerite Digital" 
              className="h-[33px] w-auto object-contain"
            />
          </Link>
        </div>

        {/* Centro: Nav Links */}
        <nav className="hidden lg:flex items-center gap-[20px] flex-1 justify-center">
          <Link
            href="/"
            className="text-[#111] font-medium hover:text-[#004DFF] transition-colors duration-300 text-[16px] whitespace-nowrap"
          >
            Home
          </Link>
          <Link
            href="#como-funciona"
            scroll={false}
            className="text-[#111] font-medium hover:text-[#004DFF] transition-colors duration-300 text-[16px] whitespace-nowrap"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('como-funciona')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Como Funciona
          </Link>
          <Link
            href="#beneficios"
            scroll={false}
            className="text-[#111] font-medium hover:text-[#004DFF] transition-colors duration-300 text-[16px] whitespace-nowrap"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('beneficios')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Benefícios
          </Link>
          <Link
            href="#investimento"
            scroll={false}
            className="text-[#111] font-medium hover:text-[#004DFF] transition-colors duration-300 text-[16px] whitespace-nowrap"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('investimento')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Preços
          </Link>
          <Link
            href="#faq"
            scroll={false}
            className="text-[#111] font-medium hover:text-[#004DFF] transition-colors duration-300 text-[16px] whitespace-nowrap"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            FAQ
          </Link>
          
          <div 
            className="relative group cursor-pointer"
            onMouseEnter={() => setPagesMenuOpen(true)}
            onMouseLeave={() => setPagesMenuOpen(false)}
          >
            <div className="flex items-center gap-1 text-[#111] font-medium hover:text-[#004DFF] transition-colors text-[16px]">
               Páginas 
               <svg 
                 width="12" 
                 height="12" 
                 viewBox="0 0 24 24" 
                 fill="none" 
                 stroke="currentColor" 
                 strokeWidth="2" 
                 strokeLinecap="round" 
                 strokeLinejoin="round"
                 className={`transition-transform duration-200 ${pagesMenuOpen ? 'rotate-180' : ''}`}
               >
                  <path d="m6 9 6 6 6-6"/>
               </svg>
            </div>
            
            {/* Dropdown Menu */}
            <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[200px] transition-all duration-200 ${pagesMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-[10px]'}`}>
              <div className="bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden p-2 flex flex-col gap-1">
                <Link 
                  href="/comparacao" 
                  className="px-4 py-2 hover:bg-gray-50 rounded-lg text-sm font-medium text-gray-700 hover:text-[#004DFF] transition-colors block text-center"
                >
                  Comparação de tempo
                </Link>
                <Link 
                  href="/assinatura" 
                  className="px-4 py-2 hover:bg-gray-50 rounded-lg text-sm font-medium text-gray-700 hover:text-[#004DFF] transition-colors block text-center"
                >
                  Assinatura Digital
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Lado Direito: Buttons */}
        <div className="flex-shrink-0 flex items-center gap-[12px] z-10">
          <div className="hidden sm:flex items-center gap-[8px]">
            <Link
              href="https://wa.me/554831996818"
              target="_blank"
              rel="noopener noreferrer"
              className="h-[40px] px-5 rounded-full font-semibold bg-[#004DFF] text-white hover:bg-[#0052CC] transition-all flex items-center gap-2 text-[14px] whitespace-nowrap"
            >
              Fale Conosco
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </Link>
            
            <Link
              href="#demo"
              className="h-[40px] px-5 rounded-full font-semibold border-[1.5px] border-[#004DFF] text-[#004DFF] hover:bg-[#f0f7ff] transition-all flex items-center gap-2 text-[14px] whitespace-nowrap"
            >
              Agendar Demo
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-lg py-6 px-6 flex flex-col gap-6 h-[calc(100vh-80px)] overflow-y-auto">
          <nav className="flex flex-col gap-4">
            <Link
              href="/"
              className="text-[#111] font-medium hover:text-[#004DFF] text-[18px]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="#como-funciona"
              className="text-[#111] font-medium hover:text-[#004DFF] text-[18px]"
              onClick={(e) => {
                e.preventDefault();
                setMobileMenuOpen(false);
                document.getElementById('como-funciona')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Como Funciona
            </Link>
            <Link
              href="#beneficios"
              className="text-[#111] font-medium hover:text-[#004DFF] text-[18px]"
              onClick={(e) => {
                e.preventDefault();
                setMobileMenuOpen(false);
                document.getElementById('beneficios')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Benefícios
            </Link>
            <Link
              href="#investimento"
              className="text-[#111] font-medium hover:text-[#004DFF] text-[18px]"
              onClick={(e) => {
                e.preventDefault();
                setMobileMenuOpen(false);
                document.getElementById('investimento')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Preços
            </Link>
            <Link
              href="#faq"
              className="text-[#111] font-medium hover:text-[#004DFF] text-[18px]"
              onClick={(e) => {
                e.preventDefault();
                setMobileMenuOpen(false);
                document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              FAQ
            </Link>
            
            {/* Páginas Extras no Mobile (Flattened) */}
            <div className="flex flex-col gap-3 pt-2 border-t border-gray-100">
              <span className="text-gray-400 text-sm font-medium uppercase tracking-wider">Outras Páginas</span>
              <Link
                href="/comparacao"
                className="text-[#111] font-medium hover:text-[#004DFF] text-[18px]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Comparação de tempo
              </Link>
              <Link
                href="/assinatura"
                className="text-[#111] font-medium hover:text-[#004DFF] text-[18px]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Assinatura Digital
              </Link>
            </div>
          </nav>

          {/* Botões Mobile */}
          <div className="flex flex-col gap-3 mt-4">
            <Link
              href="https://wa.me/554831996818"
              target="_blank"
              rel="noopener noreferrer"
              className="h-[48px] px-6 rounded-full font-semibold bg-[#004DFF] text-white hover:bg-[#0052CC] transition-all flex items-center justify-center gap-2 text-[16px]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Fale Conosco
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </Link>
            
            <Link
              href="#demo"
              className="h-[48px] px-6 rounded-full font-semibold border-[1.5px] border-[#004DFF] text-[#004DFF] hover:bg-[#f0f7ff] transition-all flex items-center justify-center gap-2 text-[16px]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Agendar Demo
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </Link>
          </div>
        </div>
      )}
  );
}