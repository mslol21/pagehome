'use client';

import React from 'react';

export default function Depoimentos() {
  const testimonials = [
    {
      name: "Isabela",
      role: "RH, Supermercados Becker",
      text: "“O novo sistema de holerite será um grande diferencial para nossa equipe. A interface é intuitiva e fácil de usar, tornando o acesso aos holerites muito mais prático e rápido. Nossos colaboradores gostaram muito da experiência. Sem dúvida, uma excelente ferramenta para facilitar a rotina!”"
    },
    {
      name: "Isabela",
      role: "RH, Supermercados Becker",
      text: "“O novo sistema de holerite será um grande diferencial para nossa equipe. A interface é intuitiva e fácil de usar, tornando o acesso aos holerites muito mais prático e rápido. Nossos colaboradores gostaram muito da experiência. Sem dúvida, uma excelente ferramenta para facilitar a rotina!”"
    },
    {
      name: "Isabela",
      role: "RH, Supermercados Becker",
      text: "“O novo sistema de holerite será um grande diferencial para nossa equipe. A interface é intuitiva e fácil de usar, tornando o acesso aos holerites muito mais prático e rápido. Nossos colaboradores gostaram muito da experiência. Sem dúvida, uma excelente ferramenta para facilitar a rotina!”"
    }
  ];

  return (
    <section 
      className="w-full min-h-[702px] flex justify-center py-[60px] relative overflow-hidden isolate"
      style={{
        background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), #262626'
      }}
    >
      {/* Brilho de Fundo (Ellipse 1) */}
      <div 
        className="absolute bottom-[-240px] left-1/2 -translate-x-1/2 w-[806px] h-[489px] opacity-40 z-0"
        style={{
          background: '#7CA3FD',
          filter: 'blur(109.2px)',
          borderRadius: '100%'
        }}
      />

      <div className="max-w-[1400px] w-full px-6 lg:px-[48px] z-10">
        <div className="max-w-[1100px] mx-auto flex flex-col items-center gap-[60px]">
          
          {/* Header da Seção (Frame 3) */}
          <div className="flex flex-col items-center text-center gap-5 max-w-[603px]">
            <div>
              <div className="flex items-center justify-center gap-2.5 text-[#7CA3FD] mb-4">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <span className="font-medium text-[16px] tracking-[-0.03em]">Depoimentos</span>
              </div>
              
              <h2 className="text-[40px] font-bold text-[#F8F8FE] leading-[46px] tracking-[-0.03em] mb-4">
                O que nossos clientes estão dizendo?
              </h2>
              <p className="text-[#F8F8FE] opacity-70 text-[18px] font-semibold leading-[150%]">
                O que as empresas estão descobrindo com nossa solução inovadora.
              </p>
            </div>
          </div>

          {/* Grid de Cards (Group 64) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[22px] w-full">
            {testimonials.map((item, index) => (
              <div key={index}>
                <div className="bg-[#212121] rounded-[20px] p-[30px] md:p-[40px] flex flex-col justify-center items-start gap-[24px] md:gap-[32px] h-auto min-h-[391px] border border-white/5">
                  <p className="text-[#F8F8FE] opacity-70 text-[18px] font-semibold leading-[150%]">
                    {item.text}
                  </p>
                  
                  {/* Autor (Frame 13) */}
                  <div className="flex items-center gap-[10px]">
                    <div className="w-9 h-9 bg-[#004DFF] rounded-full flex-shrink-0" />
                    <div className="flex flex-col">
                      <span className="text-[#F8F8FE] font-semibold text-[16px] tracking-[-0.03em] leading-[18px]">
                        {item.name}
                      </span>
                      <span className="text-[#F8F8FE] text-[12px] font-semibold leading-[150%]">
                        {item.role}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}