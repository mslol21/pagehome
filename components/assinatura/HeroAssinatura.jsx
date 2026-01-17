'use client';

import Link from 'next/link';
import ScrollAnimation from '../ui/ScrollAnimation';

export default function HeroAssinatura() {
  return (
    <section 
      className="w-full min-h-[613px] flex justify-center overflow-hidden" 
      style={{ background: 'linear-gradient(178.2deg, #F4F4FD 1.53%, #E0E9FE 160%)' }}
    >
      {/* Container mestre (Padrão do Header: 1400px) */}
      <div className="max-w-[1400px] w-full px-6 lg:px-[48px] relative flex items-center">
        
        {/* Conteúdo Interno (Padrão Figma: 1200px) */}
        <div className="max-w-[1200px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 items-center min-h-[613px]">
          
          {/* LADO ESQUERDO: TEXTO (Frame 3) */}
          <div className="flex flex-col items-start gap-[20px] z-10 py-12 lg:py-0">
            <ScrollAnimation>
              {/* Badge (Frame 5) */}
              <div className="flex items-center gap-[10px] text-[#004DFF]">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <span className="font-medium text-[16px] tracking-[-0.03em]">Assinatura Eletrônica</span>
              </div>

              {/* Título e Descrição (Frame 4) */}
              <div className="flex flex-col gap-[20px] mt-2">
                <h1 className="text-[48px] font-bold text-[#111] leading-[55px] tracking-[-0.03em] max-w-full lg:max-w-[584px]">
                  Assine eletronicamente seus documentos pelo Whatsapp
                </h1>
                <p className="text-[18px] font-semibold text-[#111] opacity-70 leading-[150%] max-w-[484px]">
                  Elimine processos manuais do RH. Envie holerites diretamente para o WhatsApp dos colaboradores em minutos.
                </p>
              </div>

              {/* Botões (Frame 2) */}
              <div className="flex flex-col md:flex-row items-center gap-[10px] mt-8 w-full md:w-auto">
                <Link
                  href="#contato"
                  className="bg-[#004DFF] text-[#F8F8FE] h-[56px] px-[32px] rounded-[90px] font-medium text-[16px] flex items-center justify-center gap-[10px] hover:opacity-90 transition-all group w-full md:w-auto"
                >
                  Fale Conosco
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </Link>
                
                <Link
                  href="#demo"
                  className="bg-[#262626] text-[#F8F8FE] h-[56px] px-[32px] rounded-[90px] font-medium text-[16px] flex items-center justify-center gap-[10px] hover:opacity-90 transition-all group w-full md:w-auto"
                >
                  Agendar Demo
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </Link>
              </div>
            </ScrollAnimation>
          </div>

          {/* LADO DIREITO: VISUAL (Agrupar 1 2) */}
          <div className="relative w-full h-full hidden lg:flex items-center justify-end">
            <div className="relative w-[478px] h-[613px]">
              
              {/* Imagem do Colaborador (Ajustada para a altura do Frame) */}
              <img 
                src="/hero-assinatura.png" 
                alt="Colaborador" 
                className="absolute bottom-0 right-0 w-full h-auto max-h-[110%] object-contain z-0"
              />

              {/* Notificação WhatsApp (Group 70) */}
              <ScrollAnimation delay={0.4} className="absolute top-[271px] left-[-40px] z-20 w-[187px] h-[95px]">
                <div className="bg-[#F8F8FE] shadow-[0px_7px_14px_rgba(28,89,243,0.19)] rounded-[10px] p-[12px] h-full flex flex-col justify-between border border-white">
                  <p className="text-[11px] font-medium text-[#1a1a1a] leading-[13px] tracking-[-0.03em]">
                    Olá MATHEUS COSTA, você recebeu um documento. Para acessá-lo, pressione o botão abaixo!
                  </p>
                  <div className="border-t border-black/10 pt-2 flex items-center gap-2">
                    <div className="w-[14px] h-[14px] border border-[#13980C] rounded-[3px] flex items-center justify-center">
                      <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#13980C" strokeWidth="4">
                        <path d="M7 17L17 7M17 7H7M17 7V17"/>
                      </svg>
                    </div>
                    <span className="text-[#13980C] font-medium text-[11px] tracking-[-0.03em]">Acessar Documento</span>
                  </div>
                </div>
              </ScrollAnimation>

              {/* Ícone flutuante (Group 69) */}
              <div className="absolute bottom-[240px] left-[-40px] w-[28px] h-[28px] bg-[#7CA3FD] rounded-full flex items-center justify-center shadow-lg z-30">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
                  <rect x="2" y="2" width="9" height="9" rx="1"/><rect x="13" y="2" width="9" height="9" rx="1"/>
                  <rect x="2" y="13" width="9" height="9" rx="1"/><rect x="13" y="13" width="9" height="9" rx="1"/>
                </svg>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}