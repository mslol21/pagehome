'use client';

import Link from 'next/link';
import ScrollAnimation from '../ui/ScrollAnimation';

export default function HeroComparison() {
  return (
    // Container Principal centralizado com limite de 1400px
    <section className="w-full flex justify-center bg-[#F8F8FE] py-[20px]" id="home">
      <div className="w-full max-w-[1400px] flex justify-center px-6">
        
        {/* Frame 6 - Área Azul Corrigida (1104x632px) */}
        <ScrollAnimation className="relative w-full max-w-[1104px] h-[632px] bg-[#004DFF] rounded-[20px] overflow-hidden flex flex-col items-center pt-[60px] px-[48px] opacity-100">
          
          {/* Frame 3 - Conteúdo de Texto e Botões */}
          <div className="z-10 flex flex-col items-center text-center gap-[20px] max-w-[967px]">
            
            {/* Badge Superior */}
            <div className="flex flex-row justify-center items-center gap-[10px] h-[18px] text-[#E0E9FE]">
               <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
               </svg>
               <span className="text-[16px] font-medium tracking-[-0.03em]">Sem integrações - Pronto para uso - Seguro</span>
            </div>

            {/* H1 e Descrição */}
            <div className="flex flex-col gap-[20px] items-center">
              <h1 className="text-[48px] font-bold leading-[55px] tracking-[-0.03em] text-[#F8F8FE] whitespace-normal md:whitespace-nowrap">
                Recupere 20 horas de produtividade por mês
              </h1>
              <p className="text-[18px] font-semibold leading-[150%] text-[#F8F8FE] opacity-70 max-w-[800px]">
                O tempo que sua equipe de RH perde com a entrega manual de holerites pode (e deve!) ser investido em atividades estratégicas.
              </p>
            </div>

            {/* Botões CTA */}
            <div className="flex flex-row items-center gap-[10px] mt-4">
              <Link
                href="#contato"
                className="h-[56px] px-[32px] rounded-[90px] bg-[#262626] text-[#F8F8FE] text-[16px] font-medium flex items-center gap-[10px] hover:bg-black transition-all group"
              >
                Falar com Especialista
                <svg width="14" height="14" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 11L11 1M11 1H3.5M11 1V8.5"/></svg>
              </Link>
              
              <Link
                href="#como-funciona"
                className="h-[56px] px-[32px] rounded-[90px] bg-transparent border-2 border-[#F8F8FE] text-[#F8F8FE] text-[16px] font-medium flex items-center gap-[10px] hover:bg-white/10 transition-all"
              >
                Como Funciona
                <svg width="14" height="14" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 11L11 1M11 1H3.5M11 1V8.5"/></svg>
              </Link>
            </div>
          </div>

          {/* MacBook Mockup com Dashboard dentro - Posicionado para vazar na parte inferior */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[946px] z-0">
            {/* Imagem do Dashboard dentro da tela do MacBook */}
            <div className="absolute top-[3%] left-[13.5%] w-[73%] h-[76%] overflow-hidden">
              <img 
                src="/dashboard-background.png" 
                alt="Dashboard Background" 
                className="w-full h-full object-cover object-left-top"
              />
            </div>
            
            {/* Moldura do MacBook por cima */}
            <img 
              src="/dashboard-background.png" 
              alt="MacBook Frame" 
              className="relative w-full h-auto drop-shadow-2xl z-10"
            />
          </div>

          {/* Card de Assinatura flutuando à esquerda */}
          <ScrollAnimation 
            delay={0.3}
            className="absolute left-[50px] bottom-[180px] w-[200px] bg-[#F8F8FE] rounded-[11.85px] p-[12px] shadow-[0px_9.4px_18.9px_rgba(28,89,243,0.19)] z-20 flex flex-col gap-[6px]"
          >
              <div className="flex items-center gap-1.5">
                <div className="w-[16px] h-[16px] bg-[#DBE9FE] rounded-[4px] flex items-center justify-center">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#004DFF" strokeWidth="2.5"><path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
                </div>
                <span className="text-[8.5px] font-bold text-[#111]">Assinar Documento</span>
              </div>
              <div className="w-full h-[56px] border border-black/10 rounded-lg flex items-center justify-center bg-white">
                <img src="/assinatura-rubrica.png" alt="Signature" className="w-[60px]" />
              </div> 
              <div className="flex gap-1.5">
                <div className="flex-1 h-[24px] bg-[#E0E9FE] rounded-[6px] text-[8.5px] font-bold flex items-center justify-center text-[#111]">Limpar</div>
                <div className="flex-1 h-[24px] bg-[#004DFF] rounded-[6px] text-[8.5px] font-bold flex items-center justify-center text-white">Assinar</div>
              </div>
            </ScrollAnimation>

            {/* Card de Engajamento flutuando à direita */}
            <ScrollAnimation 
              delay={0.5}
              className="absolute right-[50px] bottom-[120px] w-[200px] bg-[#F8F8FE] rounded-[10.6px] p-[18px] shadow-[0px_8.5px_17px_rgba(28,89,243,0.19)] z-20 flex flex-col gap-[6px]"
            >
              <div className="flex items-center gap-1.5 mb-1">
                <div className="w-[14px] h-[14px] bg-[#DBE9FE] rounded-[3.7px] flex items-center justify-center">
                  <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#004DFF" strokeWidth="2.5"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                </div>
                <span className="text-[7.5px] font-bold text-[#111]">Engajamento com Documentos</span>
              </div>
              
              <div className="flex flex-col gap-1">
                 <div className="flex justify-between text-[7px] font-bold">
                   <span className="text-gray-500">Taxa de visualização</span>
                   <span className="text-[#004DFF]">76%</span>
                 </div>
                 <div className="h-1.5 w-full bg-[#E0E9FE] rounded-full overflow-hidden">
                   <div className="bg-[#004DFF] h-full w-[76%]" />
                 </div>
              </div>

              <div className="flex flex-col gap-1 mt-1">
                 <div className="flex justify-between text-[7px] font-bold">
                   <span className="text-gray-500">Taxa de assinatura</span>
                   <span className="text-[#16A349]">60%</span>
                 </div>
                 <div className="h-1.5 w-full bg-[#E0E9FE] rounded-full overflow-hidden">
                   <div className="bg-[#16A349] h-full w-[60%]" />
                 </div>
              </div>
            </ScrollAnimation>

        </ScrollAnimation>
      </div>
    </section>
  );
}