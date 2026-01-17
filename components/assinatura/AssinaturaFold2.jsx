'use client';

import React from 'react';


export default function ComoFuncionaAssinatura() {
  const steps = [
    {
      number: "01.",
      title: "Importação",
      description: "Importe em lote e envie para a assinatura dos funcionários.",
      img: "/mockup-importacao.png", // Certifique-se de que a imagem respeita o Frame 127
      floating: (
        <div className="hidden md:block absolute left-[207px] top-[228.34px] w-[313px] h-[117.72px] bg-[#F8F8FE] shadow-[0px_16.59px_33.19px_rgba(28,89,243,0.19)] rounded-[18.55px] p-[14.84px] z-[3] border border-gray-100">
          <div className="flex flex-col p-[12.37px] gap-[7.42px] border-[1.23px] border-[#13980C] rounded-[8.66px]">
            <div className="flex justify-between items-center w-full">
              <span className="font-semibold text-[14.26px] tracking-[-0.03em]">Assinatura Digital</span>
              <div className="w-[40.83px] h-[17.86px] bg-[#13980C] rounded-full relative">
                <div className="absolute right-[1.1px] top-[1.2px] w-[24.88px] h-[15.31px] bg-[#F8F8FE] rounded-full" />
              </div>
            </div>
            <p className="text-[12.84px] font-semibold opacity-70 leading-[150%]">
              Ao ativar essa opção, os funcionários terão acesso ao botão de assinatura Digital.
            </p>
          </div>
        </div>
      )
    },
    {
      number: "02.",
      title: "Envio",
      description: "Envie no Whatsapp do funcionário para assinar o documento.",
      img: "/step2-whatsapp.png",
      floating: (
        <div className="hidden md:block absolute left-[257px] top-[167.31px] w-[265px] h-[169.83px] bg-[#F8F8FE] shadow-[0px_10.56px_21.12px_rgba(28,89,243,0.19)] rounded-[13.2px] p-[16.66px] z-[3] flex flex-col gap-[6.6px]">
          <div className="flex items-center gap-[3.3px]">
            <div className="w-[20.46px] h-[20.46px] bg-[#DBE9FE] rounded-[4.62px] flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#004DFF" strokeWidth="2.5"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
            </div>
            <span className="text-[10.56px] font-bold tracking-[-0.03em]">Assinar Documento</span>
          </div>
          <div className="w-full h-[74.17px] bg-gray-100/10 rounded-[9.16px] border border-dashed border-gray-200 flex items-center justify-center italic text-gray-300">
             Matheus
          </div>
          <div className="flex gap-[6.67px]">
            <button className="flex-1 h-[28.67px] bg-[#E0E9FE] rounded-[6.66px] text-[10.56px] font-bold">Limpar</button>
            <button className="flex-1 h-[28.67px] bg-[#004DFF] text-white rounded-[6.66px] text-[10.56px] font-bold">Assinar</button>
          </div>
        </div>
      )
    },
    {
      number: "03.",
      title: "Auditoria",
      description: "Acesso total a auditoria e todos os dados de validade da assinatura.",
      img: "/step3-auditoria.png",
      floating: (
        <div className="hidden md:block absolute left-[207px] top-[228.47px] w-[313px] h-[100.86px] bg-[#F8F8FE] shadow-[0px_16.59px_33.19px_rgba(28,89,243,0.19)] rounded-[18.55px] p-[14.84px] z-[3] border border-green-50 flex flex-col justify-center">
          <div className="flex justify-between items-center mb-1">
            <span className="font-semibold text-[14.26px]">Obrigado</span>
            <div className="w-5 h-5 bg-[#13980C] rounded-full flex items-center justify-center text-white">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4"><path d="M20 6L9 17 4 12"/></svg>
            </div>
          </div>
          <p className="text-[12.84px] font-semibold opacity-70">Sua assinatura foi confirmada.</p>
        </div>
      )
    }
  ];

  return (
    <section className="bg-[#F8F8FE] w-full flex justify-center py-[60px]" id="como-funciona">
      {/* Container mestre (Frame 158: 914px largura interna) */}
      <div className="max-w-[1400px] w-full px-6 lg:px-[142px]">
        
        {/* Frame 112: O Grid que divide o layout */}
        <div className="max-w-[914px] mx-auto grid grid-cols-1 lg:grid-cols-[387px_1fr] gap-[40px] lg:gap-[53px] items-start min-h-auto lg:min-h-[1490px]">
          
          {/* COLUNA ESQUERDA: Texto Fixo com Sticky Corrigido (Frame 3) */}
          <div className="flex flex-col gap-[20px] pt-10">
            <div>
              {/* Badge Recursos (Frame 6) */}
              <div className="flex items-center gap-[10px] text-[#004DFF]">
                <div className="w-[18px] h-[18px] border-2 border-[#004DFF] rounded-full flex items-center justify-center">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4"><path d="M20 6L9 17 4 12"/></svg>
                </div>
                <span className="text-[16px] font-medium tracking-[-0.03em]">Processo Simples</span>
              </div>

              {/* Título e Body (Frame 4) */}
              <div className="flex flex-col gap-[20px]">
                <h2 className="text-[40px] font-bold text-[#111] leading-[46px] tracking-[-0.03em]">
                  Como funciona
                </h2>
                <p className="text-[#111] opacity-70 text-[18px] font-semibold leading-[150%] max-w-[387px]">
                  Três passos simples para revolucionar a distribuição de holerites na sua empresa.
                </p>
              </div>
            </div>
          </div>

          {/* COLUNA DIREITA: Cards que rolam (Frame 126) */}
          <div className="flex flex-col gap-[53px] w-full">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col gap-[10px]">
                {/* Frame 11/12/13: Container do Card com Degradê */}
                <div 
                  className="w-full max-w-[474px] h-auto rounded-[20px] relative isolate overflow-visible flex flex-col p-[20px] gap-[12px]"
                  style={{ background: 'linear-gradient(180deg, #E1E9FE 0%, #F8F8FE 100%)' }}
                >
                  {/* Mockup de Imagem (Frame 127) */}
                  <div className="w-full max-w-[434px] aspect-[434/278] bg-[#F9FAFC] rounded-[20px] overflow-hidden shadow-sm relative z-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={step.img} alt={step.title} className="w-full h-full object-cover" />
                  </div>

                  {/* Elementos Flutuantes (Frames 130, 119) */}
                  {step.floating}

                  {/* Frame 10: Informações do Passo */}
                  <div className="flex flex-col items-start gap-0 z-[1] mt-2">
                    <span className="text-[#004DFF] text-[20px] font-semibold tracking-[-0.03em] leading-[23px]">
                      {step.number}
                    </span>
                    <h3 className="text-[28px] font-semibold text-[#111] leading-[32px] tracking-[-0.03em]">
                      {step.title}
                    </h3>
                    <p className="text-[#111] opacity-70 text-[18px] font-semibold leading-[150%] max-w-[434px]">
                      {step.description}
                    </p>
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