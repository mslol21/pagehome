'use client';

import Link from 'next/link';


export default function DetailedComparison() {
  const topCards = [
    {
      title: "Processo Simplificado",
      desc: "Reduza o processo de distribuição de holerites de 21 horas para apenas 30 minutos por mês.",
      items: ['Upload dos PDFs em massa', 'Processamento automático com IA', 'Distribuição via WhatsApp']
    },
    {
      title: "Foco Estratégico",
      desc: "Libere sua equipe de RH para atividades que realmente agregam valor ao negócio.",
      items: ['Desenvolvimento de talentos', 'Programas de bem-estar', 'Projetos de engajamento']
    },
    {
      title: "Resultados Imediatos",
      desc: "Veja os benefícios desde o primeiro mês de implementação.",
      items: ['Redução de 97,6% no tempo', 'Economia de recursos', 'Satisfação dos funcionários']
    }
  ];

  return (
    // Dobra 3 - Container Mestre (1200x1267px)
    <section className="w-full flex justify-center bg-[#F8F8FE] py-[60px] px-[48px]" id="solucao">
      <div className="w-full max-w-[1100px] flex flex-col items-center gap-[60px]">
        
        {/* Frame 3 - Cabeçalho */}
        <div className="flex flex-col items-center gap-[20px] text-center max-w-[620px]">
          <div className="flex items-center gap-[10px] text-[#004DFF]">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            <span className="text-[16px] font-medium tracking-tight">Solução</span>
          </div>
          <h2 className="text-[40px] font-bold leading-[46px] tracking-tight text-[#111] whitespace-normal md:whitespace-nowrap">Aumente a produtividade do seu RH</h2>
          <p className="text-[18px] font-semibold opacity-70 text-[#111]">O Holerite Digital automatiza todo o processo de distribuição, liberando sua equipe para atividades estratégicas.</p>
        </div>

        {/* Group 57 - Grid Superior */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px] w-full">
          {topCards.map((card, idx) => (
            <div key={idx} className="flex flex-col p-[20px] gap-[32px] bg-gradient-to-b from-[#E1E9FE] to-[#F8F8FE] border border-[#E0E9FE] rounded-[20px] h-[350px] md:h-[295px]">
              <div className="flex items-center gap-[20px]">
                <div className="w-[36px] h-[36px] bg-white rounded-full flex items-center justify-center border border-[#004DFF]/20 shadow-sm">
                  {idx === 2 ? (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#004DFF" strokeWidth="2.4">
                      <circle cx="12" cy="12" r="10"/>
                      <circle cx="12" cy="12" r="6"/>
                      <circle cx="12" cy="12" r="2" fill="#004DFF"/>
                    </svg>
                  ) : (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#004DFF" strokeWidth="2.4"><path d="M13 2L3 14H12L11 22L21 10H12L13 2Z"/></svg>
                  )}
                </div>
                <h3 className="text-[24px] md:text-[28px] font-semibold tracking-tight text-[#111] whitespace-normal md:whitespace-nowrap">{card.title}</h3>
              </div>
              <p className="text-[16px] md:text-[18px] font-semibold opacity-70 text-[#111] leading-relaxed">{card.desc}</p>
              <div className="flex flex-col gap-[10px]">
                {card.items.map((item, i) => (
                  <div key={i} className="flex items-center gap-[10px] text-[#111] font-semibold text-[16px] tracking-tight">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#004DFF" strokeWidth="2.5">
                      <circle cx="12" cy="12" r="10"/>
                      <polyline points="8 12 11 15 16 9"/>
                    </svg>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Frame 10 - Seção Detalhada Inferior */}
        <div className="w-full bg-gradient-to-b from-[#E1E9FE] to-[#F8F8FE] border border-[#E0E9FE] rounded-[20px] p-[20px] md:p-[40px] flex flex-col md:flex-row items-center gap-[40px] min-h-[486px]">
          
          {/* Lado Esquerdo - Texto do Processo */}
          <div className="flex-1 flex flex-col gap-[32px]">
            <div>
              <h3 className="text-[28px] font-semibold tracking-tight text-[#111] mb-4 whitespace-normal md:whitespace-nowrap">Como funciona o Holerite Digital</h3>
              <p className="text-[18px] font-semibold opacity-70 text-[#111]">Um processo simples de 3 passos que revoluciona a distribuição de holerites na sua empresa.</p>
            </div>
            <div className="flex flex-col gap-[10px]">
              {[
                { t: "Upload dos PDFs", d: "Faça o upload dos holerites em PDF gerados pelo seu sistema atual." },
                { t: "Processamento Automático", d: "Nossa IA identifica e organiza automaticamente todos os dados." },
                { t: "Distribuição via WhatsApp", d: "Envie links seguros diretamente para o WhatsApp de cada funcionário." }
              ].map((step, i) => (
                <div key={i} className="flex flex-col gap-1">
                  <h4 className="text-[24px] font-semibold text-[#004DFF] tracking-tight">{step.t}</h4>
                  <p className="text-[18px] font-semibold opacity-70 text-[#111] leading-relaxed">{step.d}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Lado Direito - Card Verde de Destaque */}
          <div className="w-full md:w-[620px] h-[446px] bg-[#F0FDF4] rounded-[20px] flex items-center justify-center relative overflow-hidden">
            <div className="flex flex-col items-center text-center gap-[20px] max-w-[401px] z-10">
              <div className="w-[64px] h-[64px] bg-[#F8F8FE] rounded-full flex items-center justify-center shadow-sm">
                <svg width="43" height="43" viewBox="0 0 24 24" fill="none" stroke="#13980C" strokeWidth="2.4"><path d="M13 2L3 14H12L11 22L21 10H12L13 2Z"/></svg>
              </div>
              <h2 className="text-[36px] md:text-[40px] font-bold tracking-tight text-[#111] whitespace-normal md:whitespace-nowrap">Tempo Total : 20 minutos</h2>
              <p className="text-[18px] font-semibold opacity-70 text-[#111]">Todo o processo de distribuição de holerites para 250 funcionários.</p>
              <h2 className="text-[40px] font-bold text-[#13980C] tracking-tight leading-none">97,6% mais rápido</h2>
            </div>
          </div>
        </div>

        {/* Botão Final CTA */}
        <Link href="#cta" className="h-[56px] px-[32px] rounded-[90px] bg-[#004DFF] text-[#F8F8FE] text-[16px] font-medium flex items-center gap-[10px] hover:brightness-110 transition-all shadow-lg shadow-blue-500/20">
          Aumente a produtividade do seu RH
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
        </Link>

      </div>
    </section>
  );
}