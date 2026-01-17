'use client';

import Link from 'next/link';


export default function ProductivitySection() {
  const cards = [
    { 
      title: "Recrutamento e Seleção", 
      desc: "Dedique mais tempo para encontrar os melhores talentos para sua empresa, melhorando o processo de entrevistas e avaliação de candidatos.", 
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#004DFF" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/>
        </svg>
      )
    },
    { 
      title: "Desenvolvimento de Pessoas", 
      desc: "Invista tempo em programas de treinamento, mentoria e desenvolvimento de carreira para seus colaboradores.", 
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#004DFF" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>
        </svg>
      )
    },
    { 
      title: "Clima Organizacional", 
      desc: "Crie e implemente pesquisas de clima, programas de bem-estar e ações para melhorar a satisfação dos funcionários.", 
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#004DFF" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
        </svg>
      )
    },
    { 
      title: "Análise de Dados", 
      desc: "Analise métricas de RH para tomar decisões estratégicas baseadas em dados sobre rotatividade, desempenho e engajamento.", 
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#004DFF" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/><line x1="22" y1="12" x2="18" y2="12"/><line x1="6" y1="12" x2="2" y2="12"/><line x1="12" y1="6" x2="12" y2="2"/><line x1="12" y1="22" x2="12" y2="18"/>
        </svg>
      )
    },
    { 
      title: "Planejamento Estratégico", 
      desc: "Participe ativamente do planejamento estratégico da empresa, alinhando as iniciativas de RH aos objetivos do negócio.", 
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#004DFF" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
        </svg>
      )
    },
    { 
      title: "Inovação em RH", 
      desc: "Pesquise e implemente novas tecnologias e metodologias para modernizar outros processos do departamento de RH.", 
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#004DFF" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z"/>
        </svg>
      )
    }
  ];

  return (
    // Dobra 5 - Container Mestre (Fundo Branco #F8F8FE)
    <section className="w-full flex justify-center bg-[#F8F8FE] py-[80px] md:py-[100px] px-[24px] md:px-[48px]" id="produtividade">
      <div className="w-full max-w-[1100px] flex flex-col items-center gap-[60px]">
        
        {/* Frame 3 - Cabeçalho da Seção */}
        <div className="flex flex-col items-center gap-[24px] text-center max-w-[800px]">
          {/* Badge "Produtividade" */}
          <div className="flex items-center justify-center gap-[10px] px-4 py-1.5 border border-[#004DFF]/10 rounded-full bg-white shadow-sm h-[32px] text-[#004DFF]">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            <span className="text-[14px] md:text-[16px] font-bold tracking-tight uppercase">Produtividade</span>
          </div>

          {/* Título Principal Corrigido */}
          <h2 className="text-[36px] md:text-[48px] font-extrabold leading-[1.1] tracking-[-0.04em] text-[#000000]">
            O que você pode fazer com <br className="hidden md:block" /> 20 horas extras por mês?
          </h2>
          
          <p className="text-[18px] md:text-[20px] font-medium leading-relaxed text-[#000000]/60 max-w-[650px]">
            Imagine o impacto na produtividade da sua equipe de RH ao liberar mais de 20 horas mensais.
          </p>
        </div>

        {/* Group 58 - Grid de Cards (2 Colunas) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] w-full">
          {cards.map((card, idx) => (
            <div 
              key={idx} 
              className="flex flex-col p-[32px] gap-[24px] bg-gradient-to-b from-[#E1E9FE] to-[#F8F8FE] border border-[#E0E9FE] rounded-[20px] min-h-[189px] transition-all hover:shadow-xl hover:shadow-blue-500/5"
            >
              <div className="flex items-center gap-[20px]">
                {/* Frame 8 - Container do Ícone */}
                <div className="w-[44px] h-[44px] bg-[#F8F8FE] rounded-full flex items-center justify-center border border-[#004DFF]/20 shadow-sm flex-shrink-0">
                   {card.icon}
                </div>
                <h3 className="text-[22px] md:text-[26px] font-bold tracking-[-0.03em] text-[#000000] leading-tight">
                  {card.title}
                </h3>
              </div>
              <p className="text-[16px] md:text-[18px] font-medium text-[#000000]/70 leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}

          {/* Frame 13 - Card Largo de Destaque na Base (Diferencial) */}
          <div 
            className="md:col-span-2 flex flex-col p-[32px] md:p-[40px] gap-[24px] bg-[#004DFF] border border-[#E0E9FE] rounded-[20px] min-h-[162px] shadow-2xl shadow-blue-600/20"
          >
            <div className="flex items-center gap-[20px]">
              <div className="w-[44px] h-[44px] bg-[#F8F8FE] rounded-full flex items-center justify-center shadow-md">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#004DFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z"/>
                </svg>
              </div>
              <h3 className="text-[22px] md:text-[28px] font-bold tracking-[-0.03em] text-white leading-tight">
                Em um ano, são mais de 240 horas economizadas
              </h3>
            </div>
            <p className="text-[16px] md:text-[19px] font-medium text-white/80 leading-relaxed max-w-[950px]">
              Isso equivale a 30 dias úteis completos ou 6 semanas de trabalho que podem ser redirecionadas para atividades estratégicas que realmente agregam valor ao negócio.
            </p>
          </div>
        </div>

        {/* Botão Final CTA conforme Figma */}
        <div className="mt-4">
          <Link 
            href="#contato" 
            className="h-[56px] px-[40px] rounded-full bg-[#262626] text-[#F8F8FE] text-[16px] font-bold flex items-center gap-[12px] hover:bg-black transition-all shadow-xl group"
          >
            Falar com Especialista
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
              <line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}