'use client';

import Link from 'next/link';
import ScrollAnimation from '../ui/ScrollAnimation';

export default function Hero() {
  return (
    // Seção principal com fundo Branco (#F8F8FE) conforme Figma
    <section className="w-full flex justify-center bg-[#F8F8FE] overflow-hidden" id="home">
      
      {/* Container Mestre com limite de 1400px solicitado */}
      <div className="w-full max-w-[1400px] flex justify-center items-center py-[60px] px-4">
        
        {/* Frame 6: O card com degradê azul */}
        <ScrollAnimation className="relative w-full max-w-[1104px] h-[613px] bg-gradient-to-b from-[#E1E9FE] to-[#F8F8FE] rounded-[20px] flex items-center px-[61px] overflow-hidden">
          
          {/* Frame 3: Container de Conteúdo (Texto à Esquerda) */}
          <div className="z-10 flex flex-col justify-center items-start gap-[20px] w-[454px] h-[380px]">
            
            {/* Frame 5: Badge Superior */}
            <div className="flex flex-row justify-center items-center gap-[10px] px-0 h-[18px] text-[#004DFF]">
               <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
               <span className="text-[16px] font-medium leading-[18px] tracking-[-0.03em]">Sem integrações - Pronto para uso - Seguro</span>
            </div>

            {/* Frame 4: Título e Descrição */}
            <div className="flex flex-col justify-center items-start gap-[20px] w-[454px]">
              <h1 className="w-[454px] text-[48px] font-bold leading-[55px] tracking-[-0.03em] text-[#111]">
                Automatize o envio de holerites com Inteligência Artificial
              </h1>
              <p className="w-[454px] text-[18px] font-semibold leading-[150%] text-[#111] opacity-70">
                Elimine processos manuais do RH. Envie holerites diretamente para o WhatsApp dos colaboradores em minutos.
              </p>
            </div>

            {/* Frame 2: Botões */}
            <div className="flex flex-row items-center gap-[10px] w-[414px] h-[56px]">
              <Link
                href="#contato"
                className="h-[56px] w-[197px] px-[32px] py-[16px] rounded-[90px] bg-[#004DFF] text-[#F8F8FE] text-[16px] font-medium flex items-center gap-[10px] hover:brightness-110 transition-all"
              >
                Fale Conosco
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
              </Link>
              
              <Link
                href="#demo"
                className="h-[56px] w-[207px] px-[32px] py-[16px] rounded-[90px] bg-[#262626] text-[#F8F8FE] text-[16px] font-medium flex items-center gap-[10px] hover:bg-black transition-all"
              >
                Agendar Demo
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
              </Link>
            </div>
          </div>

          {/* iPhone Mockup: Posicionado conforme Figma (left: 679px) */}
          <div className="absolute left-[679px] top-[89.41px] w-[341.28px] h-[693.12px] z-0">
            <img 
              src="/hero-smartphone.png" 
              alt="iPhone Mockup" 
              className="w-full h-auto"
            />
          </div>

          {/* Frame 119: Card de Assinatura (Posicionado sobre o celular) */}
          <ScrollAnimation 
            delay={0.4}
            className="absolute left-[552px] top-[339.41px] w-[318px] h-[204.4px] bg-[#F8F8FE] rounded-[15.84px] p-[20px] shadow-[0px_12.6px_25.3px_rgba(28,89,243,0.19)] z-[2] flex flex-col gap-[7.92px]"
          >
            {/* Header do Card */}
            <div className="flex items-center gap-[3.96px] h-[24.55px]">
              <div className="w-[24.55px] h-[24.55px] bg-[#DBE9FE] rounded-[5.54px] flex items-center justify-center">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#004DFF" strokeWidth="1.5"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
              </div>
              <span className="text-[12.67px] font-bold text-[#111]">Assinar Documento</span>
            </div>

            {/* Área de Desenho da Assinatura */}
            <div className="w-[278px] h-[89px] border border-black/10 rounded-[11px] flex items-center justify-center bg-white">
              <img src="/assinatura-rubrica.png" alt="Assinatura" className="w-[96px] h-[51px]" />
            </div>

            {/* Botões do Card */}
            <div className="flex gap-[8px] w-[278px] h-[35px]">
              <button className="flex-1 h-[35px] bg-[#E0E9FE] text-[#111] text-[12.67px] font-bold rounded-[8px]">Limpar</button>
              <button className="flex-1 h-[35px] bg-[#004DFF] text-white text-[12.67px] font-bold rounded-[8px] flex items-center justify-center gap-1">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                Assinar
              </button>
            </div>
          </ScrollAnimation>

        </ScrollAnimation>
      </div>
    </section>
  );
}