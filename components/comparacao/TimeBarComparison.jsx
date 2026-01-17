'use client';

import Link from 'next/link';


export default function TimeBarComparison() {
  return (
    // Dobra 4 - Container Mestre (1200px x 975px)
    <section className="w-full flex justify-center bg-[#F8F8FE] py-[60px]" id="comparacao">
      <div className="w-full max-w-[930px] flex flex-col items-center gap-[60px]">
        
        {/* Frame 3 - Cabeçalho centralizado */}
        <div className="flex flex-col items-center gap-[20px] text-center max-w-[620px]">
          <div className="flex items-center gap-[10px] text-[#004DFF]">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            <span className="text-[16px] font-medium tracking-[-0.03em]">Comparação</span>
          </div>
          <h2 className="text-[40px] font-bold leading-[46px] tracking-[-0.03em] text-[#111]">
            De 21 horas para apenas 20 minutos
          </h2>
          <p className="text-[18px] font-semibold opacity-70 text-[#111]">
            O Holerite Digital reduz drasticamente o tempo gasto com a distribuição de holerites.
          </p>
        </div>

        {/* Frame 153 - Área de Barras de Comparação */}
        <div className="w-full flex flex-col gap-[32px]">
          
          {/* PASSO 01: Processo Manual (Barra Vermelha) */}
          <div className="flex flex-col gap-[20px] relative">
            <div className="flex items-center gap-[9px] text-[#FF000D]">
               <svg width="22.66" height="22.66" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.42"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
               <span className="text-[23.6px] font-bold tracking-[-0.02em] uppercase">Processo Manual</span>
            </div>
            <div className="w-full h-[80px] bg-[#FF000D] rounded-[20px] flex items-center justify-end px-[25px]">
               <div className="flex items-center gap-[16px] text-white">
                  <span className="text-[60px] font-medium tracking-[-0.02em] leading-none">+21</span>
                  <span className="text-[16px] font-bold tracking-[-0.02em] leading-tight">Horas<br/>por mês</span>
               </div>
            </div>
          </div>

          {/* PASSO 02: Holerite Digital (Barra Azul) */}
          <div className="flex flex-col gap-[20px] relative">
            <div className="flex items-center gap-[9px] text-[#004DFF]">
               <svg width="22.66" height="22.66" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.42"><path d="M13 2L3 14H12L11 22L21 10H12L13 2Z"/></svg>
               <span className="text-[23.6px] font-bold tracking-[-0.02em] uppercase">Holerite Digital</span>
            </div>
            <div className="w-full h-[80px] bg-[#E0E9FE] rounded-[20px] flex items-center relative overflow-hidden">
               {/* Detalhe da barra de preenchimento (Rectangle 7) */}
               <div className="absolute left-0 top-0 h-full w-[32px] bg-[#004DFF] rounded-l-[20px]" />
               <div className="flex items-center gap-[16px] ml-auto mr-[31px] text-[#004DFF]">
                  <span className="text-[60px] font-medium tracking-[-0.02em] leading-none">20</span>
                  <span className="text-[16px] font-bold tracking-[-0.02em]">Minutos</span>
               </div>
            </div>
          </div>

          {/* PASSO 03: Economia de Tempo (Card Verde) */}
          <div className="flex flex-col gap-[20px] mt-4">
            <div className="flex items-center gap-[9px] text-[#00A63E]">
               <svg width="22.66" height="22.66" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.42"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
               <span className="text-[23.6px] font-bold tracking-[-0.02em] uppercase">Economia de tempo</span>
            </div>
            <div className="w-full min-h-[168px] bg-[#F0FDF4] border border-[#13980C] rounded-[27px] flex items-center justify-between px-[35px] py-6">
                <span className="text-[59px] font-medium text-[#13980C] tracking-[-0.02em]">97%</span>
                <span className="text-[31.4px] font-medium text-[#13980C] tracking-[-0.02em] text-right max-w-[387px] leading-tight">
                  Redução no tempo necessário para distribuir holerites
                </span>
            </div>
          </div>

        </div>

        {/* Botão Final CTA */}
        <Link 
          href="#cta" 
          className="h-[56px] px-[32px] rounded-[90px] bg-[#004DFF] text-[#F8F8FE] text-[16px] font-medium flex items-center gap-[10px] hover:brightness-110 transition-all shadow-lg shadow-blue-500/20"
        >
          Clique para aumentar sua produtividade
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
        </Link>

      </div>
    </section>
  );
}