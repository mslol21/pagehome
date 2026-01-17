'use client';

import React from 'react';

export default function Pricing() {
  const plans = [
    {
      name: "Start",
      price: "59,80",
      validity: "*Válido para empresas com até 20 funcionários",
      features: [
        "Envie até 3 documentos por funcionário por mês",
        "Processamento automático com IA",
        "Envio seguro via Whatsapp",
        "Suporte dedicado",
        "R$0,50 por documento extra"
      ],
      highlight: false
    },
    {
      name: "Profisisonal", // Mantendo o erro de digitação do Figma "Profisisonal"
      price: "2,99",
      priceSub: "Pro funcionário por mês",
      validity: "*Mais vendido",
      features: [
        "Envie até 3 documentos por funcionário por mês",
        "Processamento automático com IA",
        "Envio seguro via Whatsapp",
        "Suporte dedicado",
        "R$0,50 por documento extra"
      ],
      highlight: true
    },
    {
      name: "Empresarial",
      price: "Sob consulta",
      validity: "",
      features: [
        "Acima de 500 funcionários",
        "Monte o plano ideal de acordo com as necessidades da sua empresa"
      ],
      highlight: false
    }
  ];

  return (
    <section className="bg-[#F8F8FE] py-[60px] flex justify-center w-full" id="investimento">
      <div className="max-w-[1200px] w-full px-6 md:px-[45px] flex flex-col items-center">
        
        {/* Header da Dobra (Frame 3) */}
        <div className="flex flex-col items-center text-center gap-5 mb-[60px] max-w-[570px]">
          <div>
            <div className="flex items-center justify-center gap-2.5 text-[#004DFF] mb-2 font-medium text-[16px]">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              Investimento
            </div>
            
            <h2 className="text-[40px] font-bold text-[#111] leading-[46px] tracking-[-0.03em] mb-4">
              Comece agora mesmo
            </h2>
            <p className="text-[#111] opacity-70 text-[18px] font-semibold leading-[150%]">
              Experimente gratuitamente por 1 mês ou assine nosso plano empresarial
            </p>
          </div>
        </div>

        {/* Pricing Grid (Group 65) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[23.76px] w-full max-w-[1110px] items-start">
          {plans.map((plan, index) => (
            <div key={index}>
              <div 
                className={`flex flex-col justify-between p-5 h-auto min-h-[454px] rounded-[20px] transition-all relative
                  ${plan.highlight 
                    ? 'bg-gradient-to-b from-[#E1E9FE] to-[#F8F8FE] border-[3px] border-[#004DFF]' 
                    : 'bg-gradient-to-b from-[#E1E9FE] to-[#F8F8FE] border border-white/20'
                  }`}
                style={{ backdropFilter: 'blur(5.67px)' }}
              >
                {/* Top Section: Badges and Price */}
                <div className="flex flex-col gap-[13.73px]">
                  <div className="flex justify-between items-start w-full">
                    <span className={`px-[13.7px] py-[6.8px] rounded-[31.5px] text-[20px] font-medium tracking-tight
                      ${plan.highlight ? 'bg-[#004DFF] text-white' : plan.name === 'Empresarial' ? 'bg-[#262626] text-white' : 'bg-[#F8F8FE] text-[#262626]'}`}>
                      {plan.name}
                    </span>
                    <span className="text-[13.7px] font-bold text-[#111] text-right max-w-[137px] leading-none">
                      {plan.validity}
                    </span>
                  </div>

                  <div className="flex items-end gap-1.5 h-[52px]">
                    {plan.price === "Sob consulta" ? (
                      <span className="text-[42px] font-semibold tracking-tight text-[#111]">
                        {plan.price}
                      </span>
                    ) : (
                      <>
                        <span className="text-[20.5px] font-semibold mb-2">R$</span>
                        <span className="text-[54.9px] font-semibold leading-none tracking-tight">
                          {plan.price}
                        </span>
                        <span className="text-[14.2px] font-medium mb-1 opacity-70 whitespace-nowrap">
                          {plan.priceSub || "/Por mês"}
                        </span>
                      </>
                    )}
                  </div>
                </div>

                {/* Features Section */}
                <div className="flex flex-col gap-1.5 mt-6 mb-8">
                  {plan.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-start gap-3">
                      <div className="w-[19px] h-[19px] mt-0.5 flex-shrink-0">
                        <svg viewBox="0 0 24 24" fill="none" stroke="#004DFF" strokeWidth="3" strokeLinecap="round">
                          <path d="M20 6L9 17 4 12" />
                        </svg>
                      </div>
                      <span className="text-[18px] font-semibold text-[#111] leading-[20px] tracking-tight">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button className="w-full h-[56px] bg-[#004DFF] text-[#F8F8FE] rounded-[90px] font-medium text-[16px] flex items-center justify-center gap-2.5 transition-transform active:scale-95">
                  Fale Conosco
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
