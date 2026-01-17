'use client';

import Link from 'next/link';


export default function SecurityImpact() {
  const securityCards = [
    {
      title: "Criptografia de Ponta a Ponta",
      desc: "Todos os dados são criptografados durante a transmissão e armazenamento, garantindo que apenas pessoas autorizadas tenham acesso.",
      icon: (
        <svg width="22.66" height="22.66" viewBox="0 0 24 24" fill="none" stroke="#004DFF" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
        </svg>
      )
    },
    {
      title: "Conformidade com LGPD",
      desc: "Nossa plataforma foi desenvolvida seguindo todos os princípios e requisitos da Lei Geral de Proteção de Dados, garantindo a privacidade dos colaboradores.",
      icon: (
        <svg width="22.66" height="22.66" viewBox="0 0 24 24" fill="none" stroke="#004DFF" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      )
    },
    {
      title: "Controle de Acesso",
      desc: "Links protegidos por senha que expiram automaticamente, garantindo que somente o funcionário correto consiga acessar seu holerite.",
      icon: (
        <svg width="22.66" height="22.66" viewBox="0 0 24 24" fill="none" stroke="#004DFF" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      )
    }
  ];

  return (
    // Dobra 7 - Container Mestre (Fundo Branco #F8F8FE)
    <section className="w-full flex justify-center bg-[#F8F8FE] py-[60px] px-[48px]" id="seguranca">
      <div className="w-full max-w-[1100px] flex flex-col items-center gap-[60px]">
        
        {/* Frame 3 - Cabeçalho */}
        <div className="flex flex-col items-center gap-[20px] text-center max-w-[620px]">
          <div className="flex items-center gap-[10px] text-[#004DFF]">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            <span className="text-[16px] font-medium tracking-tight">Sustentabilidade</span> {/* Conforme seu Figma, o texto no badge ainda diz Sustentabilidade nesta dobra */}
          </div>
          <h2 className="text-[40px] font-bold leading-[46px] tracking-tight text-[#111]">Proteção de dados em conformidade com a LGPD</h2>
          <p className="text-[18px] font-semibold opacity-70 text-[#111]">O Holerite Digital garante a segurança das informações sensíveis dos seus colaboradores.</p>
        </div>

        {/* Group 60 - Grid de Cards de Segurança */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px] w-full relative">
          {securityCards.map((card, idx) => (
            <div 
              key={idx} 
              className="flex flex-col p-[20px] gap-[32px] bg-gradient-to-b from-[#E1E9FE] to-[#F8F8FE] border border-[#E0E9FE] rounded-[20px] min-h-[271px]"
            >
              <div className="flex items-start gap-[20px]">
                {/* Frame 8 - Container do Ícone */}
                <div className="w-[36px] h-[36px] bg-[#F8F8FE] rounded-full flex items-center justify-center border border-[#004DFF]/20 shadow-sm flex-shrink-0">
                   {card.icon}
                </div>
                <h3 className="text-[24px] md:text-[28px] font-semibold tracking-[-0.03em] text-[#111] leading-tight">
                  {card.title}
                </h3>
              </div>
              <p className="text-[16px] md:text-[18px] font-semibold text-[#111] opacity-70 leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}

          {/* Frame 13 - Card de Prioridade na Base */}
          <div 
            className="md:col-span-3 flex flex-col p-[20px] gap-[32px] bg-[#004DFF] border border-[#E0E9FE] rounded-[20px] min-h-[216px] shadow-2xl shadow-blue-600/20"
          >
            <div className="flex items-center gap-[20px]">
              <div className="w-[36px] h-[36px] bg-[#F8F8FE] rounded-full flex items-center justify-center">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#004DFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
              </div>
              <h3 className="text-[22px] md:text-[28px] font-bold tracking-[-0.03em] text-white">Segurança é nossa prioridade</h3>
            </div>
            <p className="text-[16px] md:text-[18px] font-semibold text-white/80 leading-relaxed">
              O Holerite Digital utiliza as mais avançadas tecnologias de segurança para proteger os dados sensíveis dos seus colaboradores. Nossa plataforma é regularmente auditada e atualizada para garantir os mais altos padrões de segurança e conformidade com a legislação. Todos os detalhes sobre nossa infraestrutura de segurança podem ser discutidos em uma demonstração personalizada.
            </p>
          </div>
        </div>

        {/* Botão Final CTA com Degradê Escuro (Frame 120/Botão) */}
        <div className="mt-4">
          <Link 
            href="#demo" 
            className="h-[56px] px-[32px] rounded-[90px] bg-gradient-to-b from-[#333] to-[#262626] text-[#F8F8FE] text-[16px] font-medium flex items-center gap-[10px] hover:from-black hover:to-black transition-all shadow-xl group"
          >
            Saiba mais sobre nossa segurança
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
              <line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}